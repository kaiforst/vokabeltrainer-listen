# Paket X-it: Italienische Fassungen der Ausbau-Dateien (W1–W5)

Fünf neue Wortdateien, je eine Fassung der Originale aus W1–W5 (Branches wortschatz/W1 … wortschatz/W5, noch nicht auf
main). IDs `it-<id des Originals>`, gleiche Nummern und Reihenfolge, keine Zeile ausgelassen. Deutsch (mit
Klammerhinweis), Niveau und Themen wie im Original – per Skript gegen die W-Dateien geprüft.

| Datei | Original | Zeilen |
|---|---|---|
| woerter/it-ausbau-alltag.txt | woerter/ausbau-alltag.txt (W1) | 443 |
| woerter/it-ausbau-schule-arbeit.txt | woerter/ausbau-schule-arbeit.txt (W2) | 440 |
| woerter/it-ausbau-natur-welt.txt | woerter/ausbau-natur-welt.txt (W3) | 461 |
| woerter/it-ausbau-gesellschaft.txt | woerter/ausbau-gesellschaft.txt (W4) | 442 |
| woerter/it-ausbau-grundwoerter.txt | woerter/ausbau-grundwoerter.txt (W5) | 487 |

Neue Quellen (lang it, version 1): `it-ausbau-alltag` (443), `it-ausbau-schule-arbeit` (440), `it-ausbau-natur-welt` (461), `it-ausbau-gesellschaft` (442), `it-ausbau-grundwoerter` (487) – zusammen 2273 Wörter.

## Nachträglich von der Hauptsession angeglichen

- **Maler:** W2 und W4 haben inzwischen „Maler (Handwerker)“ (xb-0191) bzw. „Maler (Künstler)“ (xd-0264); die Fassung
  übernimmt das. Die Teilnotizen nennen Maler teils noch als Alias-Kandidaten – das entfällt.
- **Niveau** überall wie im Original; Vorschläge für andere Niveaus stehen nur als Hinweis in den Teilnotizen.
- **Maler (Handwerker)** (xb-0191): „l'imbianchino“ (Weitere: il pittore edile, il pittore); Maler (Künstler) (xd-0264)
  bleibt „il pittore“. Die Teilnotiz zu W2 beschreibt noch die alte Angleichung an xd.
- **Schwarzfahrer** (xc-0407): Hauptantwort „il passeggero senza biglietto“, das umgangssprachliche „il portoghese“ als
  Weitere Antwort; Beispielsatz entsprechend.

## Beim Zusammenführen

- W1–W5 zuerst mergen; ändert sich dort eine Zeile, die Fassung nachziehen.
- Alias-Kandidaten: die Wortpaare, die schon in den englischen W-Dateien doppelt stehen (Kantine, Stecker, addieren,
  Ziffer, Metall …), sind hier ebenfalls doppelt und gleich übersetzt → Alias wie im Englischen. Ausnahme: **locker**
  (xa-0169 / xe-0112) ist in dieser Sprache je nach Bedeutung verschieden übersetzt → kein Alias; für eine M-Runde
  „locker (Kleidung)“ / „locker (Schraube, Zahn)“.
- Danach `node scripts/pruefe.mjs --dubletten` über alle it-Dateien.
- Bestehende it-Themenlisten wachsen über ihre Filter (count/version erhöhen); neue Listen wie in W1.md–W5.md mit
  id `it-<id der englischen Liste>` und `answerLang: "it"` (Details in den Teilen).
- Offene Grundsatzfrage für alle Sprachen: „indem“ (xe) hat kein Einzelwort-Gegenstück (fr „en“, es „mediante“,
  it „facendo“) – Zeile in den Fassungen behalten oder ausblenden?

## Paket X-it – Italienische Fassung von „Ausbau Alltag“ (W1)

Neue Datei `woerter/it-ausbau-alltag.txt`, 443 Zeilen (it-xa-0001 … it-xa-0443), eine Zeile je Zeile des Originals
`woerter/ausbau-alltag.txt` (W1), gleiche Nummern und gleiche Reihenfolge wie in der Originaldatei (dort stehen
xa-0430 … xa-0443 bei ihrem Thema, nicht am Ende). Deutsch (mit Klammerhinweis), Niveau und Themen unverändert.
Keine Zeile ausgelassen, kein Niveau geändert. `pruefe.mjs`: 0 Fehler.

### Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| `it-ausbau-alltag` | `woerter/it-ausbau-alltag.txt` | it | 443 |

### Vorgehen

- In neun Blöcken (≤ 50 Zeilen) übersetzt, nach jedem Block `node scripts/pruefe.mjs woerter/it-ausbau-alltag.txt`.
- Antworten vom Deutschen aus (mit Klammerhinweis), Substantive mit bestimmtem Artikel, Personen maskulin mit der
  femininen Form als Weitere Antwort, wo üblich (l'inquilino / l'inquilina, il cassiere / la cassiera …). Eindeutig
  weibliche deutsche Wörter nur feminin (Putzfrau, Cousine, Hausfrau, Hebamme, Halbschwester, Schwiegertochter …).
- Zum Schluss alle Paare „Deutsch; Antwort“ mit `node scripts/gibt-es.mjs --lang it` gegen den Katalog geprüft.
  Daraufhin bei Creme die Weitere Antwort „la pomata“ gestrichen (im Katalog ist Salbe – la pomata, it-kg-0051).
- Beispielsätze eigene italienische Sätze. Meist sagt die deutsche Übersetzung aus dem Original genau dasselbe; bei
  diesen Zeilen ist der deutsche Satz neu bzw. angepasst: it-xa-0052 (Sieb: Tee statt Nudeln), 0123, 0137, 0191, 0197,
  0216, 0233, 0286, 0293, 0295, 0380, 0401 („in Italien“ statt „in Deutschland“), 0402, 0406, 0423, 0426, 0427.
- Stichprobe (30 Zeilen quer durch alle Themen) kritisch durchgesehen; danach die zu kurzen Beispielsätze (unter sechs
  Wörtern im Italienischen) verlängert.

### Alias-Kandidaten (pruefe.mjs ⚠, Zeilen behalten)

Gleiches Wortpaar in den parallel entstehenden X-it-Dateien:

| hier | dort | Wortpaar |
|---|---|---|
| it-xa-0016 | it-xd-0192 | Kaution – la cauzione |
| it-xa-0063 | it-xc-0092 | Zimmerpflanze – la pianta da appartamento |
| it-xa-0176 | it-xe-0282 | Loch – il buco |
| it-xa-0262 | it-xd-0175 | Gastgeber – il padrone di casa |
| it-xa-0281 | it-xc-0316 | Friedhof – il cimitero |

(Stand am Ende meiner Arbeit; die anderen X-it-Dateien entstanden parallel, daher beim Mergen erneut prüfen.)

Die englischen Originale haben dieselben Doppelungen vermutlich auch (W1/W3/W4/W5) – Alias wie dort.

### Listenvorschläge

Die bestehenden italienischen Themenlisten nehmen die Wörter über ihre Filter automatisch auf (`count`/`version` beim
Mergen erhöhen): `it-alltag-zuhause` (+67), `it-essen-trinken` (+91), `it-kleidung-mode` (+30), `it-einkaufen-geld`
(+20), `it-familie-beziehungen` (+50), `it-koerper-gesundheit` (+144), `it-gefuehle-charakter` (+41, siehe offene
Frage 1 in W1.md – gleiche Entscheidung wie für Englisch).

Neue Listen analog zu W1.md, alle mit `"answerLang": "it"`:

