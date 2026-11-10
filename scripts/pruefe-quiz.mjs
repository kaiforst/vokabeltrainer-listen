// Prüft Quizdateien (Kartenart „Auswahl“, Konzept docs/konzept-quiz.md im App-Repo).
// Aufruf: node scripts/pruefe-quiz.mjs [datei …]   ohne Dateien: alle quiz/*.txt und karten/quiz-*.txt
// Fehler brechen ab (Exit 1), Warnungen nur zur Ansicht. Am Ende: Verteilung nach Stufe und Klasse.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import { ROOT } from "./katalog-lib.mjs";

const KOPF = "id; Frage; Antwort; Falsche Antworten; Stufe; Klasse; Themen; Hinweis";
const ID = /^qz-[a-z]{2}-\d{4}$/;
const VERBOTEN = /^(alle|keine|beide|keiner|alles|nichts)\b/i;
const VERNEINUNG = /\b(nicht|kein|keine|keinen|keinem|keiner|keines)\b/i;

/** Vergleichsform: klein, ohne Akzente, Artikel und Satzzeichen */
const kanon = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\b(der|die|das|den|dem|des|ein|eine|einen|the)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const woerter = (s) => s.trim().split(/\s+/).filter(Boolean).length;

const dateien = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      ...(existsSync(join(ROOT, "quiz")) ? readdirSync(join(ROOT, "quiz")).filter((f) => f.endsWith(".txt")).map((f) => join(ROOT, "quiz", f)) : []),
      ...readdirSync(join(ROOT, "karten")).filter((f) => f.startsWith("quiz-") && f.endsWith(".txt")).map((f) => join(ROOT, "karten", f)),
    ];

let fehler = 0;
let warnungen = 0;
const ids = new Map();
const fragen = new Map();
const stufen = Array(16).fill(0);
const klassen = new Map();
let gesamt = 0;

for (const pfad of dateien) {
  const name = basename(pfad);
  const f = (zeile, text) => (fehler++, console.log(`✗ ${name}:${zeile} ${text}`));
  const w = (zeile, text) => (warnungen++, console.log(`! ${name}:${zeile} ${text}`));
  const zeilen = readFileSync(pfad, "utf8").replace(/^﻿/, "").split(/\r?\n/);
  let kopf = false;
  zeilen.forEach((roh, i) => {
    const nr = i + 1;
    const z = roh.trim();
    if (!z || z.startsWith("#")) return;
    if (!kopf) {
      if (z !== KOPF) f(nr, `Kopfzeile muss lauten: ${KOPF}`);
      kopf = true;
      return;
    }
    const teile = z.split(";").map((t) => t.trim());
    if (teile.length !== 8) return f(nr, `8 Felder erwartet, ${teile.length} gefunden (Semikolon im Text?)`);
    const [id, frage, antwort, falschRoh, stufeRoh, klasse, themen, hinweis] = teile;
    gesamt++;

    if (!ID.test(id)) f(nr, `ID „${id}“ passt nicht zu qz-xx-0000`);
    if (ids.has(id)) f(nr, `ID ${id} doppelt (auch ${ids.get(id)})`);
    ids.set(id, `${name}:${nr}`);

    if (!frage.endsWith("?")) w(nr, `Frage endet nicht mit „?“`);
    if (woerter(frage) > 22) w(nr, `Frage hat ${woerter(frage)} Wörter (zum Hören höchstens etwa 20)`);
    if (VERNEINUNG.test(frage)) w(nr, `Verneinung in der Frage – beim Zuhören fehleranfällig`);

    const falsch = falschRoh.split("|").map((t) => t.trim()).filter(Boolean);
    if (falsch.length !== 3) f(nr, `genau 3 falsche Antworten erwartet, ${falsch.length} gefunden`);
    const alle = [antwort, ...falsch];
    if (!antwort) f(nr, "Antwort fehlt");
    for (const a of alle) {
      if (woerter(a) > 4) w(nr, `Antwort „${a}“ hat mehr als 4 Wörter`);
      if (VERBOTEN.test(a)) f(nr, `Antwort „${a}“: keine „Alle/Keine/Beide“-Antworten`);
      if (/[()/&%§]/.test(a)) w(nr, `Antwort „${a}“ enthält Zeichen, die man schlecht spricht`);
    }
    const k = alle.map(kanon);
    if (new Set(k).size !== k.length) f(nr, `Antworten nicht verschieden: ${alle.join(" | ")}`);
    // ähnlich klingend: gleicher Anfang oder eine in der anderen enthalten
    for (let a = 0; a < k.length; a++)
      for (let b = a + 1; b < k.length; b++) {
        if (k[a] && k[b] && (k[a].includes(k[b]) || k[b].includes(k[a]))) w(nr, `„${alle[a]}“ und „${alle[b]}“ ähneln sich stark`);
      }
    const kf = ` ${kanon(frage)} `;
    if (antwort && kanon(antwort).length > 2 && kf.includes(` ${kanon(antwort)} `)) f(nr, `Frage enthält die Antwort „${antwort}“`);

    const stufe = Number(stufeRoh);
    if (!Number.isInteger(stufe) || stufe < 1 || stufe > 15) f(nr, `Stufe „${stufeRoh}“ muss 1–15 sein`);
    else stufen[stufe]++;
    if (klasse && !/^K([1-9]|1[0-3])$/.test(klasse)) f(nr, `Klasse „${klasse}“ muss leer oder K1–K13 sein`);
    klassen.set(klasse || "–", (klassen.get(klasse || "–") ?? 0) + 1);
    if (!themen || !themen.includes("/")) w(nr, `Themen „${themen}“: Pfad wie „Erdkunde/Flüsse“ erwartet`);
    if (hinweis && antwort && kanon(antwort).length > 2 && ` ${kanon(hinweis)} `.includes(` ${kanon(antwort)} `)) f(nr, `Hinweis verrät die Antwort „${antwort}“`);
    if (!hinweis) w(nr, "Hinweis fehlt");

    const schluessel = kanon(frage);
    if (fragen.has(schluessel)) f(nr, `gleiche Frage wie ${fragen.get(schluessel)}`);
    fragen.set(schluessel, `${name}:${nr}`);
  });
  if (!kopf) f(0, "Datei ohne Kopfzeile");
}

console.log(`\n${gesamt} Fragen in ${dateien.length} Datei(en): ${fehler} Fehler, ${warnungen} Warnungen`);
console.log(`Stufen: ${stufen.slice(1).map((n, i) => `${i + 1}:${n}`).join(" ")}`);
console.log(`Klassen: ${[...klassen].sort().map(([k, n]) => `${k}:${n}`).join(" ")}`);
process.exit(fehler ? 1 : 0);
