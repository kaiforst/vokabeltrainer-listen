# Paket T-it: Italienische Fassungen von R1–R4

Vier neue Wortdateien, je eine Fassung der Originale aus R1–R4 (Branches wortschatz/R1 … wortschatz/R4, noch nicht
auf main). IDs `it-<id des Originals>`, gleiche Nummern und Reihenfolge, keine Zeile ausgelassen. Deutsch, Niveau und
Themen wie im Original.

| Datei | Original | Zeilen |
|---|---|---|
| woerter/it-wendungen-alltag.txt | woerter/wendungen-alltag.txt (R1) | 310 |
| woerter/it-wendungen-schule-arbeit.txt | woerter/wendungen-schule-arbeit.txt (R2) | 274 |
| woerter/it-redewendungen.txt | woerter/redewendungen.txt (R3) | 345 |
| woerter/it-sprichwoerter.txt | woerter/sprichwoerter.txt (R4) | 129 |

Neue Quellen (lang it, version 1): `it-wendungen-alltag` (310), `it-wendungen-schule-arbeit` (274), `it-redewendungen` (345), `it-sprichwoerter` (129).

## Nachträglich von der Hauptsession angeglichen

- **Satzzeichen:** Die Teilnotizen unten sagen, Antworten hätten kein „?“/„!“ am Ende. Das ist überholt: Wo die englische
  Antwort ein Frage- oder Ausrufezeichen hat (41 Zeilen in R1/R2), hat es jetzt auch die Fassung, in Haupt- und Weiteren
  Antworten (wie „come stai?“). Für den Abgleich ohne Bedeutung (`norm` entfernt Satzzeichen).
- **Niveau:** überall wie im Original. Wo eine Teilnotiz eine Niveauänderung beschreibt, ist sie zurückgenommen; die
  Begründung bleibt als Hinweis für eine spätere Entscheidung stehen (Niveaus je Sprache abweichen lassen?).
- **it-sp-0064 Kleider machen Leute:** statt der Umkehrung „L'abito fa il monaco“ (das bekannte Sprichwort sagt das
  Gegenteil) jetzt „L'apparenza conta“, weitere „La prima impressione conta“ – wie fr-sp-0064. Die Teilnotiz unten
  beschreibt noch die alte Fassung.
- **it-wa-0163 Sonst noch etwas?:** die zu knappe Weitere Antwort „altro?“ gestrichen.

## Beim Zusammenführen

- R1–R4 zuerst mergen; ändert sich dort eine Zeile (z. B. Alias wa-0020/ws-0092), die Fassung nachziehen.
- `it-wa-0020` und `it-ws-0092` („eine Pause machen“) sind doppelt wie im Englischen → Alias wie dort.
- Danach `node scripts/pruefe.mjs --dubletten` über alle it-Dateien.
- Listen: je Datei wie in R1.md–R4.md, id `it-<id der englischen Liste>`, `answerLang: "it"` (Details in den Teilen).


## T-it – Alltagswendungen (Fassung von R1)

Neue Datei `woerter/it-wendungen-alltag.txt`, 310 Zeilen (it-wa-0001 … it-wa-0310), eine Zeile je Zeile des Originals
`woerter/wendungen-alltag.txt` (R1), gleiche Nummern und Reihenfolge. Deutsch, Niveau und Themen unverändert
übernommen (137 × A1, 144 × A2, 29 × B1). Keine Zeile ausgelassen, kein Niveau geändert.

### Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| `it-wendungen-alltag` | `woerter/it-wendungen-alltag.txt` | it | 310 |

### Vorschläge für Listen

Wie in pakete/R1.md, jeweils mit `"answerLang": "it"`, Name mit Präfix „Italienisch: …“, Filter über dieselben Themen.

| id | name | level | filter |
|---|---|---|---|
| `it-wendungen-alltag-a1` | Italienisch: Alltagswendungen – A1 | A1 | topics `Wendungen/Alltag`, levels `A1` (137) |
| `it-wendungen-alltag-a2` | Italienisch: Alltagswendungen – A2 | A2 | topics `Wendungen/Alltag`, levels `A2` (144) |
| `it-wendungen-alltag-b1` | Italienisch: Alltagswendungen – B1 | B1 | topics `Wendungen/Alltag`, levels `B1` (29) |
| `it-wendungen-zeitangaben` | Italienisch: Wendungen: Zeitangaben | A1 | topics `Wendungen/Alltag/Zeitangaben` (60) |
| `it-wendungen-tagesablauf-wohnen` | Italienisch: Wendungen: Tagesablauf & Wohnen | A1 | topics `…/Tagesablauf`, `…/Wohnen` (50) |
| `it-wendungen-essen-einkaufen` | Italienisch: Wendungen: Essen & Einkaufen | A1 | topics `…/Essen & Trinken`, `…/Einkaufen` (80) |
| `it-wendungen-freizeit` | Italienisch: Wendungen: Freizeit | A1 | topics `…/Freizeit` (50) |
| `it-wendungen-reisen-unterwegs` | Italienisch: Wendungen: Reisen & Unterwegs | A1 | topics `…/Reisen`, `…/Unterwegs` (50) |
| `it-wendungen-gesundheit-wetter-feste` | Italienisch: Wendungen: Gesundheit, Wetter & Feste | A1 | topics `…/Gesundheit`, `…/Wetter`, `…/Feste & Wünsche` (20) |

(Die ids folgen den Vorschlägen aus R1; falls die englischen Listen beim Mergen andere ids bekommen, entsprechend
`it-<id der englischen Liste>`.)

### Dubletten und Alias-Kandidaten

