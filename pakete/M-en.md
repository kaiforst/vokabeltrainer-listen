# Paket M-en: Mehrdeutige deutsche Wörter (Englisch)

Branch `wortschatz/M-en`. Geprüft wurden alle deutschen Wörter der englischen Wortdateien (alle Dateien ohne
`fr-`/`es-`/`it-`-Präfix, ohne `lesen-grundschule.txt`): 7007 Zeilen, 5165 verschiedene Einträge im Feld Deutsch.
Die Liste wurde per Skript erzeugt (je deutsches Wort alle Antworten mit IDs), dann Wort für Wort beurteilt. Zusätzlich
per Skript: alle deutschen Wörter mit mehreren verschiedenen Antworten (193) und welche Zeile welche Antwort der anderen
nicht annimmt.

Nachvollziehbar in `pruefung/mehrdeutig-en.txt` (327 Fälle: 188 × c, 85 × b, 54 × d; Fall a ist nicht aufgeführt).

## Was geändert wurde

- **Fall c, Klammerhinweis im Feld Deutsch:** 188 Fälle, durch die Alias-Gruppen 251 Zeilen. Beispiele: „Bank
  (Geldinstitut)“, „Schloss (Gebäude)“, „Decke (im Zimmer)“ / „Decke (zum Zudecken)“, „Preis (Kosten)“ / „Preis
  (Gewinn)“, „Eis (Speiseeis)“ / „Eis (gefrorenes Wasser)“, „kündigen (Stelle)“ / „kündigen (Vertrag)“. Bei Alias-Gruppen
  ist jede Zeile der Gruppe gleich geändert (Haupt-ID und alle Aliase), damit die Wortpaare gleich bleiben.
  Drei Zeilen bekamen statt eines Hinweises die eindeutige Grundform bzw. den schon üblichen Hinweis: ke-0834 „erinnern“
  (to remember) → „sich erinnern“, al-0127 „aufstehen“ → „aufstehen (morgens, aus dem Bett)“ (wie ke-0749).
- **Fall b, gleichwertige Antworten ergänzt:** 85 Zeilen (z. B. Antwort + response, Kosten + cost, Bahnhof + railway
  station, Probezeit + probationary period, praktisch + practical, Einigung + agreement, sauer (verärgert) + angry, cross).
- **Fall d, neue Bedeutungen:** 54 Zeilen in `woerter/bedeutungen.txt` (bd-0001 … bd-0054), jeweils mit
  Klammerhinweis, die bestehende Zeile mit der anderen Bedeutung hat ebenfalls einen bekommen (Bank (zum Sitzen) –
  bench, Schloss (an der Tür) – lock, Kiefer (Knochen) – jaw, Mutter (Schraube) – nut, Krebs (Tier) – crab,
  Gericht (Speise) – dish, Schlange (zum Anstehen) – queue, Absatz (im Text) – paragraph, als (zeitlich) – when …).
- IDs, Niveaus, Themen und Beispielsätze bestehender Zeilen sind unverändert; die Beispielsätze passen zur jeweiligen
  Bedeutung (geprüft).

## Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| bedeutungen | woerter/bedeutungen.txt | en | 54 |

Themen in der Datei: `Mehrdeutige Wörter/Alltag` (22), `Mehrdeutige Wörter/Mensch` (12), `Mehrdeutige Wörter/Natur`
(5), `Mehrdeutige Wörter/Schule & Arbeit` (8), `Mehrdeutige Wörter/Gesellschaft & Kultur` (7). Niveaus A2–B2.

## Vorschlag für Listen

| id | name | description | level | filter |
|---|---|---|---|---|
| mehrdeutig | Mehrdeutige Wörter | Wörter mit mehreren Bedeutungen: Bank (zum Sitzen), Schloss (an der Tür), Kiefer (Knochen) … | B1 | topics: ["Mehrdeutige Wörter"] |
| mehrdeutig-a2 | Mehrdeutige Wörter – Einstieg | Die häufigsten zweiten Bedeutungen bekannter Wörter | A2 | topics: ["Mehrdeutige Wörter"], levels: ["A2"] |

Sinnvoll wäre auch eine feste Auswahl, die beide Bedeutungen nebeneinander zeigt (z. B. eg-0030 Bank (Geldinstitut)
neben bd-0001 Bank (zum Sitzen)); die Paare stehen in `pruefung/mehrdeutig-en.txt`.

## Geänderte Dateien (version muss beim Mergen steigen)

alltag-zuhause (2→3), arbeit-beruf (1→2), business-airport (3→4), business-beschaffung (2→3), business-buero (1→2),
business-marketing-vertrieb (1→2), business-personalwesen (1→2), business-projektmanagement (2→3),
business-rechnungswesen (1→2), business-verhandlungen (1→2), business-vertrag (2→3), einkaufen-geld (2→3),
essen-trinken (2→3), familie-beziehungen (2→3), filme (1→2), freizeit-hobbys (2→3), gefuehle-charakter (2→3),
grundwortschatz (3→4), karsten (3→4), kleidung-mode (2→3), koerper-gesundheit (1→2), kunst-kultur (2→3), lieder (1→2),
medien-kommunikation (1→2), natur-tiere (1→2), politik-gesellschaft (1→2), reden (3→4), reisen-urlaub (2→3),
schule-bildung (2→3), sport-fitness (1→2), technik-computer (2→3), verkehr-mobilitaet (1→2), wetter-umwelt (1→2),
wirtschaft-finanzen (1→2), wissenschaft-forschung (1→2) – alle 35 englischen Wortdateien außer lesen-grundschule.
Die Anzahl der Wörter (count) ändert sich in keiner bestehenden Datei. aliase.txt ist unverändert.

