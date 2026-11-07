# Paket X-es: Spanische Fassungen der Ausbau-Dateien (W1–W5)

Fünf neue Wortdateien, je eine Fassung der Originale aus W1–W5 (Branches wortschatz/W1 … wortschatz/W5, noch nicht auf
main). IDs `es-<id des Originals>`, gleiche Nummern und Reihenfolge, keine Zeile ausgelassen. Deutsch (mit
Klammerhinweis), Niveau und Themen wie im Original – per Skript gegen die W-Dateien geprüft.

| Datei | Original | Zeilen |
|---|---|---|
| woerter/es-ausbau-alltag.txt | woerter/ausbau-alltag.txt (W1) | 443 |
| woerter/es-ausbau-schule-arbeit.txt | woerter/ausbau-schule-arbeit.txt (W2) | 440 |
| woerter/es-ausbau-natur-welt.txt | woerter/ausbau-natur-welt.txt (W3) | 461 |
| woerter/es-ausbau-gesellschaft.txt | woerter/ausbau-gesellschaft.txt (W4) | 442 |
| woerter/es-ausbau-grundwoerter.txt | woerter/ausbau-grundwoerter.txt (W5) | 487 |

Neue Quellen (lang es, version 1): `es-ausbau-alltag` (443), `es-ausbau-schule-arbeit` (440), `es-ausbau-natur-welt` (461), `es-ausbau-gesellschaft` (442), `es-ausbau-grundwoerter` (487) – zusammen 2273 Wörter.

## Nachträglich von der Hauptsession angeglichen

- **Maler:** W2 und W4 haben inzwischen „Maler (Handwerker)“ (xb-0191) bzw. „Maler (Künstler)“ (xd-0264); die Fassung
  übernimmt das. Die Teilnotizen nennen Maler teils noch als Alias-Kandidaten – das entfällt.
- **Niveau** überall wie im Original; Vorschläge für andere Niveaus stehen nur als Hinweis in den Teilnotizen.
- **Computerspiel** (xb-0320 / xd-0432): beide „el videojuego“, Weitere „el juego de ordenador“ – damit gleiches Paar
  wie im Englischen (Alias). Videospiel (xd-0431) hat dieselbe Antwort; im Spanischen ist das der übliche Begriff.

## Beim Zusammenführen

- W1–W5 zuerst mergen; ändert sich dort eine Zeile, die Fassung nachziehen.
- Alias-Kandidaten: die Wortpaare, die schon in den englischen W-Dateien doppelt stehen (Kantine, Stecker, addieren,
  Ziffer, Metall …), sind hier ebenfalls doppelt und gleich übersetzt → Alias wie im Englischen. Ausnahme: **locker**
  (xa-0169 / xe-0112) ist in dieser Sprache je nach Bedeutung verschieden übersetzt → kein Alias; für eine M-Runde
  „locker (Kleidung)“ / „locker (Schraube, Zahn)“.
- Danach `node scripts/pruefe.mjs --dubletten` über alle es-Dateien.
- Bestehende es-Themenlisten wachsen über ihre Filter (count/version erhöhen); neue Listen wie in W1.md–W5.md mit
  id `es-<id der englischen Liste>` und `answerLang: "es"` (Details in den Teilen).
- Offene Grundsatzfrage für alle Sprachen: „indem“ (xe) hat kein Einzelwort-Gegenstück (fr „en“, es „mediante“,
  it „facendo“) – Zeile in den Fassungen behalten oder ausblenden?

## Paket X-es – Ausbau Alltag (spanische Fassung von W1)

Neue Datei `woerter/es-ausbau-alltag.txt`, 443 Zeilen (es-xa-0001 … es-xa-0443), eine Zeile je Zeile des Originals
`woerter/ausbau-alltag.txt` (W1), gleiche Nummern und gleiche Reihenfolge wie in der Originaldatei (also auch die
nachträglich eingefügten xa-0430 … xa-0443 an ihrer Stelle beim Thema). Deutsch (mit Klammerhinweisen), Niveau und
Themen unverändert übernommen, keine Zeile ausgelassen, kein Niveau geändert. Antworten europäisches Spanisch,
Substantive mit bestimmtem Artikel, Personen maskulin mit femininer Form unter Weitere Antworten, kein Komma,
Schrägstrich oder Klammer in einer Antwort. Beispielsätze eigene spanische Sätze, Orte teils angepasst (Sevilla,
Galicien, Kanaren, Madrid, Spanien statt Hamburg, Polen, Spanien als Reiseziel).

`node scripts/pruefe.mjs woerter/es-ausbau-alltag.txt`: 0 Fehler, 13 Hinweise (1 × „steht noch nicht in katalog.json“,
12 × Dublette mit den parallelen X-es-Dateien, siehe Alias-Kandidaten).

### Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| `es-ausbau-alltag` | `woerter/es-ausbau-alltag.txt` | es | 443 |

Niveaus wie im Original: A1 22, A2 104, B1 154, B2 121, C1 42. Zeilen je Thema wie in pakete/W1.md.

### Vorschläge für Listen

Bestehende spanische Themenlisten nehmen die neuen Wörter über ihre Filter auf; beim Mergen `count` und `version`
erhöhen (gleiche Zahlen wie bei den englischen Listen in W1.md):

| Liste | Filter | neue Wörter |
|---|---|---|
| `es-alltag-zuhause` | topics `Alltag/Zuhause` | +67 |
| `es-essen-trinken` | topics `Alltag/Essen` | +91 |
| `es-kleidung-mode` | topics `Alltag/Kleidung` | +30 |
| `es-einkaufen-geld` | topics `Alltag/Einkaufen` | +20 |
| `es-familie-beziehungen` | topics `Alltag/Familie` | +50 |
| `es-koerper-gesundheit` | topics `Gesundheit` | +144 |
| `es-gefuehle-charakter` | topics `Mensch` | +41 (offene Frage 1 aus W1.md gilt genauso) |

Neue Listen analog zu W1.md, jeweils mit `"answerLang": "es"`:

| id | name | level | filter |
|---|---|---|---|
| `es-aussehen-lebensphasen` | Spanisch: Aussehen & Lebensphasen | A2 | topics `Mensch/Aussehen`, `Mensch/Lebensphasen` (41) |
| `es-koerperpflege` | Spanisch: Körperpflege | A2 | topics `Gesundheit/Körperpflege` (16) |
| `es-haushalt-geraete` | Spanisch: Haushalt & Geräte | A2 | topics `Alltag/Zuhause/Haushalt`, `Alltag/Zuhause/Geräte` (26 neu plus vorhandene) |
| `es-symptome-krankheiten` | Spanisch: Symptome & Krankheiten | B1 | topics `Gesundheit/Symptome`, `Gesundheit/Krankheiten` (49 neu plus vorhandene) |
| `es-obst-gemuese-lebensmittel` | Spanisch: Lebensmittel | A1 | topics `Alltag/Essen/Lebensmittel` (53 neu plus vorhandene) |

Description wie in W1.md.

### Alias-Kandidaten

pruefe.mjs meldet 12 Wortpaare, die schon in den parallel entstehenden spanischen Fassungen der anderen W-Dateien
stehen (dort ist das deutsche Wort im Original ebenfalls doppelt, also Alias wie im Englischen):