- **it-wa-0020 / it-ws-0092** „eine Pause machen – fare una pausa“: von pruefe.mjs gemeldet. Schon die englischen
  Originale sind doppelt (wa-0020 / ws-0092 „eine Pause machen – to take a break“). Alias so setzen wie beim Englischen
  (Haupt-ID dort übernehmen, nur mit Präfix `it-`).

Ähnliche Einträge (anderes Deutsch, gleiche oder überlappende Antwort) – bewusst behalten, zur Kenntnis:
- it-wa-0051 „am Morgen – la mattina“ / it-gw-0123, it-ke-0372 „Morgen – la mattina“
- it-wa-0053 „am Abend – la sera“ / it-gw-0124, it-ke-0195 „Abend – la sera“
- it-wa-0151 „den Einkauf erledigen – fare la spesa“ / it-al-0130, it-eg-0024 „einkaufen – fare la spesa“
- it-wa-0196 „wandern gehen – fare escursioni“ / it-fh-0054, it-sf-0032 „wandern – fare escursioni“
- it-wa-0198 „reiten gehen – andare a cavallo“ / it-sf-0033 „reiten – andare a cavallo“
- it-wa-0246 „den Koffer packen – fare la valigia“ / it-ru-0029 „packen – fare la valigia“
- it-wa-0288 „weit weg – lontano“ / it-ke-0212 „weit – lontano“
- it-wa-0099 „auf einmal – all'improvviso (improvvisamente)“ / it-gw-0345, it-ke-0622 „plötzlich – improvvisamente“
- it-wa-0109 „vor Kurzem – di recente (recentemente)“ / it-gw-0344, it-ke-0504 „kürzlich“, it-gw-1139 „unlängst – di recente“
- it-wa-0094 „am Anfang – all'inizio“ / it-gw-1042 „eingangs – all'inizio“
- it-wa-0098 „in der Zwischenzeit – nel frattempo“ / it-gw-0650 „währenddessen – nel frattempo“
- Innerhalb der Datei: it-wa-0025 „zu spät kommen – essere in ritardo“ und it-wa-0272 „Verspätung haben – avere ritardo“
  (Weitere Antwort „essere in ritardo“) – wie im Original (wa-0025 / wa-0272 „to be late“).
- Ähnlich, aber verschiedene Antworten: it-wa-0019 „sich die Zeit vertreiben – passare il tempo“ und it-wa-0027
  „Zeit verbringen – passare del tempo“.

### Regeln, die ich angewandt habe

- Antworten ohne Komma, Schrägstrich, Klammer und ohne Satzzeichen am Ende („che ore sono“, „il conto per favore“,
  „buon appetito“) – wie die französische Fassung.
- Reflexive Verben mit Pronomen („lavarsi i denti“, „cambiarsi“), Possessiv entfällt, wo Italienisch keins braucht
  („lavarsi le mani“, „fare la valigia“, „mettere in ordine la camera“ für „sein Zimmer aufräumen“).
- Platzhalter ausgeschrieben („invitare qualcuno a cena“, „restituire qualcosa“, „avere voglia di qualcosa“).
- Sie-Formeln im Laden/Restaurant mit „Lei“ („posso aiutarla“, „ecco a lei“, „tenga il resto“, „cosa prende da bere“).
- Beispiele neu formuliert, wo nötig: Uhrzeiten italienisch („alle sette e mezza“), „da tre anni“ mit Präsens,
  Frühstück mit „fette biscottate“ (Zwieback), Schuhe mit „numero“ statt „taglia“, Euro, italienische Orte
  (Firenze, Sicilia, via della Stazione). Die deutschen Beispielsätze sind dann entsprechend angepasst und enthalten
  die deutsche Wendung.

### Unsicherheiten und offene Fragen

1. Uhrzeiten und Zahlen (it-wa-0089–0091 „le tre e un quarto“, „le quattro meno un quarto“, „le tre e mezza“;
   it-wa-0107 „ventiquattro ore su ventiquattro“): Die Spracherkennung liefert hier vermutlich Ziffern („3:15“,
   „24 ore su 24“). Ob die App Ziffern und ausgeschriebene Zahlen gleich behandelt, ist eine Frage an die App.
2. it-wa-0113 „Hunger bekommen – venire fame“: Italienisch sagt man fast nur „mi viene fame“; der Infinitiv ohne
   Person ist ungewohnt, aber es gibt keinen besseren Infinitiv.
