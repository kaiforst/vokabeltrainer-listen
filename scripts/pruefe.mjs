#!/usr/bin/env node
/**
 * Prüft den Katalog: Wortdateien, IDs, Niveaus, Dubletten, Formen und katalog.json.
 *
 *   node scripts/pruefe.mjs                 Fehler und Zusammenfassung
 *   node scripts/pruefe.mjs --dubletten     zusätzlich alle Wortpaare, die in mehreren Dateien stehen,
 *                                           mit vorgeschlagener Haupt-ID (Grundwortschatz, sonst älteste Quelle)
 *   node scripts/pruefe.mjs woerter/x.txt   nur diese Dateien prüfen (Dubletten weiter gegen den ganzen Katalog)
 *
 * Exit-Code 1 bei Fehlern. Hinweise (⚠) brechen nicht ab.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ALIAS_DATEI, hauptVorschlag, leseAliase, norm, paarSchluessel, ROOT, SPRACHEN } from "./katalog-lib.mjs";

const args = process.argv.slice(2);
const DUBLETTEN = args.includes("--dubletten");
const nurDateien = args.filter((a) => !a.startsWith("--")).map((a) => a.replace(/\\/g, "/"));

const LEVELS = new Set(["A1", "A2", "B1", "B2", "C1", "C2"]);
const ID = /^(?:(fr|es|it)-)?([a-z]{2})-(\d{4})$/;
const FELDER = ["id", "Deutsch", "*", "Weitere Antworten", "Niveau", "Themen", "Beispiel *", "Beispiel Deutsch"];

let fehler = 0;
let hinweise = 0;
const err = (ort, text) => {
  fehler++;
  console.log(`✗ ${ort}: ${text}`);
};
const warn = (ort, text) => {
  hinweise++;
  console.log(`⚠ ${ort}: ${text}`);
};

const katalog = JSON.parse(readFileSync(join(ROOT, "katalog.json"), "utf8"));
const quellen = new Map(katalog.words.map((w, i) => [w.file, { ...w, rang: i }]));

// ---------- Wortdateien ----------
const ids = new Map(); // id → Ort
const paarVon = new Map(); // id → lang|de|antwort
const paare = new Map(); // lang|de|antwort → [{id, datei, rang}]
const lemmas = { de: new Set(), en: new Set(), fr: new Set(), es: new Set(), it: new Set() };
let woerter = 0;

const dateien = readdirSync(join(ROOT, "woerter")).filter((f) => f.endsWith(".txt")).map((f) => `woerter/${f}`);
for (const datei of dateien) {
  const pruefen = !nurDateien.length || nurDateien.includes(datei);
  const lesen = datei.includes("lesen-");
  const text = readFileSync(join(ROOT, datei), "utf8");
  const zeilen = text.split(/\r?\n/);
  let kopf = null;
  let lang = null;
  let praefix = null;
  let anzahl = 0;
  const imDatei = new Set();

  zeilen.forEach((roh, i) => {
    const ort = `${datei}:${i + 1}`;
    const zeile = roh.trim();
    if (!zeile || zeile.startsWith("#")) return;
    const f = zeile.split(";").map((x) => x.trim());
    if (!kopf) {
      kopf = f;
      lang = SPRACHEN[f[2]];
      if (pruefen) {
        if (f.length !== 8 || !lang) err(ort, `Kopfzeile muss lauten: id; Deutsch; Englisch|Französisch|Spanisch|Italienisch; Weitere Antworten; Niveau; Themen; Beispiel <Sprache>; Beispiel Deutsch`);
        else if (f[6] !== `Beispiel ${f[2]}` || FELDER.some((n, k) => n !== "*" && !n.includes("*") && n !== f[k])) err(ort, `Kopfzeile weicht ab: ${zeile}`);
      }
      return;
    }
    anzahl++;
    woerter++;
    const [id, de, antwort, weitere, niveau, themen, bspZiel, bspDe] = f;
    if (id) {
      if (ids.has(id)) err(ort, `id ${id} gibt es schon (${ids.get(id)})`);
      ids.set(id, ort);
    }
    if (de) lemmas.de.add(norm(de));
    if (antwort && lang) {
      for (const a of [antwort, ...(weitere ? weitere.split(",") : [])]) lemmas[lang].add(norm(a.replace(/^to /i, "")));
      lemmas[lang].add(norm(antwort));
    }
    const schluessel = paarSchluessel(lang, de, antwort);
    if (id) paarVon.set(id, schluessel);
    if (de && (antwort || lesen)) {
      if (!paare.has(schluessel)) paare.set(schluessel, []);
      paare.get(schluessel).push({ id, datei, rang: quellen.get(datei)?.rang ?? 9999 });
    }
    if (!pruefen) return;

    if (f.length !== 8) return err(ort, `${f.length} statt 8 Felder (genau 7 „;“)`);
    const m = ID.exec(id);
    if (!m) err(ort, `id „${id}“ hat nicht die Form xx-0001 bzw. fr-xx-0001`);
    else {
      const p = `${m[1] ? m[1] + "-" : ""}${m[2]}`;
      if (praefix && p !== praefix) err(ort, `id-Präfix ${p} statt ${praefix} wie in der ersten Zeile`);
      praefix ??= p;
      const sprachePraefix = m[1] ?? "en";
      if (!lesen && lang && sprachePraefix !== lang) err(ort, `id ${id} passt nicht zur Sprache ${lang} (Präfix ${lang === "en" ? "ohne" : lang + "-"})`);
    }
    if (!de) err(ort, "Deutsch fehlt");
    if (!antwort && !lesen) err(ort, "Antwort fehlt");
    if (niveau && !LEVELS.has(niveau)) err(ort, `Niveau „${niveau}“ ist keins von A1 … C2`);
    if (!niveau && !lesen) warn(ort, "kein Niveau");
    if (!themen) warn(ort, "kein Thema");
    if (/[()/]/.test(antwort ?? "")) warn(ort, `Antwort „${antwort}“ enthält Klammer oder Schrägstrich (wird vorgelesen)`);
    if (bspZiel && antwort && !lesen && !bspZiel.toLowerCase().includes(norm(antwort).replace(/^(to|le|la|les|l'|el|los|las|il|lo|gli|i) /, "").split(" ")[0].slice(0, 4))) {
      // nur grober Hinweis: Wortstamm sollte im Beispiel vorkommen
    }
    if (bspDe && !bspZiel && !lesen) warn(ort, "deutsches Beispiel ohne Beispiel in der Zielsprache");
    if (imDatei.has(schluessel)) err(ort, `„${de} – ${antwort}“ steht doppelt in dieser Datei (der Parser würde die Zeile verwerfen)`);
    imDatei.add(schluessel);
  });

  if (!pruefen) continue;
  const q = quellen.get(datei);
  if (!q) warn(datei, `steht noch nicht in katalog.json (${anzahl} Wörter)`);
  else if (q.count !== anzahl) err(datei, `katalog.json sagt count ${q.count}, die Datei hat ${anzahl} Wörter`);
  else if ((lang ?? "en") !== (q.lang ?? "en") && !datei.includes("lesen-")) err(datei, `Sprache ${lang} passt nicht zu katalog.json (${q.lang ?? "en"})`);
}

for (const q of katalog.words) if (!existsSync(join(ROOT, q.file))) err("katalog.json", `Datei ${q.file} fehlt`);

// ---------- Aliase ----------
const aliase = leseAliase();
if (aliase.size || katalog.aliases) {
  const a = katalog.aliases;
  if (!a) err("katalog.json", `aliases fehlt, ${ALIAS_DATEI} hat ${aliase.size} Zeilen – node scripts/aliase.mjs`);
  else if (a.file !== ALIAS_DATEI || a.count !== aliase.size || !Number.isInteger(a.version))
    err("katalog.json", `aliases muss lauten { file: "${ALIAS_DATEI}", version: <Zahl>, count: ${aliase.size} }`);
  for (const [alias, haupt] of aliase) {
    const ort = `${ALIAS_DATEI}: ${alias}`;
    if (!ids.has(alias)) err(ort, "Alias-ID gibt es in keiner Wortdatei");
    if (!ids.has(haupt)) err(ort, `Haupt-ID ${haupt} gibt es in keiner Wortdatei`);
    if (alias === haupt) err(ort, "zeigt auf sich selbst");
    if (aliase.has(haupt)) err(ort, `Haupt-ID ${haupt} ist selbst ein Alias (Kette)`);
    if (ids.has(alias) && ids.has(haupt) && paarVon.get(alias) !== paarVon.get(haupt))
      warn(ort, `Wortpaar weicht von ${haupt} ab (${paarVon.get(alias)} / ${paarVon.get(haupt)}) – gewollt?`);
  }
}

// ---------- Dubletten über Dateien hinweg ----------
const mehrfach = [...paare.entries()].filter(([, v]) => new Set(v.map((x) => x.datei)).size > 1);
/** Noch offen: mehr als eine ID der Gruppe ist kein Alias, das Wort stünde in der App mehrfach */
const offen = (v) => v.filter((x) => !aliase.has(x.id)).length > 1;
const hauptIds = new Set(aliase.values());
const ohneAlias = mehrfach.filter(([, v]) => offen(v));
let neueDubletten = 0;
for (const [k, v] of ohneAlias) {
  const betroffen = nurDateien.length ? v.filter((x) => nurDateien.includes(x.datei)) : [];
  if (betroffen.length) {
    neueDubletten++;
    const [, de, antwort] = k.split("|");
    warn(betroffen.map((x) => x.datei).join(", "), `„${de} – ${antwort}“ steht schon im Katalog als ${v.filter((x) => !betroffen.includes(x)).map((x) => x.id).join(", ")} – weglassen oder mit node scripts/aliase.mjs als Alias führen`);
  }
}
if (!nurDateien.length && ohneAlias.length) warn("Dubletten", `${ohneAlias.length} Wortpaare in mehreren Dateien ohne Alias – node scripts/aliase.mjs`);
if (DUBLETTEN) {
  console.log("\n# Dubletten: Wortpaar → Haupt-ID ← weitere IDs (* = noch ohne Alias)");
  for (const [k, v] of mehrfach) {
    const h = v.find((x) => hauptIds.has(x.id)) ?? hauptVorschlag(v);
    console.log(`${offen(v) ? "* " : ""}${k.replace(/\|/g, " | ")}  →  ${h.id}  ←  ${v.filter((x) => x !== h).map((x) => x.id).join(", ")}`);
  }
}