| es-xa | Wortpaar | auch in |
|---|---|---|
| es-xa-0006 | Briefkasten – el buzón | es-xb-0438 |
| es-xa-0016 | Kaution – la fianza | es-xd-0192 |
| es-xa-0028 | Stecker – el enchufe | es-xb-0332 |
| es-xa-0032 | Fernbedienung – el mando a distancia | es-xb-0258 |
| es-xa-0048 | unordentlich – desordenado | es-xe-0452 |
| es-xa-0063 | Zimmerpflanze – la planta de interior | es-xc-0092 |
| es-xa-0146 | Kantine – el comedor | es-xb-0224 |
| es-xa-0176 | Loch – el agujero | es-xe-0282 |
| es-xa-0262 | Gastgeber – el anfitrión | es-xd-0175 |
| es-xa-0266 | sich verabschieden – despedirse | es-xe-0042 |
| es-xa-0281 | Friedhof – el cementerio | es-xc-0316 |
| es-xa-0380 | Krankenwagen – la ambulancia | es-xc-0356 |

Kein Alias, aber abweichend: **locker** – es-xa-0169 „holgado“ (Kleidung), es-xe-0112 „flojo“ (Zahn). Im Englischen
dasselbe Paar (loose), im Spanischen zwei Bedeutungen. Vorschlag für eine M-Runde: Klammerhinweise „locker (Kleidung)“
und „locker (Zahn, Schraube)“.

### Gleiche Antwort bei anderem deutschen Wort (kein Alias, für Lernende verwechselbar)

- Karotte / Möhre – la zanahoria (beide Zeilen, wie im Englischen).
- Chips / Pommes – las patatas fritas (im Spanischen wirklich dasselbe Wort; Chips hat Weitere „las patatas de bolsa“).
- Hähnchen – el pollo wie Huhn (es-et-0033); Oma/Opa – la abuela/el abuelo wie Großmutter/Großvater; Enkelkind –
  el nieto wie Enkel; Vorname – el nombre wie Name; Walnuss – la nuez wie Nuss.
- Kleiderschrank – el armario wie Schrank (es-al-0026); Bücherregal – la estantería wie Regal (es-al-0027).
- Stecker – el enchufe wie Steckdose (es-al-0083); Spülmittel – el lavavajillas wie Spülmaschine (es-al-0049; in
  Spanien heißt das Spülmittel tatsächlich so, Weitere „el jabón de fregar“).
- Brieftasche – la cartera wie Geldbeutel (es-eg-0054); Kantine – el comedor wie Mensa (es-sb-0058).
- Gang (beim Essen) – el plato wie Teller; Station (im Krankenhaus) – la planta wie Pflanze; zerrissen und gebrochen –
  roto wie kaputt; ausverkauft – agotado wie erschöpft; Schlaf – el sueño wie Traum; Cousine – la prima wie Prämie.
- Kopftuch (es-xa-0165) und Taschentuch (es-xa-0428) haben beide „el pañuelo“ als Antwort (Weitere „el pañuelo de
  cabeza“ bzw. „el pañuelo de papel“).
- Arztpraxis – la consulta médica, Sprechstunde (Arzt) – el horario de consulta; beide haben „la consulta“ als Weitere.
- Kassenzettel – el ticket (Weitere el tique, el ticket de compra, el recibo) passt zu Kassenbon – el ticket de compra
  (es-eg-0084).

### Umschriebene oder nicht wörtliche Zeilen

- Schaufensterbummel (es-xa-0196): kein gängiges spanisches Substantiv, Antwort „mirar escaparates“, Weitere „ir de
  escaparates“ (so steht „einen Schaufensterbummel machen“ schon in es-wa-0153).
- übergewichtig (es-xa-0200): „con sobrepeso“ (Adjektiv „sobrepesado“ sagt niemand).
- alkoholfrei (es-xa-0120): „sin alcohol“; ärmellos (es-xa-0170): „sin mangas“; verschreibungspflichtig (es-xa-0401):
  „con receta“.
- trauern (es-xa-0283): „estar de luto“, Weitere „guardar luto“.
- verstauchen (es-xa-0336): „torcerse“, Weitere „hacerse un esguince“; würfeln (Gemüse): „cortar en dados“.
- Senior (es-xa-0236): „la persona mayor“, Weitere „el anciano“ (Spanien sagt fast immer „las personas mayores“).
- Kleinkind (es-xa-0234): „el niño pequeño“ (kein eigenes Alltagswort).
- Beispielsätze, deren deutscher Satz vom Original abweicht, weil der spanische Satz anders gebaut ist (deutsches Wort
  ist immer enthalten), 29 Zeilen: es-xa-0017, 0037, 0129, 0137, 0149, 0185, 0200, 0217, 0242, 0246, 0249, 0256,
  0258, 0259, 0283, 0286, 0291, 0293, 0294, 0297, 0302, 0311, 0327, 0385, 0390, 0401, 0404, 0426, 0427.

### Unsicherheiten

- Untermieter (es-xa-0017): „el subarrendatario“ ist korrekt, aber förmlich; umgangssprachlich „el realquilado“
  (Weitere). C1 passt.
- Tagesmutter (es-xa-0270): „la madre de día“ ist der Begriff der spanischen Programme, aber nicht allen bekannt;
  „la cuidadora“ als Weitere.
- Nasenbluten (es-xa-0340): „la hemorragia nasal“; im Alltag sagt man meist „sangrar por la nariz“ (Verb).
- Untersuchung (es-xa-0370): „el reconocimiento médico“, Weitere „la exploración, la revisión, el examen médico“ – je
  nach Situation ist eine andere am üblichsten.
- Säugling (es-xa-0233): „el lactante“ ist eher Fachsprache; „el bebé“ als Weitere (= Baby).
- Halbschwester (es-xa-0240): „la media hermana“ (normgerecht); „la hermanastra“ bewusst nicht aufgenommen
  (eigentlich Stiefschwester), obwohl umgangssprachlich verbreitet.
- Rindfleisch (es-xa-0071): „la carne de vaca“; in Spanien kauft man meist „ternera“ (Weitere), streng genommen Kalb.
- Po (es-xa-0297): „el trasero“, Weitere „el culete, el culo“ („culo“ ist alltäglich, aber leicht derb).
- Weitsichtig (es-xa-0358): „hipermétrope“ ist das korrekte Wort, im Alltag oft „vista cansada“ (= Altersweitsicht,
  andere Bedeutung, deshalb nicht als Weitere).
- Mama/Papa: Antwort „la mamá“/„el papá“ mit Artikel nach der Regel, „mamá“/„papá“ ohne Artikel als Weitere (für die
  Anrede).
- Niveaus: Im Spanischen wären einige Wörter eher leichter, weil sie Internationalismen sind (Diabetes, Depression,
  Migräne – la migraña, Hygiene, Akne, Cholesterin); Niveau trotzdem wie im Original. Umgekehrt ist „Schuhgröße – el
  número de pie“ (A2) eher idiomatisch.

### Stichprobe

30 Zufallszeilen auf Übersetzung, Niveau und Beispiel geprüft; daraufhin geändert: es-xa-0240 Halbschwester („la
medio hermana“ → „la media hermana“), es-xa-0438 Kassenzettel (Antwort „el tique“ → „el ticket“, passend zu
Kassenbon es-eg-0084). Vorher beim Schreiben bewusst auf spanische Sätze mit 6–12 Wörtern geachtet; ein eigenes
Prüfskript hat Felderzahl, IDs, Deutsch, Niveau, Themen und Reihenfolge gegen das Original verglichen (0 Abweichungen).