3. it-wa-0108 „über Nacht – durante la notte“ (Weitere: „per una notte“): Im Rezept-Sinn üblich; die bildliche Bedeutung
   („über Nacht berühmt“ = „da un giorno all'altro“) ist nicht abgedeckt, passt aber auch nicht zum Beispiel des Originals.
4. it-wa-0008 „ein Bad nehmen – fare il bagno“: heißt auch „baden/schwimmen gehen (im Meer)“. Die Bedeutung ist im
   Thema Tagesablauf klar.
5. it-wa-0193 „einem Verein beitreten – iscriversi a un circolo“ (Weitere: „iscriversi a un club“, „iscriversi a
   un'associazione“) und it-wa-0234 „Mitglied sein in – essere socio di“: Für „Verein“ gibt es kein einzelnes
   gleichwertiges Wort; „circolo“ passt für Sportvereine (Tennis), „società sportiva“ für Fußball.
6. it-wa-0254 „Sehenswürdigkeiten besichtigen – visitare i monumenti“: Gängig, aber eng („Monumente“); Weitere
   Antworten „visitare le attrazioni“, „fare un giro turistico“.
7. it-wa-0272 „Verspätung haben – avere ritardo“: Üblich ist meist mit Angabe („ha due ore di ritardo“); ohne Angabe
   sagt man eher „essere in ritardo“ (als Weitere Antwort, siehe Dubletten innerhalb der Datei).
8. it-wa-0163 „Sonst noch etwas? – serve altro“ mit Weiteren Antworten „altro“, „desidera altro“, „qualcos'altro“:
   Die Kurzform „altro“ ist sehr kurz; bitte prüfen, ob die App einzelne Wörter so als richtig gelten lassen soll.
9. it-wa-0142 „Was möchten Sie trinken? – cosa prende da bere“ und it-wa-0155 „Was darf es sein? – cosa desidera“:
   Beide Formeln sind im Italienischen nah beieinander („desidera“ geht in beiden); verschiedene Hauptantworten
   gewählt, damit die Einträge unterscheidbar bleiben.
10. it-wa-0204 „eine Radtour machen – fare un giro in bicicletta“ und it-wa-0276 „das Fahrrad abschließen – legare
    la bicicletta“: Hauptantwort mit „bicicletta“, die Kurzform „bici“ steht unter Weitere Antworten.

### Kontrolle

- Nach jedem Block (≤ 50 Zeilen) `node scripts/pruefe.mjs woerter/it-wendungen-alltag.txt`: 0 Fehler; Hinweise nur
  „steht noch nicht in katalog.json (310 Wörter)“ und die Dublette it-ws-0092 (oben).
- Hilfsskript (Scratchpad): genau acht Felder, Deutsch/Niveau/Themen identisch mit dem Original, keine Antwort mit
  Komma, Schrägstrich, Klammer oder Satzzeichen am Ende, alle italienischen Beispiele 6–12 Wörter; außerdem Abgleich
  aller Antworten gegen die übrigen it-Dateien (Ergebnis oben).
- Stichprobe von über 30 Zeilen auf Übersetzung, Niveau und Beispiele; daraufhin geändert: it-wa-0090 („le tre e tre
  quarti“ als Weitere Antwort entfernt, selten), it-wa-0155 (Beispiel natürlicher), it-wa-0204 und it-wa-0276
  („bicicletta“ als Hauptantwort), mehrere zu kurze Beispielsätze verlängert.

---

## T-it: Wendungen für Schule, Arbeit, Gespräch (Fassung von R2)

Neue Datei `woerter/it-wendungen-schule-arbeit.txt`, 274 Zeilen (it-ws-0001 bis it-ws-0274, lückenlos, gleiche Nummern
und Reihenfolge wie `woerter/wendungen-schule-arbeit.txt` aus R2). Keine Zeile ausgelassen. Deutsch und Themen
unverändert übernommen, Niveau bis auf eine Zeile ebenfalls (A2: 92, B1: 145, B2: 37; Original A2 92, B1 144, B2 38).
`node scripts/pruefe.mjs woerter/it-wendungen-schule-arbeit.txt`: 0 Fehler, 2 Hinweise (Datei noch nicht in
`katalog.json`; eine Dublette, siehe unten).

### Neue Quelle

```json
{ "id": "it-wendungen-schule-arbeit", "file": "woerter/it-wendungen-schule-arbeit.txt", "lang": "it", "version": 1, "count": 274 }
```

### Vorschläge für Listen

Analog zu R2 (Listen-ids mit Sprachkürzel, `answerLang: "it"`, Name „Italienisch: …“):

```json
[
  { "id": "it-wendungen-schule", "name": "Italienisch: Wendungen: Schule & Studium", "description": "Feste Wendungen für Unterricht, Hausaufgaben und Prüfungen", "level": "A2", "answerLang": "it", "filter": { "topics": ["Wendungen/Schule"] } },
  { "id": "it-wendungen-arbeit", "name": "Italienisch: Wendungen: Arbeit & Beruf", "description": "Bewerbung, Arbeitsalltag, Besprechungen, Telefon und E-Mail", "level": "B1", "answerLang": "it", "filter": { "topics": ["Wendungen/Arbeit"] } },
  { "id": "it-wendungen-gespraech", "name": "Italienisch: Wendungen: Gespräch & Meinung", "description": "Höflich nachfragen, Meinung sagen, zustimmen und widersprechen", "level": "B1", "answerLang": "it", "filter": { "topics": ["Wendungen/Gespräch"] } },
  { "id": "it-wendungen-telefon-email", "name": "Italienisch: Wendungen: Telefon & E-Mail", "description": "Telefonieren und Geschäftsbriefe", "level": "B1", "answerLang": "it", "filter": { "topics": ["Wendungen/Arbeit/Telefon und E-Mail"] } },
  { "id": "it-wendungen-gespraech-a2", "name": "Italienisch: Wendungen im Gespräch – A2", "description": "Die wichtigsten Sätze zum Nachfragen und Antworten", "level": "A2", "answerLang": "it", "filter": { "topics": ["Wendungen/Gespräch"], "levels": ["A2"] } }
]
```

Anzahlen wie R2: Schule 60, Arbeit 105, Gespräch 109, Telefon & E-Mail 28, Gespräch A2 35. (Die Listennamen
„Italienisch: Wendungen: …“ haben zwei Doppelpunkte; ggf. beim Zusammenführen an die Namen der englischen Listen
anpassen.)

### Alias-Kandidaten (Dubletten)

- it-ws-0092 „eine Pause machen – fare una pausa“ = it-wa-0020 (T-it, R1-Fassung). Im Original dieselbe Überschneidung
  (ws-0092 und wa-0020 „eine Pause machen – to take a break“). Nach Regel Haupt-ID die ältere Quelle; R1 und R2 kommen gleichzeitig, also beim
  Zusammenführen festlegen.
- `it-wendungen-alltag.txt` wurde parallel geschrieben; beim Zusammenführen `node scripts/pruefe.mjs --dubletten`
  noch einmal laufen lassen (R2-Notizen nennen weitere mögliche Überschneidungen mit R1: zur Schule gehen, Geld
  verdienen, einen Termin vereinbaren, Freut mich…, Keine Ursache, Das macht nichts, Kein Problem, Im Ernst?,
  Keine Ahnung, Ich glaube schon/nicht, Es kommt darauf an). Zum Zeitpunkt meiner letzten Prüfung war nur die
  Pause-Zeile gleich.

### Vorgehen

- Vom Deutschen übersetzt, nicht vom Englischen; Weitere Antworten eigene italienische Varianten.
- Antwortfelder ohne Komma, Schrägstrich und Klammer; satzartige Antworten klein am Anfang und **ohne** Satzzeichen
  am Ende (laut Hinweisen für T-Pakete „kein ? oder ! nötig“), also „che lavoro fa“, „chi parla“, „sul serio“.
  Achtung: Das weicht vom R2-Original („what do you do for a living?“) und von it-gw-0012 („come stai?“) ab. Falls
  T-fr/T-es das Fragezeichen behalten, bitte vereinheitlichen.
- Platzhalter „qualcuno“/„qualcosa“, Verben im Infinitiv, reflexive mit Pronomen („impegnarsi“, „licenziarsi“,
  „mettersi in proprio“).
- Beispielsätze neu, mit italienischen Namen und Orten, deutsche Übersetzung angepasst (Florenz statt York,
  Bologna statt Leeds, Mailand statt Manchester, Herr Rossi/Frau Bianchi/Herr Ferrari/Frau Neri statt englischer
  Namen, „Handys in der Schule“ statt Schuluniformen in ws-0273, „Marco Rossi“ als Briefunterschrift in ws-0154).
  Das deutsche Beispiel enthält jeweils die deutsche Wendung.
- In Blöcken zu 50 Zeilen geschrieben, nach jedem Block `pruefe.mjs`; zusätzlich Skriptabgleich mit dem Original
  (id, Deutsch, Niveau, Themen gleich; keine Kommas/Schrägstriche/Klammern/Schlusszeichen in Antworten; Länge der
  Beispiele).
- Stichprobe von 30 Zeilen (u. a. 0001, 0021, 0024, 0025, 0038, 0041, 0044, 0050, 0057, 0065, 0068, 0091, 0102,
  0113, 0115, 0123, 0146, 0153, 0171, 0182, 0189, 0190, 0205, 0207, 0221, 0238, 0239, 0252, 0258, 0260) auf
  Übersetzung, Niveau und Beispiele geprüft; korrigiert: ws-0113 (natürlicherer Beispielsatz), ws-0221 („trovo“ als
  Weitere Antwort ergänzt).

### Geändertes Niveau

- it-ws-0169 „sich duzen – darsi del tu“: B2 → B1. Im Englischen ist „to be on first-name terms“ eine B2-Wendung, im
  Italienischen ist „darsi del tu“ Grundwortschatz der Höflichkeitsformen und kommt in Kursen früh vor (eher A2/B1).
  B1 gewählt, gleich wie it-ws-0168 „Darf ich Sie duzen? – posso darle del tu“.

### Unsicherheiten

- **Schulsystem:** ws-0025 „nachsitzen müssen“ → „restare a scuola per punizione“ (Nachsitzen gibt es an
  italienischen Schulen praktisch nicht; die übliche Strafe ist „prendere una nota“, das ist aber etwas anderes).
  ws-0054 „das Abitur machen“ → „fare la maturità“, ws-0042 „eine Klassenarbeit schreiben“ → „fare un compito in
  classe“ (Weitere: „fare una verifica“), ws-0026 „Nachhilfe nehmen“ → „prendere ripetizioni“, ws-0021 „ein Referat
  halten“ → „fare una relazione“ (Weitere: „fare un'esposizione“, „fare una presentazione“).
- **ws-0189 „Wie sagt man das auf Englisch?“ → „come si dice in inglese“**: wörtlich korrekt, aber in einer
  Italienisch-Liste etwas seltsam. Deutsch muss gleich bleiben; falls gewünscht, beim Zusammenführen das Feld Deutsch
  sprachneutral machen oder die Zeile so lassen.
- ws-0020 „fließend Englisch sprechen“ → „parlare inglese correntemente“ (ebenso wörtlich zum deutschen Feld).
- ws-0050 „mit Auszeichnung bestehen“ → „superare con lode“: „con lode“ gibt es v. a. bei Laurea und Maturità (100 e
  lode); passt als Entsprechung, ist aber enger.
- ws-0153 „Sehr geehrte Damen und Herren“ → „gentili signori“ (Weitere: „gentili signore e signori“, „egregi
  signori“, „spettabile ditta“). Im Italienischen gibt es keine einzige feste Formel; „Spettabile Ditta“ nur an
  Firmen.
- ws-0154 „Mit freundlichen Grüßen“ → „cordiali saluti“ (Weitere „distinti saluti“, förmlicher).
- ws-0113 „in Verzug sein“ → „essere in ritardo sui tempi“, Weitere „essere in ritardo“ (allein sehr allgemein,
  deshalb nur als Weitere Antwort).
- ws-0115 „den Überblick behalten“ → „tenere tutto sotto controllo“: keine genaue Entsprechung, Umschreibung.
- ws-0144 „Kann ich etwas ausrichten?“ → „posso riferire qualcosa“ (Weitere „vuole lasciare un messaggio“, das ist
  die übliche Telefonformel, aber nah an ws-0143).
- ws-0182 „Wie bitte?“ → „come scusi“ (ohne Komma, weil der Parser an Kommas trennt; gesprochen „come, scusi?“);
  Weitere „come“, „scusa“, „prego“.
- ws-0258 „Da muss ich widersprechen“ → „mi permetto di dissentire“ (höflich-förmlich); Weitere „non sono d'accordo“
  überschneidet sich mit ws-0229 „anderer Meinung sein – non essere d'accordo“ (nur als Weitere Antwort, keine
  Wortpaar-Dublette).
- Gleiche bzw. sehr ähnliche Antworten bei verschiedenem Deutsch (gewollt, wie im Original): ws-0021/ws-0130 („fare
  una relazione“ / „fare una presentazione“, letzteres auch Weitere Antwort von 0021); ws-0229/0230/0250/0252/0256/0257
  (Varianten mit „d'accordo“); ws-0024 „copiare da qualcuno“ / ws-0046 „copiare durante un esame“; ws-0232 „a mio
  avviso“ ähnlich it-gw-0729 „meiner Meinung nach – secondo me“.

### Offene Fragen

1. Satzzeichen am Ende satzartiger Antworten: weggelassen wie in den T-Hinweisen verlangt; it-grundwortschatz behält
   „?“ (it-gw-0012 „come stai?“). Einheitlich regeln?
2. ws-0189 (auf Englisch) – so lassen?
3. Niveauänderung ws-0169 (B2 → B1) bestätigen.

---

## T-it: Redewendungen (Fassung von R3)

Neue Datei `woerter/it-redewendungen.txt`, **345 Zeilen** (it-ri-0001 bis it-ri-0345, lückenlos, gleiche Nummern und
Reihenfolge wie `woerter/redewendungen.txt` aus R3). Keine Zeile ausgelassen. Deutsch, Niveau und Themen unverändert
übernommen (Niveaus wie im Original: B1 11, B2 160, C1 168, C2 6; Themen und Zeilenzahlen wie in `pakete/R3.md`).
Kein Niveau geändert.

Antwort jeweils die entsprechende italienische Redewendung (incrociare le dita, fare buon viso a cattivo gioco,
prendere due piccioni con una fava, ogni morte di papa …), sonst eine kurze natürliche Umschreibung. Platzhalter
„qualcuno“/„qualcosa“, Verben im Infinitiv, reflexive mit Pronomen, Substantive mit Artikel (il circolo vizioso, la
punta dell'iceberg, il trucco). Kein Komma, Schrägstrich oder Klammer in einer Antwort oder einer einzelnen weiteren
Antwort. Beispiele neu auf Italienisch geschrieben (6–12 Wörter), deutsche Übersetzung mit der Wendung aus dem Feld
Deutsch; wo der deutsche Originalsatz nicht zum italienischen passte, leicht angepasst (z. B. it-ri-0010, 0030,
0046, 0069, 0089, 0136, 0151, 0168, 0177, 0217, 0248, 0271, 0332). 86 Zeilen ohne weitere Antworten.

### Neue Quelle

```json
{ "id": "it-redewendungen", "file": "woerter/it-redewendungen.txt", "lang": "it", "version": 1, "count": 345 }
```

### Vorschläge für Listen

Analog zu R3 (Listen-ids mit Sprachkürzel, `answerLang: "it"`, Name „Italienisch: …“):

```json
[
  { "id": "it-redewendungen-b2", "name": "Italienisch: Redewendungen – B1/B2", "description": "Bildhafte Wendungen, die man oft hört: Daumen drücken, die Nase voll haben", "level": "B2", "answerLang": "it", "filter": { "topics": ["Redewendungen"], "levels": ["B1", "B2"] } },
  { "id": "it-redewendungen-c1", "name": "Italienisch: Redewendungen – C1/C2", "description": "Bildhafte Wendungen für Fortgeschrittene", "level": "C1", "answerLang": "it", "filter": { "topics": ["Redewendungen"], "levels": ["C1", "C2"] } },
  { "id": "it-redewendungen-gefuehle-beziehungen", "name": "Italienisch: Redewendungen: Gefühle & Beziehungen", "description": "B1–C2, mit Beispielsätzen", "answerLang": "it", "filter": { "topics": ["Redewendungen/Gefühle", "Redewendungen/Beziehungen"] } },
  { "id": "it-redewendungen-reden-denken", "name": "Italienisch: Redewendungen: Reden, Denken & Ehrlichkeit", "description": "B1–C2, mit Beispielsätzen", "answerLang": "it", "filter": { "topics": ["Redewendungen/Reden & Schweigen", "Redewendungen/Denken & Verstehen", "Redewendungen/Ehrlichkeit & Täuschung"] } },
  { "id": "it-redewendungen-charakter", "name": "Italienisch: Redewendungen: Charakter & Verhalten", "description": "B1–C2, mit Beispielsätzen", "answerLang": "it", "filter": { "topics": ["Redewendungen/Charakter & Verhalten"] } },
  { "id": "it-redewendungen-arbeit-erfolg", "name": "Italienisch: Redewendungen: Arbeit, Erfolg & Probleme", "description": "B1–C2, mit Beispielsätzen", "answerLang": "it", "filter": { "topics": ["Redewendungen/Arbeit & Anstrengung", "Redewendungen/Erfolg & Misserfolg", "Redewendungen/Probleme & Schwierigkeiten"] } },
  { "id": "it-redewendungen-entscheidungen-glueck-geld", "name": "Italienisch: Redewendungen: Entscheidungen, Glück, Geld & Zeit", "description": "B1–C2, mit Beispielsätzen", "answerLang": "it", "filter": { "topics": ["Redewendungen/Entscheidungen & Risiko", "Redewendungen/Glück & Pech", "Redewendungen/Geld", "Redewendungen/Zeit & Tempo"] } }
]
```

Die ids setzen voraus, dass die englischen Listen so heißen wie in `pakete/R3.md` vorgeschlagen; falls sie beim
Zusammenführen anders benannt wurden, Sprachkürzel vor die tatsächliche id setzen.

### Prüfung

- `node scripts/pruefe.mjs woerter/it-redewendungen.txt` nach jedem Block von 50 Zeilen: 0 Fehler, einziger Hinweis
  „steht noch nicht in katalog.json“.
- Eigenes Hilfsskript (Scratchpad): je Zeile 8 Felder, id = „it-“ + id des Originals in gleicher Reihenfolge, Deutsch,
  Niveau und Themen gleich dem Original, Antwort ohne Komma/Schrägstrich/Klammer und ohne Satzzeichen am Ende,
  weitere Antworten ohne Schrägstrich/Klammer und nicht gleich der Antwort, keine doppelte Antwort in der Datei,
  Beispiellänge. Ergebnis: keine Beanstandung.
- Abgleich mit den anderen it-Dateien im Worktree (auch it-wendungen-alltag, it-wendungen-schule-arbeit,
  it-sprichwoerter): keine gleiche deutsche Grundform; R1, R2 und R4 haben keine deutsche Grundform aus R3.

### Alias-Kandidaten

Keine: `pruefe.mjs` meldet kein Wortpaar, das schon im Katalog steht.

Gleiche italienische Antwort, anderes deutsches Wort (kein Alias, nur zur Info):
it-ri-0062 auf taube Ohren stoßen / it-gw-1186 ins Leere laufen (cadere nel vuoto); it-ri-0115 auf Augenhöhe /
it-sf-0147 ebenbürtig (alla pari); it-ri-0120 jemandem unter die Arme greifen / it-ke-0760 (dare una mano a
qualcuno); it-ri-0183 über die Stränge schlagen / it-gw-0779 übertreiben (esagerare); it-ri-0233 Hand und Fuß haben
/ it-gw-0080, it-ke-0869 stehen (stare in piedi); it-ri-0318 sich die Finger verbrennen / it-wa-0260 sich einen
Sonnenbrand holen (scottarsi); it-ri-0326 kalte Füße bekommen / it-vh-0125 einen Rückzieher machen (tirarsi indietro).

### Unsicherheiten und offene Fragen

1. **Umschreibung statt Redewendung** (keine gleichwertige italienische Wendung bekannt): 0019 nah am Wasser gebaut
   (avere la lacrima facile – das ist allerdings idiomatisch), 0032 Decke fällt auf den Kopf (sentirsi in gabbia),
   0035 lachendes und weinendes Auge (con sentimenti contrastanti), 0056 sich um Kopf und Kragen reden (mettersi nei
   guai con le proprie parole), 0060 durch die Blume (dire qualcosa velatamente), 0121 in die Bresche springen
   (subentrare all'ultimo momento), 0151 Pferde stehlen (essere sempre della partita), 0177 zwei linke Hände (essere
   negato per i lavori manuali), 0190 Extrawurst (avere un trattamento di favore), 0201 auf dem Schlauch stehen
   (non arrivarci), 0202 Wald vor lauter Bäumen (perdersi nei dettagli), 0216 Buch mit sieben Siegeln (essere un
   mistero), 0275 mit Pauken und Trompeten durchfallen (essere bocciato clamorosamente), 0326 kalte Füße bekommen
   (tirarsi indietro), 0327 Schwein haben (avere fortuna). Wer eine andere natürliche Formulierung sagt, wird
   abgelehnt – ggf. weitere Antworten ergänzen.
2. **Bedeutung nicht ganz deckungsgleich**, aber die nächstliegende übliche Wendung:
   - 0042 die Katze aus dem Sack lassen – vuotare il sacco (ital. eher „alles gestehen“; weitere: svelare il segreto)
   - 0097 lange Finger machen – avere le mani lunghe (kann auch „handgreiflich werden“ heißen)
   - 0124 jemanden auf Händen tragen – portare qualcuno in palmo di mano (ital. eher „hochschätzen“)
   - 0136 jemanden um den Finger wickeln – rigirarsi qualcuno come si vuole (umgangssprachlich; weitere: avere
     qualcuno in pugno)
   - 0204 etwas auf dem Schirm haben – avere presente qualcosa („hai presente …?“ heißt auch „weißt du, was ich meine?“)
   - 0231 jemandem einen Floh ins Ohr setzen – Hauptantwort mettere un'idea in testa a qualcuno, weil „mettere una
     pulce nell'orecchio“ im Italienischen eher „einen Verdacht wecken“ heißt (steht als weitere Antwort)
   - 0269 Oberwasser haben – avere la meglio; 0274 das Rennen machen – spuntarla
   - 0332 auf gut Glück – a caso (eher „zufällig“; weitere: alla cieca, tentando la sorte)
   - 0021 sich etwas zu Herzen nehmen – prendersela per qualcosa (Bedeutung „gekränkt sein“ wie im Beispiel); die
     Bedeutung „beherzigen“ deckt die weitere Antwort prendere qualcosa a cuore nur teilweise ab.
3. **Feste Satzform** wie im Original: 0200 jemandem geht ein Licht auf – „si accende la lampadina“ (weitere:
   accendersi una lampadina); 0102 die Luft ist rein – „la via è libera“; 0320 die Würfel sind gefallen – „il dado
   è tratto“; 0330 Hals- und Beinbruch – „in bocca al lupo“.
4. **Umgangssprachlich** (nicht derb, aber salopp): prendere qualcuno per i fondelli (0077), fregare qualcuno
   (0089, nur weitere Antwort), mollare qualcuno (0107), pappa e ciccia (0109), la fregatura (0294, nur weitere),
   non capirci un tubo (0208, nur weitere), stare in panciolle (0237).
5. **Lange Antworten**, die bei der Spracherkennung leicht abweichen könnten: 0108 stare accanto a qualcuno nel bene
   e nel male, 0180 comportarsi come un elefante in una cristalleria, 0287 servire qualcosa su un piatto d'argento a
   qualcuno, 0307 essere la goccia che fa traboccare il vaso (weitere: far traboccare il vaso). Ebenso die
   Stellung von „qualcuno“ (prendere in giro qualcuno / prendere qualcuno in giro, beides angegeben bei 0076).
6. Gleiche weitere Antwort in mehreren Zeilen, gewollt wie im Original: essere al settimo cielo (Antwort 0010,
   weitere 0011), prendere in giro qualcuno (Antwort 0076, weitere 0189).
7. Niveau: unverändert übernommen. Einige italienische Wendungen sind für Lernende eher schwerer als das deutsche
   Niveau vermuten lässt (z. B. menare il can per l'aia 0041 B2, sbarcare il lunario 0335 B2, per il rotto della
   cuffia 0258 B2); nicht geändert, weil der Unterschied nicht eindeutig ist und die Niveaus zu den englischen
   Listen passen sollen. Bei Bedarf hier anheben.

---

## T-it: Sprichwörter (Fassung von R4)

Neue Datei `woerter/it-sprichwoerter.txt`, 129 Zeilen (it-sp-0001 bis it-sp-0129, lückenlos, gleiche Nummern und
Reihenfolge wie `woerter/sprichwoerter.txt` aus R4). Keine Zeile ausgelassen. Deutsch, Niveau und Themen unverändert
übernommen (Niveaus wie im Original: B1 6, B2 67, C1 53, C2 3; Themen: Arbeit & Lernen 20, Zeit & Geduld 15,
Geld & Besitz 11, Menschen & Beziehungen 24, Vorsicht & Klugheit 20, Reden & Handeln 13, Glück & Schicksal 8,
Lebensweisheiten 12, Gesundheit & Essen 6).

### Neue Quelle

```json
{ "id": "it-sprichwoerter", "file": "woerter/it-sprichwoerter.txt", "lang": "it", "version": 1, "count": 129 }
```

### Vorschläge für Listen

Analog zu R4 (Listen-ids mit Sprachkürzel, `answerLang: "it"`, Name „Italienisch: …“):

```json
[
  { "id": "it-sprichwoerter", "name": "Italienisch: Sprichwörter", "description": "Deutsche Sprichwörter und ihre italienische Entsprechung", "level": "C1", "answerLang": "it", "filter": { "topics": ["Sprichwörter"] } },
  { "id": "it-sprichwoerter-b2", "name": "Italienisch: Sprichwörter – B1/B2", "description": "Bekannte Sprichwörter: Übung macht den Meister, Zeit ist Geld …", "level": "B2", "answerLang": "it", "filter": { "topics": ["Sprichwörter"], "levels": ["B1", "B2"] } },
  { "id": "it-sprichwoerter-c1", "name": "Italienisch: Sprichwörter – C1/C2", "description": "Anspruchsvollere Sprichwörter für Fortgeschrittene", "level": "C1", "answerLang": "it", "filter": { "topics": ["Sprichwörter"], "levels": ["C1", "C2"] } }
]
```

Anzahlen: alle 129, B1/B2 73, C1/C2 56 (wie R4).

### Vorgehen und Prüfung

- Antwort ist jeweils das gebräuchliche italienische Sprichwort, übersetzt vom Deutschen, nicht vom Englischen
  (z. B. „Il mattino ha l'oro in bocca“, „Le bugie hanno le gambe corte“, „Chi è causa del suo mal pianga se stesso“,
  „Non dire gatto se non ce l'hai nel sacco“). Großschreibung am Anfang wie im Original.
- Kein Komma, Schrägstrich oder Klammer in Antworten (Parser trennt an „,“ und „/“): „Lontano dagli occhi lontano
  dal cuore“, „Prima il dovere poi il piacere“, „Mal comune mezzo gaudio“, „Tale padre tale figlio“ usw. ohne Komma;
  in den Beispielsätzen mit Komma.
- Beispielsätze: neue italienische Sätze nach dem Muster des Originals; deutsche Sätze meist aus dem Original, an
  einigen Stellen angepasst, damit beide Sätze zueinander passen (it-sp-0008, 0043, 0056, 0057, 0062, 0074, 0082,
  0083, 0086, 0090, 0115).
- Bei langen Sprichwörtern sind die Beispielsätze länger als 12 Wörter (bis 18: it-sp-0012, 0061, 0076, 0082, 0087),
  weil das Sprichwort selbst schon 8–12 Wörter hat (wie im Original).
- `node scripts/pruefe.mjs woerter/it-sprichwoerter.txt` nach jedem Block (45, 45, 39 Zeilen): 0 Fehler, einziger
  Hinweis „steht noch nicht in katalog.json“. Keine Dubletten mit bestehenden it-Dateien, also keine Alias-Kandidaten.
- Zusätzlich mit Hilfsskript (Scratchpad, nicht im Repo) geprüft: 8 Felder je Zeile, Deutsch/Niveau/Thema gleich wie
  im Original, Antwort steht im italienischen Beispiel, Feld Deutsch im deutschen Beispiel, keine Antwort doppelt in
  der Datei, UTF-8 ohne BOM, LF.
- Kritische Durchsicht aller Zeilen (statt nur 30) auf Übersetzung, Niveau und Natürlichkeit der Beispiele; dabei
  it-sp-0088 umformuliert (Konjunktiv „giustifichi“ hätte die Antwort im Beispiel verändert), 0012 und 0082 gekürzt,
  0019 Haupt- und Nebenform getauscht („Quando si è in ballo bisogna ballare“ ist geläufiger).

### Unsicherheiten

- Keine feste italienische Entsprechung, daher kurze natürliche Umschreibung bzw. nächstliegende Wendung:
  - it-sp-0006 Aller Anfang ist schwer → Ogni inizio è difficile
  - it-sp-0009 Viele Hände, schnelles Ende → In tanti si fa prima (Umschreibung)
  - it-sp-0012 Was Hänschen nicht lernt … → Quello che non si impara da giovani non si impara più (Umschreibung)
  - it-sp-0024 Gut Ding will Weile haben → Le cose belle richiedono tempo
  - it-sp-0025 Was lange währt, wird endlich gut → Tutto arriva a chi sa aspettare
  - it-sp-0043 Was nichts kostet, ist nichts wert → Quello che non costa niente non vale niente
  - it-sp-0068 Undank ist der Welt Lohn → Nessuna buona azione resta impunita (Lehnwendung aus dem Englischen,
    im Italienischen gebräuchlich, aber eher ironisch)
  - it-sp-0094 Der Ton macht die Musik → Non conta cosa dici ma come lo dici
  - it-sp-0100 In der Kürze liegt die Würze → Poche parole ma buone
  - it-sp-0107 Auch ein blindes Huhn findet mal ein Korn → Anche un orologio fermo segna l'ora giusta due volte al
    giorno (lang, per Spracherkennung schwer exakt zu treffen)
  - it-sp-0120 Alter schützt vor Torheit nicht → L'età non protegge dalle sciocchezze (Umschreibung)
- Italienisches Sprichwort mit leicht anderer Nuance:
  - it-sp-0007 Wer rastet, der rostet → Chi si ferma è perduto (eher „wer zögert, verliert“)
  - it-sp-0030 Alles hat ein Ende, nur die Wurst hat zwei → Ogni bel gioco dura poco
  - it-sp-0031 Es ist noch nicht aller Tage Abend → Non è detta l'ultima parola
  - it-sp-0041 Wer den Pfennig nicht ehrt … → Il risparmio è il primo guadagno
  - it-sp-0042 Kleinvieh macht auch Mist → Tutto fa brodo
  - it-sp-0057 Andere Mütter haben auch schöne Töchter → Morto un papa se ne fa un altro
  - it-sp-0062 Wie man in den Wald hineinruft … → Chi la fa l'aspetti
  - it-sp-0064 Kleider machen Leute → L'abito fa il monaco (Umkehrung von „L'abito non fa il monaco“; Beispiel mit
    „a volte“, wie man es im Italienischen sagt)
  - it-sp-0074 Stille Wasser sind tief → Acqua cheta rompe i ponti (betont eher die verborgene Gefahr; Beispiel
    deshalb mit „attenzione“/„Vorsicht“)
  - it-sp-0101 Wie man sich bettet, so liegt man → Chi è causa del suo mal pianga se stesso
  - it-sp-0110 In der Not frisst der Teufel Fliegen → In mancanza di cavalli trottano gli asini
  - it-sp-0116 Es wird nichts so heiß gegessen … → Il diavolo non è brutto come lo si dipinge
- Form nicht ganz sicher, bitte von Muttersprachler prüfen lassen:
  - it-sp-0045 Wie gewonnen, so zerronnen → Come viene così va (Weitere: Facile viene facile va)
  - it-sp-0046 Das letzte Hemd hat keine Taschen → Il sudario non ha tasche (Weitere: L'ultimo vestito non ha tasche)
  - it-sp-0055 Liebe geht durch den Magen → Gli uomini si prendono per la gola (Weitere: L'amore passa dalla gola)
  - it-sp-0056 Jeder Topf findet seinen Deckel → Ogni pentola ha il suo coperchio
  - it-sp-0073 Gebranntes Kind scheut das Feuer → Can scottato dall'acqua calda ha paura della fredda (mehrere
    Varianten üblich: cane/gatto, teme/ha paura di)
  - it-sp-0008 Troppi cuochi guastano la cucina (Weitere: Troppi cuochi rovinano la minestra, Troppi galli a cantar
    non fa mai giorno)
- Weitere Antworten, die nicht wortgleich, aber im Gebrauch gleichwertig sind (bei strenger Auslegung streichen):
  0028 „Il tempo è il miglior medico“, 0031 „Non è finita finché non è finita“, 0047 „Dio li fa e poi li accoppia“,
  0056 „C'è qualcuno per tutti“, 0057 „Il mare è pieno di pesci“, 0064 „L'apparenza conta“, 0066 „Non è bello ciò che
  è bello ma è bello ciò che piace“, 0087 „Non si può avere tutto“, 0099 „Ne uccide più la penna che la spada“,
  0104 „Piove sul bagnato“, 0125 „Il riso fa buon sangue“, 0026 „Presto e bene raro avviene“.
- Niveau: unverändert übernommen. Einige italienische Entsprechungen sind im Italienischen deutlich geläufiger als
  das englische Pendant und könnten eine Stufe tiefer stehen, z. B. 0015 Provare per credere (C1), 0026 Chi va piano
  va sano e va lontano (C1), 0075 Can che abbaia non morde (C1), 0108 La speranza è l'ultima a morire (C1),
  0118 Errare è umano. Nicht geändert, weil das Niveau sich auf die deutsche Liste bezieht und zwischen den Fassungen
  gleich bleiben soll.
- it-sp-0129 Antwort ist das lateinische „In vino veritas“, weil Italiener es so sagen; Weitere „Nel vino c'è la
  verità“.
- Zwei Antworten liegen inhaltlich nah: 0043/0044 (Quello che non costa niente non vale niente / Chi più spende meno
  spende), 0089/0090 (Chi semina vento raccoglie tempesta / Si raccoglie ciò che si semina), 0097/0098.

### Offene Fragen

- Gegenlesen durch Muttersprachler bei den oben als „Form nicht ganz sicher“ markierten Zeilen.
- Sollen die Niveaus der Fassungen sprachabhängig sein dürfen (siehe oben), oder bleiben sie wie im Original?
