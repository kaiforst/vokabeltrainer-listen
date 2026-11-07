# Paket F-en: englische Wortformen → Grundform

Datei: `formen/en.txt` (Kopfzeile `Form; Grundform; Art`), **292 Formen**.

## Vorgehen

Alle englischen Wortdateien (ohne `fr-`/`es-`/`it-`, ohne `lesen-grundschule.txt`) per Skript ausgelesen,
Antwort und Weitere Antworten, getrennt nach Verben mit einem Wort (828), mehrteiligen Verben (423), Einzelwörtern
(4004) und mehrteiligen Ausdrücken (2376). Daraus von Hand die unregelmäßigen Verben, Plurale und Steigerungen
herausgesucht und die Formen selbst geschrieben. Gegenprobe per Skript: jede Grundform steht als Antwort oder
Weitere Antwort im Katalog, und jedes unregelmäßige Verb des Katalogs hat Formen – außer denen, deren Formen gleich
der Grundform sind (cost, cut, forecast, hit, hurt, knit, let, put, quit, read, shut, undercut).

## Inhalt

| Art | Zeilen |
|---|---|
| Präteritum | 142 |
| Partizip | 65 |
| Plural | 64 |
| Präsens | 5 |
| Komparativ | 8 |
| Superlativ | 8 |

- **Verben mit einem Wort (142 Zeilen):** Past Simple und Past Participle aller unregelmäßigen Verben im Katalog
  (be, begin, bring … withdraw, write), dazu am/is/are, has, could → can, might → may. Britische Formen auf -t
  (learnt, dreamt, spelt, spilt, spoilt), dazu gotten als amerikanisches Partizip von get, proven, mown, sewn, sown,
  shown. lie → lay, lain (Katalog hat „liegen, lügen“ unter ke-0780; lied ist regelmäßig).
- **Sonderfälle mit mehreren Wörtern (5):** has to, had to → have to; was born, were born → be born; got to know →
  get to know.
- **Phrasal und präpositionale Verben (65):** alle mehrteiligen Verbeinträge der Form Verb + Partikel/Präposition
  ohne Platzhalter (someone, something, oneself, it), deren Verb unregelmäßig ist (break up, give up, find out,
  come up with, get along with, wake up, …). Feste Verbindungen mit Substantiv/Adjektiv (take part, fall asleep,
  get married) bewusst nicht.
- **Plurale (64):** Einzelwörter (children, feet, mice, knives, analyses …, potatoes, tomatoes, mosquitoes, cargoes,
  dice → die) und mehrteilige Einträge, deren Kopf unregelmäßig ist (market analyses, PhD theses, brothers-in-law,
  computer mice, curricula vitae, hangers-on, knockout criteria …).
- **Steigerungen (16):** good, bad, little, much, many, far (farther/further), old (elder/eldest). well (Adverb)
  und badly stehen nicht im Katalog (well nur als „Brunnen“).

## Neue Quellen / Listen

Keine Wortdatei, keine Liste. `katalog.json` hat noch keinen Eintrag für `formen/` – beim Zusammenführen klären,
ob die Formen eine eigene Angabe (z. B. `"forms": [{ "file": "formen/en.txt", "lang": "en", "version": 1, "count": 292 }]`)
brauchen, damit die App sie nachlädt.

## Unsicherheiten und offene Fragen

1. **Art bei gleichen Formen:** Sind Past Simple und Past Participle gleich (bought, made, got), steht die Form nur
   einmal mit Art „Präteritum“ – zwei Zeilen mit gleichem Paar Form/Grundform meldet pruefe.mjs als doppelt. Falls
   die App die Art auswertet, wäre ein eigener Wert (z. B. „Präteritum, Partizip“) zu überlegen.
2. **4 Hinweise ⚠ „Grundform steht nicht im Katalog“** für swear (2×), lose out, tell off: Diese Verben stehen nur
   als Weitere Antwort, nicht an erster Stelle (gw-1181 „to swear“, gw-1189 „to lose out“, gw-1106 „to tell off“).
   pruefe.mjs entfernt „to “ bei Weiteren Antworten nicht, weil nach dem Split am Komma das führende Leerzeichen
   bleibt (`a.replace(/^to /i, "")` vor dem Trim). Kleine Korrektur in pruefe.mjs (`a.trim().replace(…)`) würde die
   Hinweise beseitigen; im Paket nicht geändert, weil scripts/ nicht zum Paket gehört.
3. **Feste Verbindungen:** Sollen auch Formen wie took part, fell asleep, fell in love, got married, was able to,
   made a mistake aufgenommen werden? Sie stehen im Katalog als Wendungen; hier bewusst weggelassen.
4. **Phrasal Verbs aus R5:** R5 legt parallel `woerter/phrasal-verbs.txt` an. Deren unregelmäßige Formen (gave up,
   got on …) fehlen hier zum Teil, sofern die Wendung noch nicht auf main steht – nach dem Merge von R5 ergänzen.
5. **Präsens:** Nur am/is/are/has/has to. does und goes (nur Schreibregel -es) sind nicht aufgenommen.
6. **gotten:** nur beim einfachen Verb get, nicht bei den Phrasal Verbs (got up, got along …).
7. **Plurale mit Varianten:** syllabi (auch syllabuses), appendices (auch appendixes), curricula (auch curriculums),
   hooves (auch hoofs), scarves (auch scarfs) – nur die unregelmäßige Form steht drin. Nicht aufgenommen, weil die
   regelmäßige Form üblicher ist: referendums, stadiums, gymnasiums, ultimatums, virtuosos, still lifes.
8. **person-Komposita:** contact person, self-taught person, person of trust nicht aufgenommen (Plural mit persons
   in Fachsprache üblich, people umgangssprachlich – nicht eindeutig). salesperson → salespeople ist drin.
9. **Mehrdeutige Formen:** found (auch Verb „to found“), saw (Säge), left (links), ground (Boden), thought (Gedanke),
   lay (auch „to lay“), could (auch eigener Eintrag ke-0130), more/better (eigene Einträge) – die Form-Zeile ist trotzdem
   richtig, die App sollte zuerst den direkten Katalogtreffer nehmen.