---

## Paket X-es: Spanische Fassung von ausbau-schule-arbeit.txt (W2)

Datei `woerter/es-ausbau-schule-arbeit.txt`, Präfix `es-xb`, **440 Zeilen** (es-xb-0001 bis es-xb-0440), gleiche Nummern
und gleiche Reihenfolge wie `ausbau-schule-arbeit.txt` aus W2. Deutsch (mit Klammerhinweisen), Niveau und Themen
unverändert; per Skript gegen das Original geprüft. Antworten in der Variante Spaniens, Substantive mit Artikel,
Personenbezeichnungen maskulin mit femininer Form als Weitere Antwort. Beispielsätze eigens auf Spanisch geschrieben
(Euro, spanische Orte und Beispiele, wo es passt).

`node scripts/pruefe.mjs woerter/es-ausbau-schule-arbeit.txt`: **0 Fehler**, 24 Hinweise (1 × noch nicht in
katalog.json, 23 × Wortpaar steht schon in einer anderen es-ausbau-Datei, siehe Alias-Kandidaten).

### Neue Quelle

```json
{ "id": "es-ausbau-schule-arbeit", "file": "woerter/es-ausbau-schule-arbeit.txt", "lang": "es", "version": 1, "count": 440 }
```

Niveau- und Themenverteilung wie im Original (pakete/W2.md): A1 14, A2 88, B1 171, B2 132, C1 35.

### Vorschläge für Listen (analog zu W2)

| id | name | answerLang | filter |
|---|---|---|---|
| es-sprache-grammatik | Spanisch: Sprache & Grammatik | es | `{ "topics": ["Bildung/Sprache"] }` |
| es-berufe | Spanisch: Berufe | es | `{ "topics": ["Arbeit/Beruf/Berufe"] }` |
| es-buero-arbeitsplatz | Spanisch: Büro & Arbeitsplatz | es | `{ "topics": ["Arbeit/Beruf/Arbeitsplatz"] }` |
| es-werkzeug-handwerk | Spanisch: Werkzeug & Handwerk | es | `{ "topics": ["Alltag/Zuhause/Werkzeug", "Technik/Material"] }` |
| es-strom-maschinen | Spanisch: Strom, Geräte & Maschinen | es | `{ "topics": ["Technik/Elektrik", "Technik/Maschinen"] }` |
| es-schule-klassenzimmer | Spanisch: Im Klassenzimmer | es | `{ "topics": ["Bildung/Schule"] }` |

description und level wie die englischen Listen. Die bestehenden es-Listen mit Oberthema-Filter (es-schule-bildung,
es-arbeit-beruf, es-technik-computer, es-medien-kommunikation, Alltag) wachsen beim Mergen mit (count/version).

### Alias-Kandidaten

Gleiches Wortpaar in den parallel entstandenen es-Fassungen der anderen Ausbau-Dateien (das Original W2 hat dieselben
deutschen Wörter wie W1/W3/W4/W5); beim Mergen per `aliase.mjs` zusammenführen:

| es-xb | Wortpaar | steht auch in |
|---|---|---|
| 0050–0053 | addieren – sumar, subtrahieren – restar, multiplizieren – multiplicar, dividieren – dividir | es-xd-0358–0361 |
| 0057 | Ziffer – la cifra | es-xd-0363, es-xe-0347 |
| 0058 | Geometrie – la geometría | es-xd-0370 |
| 0087 | zitieren – citar | es-xe-0402 |
| 0095 | sich konzentrieren – concentrarse | es-xe-0375 |
| 0191 | Maler – el pintor | es-xd-0264 |
| 0224 | Kantine – el comedor | es-xa-0146 |
| 0258 | Fernbedienung – el mando a distancia | es-xa-0032 |
| 0265 | Spielkonsole – la videoconsola | es-xd-0433 |
| 0304 | Privatsphäre – la privacidad | es-xd-0063 |
| 0332 | Stecker – el enchufe | es-xa-0028 |
| 0338 | Stromausfall – el apagón | es-xc-0295 |
| 0345 | Erfinder – el inventor | es-xd-0339 |
| 0358–0360 | Metall – el metal, Eisen – el hierro, Stahl – el acero | es-xd-0350–0352 |
| 0382 | Lupe – la lupa | es-xd-0337 |
| 0405 | Kritiker – el crítico | es-xd-0307 |
| 0411 | Titel – el título | es-xd-0285 |
| 0438 | Briefkasten – el buzón | es-xa-0006 |

**Kein** Alias, weil die Antworten abweichen: Computerspiel – el videojuego (es-xb-0320) gegenüber Computerspiel – el
juego de ordenador (es-xd-0432). „el videojuego“ ist in Spanien deutlich üblicher; bei mir steht „el juego de
ordenador“ als Weitere Antwort. Vorschlag: es-xd-0432 auf „el videojuego“ angleichen (dann sauberer Alias) – oder
bewusst getrennt lassen.

Gleiche Antwort bei anderem deutschen Wort (kein Alias, nur zur Info): Mitschüler/Klassenkamerad (el compañero de
clase), Arbeitsblatt/Karteikarte (la ficha), Klassenlehrer/Tutor (el tutor), Lehrbuch/Handbuch (el manual),
Vorsilbe/Vorwahl (el prefijo), Buchstabe/Handschrift (la letra); gegenüber dem Katalog: Hochschule/Universität (la
universidad), Nutzer/Benutzer (el usuario), Klebstoff/Kleber (el pegamento), Schraubendreher/Schraubenzieher (el
destornillador), Briefumschlag/Umschlag (el sobre), Stempel/Briefmarke (el sello), Desktop/Schreibtisch (el
escritorio), Klassenarbeit/Prüfung (el examen), Stecker/Steckdose (el enchufe – im Spanischen umgangssprachlich
beides), Schulstunde/Klasse (la clase), Vokabel/Wort (la palabra), Textaufgabe/Problem (el problema).

### Umschriebene Zeilen und eigene Entsprechungen (Britisches, Deutsches, Grammatik)

- **Gesamtschule** (0067): in Spanien gibt es keine eigene Schulform, alle gehen aufs *instituto*. Antwort „la escuela
  integrada“ (so in spanischen Texten über das deutsche Schulsystem), Beispiel ausdrücklich „en Alemania“.
- **Nachsitzen** (0011): kein eigenes Substantiv; „el castigo“ (Weitere: quedarse castigado), Beispiel „quedarse de
  castigo después de clase“.
- **Aula** (0022): „el salón de actos“ – Achtung, spanisch *el aula* heißt Klassenzimmer (falscher Freund).
- **Hausmeister** (0201): el conserje; **Briefträger** el cartero; **Postleitzahl** el código postal; **Briefkasten**
  el buzón; **Vorwahl** el prefijo; **besetzt (Telefon)** „comunicando“ (spanisch: *está comunicando*; Weitere
  ocupado) – statt der britischen caretaker/postman/postcode/letterbox/dialling code/engaged.
- **Rundfunk** (0419): Beispiel mit „tasa“ und Deutschland statt licence fee.
- **Fachhochschule** (0082): „la universidad de ciencias aplicadas“ (Lehnübersetzung, deutsches Konzept).
- **Hauptfach/Nebenfach** (0071/0072): das System Haupt-/Nebenfach gibt es in Spanien nicht; „la especialidad“
  (Weitere la asignatura principal) und „la asignatura secundaria“.