| id | name | level | filter |
|---|---|---|---|
| `it-aussehen-lebensphasen` | Italienisch: Aussehen & Lebensphasen | A2 | topics `Mensch/Aussehen`, `Mensch/Lebensphasen` |
| `it-koerperpflege` | Italienisch: Körperpflege | A2 | topics `Gesundheit/Körperpflege` |
| `it-haushalt-geraete` | Italienisch: Haushalt & Geräte | A2 | topics `Alltag/Zuhause/Haushalt`, `Alltag/Zuhause/Geräte` |
| `it-symptome-krankheiten` | Italienisch: Symptome & Krankheiten | B1 | topics `Gesundheit/Symptome`, `Gesundheit/Krankheiten` |
| `it-obst-gemuese-lebensmittel` | Italienisch: Lebensmittel | A1 | topics `Alltag/Essen/Lebensmittel` |

(description wie in W1.md; die Zahlen gelten wie dort, sofern es die italienischen Fassungen der Altdateien gibt.)

### Gleiche Antwort für verschiedene deutsche Wörter

Kein Fehler (anderes Wortpaar), aber für Lernende verwechselbar:

- In dieser Datei: Karotte / Möhre – la carota; Vermieter / Gastgeber – il padrone di casa; Blase (Organ) /
  Blase (auf der Haut) – la vescica (Weitere Antwort bei der Hautblase: la bolla); Witwer – il vedovo / verwitwet –
  vedovo; Schnittwunde – il taglio (auch Weitere Antwort bei Haarschnitt).
- Mit dem Katalog: Kleiderschrank / Schrank – l'armadio; Brieftasche / Geldbörse / Geldbeutel – il portafoglio;
  Kassenzettel / Kassenbon / Quittung – lo scontrino; Hähnchen / Huhn – il pollo; Torte / Kuchen – la torta;
  Esslöffel / Löffel – il cucchiaio; Oma / Großmutter – la nonna; Opa / Großvater – il nonno; Vorname / Name – il nome;
  Enkelkind / Enkel / Neffe – il nipote; Säugling / Baby – il neonato; Halbschwester / Stiefschwester – la
  sorellastra; Bücherregal / Buchhandlung – la libreria; Walnuss / Nuss – la noce; Kantine / Mensa – la mensa;
  Taille / Leben – la vita; anstehen / Schlange stehen – fare la fila; einnehmen / nehmen – prendere; gebrochen /
  kaputt – rotto; vorrätig / verfügbar – disponibile; schick / elegant – elegante.
- `gibt-es.mjs` meldet „DA“ für Farbe (zum Streichen) (Farbe – il colore, ohne Klammer; siehe W1.md offene Frage 3)
  und Trage (Normalisierung zu „träge“; siehe W1.md offene Frage 5).

### Unsicherheiten

- **Haushalt (zu Hause) – il nucleo familiare:** Italienisch hat kein so alltägliches Wort wie „household“; „la casa“
  oder „la famiglia“ wären zu allgemein bzw. kollidieren. Der Beispielsatz klingt etwas förmlich.
- **Tagesmutter – la tata**, Weitere Antwort „la tagesmutter“ (in Italien als Lehnwort für das Betreuungsmodell
  üblich); „la tata“ ist eher Kinderfrau/Nanny.
