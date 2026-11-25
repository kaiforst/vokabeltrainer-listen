# Paket N-nl: Niederländisch als sechste Lernsprache

Branch `wortschatz/N-nl` (auf main, eafb372), 25. 11. 2026. Niederländische Fassungen aller 43 Quellen, die es auf
Französisch, Spanisch, Italienisch und Norwegisch gibt, dazu Quellen, Listen und Bereichsbaum in `katalog.json`, Aliase
und `formen/nl.txt`. Anders als bei N-no sind App und Website im selben Zug angepasst (siehe unten).

## Dateien und Zeilen

43 Dateien `woerter/nl-<name>.txt`, **10.528 Zeilen**. IDs `nl-<id des englischen Originals>`, gleiche Nummern und
Reihenfolge wie die norwegische Fassung. Deutsch (mit Klammerhinweis), Niveau und Themen sind per Skript aus dem Original
übernommen. Kopfzeile `id; Deutsch; Niederländisch; Weitere Antworten; Niveau; Themen; Beispiel Niederländisch; Beispiel
Deutsch`, davor eine Kommentarzeile `# Niederländisch: …`.

Unterschiede zu no (10.531 Zeilen): **drei Zeilen in `nl-karsten` fehlen**, weil das Wortpaar sonst doppelt in der Datei
stünde (der Parser würde die Zeile verwerfen): ke-0476 (wahrscheinlich – waarschijnlijk, schon ke-0473), ke-0490 (schnell –
snel), ke-0502 (wirklich – echt). Deshalb zählen `nl-karsten` 985 und `nl-karsten-woerter` 734 statt 988/737; alle anderen
Listen zählen wie die norwegischen.

- 5.356 Zeilen haben Weitere Antworten.
- Das deutsche Beispiel steht in **179 Zeilen** anders als im Original, weil der niederländische Satz einen anderen Inhalt
  hat (niederländische Orte, 21 % btw, Schulnoten 1–10, „u“/„je“ …) oder das Original das Wort nicht enthielt.
- Beispielsätze: 24 länger als 12 Wörter, 265 kürzer als 6 (Wendungen, Grußformeln).

## Neue Quellen, Listen, Bereiche, Formen, Aliase (katalog.json)

- `words`: 43 Einträge `nl-<name>` mit `"lang": "nl"`, `version` 1, `count` = Zeilen der Datei, jeweils hinter dem
  no-Eintrag. Jetzt 263 Quellen.
- `lists`: **86 Listen** `nl-<id der englischen Liste>`, `"answerLang": "nl"`, Name „Niederländisch: …“, gleiche
  `filter`, `level`, `description`, `group` wie no, `version` 1, `count` aus den nl-Dateien berechnet (Themenpräfix und
  Niveau wie bei den vorhandenen Listen). Jetzt 535 Listen.
- `areas.tree`: jede `nl-`-Liste steht direkt hinter der `no-`-Liste. `areas.version` 20 → 21.
- `aliases`: 1695 neue Aliase (`node scripts/aliase.mjs`), `aliases.version` 9 → 10, `count` 9933. Keine alten Zeilen
  geändert.
- `forms`: `{ "lang": "nl", "file": "formen/nl.txt", "version": 1, "count": 2338 }`.

## Konventionen (Niederländisch)

- Standardniederländisch der Niederlande (Groene Boekje), keine nur flämischen Wörter; Sprachcode `nl`, Locale `nl-NL`.
- Antwort: genau eine gebräuchliche Übersetzung; kein Komma, Schrägstrich, Klammer, Punkt am Ende; `?`/`!` nur wie im
  Englischen, ohne Leerzeichen davor.
- **Substantive mit bestimmtem Artikel** (`de koffer`, `het huis`, `de ouders`), auch Stoffnamen und Abstrakta. Ohne
  Artikel: Eigennamen, Länder, Sprachen, Schulfächer, Wochentage, Monate, Spielnamen, Wendungen, `mama`/`papa`.
- Verben im Infinitiv ohne „te“ (`wegen`, `zich verheugen`, `opbellen`), Adjektive in der Grundform, Zahlen als Wörter.
- Wendungen (wa-, ws-): Satzanfang klein, `u` wo Deutsch „Sie“ hat, sonst `je`/`jij`; Uhrzeiten `half vier` = 3:30;
  Stockwerke wie im Deutschen (`eerste verdieping`, `begane grond`).
- Redewendungen und Sprichwörter: niederländische Entsprechung, sonst natürliche Umschreibung (als unsicher gemeldet).
- Abkürzungen (`cv`, `cao`, `btw`) stehen als Weitere Antwort, wo das ausgeschriebene Wort existiert; `de btw` ist in
  einigen Zeilen Hauptantwort, weil es kein gesprochenes Vollwort gibt.

## Vorgehen und Prüfung

1. Skelett aller 43 Dateien per Skript aus dem englischen Original (ID, Deutsch, Niveau, Themen, deutsches Beispiel).
   Die 10.531 Zeilen in 39 Einheiten à 150–333 Zeilen geteilt; je Einheit hat ein Unteragent Antwort, Weitere und
   Beispielsätze geschrieben (Eingabe: Deutsch, Niveau, Themen, englische Antwort und Alternativen, französische Antwort,
   deutsches Beispiel) und mit einem Prüfskript (Felder, Vollständigkeit, Form der Antwort, Länge der Beispiele) geprüft.
   Die Unteragenten haben **738 Zeilen als unsicher** gemeldet: `pruefung/unsicher-nl.txt` (id; Grund), die meisten im
   Grundwortschatz (85), bei Redewendungen (46), Business Airport (42) und den Ausbau-Grundwörtern (40).