- **Sozialkunde** (0047): „la educación cívica“ (Weitere la educación para la ciudadanía, das frühere Fach in Spanien).
- **Bachelor/Master** (0079/0080): el grado / el máster (spanische Bezeichnungen); **Abschlussarbeit** el trabajo de
  fin de grado.
- **Grammatik-Beispiele** mit spanischen Formen statt englischer: Adverbien auf *mente*, Plural *lápiz – lápices*,
  Singular *gente*, Futur *tendré*, Komparativ *bueno – mejor*, Superlativ *malo – el peor*, Endung *ado*, Vorsilbe
  *des*, Nachsilbe *ito*, Fragewort *cuándo*, Verneinung vor dem Verb, Großschreibung im Deutschen, Kleinschreibung
  der Wochentage, umgedrehtes Fragezeichen, Abkürzung *Sr.*, Wortfamilie *pan – panadero – panadería*, Synonym
  *bonito – precioso*, Redewendung *llover a cántaros*, Silben in *plátano*, Konsonanten in *Strumpf*.
  Deutsche Beispielsätze entsprechend angepasst.
- Orte/Beispiele angepasst: Studienplatz in Salamanca, Zitat von Cervantes, Auslandssemester in Italien, Onlinekurs in
  Italienisch, Amtssprachen in Spanien, Kinder zweisprachig in Barcelona, Einschreiben von Hacienda/Finanzamt,
  Postkarte aus Italien, Vorwahl von Madrid, synchronisierte Filme in Spanien, Berufsberatung in „tercero de la ESO“.

### Unsicherheiten und offene Fragen

- **Stichpunkt** (0167): „el punto clave“ (Weitere la viñeta) – im Spanischen sagt man eher „tomar notas en
  esquema“; ein festes Einzelwort fehlt.
- **Handwerker** (0188): „el operario“ (Weitere el obrero, el artesano). *artesano* ist in Spanien eher
  Kunsthandwerker; für „der Handwerker kommt“ sagt man meist *el operario* oder den konkreten Beruf.
- **Dachdecker** (0210): „el techador“ (RAE), im Alltag wenig gebräuchlich; viele sagen umschreibend *el que arregla
  tejados*. C1 passt.
- **Nebenjob** (0226): „el trabajo extra“ (Weitere el trabajillo, el segundo empleo) – kein festes Einzelwort.
- **Traumberuf** (0228): Antwort „el trabajo soñado“, der natürliche Satz benutzt aber „el trabajo de mis sueños“.
- **streamen** (0312): „ver en streaming“ (Weitere emitir en streaming); das Deutsche deckt Ansehen und Senden ab.
- **scrollen** (0279): „desplazarse“ (Weitere hacer scroll) – umgangssprachlich ist *hacer scroll* häufiger.
- **Lernkarte/Karteikarte** (0097/0043): la ficha de estudio / la ficha; viele Lernende sagen auch *flashcard*.
- **Klassenlehrer** (0002): „el tutor“ ist in Spanien die übliche Bezeichnung; gleiche Antwort wie Tutor (0084).
- **Arbeitsblatt** (0041): „la ficha“ ist in spanischen Schulen üblich; Karteikarte (0043) hat dieselbe Antwort.
- **Druckbuchstabe/Schreibschrift** (0163/0162): la letra de imprenta / la letra ligada (Weitere la letra cursiva).
- **Putzkraft** (0202): maskulin „el limpiador“ nach der Regel, im Beispiel und in der Praxis meist *la limpiadora*.
- **fließend** (0181): Antwort „con fluidez“ (Adverbialausdruck), weil *fluido* als Adjektiv bei Sprachen seltener ist.
- **Niveau**: Grammatik- und Technikbegriffe sind im Spanischen oft durchsichtige Lehnwörter (sustantivo, pronombre,
  conjunción, router, módem) und dürften etwas leichter sein als im Englischen; Niveaus trotzdem unverändert.
  Umgekehrt sind *techador*, *perforadora*, *rotafolio* eher schwerer.

### Vorgehen

- Alle 440 deutschen Wörter vorab mit `gibt-es.mjs --lang es` geprüft (nur „sägen“ als DA wegen „sagen“, Umlaut-
  Problem aus W2.md). Antworten an vorhandene es-Einträge angelehnt (el ordenador, el móvil, la pantalla, el
  destornillador, el pegamento …) und an die parallelen es-ausbau-Dateien, wo dasselbe deutsche Wort vorkommt.
- In 9 Blöcken zu höchstens 50 Zeilen geschrieben, nach jedem Block `pruefe.mjs` und ein eigenes Prüfskript
  (Reihenfolge, Deutsch/Niveau/Themen gleich dem Original, 8 Felder, kein Komma/Schrägstrich/Klammer in Antworten,
  Beispiel 6–12 Wörter, Wort im Beispiel).
- Stichprobe von 30 Zeilen auf Übersetzung, Niveau und Beispiele; korrigiert: Muttersprachler (0152, „nativa de
  Escocia“ hätte „in Schottland geboren“ bedeutet), Eisen (0360, deutsches Beispiel an *macizo* angepasst),
  schweißen (0389, Zeitform an das deutsche Beispiel angeglichen).

---

## X-es: Spanische Fassung von „Ausbau Natur und Welt“ (W3)

Neue Wortdatei `woerter/es-ausbau-natur-welt.txt`, **461 Zeilen** (es-xc-0001 bis es-xc-0461), eine Zeile je Zeile des
Originals `woerter/ausbau-natur-welt.txt` (W3), gleiche Nummern und Reihenfolge. Deutsch (mit Klammerhinweisen), Niveau
und Themen unverändert übernommen. Keine Zeile ausgelassen, kein Niveau geändert.

- Antworten: europäisches Spanisch, Substantive mit bestimmtem Artikel, Verben im Infinitiv (reflexiv: derretirse),
  Adjektive maskulin. Personen: maskuline Form als Antwort, feminine unter „Weitere Antworten“ (el veterinario,
  la veterinaria). Keine Kommas, Schrägstriche, Klammern oder Abkürzungen in Antworten (also kein „DNI“, „GPS“, „EE. UU.“).
- Ländernamen ohne Artikel, wie im Spanischen üblich (Alemania, Francia); mit Artikel nur, wo er dazugehört:
  el Reino Unido, los Países Bajos, la República Checa, los Estados Unidos, la India (Weitere: Estados Unidos, India),
  el Ártico, la Antártida, el Polo Norte/Sur.
- Beispiele: eigene spanische Sätze nach dem englischen Vorbild, deutsche Übersetzung meist wie im Original; angepasst,
  wo der spanische Satz anders ist oder ein spanischer Bezug besser passt (Asturias statt Schottland bei Landschaft,
  Galicia/Nordwesten, Madrid/Toledo beim Tagesausflug, Barcelona beim Massentourismus, Ballungsraum Madrid,
  Fahrschule mit 18 statt 17, Reisebus nach Madrid statt London). Sieben zu kurze Sätze (4–5 Wörter) verlängert.
- `node scripts/pruefe.mjs woerter/es-ausbau-natur-welt.txt`: 0 Fehler, 13 Hinweise (1 × „steht noch nicht in
  katalog.json“, 12 × Dublette mit den parallel entstandenen Fassungen, siehe Alias-Kandidaten).
- Datei UTF-8 ohne BOM, LF.

### Neue Quelle (für katalog.json)

| id | file | lang | count |
|---|---|---|---|
| `es-ausbau-natur-welt` | `woerter/es-ausbau-natur-welt.txt` | es | 461 |