- **schwindelig – stordito**, Weitere Antwort „avere le vertigini“; im Alltag sagt man meist „mi gira la testa“.
- **Nasenbluten – il sangue dal naso** (fachlich l'epistassi); als Substantiv nicht ganz idiomatisch.
- **Sprechstunde (Arzt) – l'orario di ambulatorio**, Weitere Antwort „l'orario di ricevimento“.
- **Café – il bar**, Weitere Antwort „il caffè“: Das italienische Pendant zum Café ist die Bar.
- **gebraten – fritto:** deckt „gebratene Kartoffeln“ nur ungefähr ab (in der Pfanne gebraten auch „saltato“,
  „arrosto“).
- **Schaufensterbummel – il giro per vetrine:** üblich ist eher die Wendung „fare un giro per vetrine“ / „guardare le
  vetrine“.
- **weitsichtig – presbite**, Weitere Antwort „ipermetrope“: Der Beispielsatz (Lesebrille) meint Altersweitsichtigkeit.
- **Halbschwester – la sorellastra:** im Italienischen auch Stiefschwester; genauer wäre „la sorella per parte di
  padre/madre“ (zu lang als Antwort).
- **Lack – la lacca**, Weitere Antwort „la vernice trasparente“; „la vernice“ ist schon Antwort bei Farbe (zum
  Streichen).
- **Sieb – il colino** (Weitere: il setaccio, lo scolapasta): für Nudeln sagt man lo scolapasta; deshalb ein eigener
  Beispielsatz mit Tee.
- **Föhn – l'asciugacapelli** (Weitere: il phon, il fon): im Alltag ist „il phon“ häufiger.

### Niveau (nur Hinweis, nicht geändert)

Im Italienischen eher leichter als im Englischen: Hülsenfrüchte – i legumi (C1 → eher B1), Sauerteig – il lievito
madre (C1 → eher B2), Innereien – le frattaglie (C1, passt), Café – il bar (A1, passt).

### Offene Fragen

1. Die neue Quelle braucht `"lang": "it"` und beim Mergen die oben genannten Aliase (nach dem Merge der übrigen
   X-it-Dateien `node scripts/pruefe.mjs --dubletten` über alle it-Dateien).
2. Ändert sich beim Merge von W1 noch eine Zeile des Originals (Klammerhinweis, Antwort, Thema), die Fassung nachziehen.

---

## Paket X-it: Ausbau Schule und Arbeit (Italienisch)

### Zusammenfassung

Neue Wortdatei `woerter/it-ausbau-schule-arbeit.txt` mit **440 Zeilen** (it-xb-0001 bis it-xb-0440), eine Zeile je
Zeile des Originals `woerter/ausbau-schule-arbeit.txt` aus W2, gleiche Nummern und Reihenfolge, keine Zeile ausgelassen.
Deutsch (mit Klammerhinweisen), Niveau und Themen unverändert; ein eigenes Prüfskript hat das Zeile für Zeile gegen
das Original abgeglichen (0 Abweichungen). Neu sind Antwort, Weitere Antworten und beide Beispielsätze.

- Niveaus wie im Original: A1 14 · A2 88 · B1 171 · B2 132 · C1 35.
- Antworten: italienische Standardsprache, Substantive mit bestimmtem Artikel (l' vor Vokal; Pluralwörter mit
  i/gli/le: le tabelline, le impostazioni, le virgolette, le istruzioni per l'uso, gli abiti da lavoro, gli occhiali
  protettivi, i guanti da lavoro, i media, gli appunti), Verben im Infinitiv (reflexiv: iscriversi, concentrarsi),
  Adjektive maskulin. Personen mit femininer Form als Weitere Antwort, wo üblich (il traduttore / la traduttrice,
  il postino / la postina, l'editore / l'editrice). Keine Kommas, Schrägstriche, Klammern oder Abkürzungen in Antworten.
- Beispiele: eigene italienische Sätze (6–12 Wörter) mit deutscher Übersetzung, die das deutsche Wort enthält. Meist
  passt die deutsche Übersetzung des Originals; angepasst u. a. bei Grammatik und Aussprache (italienische Beispiele:
  Plural uovo/uova, Komparativ buono/migliore, Superlativ cattivo/pessimo, Endung ato, Vorsilbe in, Nachsilbe ezza,
  Zukunftsform andrò/vedrò, Verneinung mit non, Betonung in città, Redewendung „Piove a catinelle“, Synonym
  veloce/rapido, Abkürzung UE, Adverbien auf mente), Orte (Rom, Mailand, Bologna, Kolosseum statt Berlin, Köln, London,
  Eiffelturm), Zitat von Dante statt Goethe, „In Italien sind fast alle Filme synchronisiert“.
- Gearbeitet in 9 Blöcken mit höchstens 50 Zeilen, nach jedem Block `pruefe.mjs` und ein eigenes Prüfskript (Feldzahl,
  Abgleich mit dem Original, Zeichen in Antworten, Satzlängen, Wort im Beispiel). Vorher alle 440 deutschen Wörter mit
  `gibt-es.mjs --lang it` geprüft: alle neu (der einzige Treffer „sägen“ ist der bekannte Umlaut-Fehler von gibt-es,
  gefunden wurde „sagen“).
- Zusätzlich die deutschen Wörter gegen die vier anderen Ausbau-Originale (W1, W3, W4, W5) und deren italienische
  Fassungen im Worktree abgeglichen und bei gleicher Bedeutung dieselbe Antwort genommen (siehe Alias-Kandidaten).
- `node scripts/pruefe.mjs woerter/it-ausbau-schule-arbeit.txt`: **0 Fehler**, 25 Hinweise (Datei noch nicht in
  katalog.json, 24 Alias-Kandidaten).
- Schlusskontrolle: 30 Zeilen wie bei einer Korrektur durchgesehen (Übersetzung, Niveau, natürliche Sätze); dabei
  nachgebessert: Maler und Computerspiel (an die W4-Fassung angeglichen, s. u.), „hämmern“ (sta martellando statt
  martella), dazu vorher zwei Sätze mit falscher Länge (Partnerarbeit, Abschnitt).

### Neue Quelle (für katalog.json)

```json
{ "id": "it-ausbau-schule-arbeit", "file": "woerter/it-ausbau-schule-arbeit.txt", "lang": "it", "version": 1, "count": 440 }
```

### Listenvorschläge

Wie in pakete/W2.md, jeweils mit `"answerLang": "it"`, Name mit Präfix „Italienisch: …“, gleiche Filter. Die bestehenden
it-Listen mit Filter auf ein Oberthema (`it-schule-bildung`, `it-arbeit-beruf`, `it-technik-computer`,
`it-medien-kommunikation`, Alltag) wachsen wie im Englischen automatisch mit (count/version anpassen).

| id | name | level | filter |
|---|---|---|---|
| `it-sprache-grammatik` | Italienisch: Sprache & Grammatik | B1 | topics `Bildung/Sprache` (85) |
| `it-berufe` | Italienisch: Berufe | A2 | topics `Arbeit/Beruf/Berufe` (33 neu + vorhandene) |
| `it-buero-arbeitsplatz` | Italienisch: Büro & Arbeitsplatz | B1 | topics `Arbeit/Beruf/Arbeitsplatz` (20) |
| `it-werkzeug-handwerk` | Italienisch: Werkzeug & Handwerk | B1 | topics `Alltag/Zuhause/Werkzeug`, `Technik/Material` (35 neu + vorhandene) |
| `it-strom-maschinen` | Italienisch: Strom, Geräte & Maschinen | B1 | topics `Technik/Elektrik`, `Technik/Maschinen` (25) |
| `it-schule-klassenzimmer` | Italienisch: Im Klassenzimmer | A2 | topics `Bildung/Schule` (69 neu + vorhandene) |

Die Sprache-&-Grammatik-Liste hat im Italienischen italienische Grammatik-Beispiele (s. o.); Name und Beschreibung
passen trotzdem.

### Alias-Kandidaten

`pruefe.mjs` meldet 24 Wortpaare, die schon in einer anderen it-Datei stehen (alle aus den parallel entstandenen
Ausbau-Fassungen; die Originale sind im Englischen ebenfalls doppelt). Zeilen behalten, beim Mergen mit
`node scripts/aliase.mjs` als Alias führen (Haupt-ID nach der Regel „älteste Quelle“):

| it-xb | Wortpaar | steht auch als |
|---|---|---|
| 0050 | addieren – addizionare | it-xd-0358 |
| 0051 | subtrahieren – sottrarre | it-xd-0359 |
| 0052 | multiplizieren – moltiplicare | it-xd-0360 |
| 0053 | dividieren – dividere | it-xd-0361 |
| 0057 | Ziffer – la cifra | it-xd-0363, it-xe-0347 |
| 0058 | Geometrie – la geometria | it-xd-0370 |
| 0087 | zitieren – citare | it-xe-0402 |
| 0095 | sich konzentrieren – concentrarsi | it-xe-0375 |
| 0191 | Maler – il pittore | it-xd-0264 |
| 0224 | Kantine – la mensa | it-xa-0146 |
| 0258 | Fernbedienung – il telecomando | it-xa-0032 |
| 0265 | Spielkonsole – la console | it-xd-0433 |
| 0304 | Privatsphäre – la privacy | it-xd-0063 |
| 0320 | Computerspiel – il gioco per computer | it-xd-0432 |
| 0332 | Stecker – la spina | it-xa-0028 |
| 0338 | Stromausfall – il blackout | it-xc-0295 |
| 0345 | Erfinder – l'inventore | it-xd-0339 |
| 0358 | Metall – il metallo | it-xd-0350 |
| 0359 | Stahl – l'acciaio | it-xd-0352 |
| 0360 | Eisen – il ferro | it-xd-0351 |
| 0382 | Lupe – la lente d'ingrandimento | it-xd-0337 |
| 0405 | Kritiker – il critico | it-xd-0307 |
| 0411 | Titel – il titolo | it-xd-0285 |
| 0438 | Briefkasten – la cassetta delle lettere | it-xa-0006 |

Bewusst angeglichen, damit es saubere Aliase werden: **Computerspiel** (erst „il videogioco“, jetzt wie it-xd-0432
„il gioco per computer“, „il videogioco“ als Weitere) und **Maler** (erst „l'imbianchino“, jetzt wie it-xd-0264
„il pittore“, Weitere „l'imbianchino, il pittore edile“). Ändert die Hauptsession eine der Fassungen in W4/X-it noch,
bitte hier nachziehen, sonst entstehen statt Aliasen zwei Einträge mit verschiedener Antwort.
Gleiches deutsches Wort mit anderem Klammerhinweis (kein Alias, andere Bedeutung): Sprechstunde (Hochschule/Arzt),
Abkürzung (Wort/Weg), Schluss (Text/Ende), tippen (schreiben/wetten), surfen (im Internet/Wellen),
Schalter (für Strom/Bahnhof).

In der Datei selbst gleiche Antworten bei verschiedenen deutschen Wörtern (wie im Englischen, kein Alias):
Mitschüler/Klassenkamerad (il compagno di classe), Vorsilbe/Vorwahl (il prefisso), Betonung/Akzent (l'accento),
Karteikarte/Registerkarte (la scheda), Lehrbuch/Handbuch (il manuale), Überschrift/Titel (il titolo),
Störung (il guasto)/defekt (guasto).

### Umschreibungen und italienische Entsprechungen deutscher oder britischer Begriffe

- **Nachsitzen** (xb-0011): In Italien gibt es kein Nachsitzen als feste Einrichtung; Antwort ist die Umschreibung
  „restare a scuola per punizione“ (kein Substantiv). Alternative wäre „la punizione“, das ist aber „Strafe“.
- **Gesamtschule** (xb-0067): „la scuola integrata“ (Wörterbuchentsprechung, in Italien unbekanntes Konzept); Beispiel
  spielt deshalb in Deutschland.
- **Fachhochschule** (xb-0082): „l'università di scienze applicate“ (Übersetzung des deutschen Begriffs).
- **Klassenlehrer** (xb-0002): an italienischen Schulen „il coordinatore di classe“ (Mittel- und Oberschule);
  „l'insegnante di classe“ als Weitere. In der Grundschule wäre es „il maestro“ – nicht aufgenommen.
- **Projektwoche** (xb-0026): „la settimana dei progetti“ – verständlich, aber kein fester Begriff.
- **Bachelor/Master** (xb-0079/0080): italienische Studienabschlüsse „la laurea triennale“ / „la laurea magistrale“;
  „il master“ ist im Italienischen ein Aufbaustudiengang und deshalb nicht als Weitere aufgenommen.
- **Hausaufgabenheft** (xb-0045): „il diario scolastico“ (in Italien heißt das Heft einfach „il diario“, das steht als
  Weitere; „il diario“ ist sonst auch Tagebuch).
- **Vokabelheft** (xb-0044): „il quaderno dei vocaboli“, Weitere „la rubrica“ (so nennen es italienische Schüler).
- **Hausmeister** (xb-0201): „il custode“, Weitere „il bidello“ (Schulhausmeister).
- **Postleitzahl** (xb-0436): „il codice postale“; im Alltag sagt man fast immer „il CAP“ – als Abkürzung nicht
  aufgenommen. Langform „il codice di avviamento postale“ als Weitere.
- **SMS** (xb-0324): „il messaggino“, Weitere „il messaggio“; „l'SMS“ als Abkürzung nicht aufgenommen.
- **Vorwahl, besetzt, Briefkasten, Rundfunk** (britische Begriffe im Original): il prefisso, occupato, la cassetta
  delle lettere (Weitere: la buca delle lettere, la cassetta postale), la radiotelevisione (Beispiel mit „canone“ statt
  licence fee).
- **Zwischenablage** (xb-0293): „gli appunti“ – so heißt sie in der italienischen Windows-Oberfläche; das Wort bedeutet
  sonst „Notizen“.
- **3D-Drucker, USB-Stick, SIM-Karte, QR-Code** behalten wie im Original die Buchstaben (la stampante 3D, la chiavetta
  USB, la scheda SIM, il codice QR).

### Unsicherheiten und offene Fragen

- **Maler** (xb-0191): Im Italienischen zwei Wörter – Handwerker „l'imbianchino“, Künstler „il pittore“. Wegen W4
  (xd-0264) jetzt „il pittore“ als Hauptantwort; im Berufe-Kontext von W2 wäre „l'imbianchino“ passender. Vorschlag für
  später: Klammerhinweise „Maler (Handwerk)“ / „Maler (Kunst)“ im Original; dann hier „l'imbianchino“.
- **Empfang** (xb-0225): „la reception“ (Büro, Hotel). Das deutsche Wort ist im Italienischen mehrdeutig: Handyempfang
  „il campo/la ricezione“, Feier „il ricevimento“. Im Englischen nicht (reception), deshalb ohne Klammerhinweis im
  Original – für M-it ggf. „Empfang (Büro)“.
- **Gummi** (xb-0362) „la gomma“ ist auch Radiergummi; **Maschine** (xb-0343) „la macchina“ ist auch Auto; **Geodreieck**
  „la squadra“ ist auch Mannschaft – im Zusammenhang klar.
- **Bohrer** (xb-0365): „la punta da trapano“ (Bohraufsatz) wie im Original drill bit; „il trapano“ (Bohrmaschine) nicht
  als Weitere, weil anderes Gerät.
- **Kugelschreiber** (xb-0031): „la penna a sfera“ als Hauptantwort, „la biro, la penna“ als Weitere; im Alltag sagt man
  fast immer „la penna“.
- **Schulbuch/Lehrbuch** (xb-0039/0040): Schulbuch „il libro di testo“, Lehrbuch „il manuale“ (Weitere: il libro di
  testo); im Englischen beide textbook.
- **Niveaus** (unverändert übernommen, nur Hinweis): Für Italienischlernende wären einige anders, z. B. Kugelschreiber
  A1 nur für „la penna“, Postleitzahl eher A2, Fachwörter wie Klassenlehrer (coordinatore di classe) und Schulweg eher
  B1. Grammatikbegriffe (sostantivo, aggettivo, preposizione) sind für Deutschsprachige leicht erkennbar, die Niveaus
  passen trotzdem.
- **Studiengebühr** (xb-0070): Hauptantwort im Singular „la tassa universitaria“ wie das deutsche Wort; im Italienischen
  meist Plural („le tasse universitarie“, als Weitere).
- **streamen** (xb-0312): „guardare in streaming“ (passend zum Beispiel); für Anbieter wäre es „trasmettere in
  streaming“ (Weitere).

---

## Paket X-it: Ausbau Natur und Welt (Italienisch)

### Zusammenfassung

Neue Wortdatei `woerter/it-ausbau-natur-welt.txt` mit **461 Zeilen** (it-xc-0001 bis it-xc-0461), so viele wie das
Original `woerter/ausbau-natur-welt.txt` aus W3 und in derselben Reihenfolge (das Original ist lückenlos sortiert).
Deutsch (mit Klammerhinweisen), Niveau und Themen sind unverändert aus dem Original übernommen; ab Zeile 151 hat ein
Skript diese Felder direkt aus der W3-Datei eingesetzt, für 1–150 hat ein Abgleichskript sie gegen das Original
geprüft (0 Abweichungen). Neu sind nur Antwort, Weitere Antworten und die beiden Beispielsätze.

- Niveaus wie im Original: A1 22 · A2 104 · B1 177 · B2 122 · C1 36.
- Antworten: italienische Standardsprache, Substantive mit bestimmtem Artikel (l' vor Vokal, Pluralwörter mit
  i/gli/le: i cereali, le foglie, i rifiuti ingombranti, i combustibili fossili, i Paesi Bassi, gli Stati Uniti),
  Verben im Infinitiv (reflexiv: sciogliersi), Adjektive in der maskulinen Grundform. Personen mit femininer Form als
  Weitere Antwort, wo üblich (il veterinario / la veterinaria, il ciclista / la ciclista, il tassista / la tassista).
  Kein Komma, Schrägstrich oder Klammer in einer Antwort.
- Länder und Kontinente mit Artikel, wie man sie im Italienischen nennt (la Germania, l'Italia, il Regno Unito,
  l'Europa). Ohne Artikel gibt es keine Weitere Antwort; bitte prüfen, ob die App „Italia“ ohne „l'“ als richtig wertet
  (dieselbe Frage wie bei „the Netherlands“ in W3).
- Beispiele: eigene italienische Sätze (6–12 Wörter) mit deutscher Übersetzung. Meist passt die deutsche Übersetzung
  des Originals; in rund 45 Zeilen habe ich sie an den italienischen Satz angepasst (z. B. Turin statt Hamburg bei
  Nordwesten, Neapel/New York beim Breitengrad, Larderello bei Erdwärme, Kolosseum bei Wahrzeichen, Mailand bei Vorort,
  Rom bei Stadtteil, Florenz beim Reisebus, Führerschein mit 18 bei Fahrschule, Frankreich als größtes Nachbarland
  Italiens) oder Sätze verlängert, die unter 6 Wörtern lagen.
- Gearbeitet in 10 Blöcken mit höchstens 50 Zeilen, nach jedem Block `pruefe.mjs`. Vorher alle 461 deutschen Wörter mit
  `gibt-es.mjs --lang it` geprüft: 457 neu; die 4 Treffer sind andere Wörter bzw. Bedeutungen (Quelle – la fonte
  it-mk-0100, Sackgasse – il vicolo cieco it-vh-0076, Rasen – il prato, „fährt“ aus den Lesewörtern).
- `node scripts/pruefe.mjs woerter/it-ausbau-natur-welt.txt`: **0 Fehler**, 13 Hinweise (Datei noch nicht in
  katalog.json, 12 Alias-Kandidaten, siehe unten).
- Schlusskontrolle: Feldzahl, Zeichen in Antworten, Satzlängen und Vorkommen der Antwort im Satz per Skript geprüft;
  30 zufällige Zeilen wie bei einer Korrektur durchgesehen (Übersetzung, Niveau, natürliche Sätze). Dabei 13 Sätze
  nachgebessert (12 zu kurze, dazu Pony: „cavalca un pony“ statt „va a cavallo di un pony“).

### Neue Quelle (für katalog.json)

```json
{ "id": "it-ausbau-natur-welt", "file": "woerter/it-ausbau-natur-welt.txt", "lang": "it", "version": 1, "count": 461 }
```

### Listenvorschläge

Wie in `pakete/W3.md`, jeweils als italienische Fassung mit `"answerLang": "it"`, falls die englischen Listen beim
Mergen angelegt werden (Name mit Präfix „Italienisch: …“, Filter über dieselben Themen, nur Quelle
it-ausbau-natur-welt bzw. die italienischen Quellen):

| id | name | level | filter |
|---|---|---|---|
| it-laender-nationalitaeten | Italienisch: Länder & Nationalitäten | A1 | topics: ["Reisen/Länder & Nationalitäten"] + Kontinente aus Natur/Geografie |
| it-geografie | Italienisch: Geografie: Erde, Himmelsrichtungen, Karten | B1 | topics: ["Natur/Geografie"] |
| it-stadt-gebaeude | Italienisch: Stadt & Gebäude | B1 | topics: ["Alltag/Stadt"] |
| it-tiere-ausbau | Italienisch: Tiere: mehr Wörter | A2 | topics: ["Natur/Tiere"], Quelle it-ausbau-natur-welt |
| it-natur-landschaft-ausbau | Italienisch: Pflanzen, Landschaft & Landwirtschaft | B1 | topics: ["Natur/Pflanzen", "Natur/Landschaft", "Natur/Landwirtschaft"] |
| it-wetter-ausbau | Italienisch: Wetter & Naturkatastrophen | B1 | topics: ["Natur/Umwelt/Wetter", "Natur/Umwelt/Naturkatastrophen"] |
| it-verkehr-ausbau | Italienisch: Verkehr: Auto, Rad, Bahn | B1 | topics: ["Reisen/Verkehr"] |

Wie in W3.md: Wenn die bestehenden italienischen Themenlisten per Themenfilter definiert sind, nehmen sie die neuen
Wörter automatisch auf.

### Alias-Kandidaten (Wortpaar steht schon in einer anderen it-Datei)

Alle Zeilen behalten, weil sie zum Original gehören. Es sind Überschneidungen zwischen den parallelen X-it-Dateien,
also dieselben deutschen Wörter in mehreren W-Paketen (beim Mergen mit dem englischen Stand abgleichen: Wird dort ein
Alias xc ↔ xa/xb/xd/xe gesetzt, hier entsprechend):

| it-xc | Wortpaar | steht schon als |
|---|---|---|
| it-xc-0092 | Zimmerpflanze – la pianta da appartamento | it-xa-0063 |
| it-xc-0227 | kühl – fresco | it-xe-0104 |
| it-xc-0256 | Gefrierpunkt – il punto di congelamento | it-xd-0349 |
| it-xc-0295 | Stromausfall – il blackout | it-xb-0338 |
| it-xc-0316 | Friedhof – il cimitero | it-xa-0281 |
| it-xc-0320 | Ruine – la rovina | it-xd-0242 |
| it-xc-0321 | Statue – la statua | it-xd-0266 |
| it-xc-0328 | Botschaft (Vertretung) – l'ambasciata | it-xd-0033 |
| it-xc-0338 | Schaukel – l'altalena | it-xd-0427 |
| it-xc-0356 | Krankenwagen – l'ambulanza | it-xa-0380 |
| it-xc-0390 | Kurve – la curva | it-xe-0299 |
| it-xc-0449 | Eintritt – l'ingresso | it-xd-0274 |

Gleiche Antwort bei anderem deutschen Wort innerhalb der Datei (Synonyme bzw. im Italienischen zusammenfallende
Bedeutungen, keine Aliase): Schatten (kühler Ort) / Schatten (Umriss) – l'ombra; Orkan / Hurrikan – l'uragano;
Sonnenaufgang / Morgengrauen – l'alba; Stadtteil / Stadtviertel – il quartiere; Beifahrer / Passagier – il passeggero;
Scheinwerfer / Leuchtturm – il faro.

### Mehrdeutigkeiten, die es nur im Italienischen gibt

- **Sackgasse (Straße)** – Antwort „la strada senza uscita“, „il vicolo cieco“ als Weitere Antwort. Die bestehende
  Zeile it-vh-0076 „Sackgasse – il vicolo cieco“ (ausweglose Lage) hat dieselbe Weitere Antwort; im Italienischen
  deckt „vicolo cieco“ beide Bedeutungen ab. pruefe.mjs meldet keine Dublette (Weitere Antworten zählen nicht), aber
  beim Mergen von M-it sollte it-vh-0076 den Klammerhinweis aus M-en bekommen.
- **Quelle (Wasser)** – „la sorgente“; „la fonte“ bewusst nicht als Weitere Antwort, weil it-mk-0100 „Quelle – la
  fonte“ (Herkunft) heißt.
- **il faro** steht für Scheinwerfer und Leuchtturm – das ist im Italienischen so, die deutschen Wörter sind eindeutig.

### Unsicherheiten und offene Fragen

- **Tintenfisch (0047)**: Hauptantwort „il calamaro“ wie im Original (squid), Weitere „la seppia, il polpo“, weil
  „Tintenfisch“ im Alltag alle drei meint. Streng genommen sind das drei verschiedene Tiere.
- **Motte (0068)**: „la falena“ (Nachtfalter, passt zum Satz mit der Lampe), „la tarma“ (Kleidermotte) als Weitere.
- **Ungeziefer (0070)**: „i parassiti“, Weitere „gli animali infestanti“ – kein ganz deckungsgleiches Wort.
- **Brandung (0132)**: „la risacca“, Weitere „i frangenti“. „Risacca“ ist genau genommen der Rücklauf der Wellen, wird
  aber für das Rauschen der Brandung allgemein gebraucht.
- **Glatteis (0229)**: Kein gängiges Einzelwort; „il ghiaccio sulla strada“, Weitere „il vetrato“ (Fachwort der
  Wetterberichte). Bitte prüfen.
- **Sonnenschein (0239)**: „il sole“ („una settimana di sole“), Weitere „la luce del sole“.
- **Hochhaus (0313)**: „il palazzone“ (umgangssprachlich, aber die übliche Bezeichnung), Weitere „l'edificio a molti
  piani“. „il grattacielo“ steht für Wolkenkratzer.
- **Starthilfe (0379)**: „l'avviamento con i cavi“, Weitere „l'avviamento di emergenza“. Im Alltag sagt man eher
  „far partire la macchina con i cavi“; ein festes Substantiv gibt es kaum.
- **rasen (0388)**: „sfrecciare“, Weitere „correre troppo“. Das englische „to speed“ (zu schnell fahren) hat keine
  genaue Einwortentsprechung.
- **Schwarzfahrer (0407)**: „il portoghese“ (gängig, umgangssprachlich), Weitere „il passeggero senza biglietto“.
- **Städtereise (0433)**: „la vacanza in città“, Weitere „il city break“ (in Reisekatalogen üblich). Bitte prüfen.
- **Reiseleiter (0434)**: „l'accompagnatore turistico“ (begleitet die Gruppe), „la guida turistica“ als Weitere,
  obwohl sie eigentlich die örtliche Führerin ist – im Alltag werden beide vermischt.
- **Reisewarnung (0445)**: „l'avviso ai viaggiatori“, Weitere „l'avvertenza per i viaggiatori“ – das Außenministerium
  formuliert meist „sconsiglia i viaggi“; ein festes Wort fehlt.
- **seekrank (0446)**: Das Italienische hat kein Adjektiv; Antwort „avere il mal di mare“, Weitere „soffrire il mal di
  mare“ (Wendung statt Adjektiv).
- **Reisekrankheit (0447)**: „il mal d'auto“, Weitere „la cinetosi“ (Fachwort).
- **Kulturbeutel (0461)**: „il beauty case“ (so sagt man in Italien), Weitere „il necessaire“.
- **Abkürzungen**: „gli USA“ (0192) bleibt Weitere Antwort wie „the USA“ im Original, weil man es so spricht;
  „l'e-bike“ (0369) ebenso. Hauptantworten sind ausgeschrieben.
- **Bindestriche**: „il nord-est“ usw. mit „il nordest“ als Weitere; „il tragitto casa-lavoro“ (0403). `norm` macht aus
  dem Bindestrich ein Leerzeichen.
- **Niveau** (nicht geändert, nur Hinweis): Einige Wörter wären im Italienischen eher leichter – „cinguettare“
  (zwitschern, C1) und „l'ortica“ (Brennnessel, C1) eher B2; „il bagnino“ (Rettungsschwimmer) ist in Italien
  Alltagswort. Länder wie im Original.

### Hinweis

Einmal versehentlich `git status` (nur lesend, ohne Ausgabe) im Worktree aufgerufen; sonst keine git-Befehle, keine
anderen Dateien geändert. Hilfsskripte liegen im Scratchpad unter `X-it-ausbau-natur-welt\`.

---

## Paket X-it: Ausbau Gesellschaft (Italienisch)

### Zusammenfassung

Neue Wortdatei `woerter/it-ausbau-gesellschaft.txt` mit **442 Zeilen** (it-xd-0001 bis it-xd-0442), so viele wie das
Original `woerter/ausbau-gesellschaft.txt` aus W4 und in derselben Reihenfolge. Deutsch (mit Klammerhinweisen), Niveau
und Themen sind unverändert aus dem Original übernommen. Ein Skript hat diese drei Felder direkt aus der W4-Datei
eingesetzt. Nur Antwort, Weitere Antworten und die beiden Beispielsätze sind neu.

- Antworten: italienische Standardsprache, Substantive mit bestimmtem Artikel (l' vor Vokal, Pluralwörter mit i/gli/le),
  Verben im Infinitiv, Adjektive in der maskulinen Grundform. Bei Personen ist die feminine Form eine Weitere Antwort,
  wenn sie üblich ist (il ladro / la ladra). Kein Komma, Schrägstrich oder Klammer in einer Antwort, keine Abkürzungen.
- Beispiele: eigene italienische Sätze (meist 6 bis 12 Wörter) mit deutscher Übersetzung. Wo es passt, kommen Orte und
  Bezüge aus Italien vor (Gardasee, Scala, Mailand, Bologna, Repubblica dal 1946). Wie im Original haben die vier
  Rechensätze (più, meno, per, diviso) nur 5 Wörter.
- Gearbeitet habe ich in 9 Blöcken mit je höchstens 50 Zeilen und nach jedem Block `pruefe.mjs` laufen lassen.
  Vorher habe ich alle 442 deutschen Wörter mit `gibt-es.mjs --lang it` geprüft: 438 sind neu. Die 4 Treffer sind die
  bewussten anderen Bedeutungen aus W4 (Fest, Reich, Probe, Würfel).
- `node scripts/pruefe.mjs woerter/it-ausbau-gesellschaft.txt`: **0 Fehler**. Die Hinweise: Die Datei steht noch
  nicht in katalog.json, und 18 Wortpaare stehen auch in den parallelen X-it-Dateien (siehe Alias-Kandidaten).
- Schlusskontrolle: Ein Skript hat geprüft, ob die Antwort im italienischen Satz vorkommt und ob die Sätze lang genug
  sind. 11 zu kurze Sätze habe ich verlängert. Danach habe ich 30 Zeilen (jede 15.) wie bei einer Korrektur auf
  Übersetzung, Niveau und natürliche Sätze durchgesehen.

### Neue Quelle (für katalog.json)

```json
{ "id": "it-ausbau-gesellschaft", "file": "woerter/it-ausbau-gesellschaft.txt", "lang": "it", "version": 1, "count": 442 }
```

### Listenvorschläge

Wie in `pakete/W4.md` vorgeschlagen, jeweils als italienische Fassung mit `"answerLang": "it"`, falls die englischen
Listen beim Mergen angelegt werden:

| id | name | filter |
|---|---|---|
| it-religion | Italienisch: Religion & Glaube | topics: ["Gesellschaft/Religion"] |
| it-feste-feiertage | Italienisch: Feste & Feiertage | topics: ["Freizeit/Feste & Feiern"] |
| it-geschichte | Italienisch: Geschichte | topics: ["Kultur/Geschichte"] |
| it-recht-kriminalitaet | Italienisch: Recht & Kriminalität | topics: ["Gesellschaft/Recht"] |
| it-politik-international | Italienisch: Krieg, Frieden & Weltpolitik | topics: ["Gesellschaft/Politik/Internationales"] |
| it-rechnen-geometrie | Italienisch: Rechnen & Geometrie | topics: ["Wissenschaft/Mathematik"] |
| it-musik-instrumente | Italienisch: Musik & Instrumente | topics: ["Kultur/Musik", "Freizeit/Musik"] |

Die bestehenden italienischen Themenlisten (Politik & Gesellschaft, Kunst & Kultur, Wissenschaft, Freizeit, Sport,
Wirtschaft) wachsen genauso wie die englischen in W4. Ihre count und version müssen also steigen.

### Alias-Kandidaten

Diese Wortpaare stehen gleich in den parallelen X-it-Dateien. Ich habe sie behalten, weil sie zum Original gehören:

| diese Datei | Wortpaar | auch in |
|---|---|---|
| it-xd-0192 | Kaution – la cauzione | it-xa-0016 |
| it-xd-0175 | Gastgeber – il padrone di casa | it-xa-0262 |
| it-xd-0033 | Botschaft (Vertretung) – l'ambasciata | it-xc-0328 |
| it-xd-0148 | Kreuz – la croce | it-xe-0284 |
| it-xd-0177 | gratulieren – congratularsi | it-xe-0368 |
| it-xd-0242 | Ruine – la rovina | it-xc-0320 |
| it-xd-0266 | Statue – la statua | it-xc-0321 |
| it-xd-0349 | Gefrierpunkt – il punto di congelamento | it-xc-0256 |
| it-xd-0358 | addieren – addizionare | it-xb-0050 |
| it-xd-0359 | subtrahieren – sottrarre | it-xb-0051 |
| it-xd-0360 | multiplizieren – moltiplicare | it-xb-0052 |
| it-xd-0361 | dividieren – dividere | it-xb-0053 |
| it-xd-0363 | Ziffer – la cifra | it-xe-0347, it-xb-0057 |
| it-xd-0365 | Rechteck – il rettangolo | it-xe-0285 |
| it-xd-0370 | Geometrie – la geometria | it-xb-0058 |
| it-xd-0427 | Schaukel – l'altalena | it-xc-0338 |
| it-xd-0270 | begabt – dotato | it-xe-0463 |
| it-xd-0271 | kreativ – creativo | it-xe-0455 |

Dieselben Dubletten gibt es vermutlich auch in den englischen W-Dateien (W4 gegen W1/W2/W3/W5). Die Haupt-ID richtet
sich nach der englischen Entscheidung beim Mergen. Die parallelen Agents schreiben noch, deshalb können weitere dazukommen.

### Unsicherheiten und offene Fragen

1. **Gleiche Antwort bei verschiedenen deutschen Wörtern in dieser Datei:** it-xd-0335 „Probe (Untersuchung)“ und
   it-xd-0408 „Meister (Sport)“ haben beide „il campione“. Beide Übersetzungen stimmen, und die Klammerhinweise machen
   die Bedeutung klar. Andere gleiche Antworten, die es schon im Katalog gibt und die kein Alias sind (anderes deutsches Wort):
   Darlehen/Kredit – il prestito, Geldschein/Schein – la banconota, Antike/Altertum – l'antichità,
   Kaution/Pfand – la cauzione, Bestechung/Korruption – la corruzione, Eigentum/Besitz – la proprietà,
   kostbar/wertvoll – prezioso, Export/Ausfuhr – l'esportazione, Import/Einfuhr – l'importazione,
   Erbschaft/Erbe – l'eredità, Prozess (vor Gericht)/Vorgang – il processo, Elektrizität/Strom – l'elettricità,
   Kurzgeschichte/Erzählung – il racconto, Studie/Arbeitszimmer – lo studio, Schall/Klang – il suono,
   Bankkarte/Geldautomat – il bancomat, Szene/Schauplatz – la scena.
2. **Mehrdeutige italienische Antworten:** „la domanda“ (Antrag, auch Frage), „l'asilo“ (Asyl, auch Kindergarten),
   „il saggio“ (Sachbuch, auch Essay oder Adjektiv weise), „il campione“ (Probe/Meister), „lo studio“ (Studie).
   „il papa“ (Papst) wird bei gibt-es.mjs ohne Akzent mit „il papà“ (Vater, Weitere Antwort) gleichgesetzt. Bei der
   Spracherkennung könnte das verwechselt werden.
3. **Kulturbezug:**
   - Gottesdienst – „la messa“ (in Italien üblich, katholisch), Weitere: la funzione religiosa.
   - Konfirmation – „la cresima“, Weitere: la confermazione. Die evangelische Konfirmation heißt auf Italienisch
     confermazione, aber im Alltag kennt man die cresima. Niveau C1 aus dem Original. Auf Italienisch wäre es eher B2.
   - Pfarrer – „il parroco“, Weitere: il prete, il pastore (evangelisch). Priester – „il sacerdote“, Weitere: il prete.
   - Weihnachtsmann – „Babbo Natale“, Silvester – „San Silvestro“ und Valentinstag – „San Valentino“ habe ich ohne
     Artikel als Namen geschrieben. Als Weitere Antworten stehen die Formen mit Artikel („la notte di San Silvestro“,
     „la festa di San Valentino“). Neujahr – „il Capodanno“, Weitere: il primo dell'anno. Capodanno meint umgangssprachlich
     auch die Silvesterfeier.
   - Muttertag – „la festa della mamma“. Jahrmarkt – „il luna park“, Weitere: la fiera. „fiera“ ist auch die Messe.
   - Online-Banking – „l'home banking“ (in Italien der übliche Ausdruck), Weitere: l'online banking, la banca online.
   - Bankkarte – „il bancomat“ (in Italien die Debitkarte), Weitere: la carta di debito.
4. **Umschrieben oder mehrteilig, weil es kein einzelnes Wort gibt:** segeln – „andare in barca a vela“, tauchen –
   „fare immersioni“ (Weitere: immergersi), surfen – „fare surf“, häkeln – „lavorare all'uncinetto“, würfeln – „tirare
   il dado“, Geldsorgen – „i problemi di soldi“, Entwicklungshilfe – „gli aiuti allo sviluppo“ (im Italienischen meist
   Plural). Bei verschwenderisch steht „sprecone“ (umgangssprachlich, eher für Personen). Für Handlungen sagt man „è uno
   spreco“.
5. **Weitere Wortwahl, über die man streiten kann:** Einbrecher – „lo scassinatore“ (im Alltag oft einfach „il ladro“,
   das ist aber die Antwort von Dieb), Bewährung – „la condizionale“, Militär – „l'esercito“ (Weitere: le forze armate),
   Oberschicht – „la classe alta“ / Mittelschicht – „il ceto medio“ (beides gängig, jeweils das andere als Weitere),
   Fan – „il tifoso“ (Sport). Die Zeile hat auch das Thema Kultur/Musik. Dort sagt man „il fan“, deshalb steht es als
   Weitere Antwort. Spielstand – „il punteggio“ (beim Fußball oft „il risultato“, steht als Weitere).
   Sportler – „l'atleta“ (Weitere: lo sportivo, la sportiva). Weltmeisterschaft – „il campionato mondiale“ (Weitere: i Mondiali).
6. **Niveau** unverändert aus W4. Auf Italienisch wären manche Wörter eher leichter, weil sie Internationalismen sind
   (populismo, burocrazia, vandalismo, capitalismo, propaganda, colonialismo: C1 im Original, auf Italienisch eher B2).
   Wahllokal und Stimmzettel (C1) würde ich im Italienischen bei B2 sehen.

---

## Paket X-it – Italienische Fassung von „Ausbau Grundwörter“ (W5)

Neue Datei `woerter/it-ausbau-grundwoerter.txt`, 487 Zeilen (it-xe-0001 … it-xe-0487), eine Zeile je Zeile des
Originals `woerter/ausbau-grundwoerter.txt` (W5), gleiche Nummern und gleiche Reihenfolge. Deutsch (mit
Klammerhinweis), Niveau und Themen unverändert (per Skript gegen das Original verglichen: identisch). Keine Zeile
ausgelassen, kein Niveau geändert. `pruefe.mjs`: 0 Fehler. UTF-8 ohne BOM, LF.

### Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| `it-ausbau-grundwoerter` | `woerter/it-ausbau-grundwoerter.txt` | it | 487 |

### Vorgehen

- Vorab alle 487 deutschen Wörter mit `node scripts/gibt-es.mjs --lang it` geprüft: 485 neu, „DA“ nur bei drücken
  (gefunden wird drucken – stampare) und vor (räumlich) (gefunden wird vor (einem Monat) – fa). Beides andere
  Bedeutungen, wie in W5.md beschrieben.
- In zehn Blöcken (≤ 50 Zeilen) übersetzt, nach jedem Block `node scripts/pruefe.mjs woerter/it-ausbau-grundwoerter.txt`.
  Ein Hilfsskript im Scratchpad baut die Datei aus dem Original (id, Deutsch, Niveau, Themen) und den italienischen
  Feldern, damit diese Spalten garantiert gleich bleiben. Es prüft außerdem: kein Komma, kein Schrägstrich und keine
  Klammer in der Antwort, kein Semikolon, Beispiel mit 5 bis 14 Wörtern.
- Antworten vom Deutschen aus (mit Klammerhinweis). Substantive mit bestimmtem Artikel, Verben im Infinitiv, reflexive
  mit -si (abituarsi, rifiutarsi). Adjektive maskulin. Person: lo sbruffone, Weitere: la sbruffona.
- Wo das Englische dieselbe Antwort für mehrere deutsche Wörter hat (to use, to dare, to hide …), unterscheidet das
  Italienische, wo es natürlich ist (vgl. W5.md, offene Frage 3):
  benutzen – usare, verwenden – utilizzare, nutzen – sfruttare; sich trauen – avere il coraggio, wagen – osare;
  sich anstrengen – impegnarsi, sich bemühen – sforzarsi; genügen – bastare, ausreichen – essere sufficiente;
  ausgezeichnet – eccellente, hervorragend – eccezionale; nutzlos – inutile, sinnlos – senza senso;
  bloß – solo, lediglich – soltanto; trotzdem – comunque, sowieso – tanto, jedenfalls – in ogni caso.
  Gleich geblieben, weil das Italienische nur ein übliches Wort hat: verstecken/verbergen – nascondere,
  darstellen/vertreten – rappresentare, sich irren/sich täuschen – sbagliarsi, unbedingt/absolut – assolutamente,
  Anfang/Beginn – l'inizio, Ende/Schluss (Ende) – la fine, komisch/merkwürdig – strano, morgens/Vormittag – la mattina.
- Beispielsätze eigene italienische Sätze; meist sagt der deutsche Satz des Originals genau dasselbe und blieb stehen.
  Neu bzw. angepasst ist der deutsche Satz bei: it-xe-0006, 0088, 0097, 0106, 0107, 0112, 0134, 0143, 0146, 0147,
  0163, 0164, 0167 (Marco statt Tom), 0177, 0178, 0181, 0197, 0217 (Rom statt London), 0233, 0235, 0259, 0275, 0294,
  0312, 0316, 0319, 0342, 0370, 0395, 0416.
- Stichprobe von 30 Zeilen (Zufallsauswahl quer durch Verben, Zeit, Raum, Denken & Sprechen, Gefühle, Charakter)
  auf Übersetzung, Niveau und natürliche Beispiele durchgesehen; keine Änderung nötig. Vorher schon beim Schreiben
  zu kurze Beispiele (unter fünf Wörtern) verlängert.

### Alias-Kandidaten (pruefe.mjs ⚠, Zeilen behalten)

Gleiches Wortpaar in den parallel entstehenden X-it-Dateien. Die englischen Originale haben genau dieselben
Doppelungen (per Skript über W1–W4 geprüft) – Alias wie dort:

| hier | dort | Wortpaar |
|---|---|---|
| it-xe-0042 | it-xa-0266 | sich verabschieden – salutarsi (bewusst an it-xa angeglichen) |
| it-xe-0104 | it-xc-0227 | kühl – fresco |
| it-xe-0282 | it-xa-0176 | Loch – il buco |
| it-xe-0284 | it-xd-0148 | Kreuz – la croce |
| it-xe-0285 | it-xd-0365 | Rechteck – il rettangolo |
| it-xe-0299 | it-xc-0390 | Kurve – la curva |
| it-xe-0347 | it-xb-0057, it-xd-0363 | Ziffer – la cifra |
| it-xe-0368 | it-xd-0177 | gratulieren – congratularsi |
| it-xe-0375 | it-xb-0095 | sich konzentrieren – concentrarsi |
| it-xe-0402 | it-xb-0087 | zitieren – citare |
| it-xe-0452 | it-xa-0048 | unordentlich – disordinato |
| it-xe-0455 | it-xd-0271 | kreativ – creativo |
| it-xe-0463 | it-xd-0270 | begabt – dotato |

Einzige englische Doppelung ohne italienisches Gegenstück: **locker** – xe-0112 = xa-0169 („loose“). Italienisch sind
das zwei Bedeutungen: it-xe-0112 „allentato“ (Schraube, Zahn), it-xa-0169 „largo“ (Kleidung). Im Englischen wäre es ein
Alias, im Italienischen nicht möglich. Vorschlag für ein M-Paket: Klammerhinweise „locker (Schraube)“ und
„locker (Kleidung)“.

(Stand am Ende meiner Arbeit; it-ausbau-schule-arbeit.txt war da erst teilweise geschrieben – beim Mergen erneut
`node scripts/pruefe.mjs --dubletten` laufen lassen.)

### Zeilen je Thema

Allgemein/Verben 87 · Allgemein/Adjektive 58 · Allgemein/Kleine Wörter 62 · Allgemein/Zeit 55 · Allgemein/Raum 55 ·
Allgemein/Mengen 44 · Allgemein/Denken & Sprechen 57 · Mensch/Gefühle 32 · Mensch/Charakter 37 (Niveaus wie W5.md).

### Listenvorschläge

`it-gefuehle-charakter` (Filter `Mensch`) nimmt die 69 Zeilen unter Mensch/Gefühle und Mensch/Charakter automatisch
auf (count/version beim Mergen erhöhen). Neue Listen analog zu W5.md, alle mit `"answerLang": "it"`, Name mit
„Italienisch: “ davor; der neue Knoten `Allgemein` braucht wie im Englischen einen Platz im Baum:

| id | name | level | filter |
|---|---|---|---|
| `it-allgemein-verben` | Italienisch: Häufige Verben | B1 | topics `Allgemein/Verben` (87) |
| `it-allgemein-adjektive` | Italienisch: Häufige Adjektive | B1 | topics `Allgemein/Adjektive` (58) |
| `it-allgemein-kleine-woerter` | Italienisch: Kleine Wörter | B1 | topics `Allgemein/Kleine Wörter` (62) |
| `it-allgemein-zeit-raum` | Italienisch: Zeit, Raum & Richtung | A2 | topics `Allgemein/Zeit`, `Allgemein/Raum` (110) |
| `it-allgemein-mengen` | Italienisch: Mengen & Maße | B1 | topics `Allgemein/Mengen` (44) |
| `it-allgemein-denken-sprechen` | Italienisch: Denken & Sprechen | B1 | topics `Allgemein/Denken & Sprechen` (57) |
| `it-allgemein-a2` | Italienisch: Grundwörter plus – A1/A2 | A2 | topics `Allgemein`, levels A1, A2 |
| `it-allgemein-b1` | Italienisch: Grundwörter plus – B1 | B1 | topics `Allgemein`, levels B1 |
| `it-allgemein-b2` | Italienisch: Grundwörter plus – B2/C1 | B2 | topics `Allgemein`, levels B2, C1 |

### Unsicherheiten und offene Fragen

1. **indem (it-xe-0197)**: Italienisch hat kein eigenes Wort, man nimmt das Gerundium („risparmiare facendo la spesa“).
   Antwort ist ersatzweise „facendo“, Beispiel passend dazu. Wer das nicht will: Zeile als reine Lesezeile behandeln
   oder eine andere Lösung festlegen (auch für fr „en …ant“ und es Gerundio relevant).
2. **Pfund (Gewicht) (it-xe-0339)**: In Italien sagt man „mezzo chilo“, „la libbra“ ist ungebräuchlich (nur
   Weitere Antwort). Die Antwort hat dadurch keinen bestimmten Artikel. Niveau B1 passt; „Pfund“ ist aber für
   Italienisch-Lernende kaum ein Lernwort.
3. **Antworten ohne bestimmten Artikel, weil das Deutsche kein Substantiv ist oder es so üblich ist**: Weile – „un po'
   di tempo“ (Weitere „un po'“), Mal (das erste Mal) – „la volta“, Uhrzeit – „l'ora“.
4. **Kleine Wörter mit sehr kurzen, mehrdeutigen Antworten**: an – „a“, pro – „a“, um (Uhrzeit) – „alle“, nach
   (Richtung) – „in“ (Weitere „a, per“), in – „in“, entweder – „o“, über (Thema) – „di“ (Weitere „su“), ab – „a partire
   da“ (Weitere „da“), bei – „da“. Für die Spracherkennung sind ein- und zweibuchstabige Antworten heikel.
5. **Lücke (it-xe-0301)**: „il varco“ passt zum Beispiel (Lücke im Zaun), Weitere „la lacuna“ (Wissenslücke). Ein
   einziges übliches Wort für beide Bedeutungen gibt es nicht; ggf. Klammerhinweis.
6. **wild (it-xe-0097)**: Antwort „selvaggio“ (wilde Tiere), Beispiel deshalb neu; das Original meint wilde Kinder,
   dafür Weitere „scatenato“.
7. **brav (it-xe-0479)**: „buono“ (bei Kindern), Weitere „bravo“ – „bravo“ heißt im Italienischen meist „tüchtig“.
8. **möglicherweise (it-xe-0199)**: „forse“; das ähnlich klingende „possibilmente“ heißt „wenn möglich“ und ist bewusst
   nicht aufgenommen.
9. **Niveau**: Keine Änderung. Hinweis für eine spätere Entscheidung: „di buon umore“/„di cattivo umore“ (gut/schlecht
   gelaunt, A2) sind im Italienischen eher B1; „mezzo chilo“ (Pfund, B1) eher A2.
