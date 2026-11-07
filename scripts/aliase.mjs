#!/usr/bin/env node
/**
 * Führt die Aliase für doppelte Wortpaare nach: `aliase.txt` und der Eintrag `aliases` in katalog.json.
 *
 *   node scripts/aliase.mjs            neue Dubletten aufnehmen, Datei und katalog.json schreiben
 *   node scripts/aliase.mjs --trocken  nur zeigen, was sich ändern würde
 *
 * Ein Wortpaar (Sprache, Deutsch, Antwort), das in mehreren Wortdateien steht, bekommt eine Haupt-ID
 * (Grundwortschatz, sonst die älteste Quelle); die übrigen IDs zeigen als Alias darauf. Die Zeilen bleiben in
 * ihren Dateien, damit ältere App-Stände nichts verlieren. Die neue App zeigt jedes Wort nur einmal, führt den
 * Lernstand der Aliase auf der Haupt-ID zusammen und ordnet die Themen der Aliase der Haupt-ID zu.
 *
 * Stabilität: Ein einmal vergebener Alias bleibt, und eine Haupt-ID bleibt Haupt-ID – an ihr hängt Lernstand.
 * Kommt zu einer Gruppe ein neues Wort hinzu, zeigt es auf die bestehende Haupt-ID.
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { ALIAS_DATEI as DATEI, dubletten, hauptVorschlag, ladeKatalog, leseAliase, ROOT } from "./katalog-lib.mjs";

const TROCKEN = process.argv.includes("--trocken");
const KOPF = [
  "# Aliase: Wortpaare, die in mehreren Wortdateien stehen, zeigen auf eine Haupt-ID.",
  "# Erzeugt und nachgeführt mit `node scripts/aliase.mjs`; einmal vergebene Zeilen nicht ändern (Lernstand).",
  "Alias; Haupt",
];

const katalog = ladeKatalog();
const alt = leseAliase();
const neu = new Map(alt);
const hauptIds = new Set(alt.values());
let neueGruppen = 0;

for (const eintraege of dubletten(katalog).values()) {
  const ids = eintraege.map((e) => e.id);
  // Bestehende Haupt-ID behalten, sonst Vorschlag unter den IDs, die noch kein Alias sind
  const frei = eintraege.filter((e) => !alt.has(e.id));
  const haupt = ids.find((id) => hauptIds.has(id)) ?? hauptVorschlag(frei.length ? frei : eintraege).id;
  let neuInGruppe = false;
  for (const id of ids) {
    if (id === haupt || neu.has(id)) continue;
    neu.set(id, haupt);
    neuInGruppe = true;
  }
  hauptIds.add(haupt);
  if (neuInGruppe) neueGruppen++;
}

const hinzu = [...neu].filter(([a]) => !alt.has(a));
console.log(`${alt.size} Aliase bisher, ${hinzu.length} neu in ${neueGruppen} Gruppen, ${neu.size} insgesamt.`);
if (TROCKEN) {
  for (const [a, h] of hinzu.slice(0, 40)) console.log(`  ${a} → ${h}`);
  if (hinzu.length > 40) console.log(`  … und ${hinzu.length - 40} weitere`);
  process.exit(0);
}
if (!hinzu.length && katalog.aliases?.count === neu.size) process.exit(0);

// IDs natürlich sortieren: gleiche Quelle beieinander, Nummern aufsteigend
const zeilen = [...neu].sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true })).map(([a, h]) => `${a}; ${h}`);
writeFileSync(join(ROOT, DATEI), [...KOPF, ...zeilen].join("\n") + "\n");

// Eintrag in katalog.json direkt hinter den Wortdateien; Version steigt bei jeder Änderung
const version = (katalog.aliases?.version ?? 0) + (hinzu.length || !katalog.aliases ? 1 : 0);
const aliases = { file: DATEI, version, count: neu.size };
const sortiert = {};
for (const [k, v] of Object.entries(katalog)) {
  if (k === "aliases") continue;
  sortiert[k] = v;
  if (k === "words") sortiert.aliases = aliases;
}
writeFileSync(join(ROOT, "katalog.json"), JSON.stringify(sortiert, null, 2) + "\n");
console.log(`${DATEI} und katalog.json geschrieben (aliases.version ${version}).`);