```json
{ "id": "es-ausbau-natur-welt", "file": "woerter/es-ausbau-natur-welt.txt", "lang": "es", "version": 1, "count": 461 }
```

Niveaus wie im Original: A1 22 · A2 104 · B1 177 · B2 122 · C1 36. Themen und Zeilen je Thema wie in pakete/W3.md.

### Vorschläge für Listen

Analog zu pakete/W3.md, jeweils mit `"answerLang": "es"` und demselben Themenfilter, Name mit „Spanisch: “ davor:

| id | name | level | filter |
|---|---|---|---|
| `es-laender-nationalitaeten` | Spanisch: Länder & Nationalitäten | A1 | topics `Reisen/Länder & Nationalitäten` (59) + die Kontinente aus `Natur/Geografie` |
| `es-geografie` | Spanisch: Geografie: Erde, Himmelsrichtungen, Karten | B1 | topics `Natur/Geografie` (30) |
| `es-stadt-gebaeude` | Spanisch: Stadt & Gebäude | B1 | topics `Alltag/Stadt` (42) |
| `es-tiere-ausbau` | Spanisch: Tiere: mehr Wörter | A2 | topics `Natur/Tiere`, nur Quelle es-ausbau-natur-welt (73) |
| `es-natur-landschaft-ausbau` | Spanisch: Pflanzen, Landschaft & Landwirtschaft | B1 | topics `Natur/Pflanzen`, `Natur/Landschaft`, `Natur/Landwirtschaft` (61) |
| `es-wetter-ausbau` | Spanisch: Wetter & Naturkatastrophen | B1 | topics `Natur/Umwelt/Wetter`, `Natur/Umwelt/Naturkatastrophen` (48) |
| `es-verkehr-ausbau` | Spanisch: Verkehr: Auto, Rad, Bahn | B1 | topics `Reisen/Verkehr` (61) |

Wie in W3.md: Sind die bestehenden spanischen Themenlisten per Themenfilter definiert, nehmen sie die Wörter mit gleichem
Pfad automatisch auf; dann reichen die drei neuen Listen Länder, Geografie und Stadt.

### Alias-Kandidaten (gleiches Wortpaar in den parallelen es-Fassungen)

Alle 12 sind auch im Englischen doppelt (gleiche deutsche Zeile in W1/W2/W4/W5), also Aliase wie dort:

| es-xc | anderes | Wortpaar |
|---|---|---|
| es-xc-0092 | es-xa-0063 | Zimmerpflanze – la planta de interior |
| es-xc-0316 | es-xa-0281 | Friedhof – el cementerio |
| es-xc-0356 | es-xa-0380 | Krankenwagen – la ambulancia |
| es-xc-0295 | es-xb-0338 | Stromausfall – el apagón |
| es-xc-0328 | es-xd-0033 | Botschaft (Vertretung) – la embajada |
| es-xc-0320 | es-xd-0242 | Ruine – la ruina |
| es-xc-0321 | es-xd-0266 | Statue – la estatua |
| es-xc-0449 | es-xd-0274 | Eintritt – la entrada |
| es-xc-0256 | es-xd-0349 | Gefrierpunkt – el punto de congelación |
| es-xc-0338 | es-xd-0427 | Schaukel – el columpio |
| es-xc-0227 | es-xe-0104 | kühl – fresco |
| es-xc-0390 | es-xe-0299 | Kurve – la curva |

Gegen den bestehenden spanischen Katalog (ohne die X-Dateien) keine Dubletten. `gibt-es.mjs --lang es` meldete nur
„DA“ für Quelle (Wasser) (es-mk-0100 Quelle – la fuente), Sackgasse (Straße) (es-vh-0076 – el punto muerto), rasen
(es-al-0109 Rasen – el césped) und Fahrt (Lesewort „fährt“) – jeweils andere Wörter/Bedeutungen. Für **Quelle (Wasser)**
steht deshalb „el manantial“ als Antwort, „la fuente“ nur als Weitere Antwort; wie in W3.md vermerkt, braucht es-mk-0100
beim Mergen einen Klammerhinweis („Quelle (Herkunft)“), sonst ist „Quelle – la fuente“ mehrdeutig.

Anlehnung an Bestand: Bauer – el agricultor (wie Landwirt es-ab-0028), Ausweis – el documento de identidad (wie
Personalausweis es-ap-0007), Wetterbericht mit „el pronóstico del tiempo“ als Weiterer Antwort (wie Wettervorhersage).

### Gleiche Antwort für verschiedene deutsche Wörter (Synonyme, keine Aliase)

Orkan/Hurrikan – el huracán; Schatten (kühler Ort)/Schatten (Umriss) – la sombra (im Spanischen ein Wort);
Stadtteil/Stadtviertel – el barrio; Scheinwerfer/Leuchtturm – el faro; Ausfahrt/Abreise – la salida (wie Abflug
im Bestand); Fahrt – el viaje (wie Reise); Wärme – el calor (wie Hitze); Blüte – la flor (wie Blume);
Sonnenaufgang – el amanecer (auch Weitere bei Morgengrauen).

### Unsicherheiten und offene Fragen

- **lenken (Auto) – dirigir** (Weitere: guiar): Spanisch hat kein so alltägliches Einzelverb wie „to steer“; man sagt
  meist „controlar el coche“ oder „girar el volante“. „dirigir el coche“ ist verständlich, aber nicht ganz idiomatisch.
- **Starthilfe – el arranque con pinzas**: Umgangssprachlich sagt man eher „pasar corriente“ oder „hacer un puente“
  (Verbalwendungen); der Beispielsatz wirkt deshalb etwas steif.
- **Hochhaus – el edificio alto** (Weitere: la torre): kein festes Einzelwort zwischen „bloque de pisos“ und
  „rascacielos“.
- **Restmüll – los residuos no reciclables** (Weitere: la fracción resto) und **Sperrmüll – los residuos voluminosos**
  (Weitere: los muebles y enseres): Die Mülltrennung heißt in Spanien je nach Gemeinde anders („contenedor gris/de
  resto“, „recogida de muebles y enseres“). Biomüll – los residuos orgánicos, Pfandflasche – la botella retornable.
- **Ungeziefer – los bichos** (Weitere: las alimañas): „bichos“ ist umgangssprachlich, aber das, was man sagt;
  „alimañas“ meint eher Raubzeug.
- **Sturmflut – la marea de tormenta** (Weitere: la marejada ciclónica): eher Fachwort, im Alltag spricht man von
  „temporal“.
- **Vorort – el barrio periférico** (Weitere: el extrarradio): „suburbio“ bewusst vermieden, weil es in Spanien
  „Elendsviertel“ bedeutet.
- **Schwarzfahrer – el viajero sin billete** (Weitere: el colado): umgangssprachlich auch „el que se cuela“.
- **Wahrzeichen – el símbolo** (Weitere: el emblema): üblich ist auch „el monumento emblemático“.
- **Krähe – la corneja**: im Alltag sagen viele auch zur Krähe „cuervo“ (das ist die Antwort für Rabe); nicht als
  Weitere Antwort aufgenommen, damit Rabe und Krähe unterscheidbar bleiben.
- **Hochwasser – la crecida** (Weitere: la inundación, la riada): „la inundación“ ist auch die Antwort für
  Überschwemmung im Bestand.
