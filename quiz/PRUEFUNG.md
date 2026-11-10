# Prüfung der Probefragen (11. 11. 2026)

500 Probefragen für „Die Wissensleiter“ (Konzept: `docs/konzept-quiz.md` im App-Repo), zehn Themen à 50.

**Ablauf:** Je zwei Themen hat ein Agent erzeugt und mit `scripts/pruefe-quiz.mjs` auf Format und Hörregeln geprüft.
Danach hat je Themenpaar ein **anderer** Agent jede Frage auf Fakten geprüft: Antwort richtig, jede falsche Antwort
wirklich falsch (auch wohlwollend), beim Hören eindeutig, Hinweis sachlich richtig und ohne Verrat, Stufe und Klasse
grob passend. Fehler wurden direkt korrigiert; Einzelheiten in `pruefung-<themen>.md`.

| Themen | geändert | ersetzt |
|---|---|---|
| Erdkunde Deutschland/Europa, Welt (`ed`, `ew`) | 5 | 3 |
| Geschichte, Natur und Tiere (`ge`, `ti`) | 5 | 1 (+1 doppelte Frage, von Hand) |
| Mensch und Körper, Wissenschaft (`me`, `wt`) | 11 | 0 |
| Sprache und Literatur, Kunst und Musik (`sl`, `km`) | 9 | 0 |
| Sport und Spiel, Alltag (`so`, `al`) | 6 | 0 |
| **Summe** | **36** | **5** |

**Ergebnis:** In keiner Frage war die angegebene richtige Antwort falsch. Die häufigsten Fehler waren falsche
Antworten, die bei wohlwollender Auslegung auch stimmen (Lessing schrieb auch einen Faust, Dientzenhofer baute an der
Würzburger Residenz mit, Lister führte Händedesinfektion ein, Bambus ist ein Gras, Mont Blanc gilt je nach Grenze als
höchster Berg Europas), danach ungenaue Hinweise und angreifbare Superlative. Zwei Fragen standen doppelt in
verschiedenen Themen (Bundesländer, Mondlandung) und wurden ersetzt.

`node scripts/pruefe-quiz.mjs`: 500 Fragen, 0 Fehler, 0 Warnungen. Stufen 1–10 je 40, 11–15 je 20; 319 Fragen mit
Klassenstufe (K1–K10), 181 nur für Erwachsene.

**Offen für die App:**
- Synonyme: Wer bei „Fernrohr“ „Teleskop“ sagt, liegt richtig (`qz-wt-0004`). Die Bewertung braucht weitere
  Antworten je Option oder wertet nur, welche der vier Optionen gemeint ist (siehe Konzept, „Bewertung der Antwort“).
- Namen mit Sonderzeichen vorlesen und erkennen testen: Galdhøpiggen, Snøhetta (`qz-ed-0048`), Salto Ángel (`qz-ew-0041`).
- Die Prüfer haben überwiegend aus eigenem Wissen geprüft, nur einzelne Punkte im Web. Vor einer Veröffentlichung im
  Katalog: Stichprobe durch einen Menschen, besonders Stufe 11–15.
