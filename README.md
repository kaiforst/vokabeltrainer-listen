# Vokabeltrainer – Katalog

Wortschatz und Listen für den Vokabeltrainer. Die App baut diesen Stand mit `node scripts/bundle-catalog.mjs` ein
(dieses Repository liegt dafür neben dem App-Repository) und kann neuere Stände über GitHub nachladen.

- `katalog.json`: Quellen (Wortdateien mit Version und Anzahl), fertige Listen (Bedingung oder feste Auswahl) und
  unter `areas` der Baum der Bereiche, durch den man sich in der App klickt. Jeder Knoten hat `name`, `lists`
  (Listen-IDs in Anzeigereihenfolge) und optional `areas` (Unterbereiche); eine Liste darf an mehreren Stellen
  hängen. Listen, die nirgends hängen, zeigt die App unter „Weitere Listen“.
  Jeder Bereich kann ein `icon` tragen: ein eigenes Symbol `"mb:<name>"` (SVG in `assets/icons/svg` im App-Repo,
  umgerechnet mit `node scripts/icons.mjs`) oder ein Name aus Feather (`"map"`); unbekannte zeigt die App als Ordner. Bereiche der obersten Ebene tragen eine `section`: `vokabeln`, `grammatik`, `lesen` oder `wissen` – die App
  zeigt sie unter diesen vier Rubriken, in dieser Reihenfolge.
  Eine Liste kann unter `media` ein Video tragen (`{ "title": …, "url": "https://…" }`, nur https), etwa die Rede
  auf YouTube; die App zeigt dafür einen Knopf auf der Listenseite, in der Übung und im Ergebnis.
- `woerter/<quelle>.txt`: je Quelle die Wörter im Importformat mit Kopfzeile
  `id; Deutsch; Englisch; Weitere Antworten; Niveau; Themen; Beispiel Englisch; Beispiel Deutsch`

Ändert sich eine Wortdatei, steigt ihre `version` in `katalog.json`; ändert sich eine Liste, deren `version`;
ändert sich der Baum, `areas.version`.
IDs bleiben stabil, denn an ihnen hängt der Lernstand. Andere Lernsprachen bekommen eine eigene Quelle mit
`"lang": "fr"` (bzw. `es`, `it`, `no`) und eigene IDs (`fr-…`).

**Sprachfassungen:** Die Themen- und Business-Listen gibt es auf Englisch, Französisch, Spanisch, Italienisch und Norwegisch (Bokmål). Die
Wortdatei einer Fassung heißt `woerter/<sprache>-<quelle>.txt`, ihre Wörter `<sprache>-<id der englischen Quelle>`
(`fr-et-0001` zu `et-0001`), Deutsch, Niveau und Themen sind gleich. Die Liste heißt `<sprache>-<id der englischen
Liste>` und trägt `"answerLang"`; Name „Französisch: Essen & Trinken“ (entsprechend „Norwegisch: …“). Die App zeigt die Fassungen als einen Eintrag mit
mehreren Flaggen: Zusammen gehören Listen mit gleichem `"group"` oder, ohne Angabe, mit gleicher id ohne Sprachkürzel
vorne. Im Baum stehen alle Fassungen hintereinander, damit auch ältere App-Stände sie am richtigen Platz zeigen.

**Aliase:** Steht dasselbe Wortpaar (Sprache, Deutsch, Antwort) in mehreren Wortdateien, zeigt jede weitere ID in
`aliase.txt` auf eine Haupt-ID (Grundwortschatz, sonst die älteste Quelle), Zeilen `Alias; Haupt`. In
`katalog.json` steht dazu `"aliases": { "file": "aliase.txt", "version": …, "count": … }`. Die Wortzeilen bleiben
in ihren Dateien, ältere App-Stände ignorieren die Aliase. Neuere App-Stände zeigen jedes Wort nur einmal, führen den
Lernstand auf der Haupt-ID zusammen und lassen die Haupt-ID in allen Listen erscheinen, in denen einer ihrer Aliase
stünde. `node scripts/aliase.mjs` nimmt neue Dubletten auf (`--trocken` zeigt nur an); einmal vergebene Aliase und
Haupt-IDs ändern sich nie, denn an ihnen hängt Lernstand.

**Karten (Wissen, Grammatik):** In `karten/` stehen Fragen mit Antworten, die keine Vokabeln sind (Konzept:
`docs/konzept-wissen-grammatik.md` im App-Repo). Kopfzeile `id; Frage; Antwort; Weitere Antworten; Niveau; Themen;
Hinweis` (Wissen, Deutsch → Deutsch) bzw. `id; Angabe; Stichwort; Antwort; Weitere Antworten; Niveau; Themen; Hinweis`
mit `# Sprache: es` (Grammatik: Angabe auf Deutsch, Stichwort und Antwort in der Lernsprache). Weitere Antworten sind
mit `|` getrennt, weil eine Antwort ein Komma enthalten kann („went, gone“). Der Hinweis erscheint nach der Antwort.
In `katalog.json` stehen die Dateien unter `cards` (mit `"kind": "form"` und `"lang"` für Grammatik) und die Listen
unter `cardLists` (`"task": "ask"` für Wissen, `"task": "form"` für Grammatik, `"strict": true` für Artikel-Listen,
bei denen der Artikel stimmen muss). So lesen ältere App-Stände sie nicht als Vokabeln. IDs: `hs-` Hauptstädte, `bl-`
Bundesländer, `gv-en-` englische Verben, `gp-es-`/`gp-it-` Präsens. Hauptstädte sind gegen Wikidata (P36) geprüft.

**Quiz (Entwurf):** In `quiz/` stehen Probefragen für das Quiz „Die Wissensleiter“ (Konzept:
`docs/konzept-quiz.md` im App-Repo), noch nicht in `katalog.json`. Kopfzeile `id; Frage; Antwort; Falsche Antworten;
Stufe; Klasse; Themen; Hinweis`, genau drei falsche Antworten mit `|` getrennt, Stufe 1–15 (Schwierigkeit), Klasse
`K1`–`K13` oder leer (nur Erwachsene). IDs `qz-<thema>-0001`. `node scripts/pruefe-quiz.mjs` prüft Format und
Regeln fürs Hören (keine Verneinung, verschiedene Antworten, Frage und Hinweis verraten die Antwort nicht) und zeigt
die Verteilung nach Stufe und Klasse. Prüfbericht der Fakten: `quiz/PRUEFUNG.md`.

**Prüfen:** `node scripts/pruefe.mjs` prüft alle Wortdateien (Felder, IDs, Niveaus, Dubletten in einer Datei,
`count` in `katalog.json`), `aliase.txt` (IDs vorhanden, keine Ketten, gleiches Wortpaar, Dubletten ohne Alias) und
`formen/*.txt` sowie die Karten. Mit Dateinamen nur diese, mit `--dubletten` zusätzlich alle
Wortpaare, die in mehreren Dateien stehen, samt vorgeschlagener Haupt-ID. Erweiterungen in parallelen Sessions:
Prompt und Pakete in `docs/wortschatz-prompt.md` im App-Repo.