- **Tannenzapfen – la piña**: im Spanischen auch „Ananas“; im Naturkontext eindeutig.
- **Boot – la barca** (Weitere: el bote, el barco): „el barco“ ist im Bestand die Antwort für Schiff, deshalb nicht
  Hauptantwort.
- **niederländisch – holandés** (Weitere: neerlandés): „holandés“ ist im Alltag deutlich häufiger.
- Niveau: Ländernamen wie Österreich, Schweiz sind für Spanisch-Lernende eher A2 als A1, und **Storch – la cigüeña**
  ist in Spanien sehr präsent (eher B1 als B2). Nicht geändert, nur vermerkt.

### Stichprobe (30 Zeilen)

30 zufällige Zeilen auf Übersetzung, Niveau und Beispiele geprüft. Daraufhin geändert: „ordeñar a las vacas“ (Bauer),
Wortstellung „un tranquilo barrio periférico“ (Vorort), „La recogida de basura es todos los martes“ (Müllabfuhr),
Beispiel Ausweis („registrarte en el hotel“), Weitere Antworten gestrichen, die nicht gleichwertig waren: „la plaga“
(Ungeziefer), „la calidez“ (Wärme). Außerdem automatisch geprüft: 8 Felder je Zeile, ID/Deutsch/Niveau/Themen
identisch mit dem Original, keine Komma/Schrägstrich/Klammer in Antworten, Antwort (bzw. eine Form davon) im Beispielsatz.

---

## Paket X-es: Spanische Fassung von Ausbau Gesellschaft (W4)

Neue Datei `woerter/es-ausbau-gesellschaft.txt` mit **442 Zeilen** (es-xd-0001 … es-xd-0442), eine Zeile je Zeile des
Originals `woerter/ausbau-gesellschaft.txt` (W4), gleiche Nummern und Reihenfolge. Deutsch (mit Klammerhinweisen),
Niveau und Themen unverändert (per Skript gegen das Original geprüft). Keine Zeile ausgelassen, kein Niveau geändert.

- Antworten: europäisches Spanisch, Substantive mit bestimmtem Artikel (el arma, el alma wegen betontem a), Verben im
  Infinitiv, Adjektive maskulin. Personen: maskuline Form als Antwort, die feminine unter Weitere Antworten
  (el activista, la activista). Keine Kommas, Schrägstriche, Klammern oder Abkürzungen in Antworten.
- Beispiele: eigene spanische Sätze (6–12 Wörter), mit spanischen Bezügen, wo es passt (Altamira, Toledo, Córdoba,
  Gran Vía, zwölf Trauben an Nochevieja, Nationalhymne ohne Text → „escucharon“). Ausnahme wie im Original: die vier
  Rechensätze (xd-0354 bis 0357) haben 5 Wörter.
- `node scripts/pruefe.mjs woerter/es-ausbau-gesellschaft.txt`: 0 Fehler. Hinweise: Datei steht noch nicht in
  katalog.json, dazu 29 Wortpaare, die auch in den parallelen X-es-Dateien stehen (Stand beim Abschluss, die anderen
  Dateien waren noch in Arbeit; siehe Alias-Kandidaten).
- Schlusskontrolle: Skript prüft Feldzahl, IDs, Deutsch/Niveau/Themen gegen das Original, Satzlänge, Vorkommen des
  Worts in beiden Sätzen. Dazu 30 Zeilen stichprobenartig wie bei einer Korrektur durchgesehen (u. a. 0011, 0015, 0018,
  0054, 0075, 0076, 0092, 0105, 0120, 0122, 0162, 0165, 0178, 0180, 0191, 0193, 0218, 0270, 0284, 0303, 0322, 0356,
  0357, 0373, 0388, 0397, 0415, 0419, 0432, 0437). Geändert: 0322 (Satz zu kurz).

### Neue Quelle (für katalog.json)

```json
{ "id": "es-ausbau-gesellschaft", "file": "woerter/es-ausbau-gesellschaft.txt", "lang": "es", "version": 1, "count": 442 }
```

### Vorschläge für Listen (analog W4.md)

Gleiche Filter wie die englischen Listen aus W4.md, jeweils mit `"answerLang": "es"`, Name „Spanisch: …“:

| id | name | level | filter |
|---|---|---|---|
| es-religion | Spanisch: Religion & Glaube | B1 | topics: ["Gesellschaft/Religion"] |
| es-feste-feiertage | Spanisch: Feste & Feiertage | A2 | topics: ["Freizeit/Feste & Feiern"] |
| es-geschichte | Spanisch: Geschichte | B1 | topics: ["Kultur/Geschichte"] |
| es-recht-kriminalitaet | Spanisch: Recht & Kriminalität | B1 | topics: ["Gesellschaft/Recht"] |
| es-politik-international | Spanisch: Krieg, Frieden & Weltpolitik | B2 | topics: ["Gesellschaft/Politik/Internationales"] |
| es-rechnen-geometrie | Spanisch: Rechnen & Geometrie | A2 | topics: ["Wissenschaft/Mathematik"] |
| es-musik-instrumente | Spanisch: Musik & Instrumente | A2 | topics: ["Kultur/Musik", "Freizeit/Musik"] |

Die bestehenden spanischen Themenlisten (es-politik-gesellschaft, es-kunst-kultur, es-wissenschaft-forschung,
es-freizeit-hobbys, es-sport-fitness, es-wirtschaft-finanzen) wachsen wie die englischen (count/version anheben).

### Alias-Kandidaten

Gleiches Wortpaar wie in einer parallelen X-es-Datei (meist schon im Englischen doppelt, vgl. W4.md Punkt 7):

- Botschaft (Vertretung) – la embajada: es-xd-0033 / es-xc-0328
- Privatsphäre – la privacidad: es-xd-0063 / es-xb-0304
- Kreuz – la cruz: es-xd-0148 / es-xe-0284
- Gastgeber – el anfitrión: es-xd-0175 / es-xa-0262
- gratulieren – felicitar: es-xd-0177 / es-xe-0368
- Kaution – la fianza: es-xd-0192 / es-xa-0016
- Ruine – la ruina: es-xd-0242 / es-xc-0320
- Maler – el pintor: es-xd-0264 / es-xb-0191
- Statue – la estatua: es-xd-0266 / es-xc-0321
- begabt – talentoso: es-xd-0270 / es-xe-0463
- kreativ – creativo: es-xd-0271 / es-xe-0455
- Eintritt – la entrada: es-xd-0274 / es-xc-0449
- Titel – el título: es-xd-0285 / es-xb-0411
- Kritiker – el crítico: es-xd-0307 / es-xb-0405
- Lupe – la lupa: es-xd-0337 / es-xb-0382
- Erfinder – el inventor: es-xd-0339 / es-xb-0345
- Gefrierpunkt – el punto de congelación: es-xd-0349 / es-xc-0256
- Metall – el metal: es-xd-0350 / es-xb-0358
- Eisen – el hierro: es-xd-0351 / es-xb-0360
- Stahl – el acero: es-xd-0352 / es-xb-0359
- addieren – sumar, subtrahieren – restar, multiplizieren – multiplicar, dividieren – dividir:
  es-xd-0358 … 0361 / es-xb-0050 … 0053
- Ziffer – la cifra: es-xd-0363 / es-xe-0347 / es-xb-0057
- Rechteck – el rectángulo: es-xd-0365 / es-xe-0285
- Geometrie – la geometría: es-xd-0370 / es-xb-0058
- Schaukel – el columpio: es-xd-0427 / es-xc-0338
- Spielkonsole – la videoconsola: es-xd-0433 / es-xb-0265