## Alias-Kandidaten (⚠ in pruefe.mjs)

Durch die Hinweise sind vier Wortpaare jetzt gleich mit schon vorhandenen Einträgen (die Vergleichsform entfernt
Klammern und Kommas). Es sind echte Dubletten, beim Zusammenführen mit `node scripts/aliase.mjs` aufnehmen:

- „Nachricht (Mitteilung) – message“ (gw-0441 mit bb-0035, tc-0038) = ke-0359 „Nachricht, Mitteilung“
- „annehmen (vermuten) – to assume“ (gw-0511) = ke-0679 „annehmen, vermuten“
- „sich erinnern – to remember“: ke-0834 = gw-0307 (gleiche Zeile, auch gleicher Beispielsatz)
- „aufstehen (morgens, aus dem Bett) – to get up“: al-0127 = ke-0749 (gleicher Beispielsatz)

## Unsicherheiten

- **Hinweise bei A1-Wörtern** (Mutter (Elternteil), Preis (Kosten), Bank (Geldinstitut), Geschäft (Laden), Freund
  (Partner), Entschuldigung (Ausruf) …): Das folgt dem Auftrag, wirkt bei Anfängerlisten aber etwas umständlich.
  Bei „Mutter“ wäre auch vertretbar, nur die neue Zeile „Mutter (Schraube)“ zu führen und „Mutter“ ohne Hinweis zu
  lassen.
- **Bewusst nicht als neue Bedeutung aufgenommen** (selten, oder es gibt ein eigenes übliches Wort im Katalog):
  Steuer (Lenkrad), Pass (Gebirge, Fußball), Birne (Glühbirne), kochen (Wasser, to boil), See (das Meer), Strom
  (Fluss), Platz (Sitzplatz), Anzeige (bei der Polizei), Bruch (Knochenbruch steht schon da), Vorstellung (Gedanke),
  Spur (Abdruck), Pension (Ruhestandsgeld, Rente steht da), Absatz (Verkauf), Folie (Alufolie), Rad (Fahrrad). Die
  Bedeutungen sind in der Spalte Bedeutungen des Protokolls genannt, wo es einen Hinweis gab.
- **Fall b mit fachlicher Unschärfe:** Garantie + warranty und Gewährleistung + warranty (im deutschen Recht zwei
  Begriffe, im Englischen meist beides warranty); Schlichtung arbitration ↔ conciliation (rechtlich verschieden, die
  bestehenden Zeilen nutzen aber beide Übersetzungen für dasselbe Wort); Leistung performance ↔ achievement.
  Durchlaufzeit (lead time / cycle time) und Angebot (offer / quotation) habe ich nicht angeglichen.
- **Karstens Empfehlung, Reden, Lieder, Filme:** dort nur Hinweise bei wirklich mehrdeutigen Einzelwörtern (z. B.
  böse, dick, als, gleich, gerade, halten, tragen, weit, Erbe (Person), Lohn (Belohnung), Himmel (Paradies), Abzug
  (Waffe), Brunnen, Werk (Fabrik)). Fälle b dort ausgelassen, z. B. ke-0330 Anwalt (lawyer, ohne attorney/solicitor),
  ke-0569 klug (smart, ohne clever), ke-0128 zufrieden (content, ohne satisfied), ke-0457 giftig (poisonous, ohne
  toxic), rd-0213 Herkunft (heritage, ohne origin).
- **Überschneidung mit R5 (Phrasal Verbs):** bd-0011 „ausziehen (aus der Wohnung) – to move out“ und bd-0028
  „erfahren (herausfinden) – to find out“ sind Verb+Partikel; falls R5 dieselben Paare ohne Klammer aufnimmt, beim
  Zusammenführen abgleichen.
- gc-0032 „sauer (verärgert)“ hat als Antwort das amerikanische „mad“; ich habe nur „angry, cross“ ergänzt, die
  Hauptantwort nicht getauscht.

## Offene Fragen

1. **Abgleich eigener Listen:** Die Vergleichsform `norm` lässt Klammerinhalte stehen („Bank (Geldinstitut)“ → „bank
   geldinstitut“). Tippt jemand nur „Bank“, findet ein exakter Abgleich die Zeile nicht mehr. Der Abgleich sollte den
   Klammerhinweis ignorieren (und dann bei mehreren Treffern die Antwort zur Auswahl nutzen). Dasselbe gilt für F-de:
   Grundformen mit Klammerhinweis aus M-en ohne Klammer vergleichen.
2. **Sprachfassungen:** fr-/es-/it-Dateien haben noch das Deutsch ohne Hinweis. Laut README ist Deutsch in den
   Fassungen gleich – das stellen M-fr/M-es/M-it her (gleiche Hinweise, gleiche Nummern mit Sprachkürzel, auch für
   bd-0001 … bd-0054).
3. **Anzeige der Hinweise in der App:** Die Klammer steht im Feld Deutsch und wird mit abgefragt bzw. angezeigt; falls
   die App Deutsch vorliest, wird der Hinweis mitgelesen. Gewollt?

## Kontrolle

- `node scripts/pruefe.mjs` nach jeder Datei und am Ende: 0 Fehler; Hinweise nur „bedeutungen.txt steht noch nicht in
  katalog.json“ und die vier Alias-Kandidaten oben.
- Stichprobe 30 geänderte Zeilen plus alle 54 neuen Zeilen auf Übersetzung, Hinweis, Niveau und Beispielsatz
  durchgesehen; keine Korrektur nötig.