2. Alias-Abgleich: Für die 1.605 englischen Alias-Paare mit nl-Zeile hatten 1.533 schon dieselbe Antwort; 72 wurden auf
   die Antwort der Haupt-Zeile gesetzt (alte Antwort als Weitere), 56 Beispielsätze dazu neu geschrieben. Das Gegenlesen
   hat davon einige wieder getrennt, wo das Hauptwort nicht passt (Angebot: offerte/aanbieding, Gewürz: kruid/specerij,
   Gutschein, Entschädigung, Mängelrüge); diese Paare sind keine Aliase.
3. Gegenlesen: 12 unabhängige Durchsichten über alle 10.528 Zeilen (je ~878), nur echte Fehler: **~180 Korrekturen**
   (falsche Bedeutung wie eigenlijk/tatsächlich, krab/Krebs, aanklacht/Klage; Genus; Flämisch wie voltijds; Anglizismen
   wie voucher; Beispielsätze, die nur die Nebenantwort enthielten; nicht gleichwertige Weitere Antworten).
4. `node scripts/pruefe.mjs`: **0 Fehler, 0 Hinweise** über den ganzen Katalog (263 Quellen, 63.836 Wörter, 8.520
   Formen, 637 Karten).

Nicht per Skript prüfbar: ob jedes Wort im Groene Boekje genau so steht, das Genus von Fachwörtern, die Idiomatik der
Sprichwörter. Vor Veröffentlichung die Zeilen aus `pruefung/unsicher-nl.txt` gegenlesen lassen, besonders:
Flughafen-Fachwörter (Sperrgepäck, Abfertigungsschluss, luft-/landseitig), Vergabe- und PM-Fachwörter (Leistungsverzeichnis,
Pflichtenheft, Vergabekammer, deliverable, scope creep), Sprichwörter ohne feste Entsprechung (sp-0012, 0061, 0083, 0100,
0115, 0116), Umschreibungen (op korte termijn, rekening houden met, zich op zijn gemak voelen), Schulbegriffe
(Abitur, Gymnasium, Referat, Klassenfahrt).

## formen/nl.txt

2338 Formen, Kopfzeile `Form; Grundform; Art`, Grundform genau wie die Antwort oder Weitere im Katalog (Infinitiv ohne
„te“, Substantive mit Artikel): unregelmäßiges Präsens (114), Präteritum Singular und Plural (1389) und Partizip (611)
der starken und unregelmäßigen Verben (178 Wurzeln, 134 im Katalog, auch mit Vorsilbe, trennbarem Teil, `zich` und in
kurzen Wendungen), unregelmäßige Plurale (166: -eren, Vokalwechsel, Fremdplurale), Komparativ (52, auch -der) und
Superlativ (6). `pruefe.mjs formen/nl.txt`: 0 Fehler, 0 Hinweise. Hilfsskripte (Wurzeltabelle) lagen unter
`F:\tmp\nl-arbeit\formen\`; bei neuen starken Verben die Tabelle erweitern.

## Skripte

- `scripts/katalog-lib.mjs`: `SPRACHEN` kennt `Niederländisch: "nl"`.
- `scripts/pruefe.mjs`: ID-Muster `(fr|es|it|no|nl)-`, `lemmas.nl`, Kopfzeile „Niederländisch“, `formen/nl.txt` erlaubt.
- `scripts/gibt-es.mjs`: Aufrufhinweis `--lang fr|es|it|no|nl`.

## App und Website (im selben Zug)

- App (`F:\dev\vokabeln`): Sprache `nl` mit Flagge 🇳🇱, Stimme und Erkennung `nl-NL`, Beispielwort `de koffer`; Bewertung
  ohne Artikel de/het/een/'t, streng mit Artikel; Zahlwörter (`eenentwintig`, `drieëntwintig`, Einer + „en“ + Zehner wie
  im Deutschen); Sprachbefehle (pauze, verder, herhaal, uitspraak, overslaan, stoppen, dat was goed); Import erkennt
  „Niederländisch“; Katalog neu gebündelt (263 Quellen, 560 Listen). Tests, Lint, Typecheck grün.
- Website (`F:\dev\vokabeltrainer-web`): `nl` in `SPRACHEN`, `SPRACH_NAMEN`, Listen-Import und Admin-Wortliste. Neue
  Migration `20261125120000_sprachen_no_nl.sql`: Die Datenbank ließ bei eigenen Listen bisher nur de/en/fr/es/it zu, also
  **auch Norwegisch nicht** – sie erweitert `prompt_lang`/`answer_lang` um `no` und `nl`. Muss noch auf Supabase
  eingespielt werden.

## Hinweise fürs Zusammenführen

- Der Branch ändert nur: `katalog.json` (words, lists, areas, forms, aliases), `aliase.txt`, drei Skripte, README und
  neue Dateien. Nichts ist committet; alle Änderungen liegen im Arbeitsverzeichnis.
- Ändert sich nach dem Zusammenführen ein Original (Deutsch, Klammerhinweis), die niederländische Zeile nachziehen.