**Abweichung:** Computerspiel ist hier „el juego de ordenador“ (es-xd-0432), in es-ausbau-schule-arbeit „el videojuego“
(es-xb-0320). „el videojuego“ ist bei mir die Antwort zu Videospiel (es-xd-0431). Beim Mergen eine Antwort wählen;
für einen sauberen Alias müsste eine der beiden Zeilen angeglichen werden.

### Unsicherheiten und offene Fragen

1. **Gleiche Antwort bei anderem deutschen Wort** (kein Alias, aber zwei Wörter mit gleicher Antwort in der App):
   - Dieb und Einbrecher – el ladrón (xd-0071/0076): Spanisch hat kein gängiges eigenes Wort für Einbrecher.
   - Einbruch – „el robo en una vivienda“ (xd-0075) ist eine Umschreibung; Diebstahl ist „el robo“ (xd-0072).
   - Atelier – el estudio (xd-0268) und Studie – el estudio (xd-0331); bei Atelier steht „el taller“ als Weitere.
   - im Katalog schon vorhanden: Darlehen/Kredit – el préstamo, Geldstrafe/Bußgeld – la multa, Malerei/Gemälde –
     la pintura, Antike/Altertum – la Antigüedad, Finale/Endspiel – la final, Export/Ausfuhr – la exportación,
     Import/Einfuhr – la importación, Preisanstieg/Preiserhöhung – la subida de precios, Eigentum/Besitz – la
     propiedad, Ermittlung/Forschung – la investigación, Elektrizität/Strom – la electricidad, Schall/Geräusch –
     el sonido, Konfirmation/Bestätigung – la confirmación, Geldschein/Schein – el billete, Fest (Feier)/Party –
     la fiesta, kostbar/wertvoll – valioso, abstimmen/wählen – votar.
2. **Antworten ohne Artikel** (Eigennamen bzw. so üblich): Dios, Papá Noel, Pentecostés, San Valentín, Halloween,
   dazu die Rechenwörter más, menos, por, entre.
3. **Kulturbezug / nur ungefähr gleich:**
   - Gottesdienst – „la misa“ (katholisch geprägt), Weitere: el oficio religioso, el culto.
   - Pfarrer – „el párroco“, Weitere: el cura, el pastor. Priester – „el sacerdote“, Weitere: el cura.
   - Ostern – „la Pascua“, Weitere „la Semana Santa“ (eigentlich Karwoche, in Spanien aber das übliche Wort für die
     Osterzeit). Weihnachtsmann – Papá Noel (in Spanien bringen traditionell die Reyes Magos die Geschenke).
   - Konfirmation – „la confirmación“ (in Spanien die katholische Firmung).
   - Bewährung – „la libertad condicional“ ist streng genommen die Entlassung auf Bewährung; die Strafaussetzung heißt
     „la suspensión de la pena“. Für Lernende ist „libertad condicional“ das bekannte Wort.
   - Stadtrat – „el concejo municipal“; im Alltag sagt man in Spanien oft einfach „el ayuntamiento“ (= Rathaus,
     es-gw-0434), deshalb nicht als Weitere aufgenommen.
   - Sozialhilfe – „la ayuda social“ (Weitere: las ayudas sociales, la asistencia social); es gibt kein einheitliches
     Wort, regional „renta mínima“.
4. **Wortart-Fragen:** Zeichentrickfilm – „los dibujos animados“ (Plural, so üblich). Kampfsport – „las artes
   marciales“. Wintersport – „los deportes de invierno“. Bowling – „los bolos“. Glückwunsch – „la felicitación“
   (Weitere: la enhorabuena, las felicidades). verschwenderisch – „derrochador“ (eher von Personen; der Originalsatz
   „Es ist verschwenderisch, …“ wurde zu „Mein Bruder ist sehr verschwenderisch mit Geld“).
5. **Eher gehobene Wahl:** jubeln – „vitorear“ (Weitere aclamar); im Fußball sagt man oft „celebrar“, das ist aber die
   Antwort zu feiern. Quiz – „el concurso de preguntas“ (Weitere el cuestionario).
6. **Niveaus** unverändert. Für Spanisch würde ich höchstens „la Nochevieja“/„la Nochebuena“ (A2) und „el escondite“
   (A2) für passend halten; keine klaren Abweichungen.

---

## X-es: Spanische Fassung von ausbau-grundwoerter.txt (W5)

### Zusammenfassung

Neue Datei `woerter/es-ausbau-grundwoerter.txt` mit **487 Zeilen** (es-xe-0001 bis es-xe-0487), eine Zeile je Zeile des
Originals `woerter/ausbau-grundwoerter.txt` (W5), gleiche Nummern und Reihenfolge. Keine Zeile ausgelassen.
Deutsch (mit Klammerhinweisen), Niveau und Themen exakt wie im Original (per Skript gegen das Original verglichen).

- Antworten in europäischem Spanisch, vom Deutschen aus übersetzt. Substantive mit bestimmtem Artikel, Verben im
  Infinitiv (reflexive mit -se), Adjektive maskulin. Keine Kommas, Schrägstriche oder Klammern in einer Antwort.
- Eigene spanische Beispielsätze (6–12 Wörter, per Skript geprüft) mit deutscher Übersetzung. Wo nötig Orte aus Spanien
  (Sevilla, Valencia, Barcelona, Salamanca, Madrid) und Euro.
- Vorab `node scripts/gibt-es.mjs --lang es` über alle 487 deutschen Wörter: 485 neu, 2 „DA“ nur durch andere
  Bedeutungen (drucken – imprimir, vor (einem Monat) – hace), wie in W5 beschrieben.
- Wo der Katalog dasselbe deutsche Wort mit gleicher Bedeutung schon hat, dieselbe Antwort genommen: sich kümmern →
  ocuparse de (wie es-gw-0736), sich verlassen → confiar en (wie es-gw-0571), nochmal → otra vez (wie es-ke-0012).
- `node scripts/pruefe.mjs woerter/es-ausbau-grundwoerter.txt`: 0 Fehler. Hinweise: „steht noch nicht in katalog.json“
  und 13 Dubletten mit den anderen X-es-Dateien (siehe Alias-Kandidaten).
- Datei UTF-8 ohne BOM, LF, genau acht Felder je Zeile.

### Neue Quelle (für katalog.json)

| id | file | lang | count |
|---|---|---|---|
| `es-ausbau-grundwoerter` | `woerter/es-ausbau-grundwoerter.txt` | es | 487 |

```json
{ "id": "es-ausbau-grundwoerter", "file": "woerter/es-ausbau-grundwoerter.txt", "lang": "es", "version": 1, "count": 487 }
```

### Vorschläge für Listen

Analog zu pakete/W5.md, jeweils mit `"answerLang": "es"`, gleiche Filter und Zahlen wie dort.

