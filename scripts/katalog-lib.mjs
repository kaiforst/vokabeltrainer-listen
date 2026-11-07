/** Gemeinsame Bausteine für die Katalog-Skripte (pruefe.mjs, aliase.mjs). */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = join(fileURLToPath(import.meta.url), "..", "..");
export const SPRACHEN = { Englisch: "en", Französisch: "fr", Spanisch: "es", Italienisch: "it" };

/** Vergleichsform wie `normalize` in der App (src/domain/answerEvaluator.ts): so erkennt der Parser Dubletten */
export const norm = (s) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’`´]/g, "'")
    .replace(/[^a-z0-9'äöüß\s-]/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Deutsch ohne Hinweis in Klammern, in Vergleichsform: „Bank (Geldinstitut)“ → „bank“. Wie `basisNorm` in der
 * Webseite (src/lib/katalog/zeilen.ts), damit Formen, Dubletten und Abgleich dasselbe Grundwort sehen.
 */
export const basis = (s) => norm((s ?? "").replace(/\s*\([^)]*\)/g, " "));

/**
 * Schlüssel eines Wortpaars: Sprache, Deutsch und Antwort in Vergleichsform – mit Klammerhinweis, denn
 * „groß – grand“ und „groß (Körpergröße) – grand“ sind bewusst getrennte Bedeutungen (wie im Parser der App).
 */
export const paarSchluessel = (lang, de, antwort) => `${lang}|${norm(de ?? "")}|${norm(antwort ?? "")}`;

export const ladeKatalog = () => JSON.parse(readFileSync(join(ROOT, "katalog.json"), "utf8"));

export const wortDateien = () =>
  readdirSync(join(ROOT, "woerter"))
    .filter((f) => f.endsWith(".txt"))
    .map((f) => `woerter/${f}`);

/**
 * Wortpaare, die in mehreren Dateien stehen: Schlüssel → Einträge {id, datei, rang}.
 * `rang` ist die Position der Quelle in katalog.json (kleiner = älter).
 */
export function dubletten(katalog = ladeKatalog()) {
  const rang = new Map(katalog.words.map((w, i) => [w.file, i]));
  const paare = new Map();
  for (const datei of wortDateien()) {
    const lesen = datei.includes("lesen-");
    let lang = null;
    let kopf = false;
    for (const roh of readFileSync(join(ROOT, datei), "utf8").split(/\r?\n/)) {
      const zeile = roh.trim();
      if (!zeile || zeile.startsWith("#")) continue;
      const f = zeile.split(";").map((x) => x.trim());
      if (!kopf) {
        kopf = true;
        lang = SPRACHEN[f[2]];
        continue;
      }
      const [id, de, antwort] = f;
      if (!id || !de || (!antwort && !lesen)) continue;
      const k = paarSchluessel(lang, de, antwort);
      if (!paare.has(k)) paare.set(k, []);
      paare.get(k).push({ id, datei, rang: rang.get(datei) ?? 9999 });
    }
  }
  return new Map([...paare].filter(([, v]) => new Set(v.map((x) => x.datei)).size > 1));
}

export const ALIAS_DATEI = "aliase.txt";

/** Aliase aus aliase.txt: Alias-ID → Haupt-ID (leer, wenn die Datei fehlt) */
export function leseAliase(pfad = join(ROOT, ALIAS_DATEI)) {
  const map = new Map();
  if (!existsSync(pfad)) return map;
  let kopf = false;
  for (const roh of readFileSync(pfad, "utf8").split(/\r?\n/)) {
    const z = roh.trim();
    if (!z || z.startsWith("#")) continue;
    if (!kopf) {
      kopf = true;
      continue;
    }
    const [alias, haupt] = z.split(";").map((x) => x.trim());
    map.set(alias, haupt);
  }
  return map;
}

/** Vorgeschlagene Haupt-ID: Grundwortschatz, sonst die älteste Quelle */
export const hauptVorschlag = (eintraege) =>
  [...eintraege].sort((a, b) => (b.id.includes("gw-") ? 1 : 0) - (a.id.includes("gw-") ? 1 : 0) || a.rang - b.rang)[0];
