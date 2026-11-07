#!/usr/bin/env node
/**
 * Prüft Kandidaten gegen den Katalog, bevor sie geschrieben werden: Steht das deutsche Wort (ohne Klammerhinweis)
 * oder die Antwort schon in einer Wortdatei dieser Sprache?
 *
 *   node scripts/gibt-es.mjs Hund Katze "eine Pause machen"     deutsche Wörter (Englisch)
 *   node scripts/gibt-es.mjs --lang fr Hund                      in den französischen Dateien
 *   node scripts/gibt-es.mjs --datei kandidaten.txt              eine Zeile je Kandidat; „Deutsch; Antwort“ geht auch
 *
 * Ausgabe je Kandidat: „neu“ oder die Fundstellen (id, Deutsch – Antwort). Wendungen und Lesewörter zählen mit.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { basis, ladeKatalog, norm, ROOT } from "./katalog-lib.mjs";

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args.splice(i, 2)[1] : undefined;
};
const lang = opt("--lang") ?? "en";
const datei = opt("--datei");
const kandidaten = (datei ? readFileSync(datei, "utf8").split(/\r?\n/) : args).map((s) => s.trim()).filter((s) => s && !s.startsWith("#"));
if (!kandidaten.length) {
  console.log("Aufruf: node scripts/gibt-es.mjs [--lang fr|es|it] Wort … | --datei kandidaten.txt");
  process.exit(1);
}

// Index: Deutsch ohne Klammer (genau: mit Umlauten und Groß-/Kleinschreibung; Komma-Felder wie „passieren, geschehen“
// zerlegt) und Antworten (auch ohne „to“) → Fundstellen. Gleich nur nach der App-Normalisierung („sägen“/„sagen“,
// „Fest“/„fest“) ist bloß ein Hinweis.
const genau = (s) => s.replace(/\s*\([^)]*\)/g, " ").replace(/\s+/g, " ").trim().normalize("NFC");
const teile = (de) => new Set([genau(de), ...genau(de).split(",").map((t) => t.trim())]);
const proDeutsch = new Map();
const proAehnlich = new Map();
const proAntwort = new Map();
const add = (m, k, v) => k && (m.get(k) ?? m.set(k, []).get(k)).push(v);
for (const q of ladeKatalog().words) {
  if ((q.lang ?? "en") !== lang && !q.file.includes("lesen-")) continue;
  for (const z of readFileSync(join(ROOT, q.file), "utf8").split(/\r?\n/).slice(1)) {
    const f = z.split(";").map((x) => x.trim());
    if (f.length < 8 || z.startsWith("#")) continue;
    const fund = `${f[0]} (${f[1]} – ${f[2] || "Lesen"})`;
    for (const teil of teile(f[1])) {
      add(proDeutsch, genau(teil), fund);
      add(proAehnlich, basis(teil), fund);
    }
    for (const a of [f[2], ...f[3].split(",")]) {
      add(proAntwort, norm(a.trim()), fund);
      add(proAntwort, norm(a.trim().replace(/^to /i, "")), fund);
    }
  }
}

let neu = 0;
for (const k of kandidaten) {
  const [de, antwort] = k.split(";").map((x) => x.trim());
  const deutsch = proDeutsch.get(genau(de)) ?? [];
  const aehnlich = deutsch.length ? [] : (proAehnlich.get(basis(de)) ?? []);
  // Gleiche Antwort bei anderem Deutsch: meist eine andere Bedeutung („bat“ bei Schläger) – nur ein Hinweis
  const auchAntwort = antwort ? (proAntwort.get(norm(antwort)) ?? []).filter((f) => !deutsch.includes(f)) : [];
  if (!deutsch.length) neu++;
  const zeige = (l) => l.slice(0, 4).join("; ");
  if (deutsch.length) console.log(`DA   ${k}  →  ${zeige(deutsch)}`);
  else console.log(`neu  ${k}${aehnlich.length ? `  (ähnlich geschrieben: ${zeige(aehnlich)})` : ""}${auchAntwort.length ? `  (Antwort auch bei: ${zeige(auchAntwort)})` : ""}`);
}
console.log(`\n${neu} von ${kandidaten.length} neu (${lang}).`);