| id | name | level | filter |
|---|---|---|---|
| es-allgemein-verben | Spanisch: Häufige Verben | B1 | topics: ["Allgemein/Verben"] (87) |
| es-allgemein-adjektive | Spanisch: Häufige Adjektive | B1 | topics: ["Allgemein/Adjektive"] (58) |
| es-allgemein-kleine-woerter | Spanisch: Kleine Wörter | B1 | topics: ["Allgemein/Kleine Wörter"] (62) |
| es-allgemein-zeit-raum | Spanisch: Zeit, Raum & Richtung | A2 | topics: ["Allgemein/Zeit", "Allgemein/Raum"] (110) |
| es-allgemein-mengen | Spanisch: Mengen & Maße | B1 | topics: ["Allgemein/Mengen"] (44) |
| es-allgemein-denken-sprechen | Spanisch: Denken & Sprechen | B1 | topics: ["Allgemein/Denken & Sprechen"] (57) |
| es-allgemein-a2 | Spanisch: Grundwörter plus – A1/A2 | A2 | topics: ["Allgemein"], levels: ["A1", "A2"] (125) |
| es-allgemein-b1 | Spanisch: Grundwörter plus – B1 | B1 | topics: ["Allgemein"], levels: ["B1"] (195) |
| es-allgemein-b2 | Spanisch: Grundwörter plus – B2/C1 | B2 | topics: ["Allgemein"], levels: ["B2", "C1"] (98) |

Die 69 Zeilen unter `Mensch/Gefühle` und `Mensch/Charakter` erscheinen in der bestehenden Liste `es-gefuehle-charakter`
(Filter `topics: ["Mensch"]`); deren count steigt um 69 (plus ggf. Mensch-Zeilen anderer X-es-Dateien), version
muss steigen.

### Alias-Kandidaten (Dubletten mit anderen X-es-Dateien)

pruefe.mjs meldet beim letzten Lauf diese Wortpaare, die auch in parallel entstehenden X-es-Dateien stehen. Die Zeilen
bleiben, weil sie zum Original gehören. Beim Mergen prüfen, ob die englischen Originale dieselben Dubletten haben
(dann Alias wie dort); die Liste kann sich noch ändern, solange die anderen X-es-Agents schreiben.

| Zeile hier | Wortpaar | auch in |
|---|---|---|
| es-xe-0042 | sich verabschieden – despedirse | es-xa-0266 |
| es-xe-0104 | kühl – fresco | es-xc-0227 |
| es-xe-0282 | Loch – el agujero | es-xa-0176 |
| es-xe-0284 | Kreuz – la cruz | es-xd-0148 |
| es-xe-0285 | Rechteck – el rectángulo | es-xd-0365 |
| es-xe-0299 | Kurve – la curva | es-xc-0390 |
| es-xe-0347 | Ziffer – la cifra | es-xb-0057, es-xd-0363 |
| es-xe-0368 | gratulieren – felicitar | es-xd-0177 |
| es-xe-0375 | sich konzentrieren – concentrarse | es-xb-0095 |
| es-xe-0402 | zitieren – citar | es-xb-0087 |
| es-xe-0452 | unordentlich – desordenado | es-xa-0048 |
| es-xe-0455 | kreativ – creativo | es-xd-0271 |
| es-xe-0463 | begabt – talentoso | es-xd-0270 |

### Umschriebene oder unsichere Zeilen

Zeilen ohne glattes spanisches Einzelwort; Antwort als kurze, gebräuchliche Umschreibung:

- es-xe-0197 **indem → mediante** (Weitere: por medio de). Spanisch drückt „indem“ meist mit dem Gerundium aus
  („ahorras dinero cocinando en casa“); dafür gibt es kein abfragbares Wort. Beispiel deshalb mit „mediante“.
- es-xe-0306 **eckig → anguloso** (Weitere: con esquinas). Ein eckiger Tisch wäre „una mesa cuadrada/rectangular“;
  Beispiel mit „cara angulosa“ (eckiges Gesicht).
- es-xe-0332 **übrig → sobrante** (Weitere: restante, de sobra). Im Satz sagt man meist „¿Queda pizza?“ (Verb quedar).
- es-xe-0339 **Pfund (Gewicht) → el medio kilo** (Weitere: la libra). In Spanien kauft man „medio kilo“, „la libra“
  ist als Gewicht ungebräuchlich.
- es-xe-0336 **Milliarde → mil millones** ohne Artikel (Zahlwort; „el billón“ wäre 10¹², ein falscher Freund).
- es-xe-0388 **Gegenteil → lo contrario** mit neutralem Artikel lo (so üblich), Weitere: lo opuesto.
- es-xe-0457 **humorvoll → con sentido del humor** (kein gebräuchliches Adjektiv; „humorístico“ gilt für Texte).
- es-xe-0477 **Selbstvertrauen → la confianza en sí mismo** (Weitere: la seguridad en sí mismo, la autoconfianza).
- es-xe-0485 **taktvoll → discreto** (Weitere: con tacto, delicado).
- es-xe-0202 **nämlich (im Sinn von „und zwar“) → en concreto**; das kausale „nämlich“ (= es que) ist nicht gemeint.
- es-xe-0208 **um (Uhrzeit) → a las** (Weitere: a).
- es-xe-0148 **bei → en casa de** (Weitere: con, cerca de) – nach dem Beispiel „bei meiner Tante“; „bei“ hat im
  Spanischen keine Einzelentsprechung.

Umgangssprachlich, aber in Spanien Standard: es-xe-0060 erwischen → pillar (Weitere: coger, atrapar),
es-xe-0454 unfreundlich → Weitere „borde“, es-xe-0456 sympathisch → Weitere „majo“.

### Wo Spanisch unterscheidet (zu W5, offene Frage 3)

Im Englischen haben mehrere deutsche Wörter dieselbe Antwort; im Spanischen habe ich, wo es natürlich ist, getrennt:
benutzen → usar, verwenden → utilizar, nutzen → aprovechar · nachdenken → reflexionar, überlegen → pensar ·
abends → por la noche, nachts → de noche, nachmittags → por la tarde · Ende/Schluss → el final, Anfang → el principio,
Beginn → el comienzo · einander → el uno al otro, gegenseitig → mutuamente.
Gleiche Antwort für verschiedene deutsche Wörter bleibt dort, wo Spanisch keinen Unterschied macht: sich trauen/wagen
→ atreverse, sich anstrengen/sich bemühen → esforzarse, sich irren/sich täuschen → equivocarse, ausgezeichnet/
hervorragend → excelente, Tipp/Ratschlag → el consejo, außerdem/zudem → además, stets → siempre (wie immer),
bereits → ya (wie schon), ebenfalls → también (wie auch).

### Weitere Anmerkungen

- Niveau unverändert. Sprachspezifisch abweichend wären etwa: ojalá (hoffentlich, A2) eher B1, wegen des
  Subjuntivo; „a estas alturas“ (mittlerweile, B2) passt.
- es-xe-0097 wild → salvaje: Das Beispiel spricht von wilden Tieren, weil „wilde Kinder“ auf Spanisch alborotados
  heißt (andere Bedeutung).
- es-xe-0099 schlimm → grave (Weitere: malo, terrible), Beispiel „no es nada grave“.
- es-xe-0089 fertig → terminado (Weitere: listo, acabado).
- Einige Beispielsätze sind bewusst anders als im Englischen, damit sie natürlich klingen und das Stichwort
  enthalten (z. B. 0134 ensalada mixta, 0241–0243 Adjektive semanal/mensual/anual, 0260 a corto plazo).

### Abschlussprüfung

Stichprobe von 31 Zeilen (jede 16. Zeile) auf Übersetzung, Niveau und Beispiele durchgesehen; außerdem alle
Beispielsätze unter 6 Wörtern (24 Zeilen) verlängert. `node scripts/pruefe.mjs woerter/es-ausbau-grundwoerter.txt`:
0 Fehler.