// ---------- Formen ----------
const formenDir = join(ROOT, "formen");
let formen = 0;
if (existsSync(formenDir)) {
  for (const f of readdirSync(formenDir).filter((x) => x.endsWith(".txt"))) {
    const datei = `formen/${f}`;
    if (nurDateien.length && !nurDateien.includes(datei)) continue;
    const lang = f.replace(".txt", "");
    if (!lemmas[lang]) {
      err(datei, "Dateiname muss de.txt, en.txt, fr.txt, es.txt oder it.txt sein");
      continue;
    }
    let kopf = false;
    const gesehen = new Set();
    readFileSync(join(formenDir, f), "utf8").split(/\r?\n/).forEach((roh, i) => {
      const ort = `${datei}:${i + 1}`;
      const zeile = roh.trim();
      if (!zeile || zeile.startsWith("#")) return;
      const t = zeile.split(";").map((x) => x.trim());
      if (!kopf) {
        kopf = true;
        if (zeile.replace(/\s/g, "") !== "Form;Grundform;Art") err(ort, "Kopfzeile muss lauten: Form; Grundform; Art");
        return;
      }
      formen++;
      if (t.length !== 3 || t.some((x) => !x)) return err(ort, "genau drei gefüllte Felder: Form; Grundform; Art");
      const [form, grund] = t;
      if (norm(form) === norm(grund)) err(ort, "Form gleich Grundform – Zeile weglassen");
      const k = `${norm(form)}|${norm(grund)}`;
      if (gesehen.has(k)) err(ort, `„${form} → ${grund}“ steht doppelt`);
      gesehen.add(k);
      const g = norm(grund.replace(/^to /i, ""));
      if (!lemmas[lang].has(g) && !lemmas[lang].has(norm(grund))) warn(ort, `Grundform „${grund}“ steht nicht im Katalog (${lang})`);
    });
  }
}

console.log(
  `\n${dateien.length} Wortdateien, ${woerter} Wörter, ${mehrfach.length} Wortpaare in mehreren Dateien` +
    (nurDateien.length ? `, davon ${neueDubletten} in den geprüften Dateien` : "") +
    `${formen ? `, ${formen} Formen` : ""}. ${fehler} Fehler, ${hinweise} Hinweise.`,
);
process.exit(fehler ? 1 : 0);
