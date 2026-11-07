# Paket T-es: Spanische Fassungen von R1–R4

Vier neue Wortdateien, je eine Fassung der Originale aus R1–R4 (Branches wortschatz/R1 … wortschatz/R4, noch nicht
auf main). IDs `es-<id des Originals>`, gleiche Nummern und Reihenfolge, keine Zeile ausgelassen. Deutsch, Niveau und
Themen wie im Original.

| Datei | Original | Zeilen |
|---|---|---|
| woerter/es-wendungen-alltag.txt | woerter/wendungen-alltag.txt (R1) | 310 |
| woerter/es-wendungen-schule-arbeit.txt | woerter/wendungen-schule-arbeit.txt (R2) | 274 |
| woerter/es-redewendungen.txt | woerter/redewendungen.txt (R3) | 345 |
| woerter/es-sprichwoerter.txt | woerter/sprichwoerter.txt (R4) | 129 |

Neue Quellen (lang es, version 1): `es-wendungen-alltag` (310), `es-wendungen-schule-arbeit` (274), `es-redewendungen` (345), `es-sprichwoerter` (129).

## Nachträglich von der Hauptsession angeglichen

- **Satzzeichen:** Die Teilnotizen unten sagen, Antworten hätten kein „?“/„!“ am Ende. Das ist überholt: Wo die englische
  Antwort ein Frage- oder Ausrufezeichen hat (41 Zeilen in R1/R2), hat es jetzt auch die Fassung, in Haupt- und Weiteren
  Antworten (mit ¿ ¡ am Anfang, wie „¿qué tal?“). Für den Abgleich ohne Bedeutung (`norm` entfernt Satzzeichen).
- **Niveau:** überall wie im Original. Wo eine Teilnotiz eine Niveauänderung beschreibt, ist sie zurückgenommen; die
  Begründung bleibt als Hinweis für eine spätere Entscheidung stehen (Niveaus je Sprache abweichen lassen?).

## Beim Zusammenführen

- R1–R4 zuerst mergen; ändert sich dort eine Zeile (z. B. Alias wa-0020/ws-0092), die Fassung nachziehen.
- `es-wa-0020` und `es-ws-0092` („eine Pause machen“) sind doppelt wie im Englischen → Alias wie dort.
- Danach `node scripts/pruefe.mjs --dubletten` über alle es-Dateien.
- Listen: je Datei wie in R1.md–R4.md, id `es-<id der englischen Liste>`, `answerLang: "es"` (Details in den Teilen).


## T-es – Alltagswendungen (Fassung von R1)

Neue Datei `woerter/es-wendungen-alltag.txt`, 310 Zeilen (es-wa-0001 … es-wa-0310), eine Zeile je Zeile des Originals
`wendungen-alltag.txt` (R1), gleiche Nummern und Reihenfolge. Deutsch, Niveau und Themen unverändert übernommen.
Keine Zeile ausgelassen, kein Niveau geändert.

### Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| `es-wendungen-alltag` | `woerter/es-wendungen-alltag.txt` | es | 310 |

Niveaus: 137 × A1, 144 × A2, 29 × B1 (wie im Original). Themen wie im Original (Tagesablauf 28, Wohnen 22,
Zeitangaben 60, Essen & Trinken 40, Einkaufen 40, Freizeit 50, Reisen 20, Unterwegs 30, Gesundheit 9, Wetter 5,
Feste & Wünsche 6).

### Vorschläge für Listen

Analog zu den Vorschlägen in pakete/R1.md, jeweils mit `"answerLang": "es"`, Filter über dieselben Themen und Niveaus.

| id | name | level | filter |
|---|---|---|---|
| `es-wendungen-alltag-a1` | Spanisch: Alltagswendungen – A1 | A1 | topics `Wendungen/Alltag`, levels `A1` (137) |
| `es-wendungen-alltag-a2` | Spanisch: Alltagswendungen – A2 | A2 | topics `Wendungen/Alltag`, levels `A2` (144) |
| `es-wendungen-alltag-b1` | Spanisch: Alltagswendungen – B1 | B1 | topics `Wendungen/Alltag`, levels `B1` (29) |
| `es-wendungen-zeitangaben` | Spanisch: Wendungen: Zeitangaben | A1 | topics `Wendungen/Alltag/Zeitangaben` (60) |
| `es-wendungen-tagesablauf-wohnen` | Spanisch: Wendungen: Tagesablauf & Wohnen | A1 | topics `…/Tagesablauf`, `…/Wohnen` (50) |
| `es-wendungen-essen-einkaufen` | Spanisch: Wendungen: Essen & Einkaufen | A1 | topics `…/Essen & Trinken`, `…/Einkaufen` (80) |
| `es-wendungen-freizeit` | Spanisch: Wendungen: Freizeit | A1 | topics `…/Freizeit` (50) |
| `es-wendungen-reisen-unterwegs` | Spanisch: Wendungen: Reisen & Unterwegs | A1 | topics `…/Reisen`, `…/Unterwegs` (50) |
| `es-wendungen-gesundheit-wetter-feste` | Spanisch: Wendungen: Gesundheit, Wetter & Feste | A1 | topics `…/Gesundheit`, `…/Wetter`, `…/Feste & Wünsche` (20) |

Beschreibungen wie bei den englischen Listen (falls die Liste wie bei den anderen Fassungen eine eigene `filter.sources`
hat: `es-wendungen-alltag`).

### Dubletten und Alias-Kandidaten

- es-wa-0020 „eine Pause machen – hacer una pausa“ steht auch als **es-ws-0092** (Fassung von R2, parallel entstanden).
  Schon im Englischen stehen wa-0020 und ws-0092 mit „eine Pause machen – to take a break“ doppelt. Alias-Kandidat:
  es-ws-0092 → es-wa-0020 bzw. so, wie die englischen IDs beim Zusammenführen verknüpft werden.
- Sonst meldet `pruefe.mjs` keine Dublette mit bestehenden es-Dateien.

Gleiche Antwort bei verschiedenem Deutsch innerhalb der Datei (kein Fehler, nur zur Kenntnis – das Spanische
unterscheidet hier nicht):
- wa-0085 „ab und zu“ und wa-0086 „von Zeit zu Zeit“: beide „de vez en cuando“.
- wa-0053 „am Abend“ = „por la noche“ (weitere: „por la tarde“), wa-0054 „in der Nacht“ = „de noche“ (weitere:
  „por la noche“), wa-0052 „am Nachmittag“ = „por la tarde“. Spanisch „tarde“ reicht bis in den frühen Abend.
- wa-0108 „über Nacht“ = „durante la noche“ (weitere: „toda la noche“ = Antwort von wa-0066 „die ganze Nacht“).
- wa-0059 „übers Wochenende“ = „durante el fin de semana“ (weitere: „el fin de semana“ = Antwort von wa-0057).

### Unsicherheiten und offene Fragen

1. **Frage- und Ausrufezeichen in Antworten:** Nach den Hinweisen habe ich am Ende der Antwort keine Satzzeichen gesetzt
   und deshalb im Spanischen auch die öffnenden Zeichen weggelassen („qué hora es“, „que aproveche“, „cuánto cuesta“).
   Bestehende es-Dateien haben teils „¿qué tal?“ (es-gw-0012). Falls einheitlich mit ¿…? gewünscht: betrifft die Zeilen
   mit Deutsch auf „?“ (wa-0092, 0093, 0117, 0142, 0147, 0154, 0155, 0157, 0158, 0163, 0165, 0213, 0231, 0264, 0269,
   0273, 0278, 0300); Beispielsätze haben die Zeichen immer.
2. wa-0014 „zu Mittag essen – comer“ (weitere: „almorzar“): In Spanien ist „comer“ das übliche Wort für das
   Mittagessen, „almorzar“ ist regional auch ein Vormittagsimbiss. „comer“ allein ist aber mehrdeutig (essen) –
   ggf. für M-es relevant.
3. wa-0113 „Hunger bekommen – entrarle hambre a alguien“ (weitere: „darle hambre a alguien“): Im Spanischen nur
   unpersönlich („me entra hambre“), daher die etwas sperrige Grundform mit „alguien“.
4. wa-0143 „ich hätte gern – quería“ (weitere: „quisiera, me gustaría“): In Spanien bestellt man mit „quería …“;
   Lehrbücher bringen oft zuerst „quisiera“. Hauptantwort ggf. tauschen.
5. wa-0236 „gut sein in – ser bueno en“: idiomatischer ist „se me da bien …“ (als weitere Antwort
   „dársele bien algo a alguien“).
6. wa-0259 „Heimweh haben – echar de menos su casa“ (weitere: „echar de menos tu casa“): Spanisch hat kein festes
   Einzelwort; „tener morriña“ ist regional/umgangssprachlich und deshalb nicht aufgenommen.
7. wa-0296 „Mir ist schlecht. – estoy mareado“ (weitere: „tengo náuseas, estoy mareada“): „mareado“ passt zur
   Übelkeit im Auto (Beispiel); für allgemeine Übelkeit wäre „tengo náuseas“ genauer.
8. wa-0038 „den Mülleimer leeren – sacar la basura“: So sagt man es in Spanien; wörtlich „vaciar el cubo de la basura“
   steht als weitere Antwort.
9. wa-0107 „rund um die Uhr – las veinticuatro horas“ ohne Ziffern (wird vorgelesen); „a todas horas“ als weitere.
10. Niveau: Einige B1-Zeilen sind im Spanischen eher A2 („estar de viaje“ wa-0253, „me apunto“ wa-0232, „empatar“
    wa-0240), andere A1-Zeilen wie „ser bueno en“ (wa-0236) eher A2 – ich habe das Niveau nicht geändert, weil der
    Unterschied nicht eindeutig ist.
11. Bei Possessivpronomen („one's“ im Englischen) habe ich den bestimmten Artikel genommen, wie im Spanischen üblich
    („lavarse los dientes“, „ordenar la habitación“, „celebrar el cumpleaños“); Varianten mit „tu“ unter Weitere Antworten.
12. Beispiele neu geschrieben, wo das englische in Spanien unnatürlich wäre: Uhrzeiten (Mittagessen gegen zwei,
    Abendessen um neun), Orte (Madrid, Sevilla, Toledo statt London, Oxford), „Besuch aus Deutschland“ statt „aus
    Spanien“, Trinkgeld in Spanien, „la paga“ für Taschengeld. Die deutschen Beispielsätze sind entsprechend angepasst.

### Kontrolle

- Nach jedem Block (höchstens 50 Zeilen) `node scripts/pruefe.mjs woerter/es-wendungen-alltag.txt`: 0 Fehler; Hinweise
  nur „steht noch nicht in katalog.json“ und die Dublette es-ws-0092 (siehe oben).
- Zusätzlich mit einem Hilfsskript gegen das Original verglichen: alle 310 IDs vorhanden, Deutsch/Niveau/Themen gleich,
  genau acht Felder, keine Antwort mit Komma, Schrägstrich, Klammer, ¿?¡! oder „…“, alle spanischen Beispiele 6–12 Wörter.
- Stichprobe von 30 Zeilen (u. a. 0005, 0014, 0018, 0032, 0038, 0050, 0053, 0079, 0091, 0095, 0107, 0113, 0128, 0133,
  0143, 0145, 0155, 0166, 0173, 0184, 0190, 0204, 0231, 0236, 0254, 0259, 0272, 0276, 0296, 0309) auf Übersetzung,
  Niveau und Beispiel; daraus die offenen Fragen oben.

---

## T-es: Spanische Fassung von wendungen-schule-arbeit (R2)

Datei `woerter/es-wendungen-schule-arbeit.txt`, IDs `es-ws-0001` bis `es-ws-0274`, **274 Zeilen** (wie das Original),
Spanisch (Spanien). Deutsch, Niveau und Themen unverändert aus `ws-…` übernommen (A2: 92, B1: 144, B2: 38); kein
Niveau geändert, keine Zeile weggelassen. `node scripts/pruefe.mjs woerter/es-wendungen-schule-arbeit.txt`: 0 Fehler,
2 Hinweise (Datei noch nicht in katalog.json; eine Dublette, siehe unten).

### Neue Quelle

```json
{ "id": "es-wendungen-schule-arbeit", "file": "woerter/es-wendungen-schule-arbeit.txt", "lang": "es", "version": 1, "count": 274 }
```

### Vorschläge für Listen (analog zu pakete/R2.md)

| id | name | level | filter |
|---|---|---|---|
| es-wendungen-schule | Spanisch: Wendungen: Schule & Studium | A2 | `{ "topics": ["Wendungen/Schule"] }` (60) |
| es-wendungen-arbeit | Spanisch: Wendungen: Arbeit & Beruf | B1 | `{ "topics": ["Wendungen/Arbeit"] }` (105) |
| es-wendungen-gespraech | Spanisch: Wendungen: Gespräch & Meinung | B1 | `{ "topics": ["Wendungen/Gespräch"] }` (109) |
| es-wendungen-telefon-email | Spanisch: Wendungen: Telefon & E-Mail | B1 | `{ "topics": ["Wendungen/Arbeit/Telefon und E-Mail"] }` (28) |
| es-wendungen-gespraech-a2 | Spanisch: Wendungen im Gespräch – A2 | A2 | `{ "topics": ["Wendungen/Gespräch"], "levels": ["A2"] }` (35) |

Jeweils mit `"answerLang": "es"`, description wie die englische Liste.

### Alias-Kandidaten (Dubletten)

- es-ws-0092 „eine Pause machen – hacer una pausa“ = es-wa-0020 (R1-Fassung, parallel entstanden). Behalten, weil die
  Zeile zum Original gehört; beim Zusammenführen Alias anlegen (Haupt-ID nach Regel). Entspricht dem englischen Fall
  ws-0092/R1, den pakete/R2.md schon als mögliche Überschneidung nennt.
- Die übrigen in pakete/R2.md genannten möglichen Überschneidungen mit R1 (ws-0001, 0085, 0148, 0166, 0172–0175, 0177,
  0199, 0200, 0222, 0223, 0244) meldet pruefe.mjs bei meinem letzten Lauf nicht. Da es-wendungen-alltag parallel
  entsteht, nach dem Zusammenführen `node scripts/pruefe.mjs --dubletten` noch einmal laufen lassen.

### Vorgehen und Stil

- In 6 Blöcken (≤ 50 Zeilen) geschrieben, nach jedem Block pruefe.mjs und ein eigenes Prüfskript (Deutsch, Niveau und
  Thema gleich wie das Original, keine Komma/Schrägstrich/Klammer in der Antwort, keine Satzzeichen in den Antworten,
  Länge der Beispielsätze, Antwort kommt im Beispiel vor).
- Satzartige Antworten (Höflichkeit, Nachfragen, Telefon) klein am Anfang und **ohne** Satzzeichen, also auch ohne
  „¿ … ?“ und „¡ … !“ („con quién hablo“, „un momento por favor“, „podría repetirlo por favor“). Grund: Hinweis,
  Satzzeichen am Ende wegzulassen; ein „¿“ ohne „?“ sähe falsch aus. Die Vergleichsform (norm) entfernt die Zeichen
  ohnehin. Abweichung von es-gw-0012 („¿qué tal?“) – beim Zusammenführen entscheiden, ob einheitlich.
- Höflichkeitsformen mit „usted“, wo das Deutsche „Sie“ hat („a qué se dedica“, „encantado de conocerle“, „perdone que le
  interrumpa“); die du-Variante steht, wo sinnvoll, unter Weitere Antworten.
- Possessiv in Infinitiv-Wendungen mit „su“ („dar su opinión“, „montar su propio negocio“), bei Schulanweisungen die
  übliche du-Form („explicar algo con tus propias palabras“, „su“-Form als Weitere Antwort).
- Beispiele neu und spanisch natürlich: spanische Namen und Orte (Pablo, Lucía, Salamanca, Sevilla, Granada),
  Zeiten angepasst (Feierabend um sechs, Wiederholungsprüfung im September), deutsche Sätze entsprechend angepasst;
  das deutsche Beispiel enthält immer die Wendung aus dem Feld Deutsch. ws-0184 „Mi español no es muy bueno“ / „Mein
  Spanisch ist nicht sehr gut“ statt Englisch. ws-0189 bleibt bei „auf Englisch“/„en inglés“, weil das Feld Deutsch es
  so vorgibt.

### Stichprobe (30 Zeilen)

Geprüft: 0004, 0021, 0025, 0027, 0038, 0042, 0050, 0054, 0057, 0065, 0068, 0080, 0093, 0097, 0111, 0115, 0128, 0140,
0142, 0144, 0153, 0166, 0170, 0182, 0203, 0221, 0245, 0249, 0259, 0262. Korrigiert: 0027 (Hauptantwort „hacer un viaje
escolar“ statt der Tagesausflug-Variante), 0065 (Beispiel „de mecánico“), 0184 (Beispiel Spanisch statt Deutsch), 0023
(„su“-Form ergänzt), 0249/0262 („ni hablar“ nur noch bei „Das kommt nicht in Frage“).

### Unsicherheiten

- **Schulsystem**: ws-0054 „das Abitur machen – hacer el bachillerato“ (Weitere: sacarse el bachillerato, hacer la
  selectividad). Bachillerato ist die Oberstufe, die Abschlussprüfung heißt Selectividad/PAU/EBAU – nur Näherung.
  ws-0042 „eine Klassenarbeit schreiben – hacer un control“ (Weitere: hacer un examen). ws-0025 „nachsitzen müssen –
  quedarse castigado“. ws-0050 „mit Auszeichnung bestehen – aprobar con matrícula de honor“ (Matrícula ist die
  höchste Auszeichnung; „con sobresaliente“ als Weitere). ws-0057 „eine Vorlesung besuchen – asistir a una clase“
  (spanische Studierende sagen „clase“; „clase magistral“ als Weitere). ws-0052 „das Zeugnis bekommen – recibir las
  notas“. ws-0053 „die Schule abschließen – terminar el instituto“.
- **Beruf**: ws-0065 „eine Ausbildung machen – hacer una formación profesional“ (die duale Ausbildung gibt es in
  Spanien so nicht; umgangssprachlich „estudiar FP“, Abkürzung nicht verwendet). ws-0068 „eine Bewerbung schreiben –
  escribir una carta de presentación“ (in Spanien besteht die Bewerbung aus Lebenslauf und carta de presentación;
  „escribir una solicitud de empleo“ als Weitere). ws-0097 „sich krankmelden – pedir la baja“ (genau genommen: sich
  krankschreiben lassen; Spanisch hat dafür keine engere feste Wendung), ws-0098 „krankgeschrieben sein – estar de
  baja“.
- **Ohne direkte Entsprechung, umschrieben**: ws-0203 „Small Talk machen – charlar de cosas sin importancia“ („hacer
  small talk“ als Weitere, im Büro üblich, aber Anglizismus). ws-0111 „unter Zeitdruck stehen – estar bajo presión“
  (Zeit nicht ausgedrückt; „trabajar contrarreloj“ als Weitere). ws-0115 „den Überblick behalten – tenerlo todo
  controlado“. ws-0259 „Das ist ein guter Punkt – es una buena observación“ („es un buen punto“ als Weitere,
  Anglizismus). ws-0144 „Kann ich etwas ausrichten? – quiere dejar algún recado“ (spanisch fragt man so; inhaltlich nah
  an ws-0143 „dejar un mensaje“).
- **Gleiche Antwort bei verschiedenem Deutsch** (kein Wortpaar doppelt): ws-0229 „anderer Meinung sein – no estar de
  acuerdo“ und ws-0258 „me temo que no estoy de acuerdo“ unterscheiden sich; ws-0230 „einer Meinung sein“ und
  ws-0252 „mit etwas einverstanden sein“ beide mit „estar de acuerdo“ (0252: „estar de acuerdo con algo“). Gewollt.
- Leísmo „conocerle“, „tutearle“, „molestarle“ ist in Spanien üblich und von der RAE akzeptiert; „conocerlo“ nicht als
  Weitere Antwort aufgenommen.
- Niveau „sich duzen – tutearse“ (B2 aus dem Original) ist für Spanisch eher B1, weil das Duzen dort viel üblicher ist;
  nicht geändert.

### Offene Fragen

1. Satzartige Antworten ohne „¿?“ bzw. „¡!“ (siehe oben) – so lassen oder wie es-gw-0012 mit Zeichen?
2. „das Abitur machen“: lieber „hacer la selectividad“ als Hauptantwort?

---

## T-es – Redewendungen (Fassung von R3)

Neue Datei `woerter/es-redewendungen.txt`, 345 Zeilen (es-ri-0001 … es-ri-0345), eine Zeile je Zeile des Originals
`redewendungen.txt` (R3), gleiche Nummern und Reihenfolge. Deutsch, Niveau und Themen unverändert übernommen
(per Hilfsskript gegen das Original geprüft). Keine Zeile ausgelassen, kein Niveau geändert.

Antworten in europäischem Spanisch (Spanien), wo es eine gebräuchliche spanische Redewendung gibt, diese (cruzar los
dedos, tomarle el pelo a alguien, no hay moros en la costa, quedarse en agua de borrajas, darle la vuelta a la
tortilla); sonst eine kurze natürliche Umschreibung. Kein Komma, kein Schrägstrich, keine Klammer in einer Antwort.
Beispiele neu formuliert (6–12 Wörter), die deutsche Wendung kommt jeweils im deutschen Satz vor.
Geprüft in Blöcken zu 50 Zeilen mit `node scripts/pruefe.mjs woerter/es-redewendungen.txt`: 0 Fehler, nur der
erwartete Hinweis „steht noch nicht in katalog.json“, keine Dubletten-Hinweise. Zum Schluss Stichprobe von 30 Zeilen
(jede 11. Zeile) und Durchsicht der unsicheren Stellen; dabei korrigiert: ri-0038 (siehe unten), drei zu lange
Beispielsätze gekürzt, zwei Weitere Antworten gestrichen.

### Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| `es-redewendungen` | `woerter/es-redewendungen.txt` | es | 345 |

Niveaus wie im Original: B1 11, B2 160, C1 168, C2 6. Themen wie im Original (Gefühle 40, Reden & Schweigen 35,
Ehrlichkeit & Täuschung 28, Beziehungen 52, Charakter & Verhalten 43, Denken & Verstehen 36, Arbeit & Anstrengung 25,
Erfolg & Misserfolg 29, Probleme & Schwierigkeiten 22, Entscheidungen & Risiko 16, Glück & Pech 6, Geld 7,
Zeit & Tempo 6).

### Vorschläge für Listen

Analog zu pakete/R3.md, jeweils mit `"answerLang": "es"` und gleichen Filtern (ggf. `filter.sources`:
`es-redewendungen`).

| id | name | level | filter |
|---|---|---|---|
| `es-redewendungen-b2` | Spanisch: Redewendungen – B1/B2 | B2 | topics `Redewendungen`, levels `B1`, `B2` (171) |
| `es-redewendungen-c1` | Spanisch: Redewendungen – C1/C2 | C1 | topics `Redewendungen`, levels `C1`, `C2` (174) |
| `es-redewendungen-gefuehle-beziehungen` | Spanisch: Redewendungen: Gefühle & Beziehungen | – | `…/Gefühle`, `…/Beziehungen` (92) |
| `es-redewendungen-reden-denken` | Spanisch: Redewendungen: Reden, Denken & Ehrlichkeit | – | `…/Reden & Schweigen`, `…/Denken & Verstehen`, `…/Ehrlichkeit & Täuschung` (99) |
| `es-redewendungen-charakter` | Spanisch: Redewendungen: Charakter & Verhalten | – | `…/Charakter & Verhalten` (43) |
| `es-redewendungen-arbeit-erfolg` | Spanisch: Redewendungen: Arbeit, Erfolg & Probleme | – | `…/Arbeit & Anstrengung`, `…/Erfolg & Misserfolg`, `…/Probleme & Schwierigkeiten` (76) |
| `es-redewendungen-entscheidungen-glueck-geld` | Spanisch: Redewendungen: Entscheidungen, Glück, Geld & Zeit | – | `…/Entscheidungen & Risiko`, `…/Glück & Pech`, `…/Geld`, `…/Zeit & Tempo` (35) |

Beschreibungen wie bei den englischen Listen.

### Dubletten und Alias-Kandidaten

`pruefe.mjs` meldet kein Wortpaar (Deutsch + Antwort), das schon im Katalog steht. Keine Alias-Kandidaten.

Gleiche spanische Antwort bei anderem deutschen Wort (kein Alias, nur zur Info):
- es-ri-0076 „jemanden auf den Arm nehmen – tomarle el pelo a alguien“ = es-gw-1198 „jemandem einen Bären aufbinden“
  (wie im Englischen: ri-0076 / gw-1198 „to pull someone's leg“).
- es-ri-0079 „jemanden hinters Licht führen – engañar a alguien“ = es-vh-0146 „jemanden über den Tisch ziehen“.
- es-ri-0326 „kalte Füße bekommen – echarse atrás“ = es-vh-0125 „einen Rückzieher machen“.
- es-ri-0087 „Farbe bekennen – mojarse“ = es-wa-0302 „nass werden – mojarse“ (parallel entstanden, T-es/R1). „mojarse“
  ist im Spanischen genau die übliche Wendung für „Stellung beziehen“, deshalb beibehalten.
Innerhalb der Datei teilen sich einige Zeilen eine Weitere Antwort (z. B. „estar en ascuas“ / „estar en vilo“ bei
ri-0027 und ri-0028, „estar hasta las narices“ bei ri-0002 und ri-0036), das ist wie im Original gewollt.

### Unsicherheiten und offene Fragen

1. **Umschreibungen statt echter Redewendung** (keine gleichwertige spanische Wendung gefunden; wer anders formuliert,
   wird abgelehnt – bei Bedarf Weitere Antworten ergänzen): ri-0023 jemandem am Herzen liegen (importarle mucho a
   alguien), ri-0059 aus dem Nähkästchen plaudern (contar secretos), ri-0060 etwas durch die Blume sagen (decir algo
   de forma indirecta), ri-0122 jemandem auf die Füße treten (ofender a alguien), ri-0123 jemandem auf den Schlips
   treten (herir el orgullo de alguien), ri-0173 sich an die eigene Nase fassen (mirarse a uno mismo), ri-0190 eine
   Extrawurst bekommen (tener un trato especial), ri-0192 Rückgrat zeigen (demostrar entereza), ri-0214 sich auf etwas
   einen Reim machen (encontrarle sentido a algo), ri-0248 ins kalte Wasser geworfen werden (tener que aprender sobre
   la marcha), ri-0275 mit Pauken und Trompeten durchfallen (suspender estrepitosamente), ri-0315 die Qual der Wahl
   haben (no saber qué elegir), ri-0328 Glück im Unglück haben (tener suerte dentro de la desgracia).
2. **Bedeutung nicht ganz deckungsgleich**, aber die nächstliegende übliche Wendung: ri-0056 sich um Kopf und Kragen
   reden – cavar su propia tumba (ohne „reden“), ri-0078 jemandem Sand in die Augen streuen – dar gato por liebre a
   alguien (eher „betrügen beim Tausch/Kauf“), ri-0125 das fünfte Rad am Wagen sein – hacer de sujetavelas (nur „beim
   Paar überflüssig“, wie engl. „third wheel“), ri-0151 mit jemandem Pferde stehlen können – apuntarse a un bombardeo
   (betont „für alles zu haben“, nicht „verlässlich“), ri-0165 eine lange Leitung haben – estar espeso (eher Zustand
   „heute schwer von Begriff“), ri-0211 über den Tellerrand schauen – ver más allá de sus narices (meist verneint
   gebraucht; weitere „pensar fuera de la caja“ ist ein Anglizismus), ri-0272 den Vogel abschießen – llevarse la palma
   (wie im Deutschen positiv und ironisch), ri-0276 Schuss in den Ofen – el fiasco, ri-0326 kalte Füße bekommen –
   echarse atrás (eher „einen Rückzieher machen“).
3. **Feste Satzform** wie im Original: ri-0202 „los árboles no dejan ver el bosque“, ri-0212 „a alguien le da vueltas
   la cabeza“, ri-0320 „la suerte está echada“, ri-0102 „no hay moros en la costa“. Ob die App die Platzhalter
   „alguien“ am Satzanfang gut abfragt, beim Testen prüfen.
4. **Verben mit angehängtem Pronomen**: Bei Wendungen mit „jemandem“ steht als Antwort meist die übliche Form mit
   Dativpronomen („romperle el corazón a alguien“, „tomarle el pelo a alguien“), die Form ohne „-le“ als Weitere
   Antwort, wo beide gleich häufig sind. Nicht überall ergänzt; ggf. vereinheitlichen.
5. **Umgangssprachlich (Spanien)**, aber nicht derb: darle la chapa a alguien, meter baza, subírsele a la chepa a
   alguien, tener potra, estar chupado, forrarse, rajarse, irse al garete. Bewusst weggelassen: „mucha mierda“ als
   Theatergruß zu ri-0330 Hals- und Beinbruch (Antwort nur „mucha suerte“), „tomar a alguien por el pito del sereno“.
6. ri-0038 Musik in jemandes Ohren sein: zuerst „sonar a música celestial“ gewählt, wieder verworfen, weil das in
   Spanien „leere Worte“ bedeutet; jetzt „ser música para los oídos de alguien“.
7. ri-0293 vom Regen in die Traufe kommen – „salir de Guatemala para entrar en Guatepeor“: in Spanien sehr geläufig,
   Variante „…y meterse en Guatepeor“ als Weitere Antwort.
8. Großschreibung: „el trabajo de Sísifo“ (ri-0254), „de Pascuas a Ramos“ (ri-0344) mit Großbuchstaben; „llorar como
   una magdalena“ klein (RAE).

---

## T-es: Sprichwörter (Fassung von R4)

Neue Datei `woerter/es-sprichwoerter.txt`, spanische Fassung von `woerter/sprichwoerter.txt` (R4): 129 Zeilen,
es-sp-0001 bis es-sp-0129, lückenlos, gleiche Nummern und Reihenfolge wie das Original. Keine Zeile ausgelassen.
Feld Deutsch und Themen unverändert aus dem Original; Niveau in sechs Zeilen geändert (siehe unten).

### Neue Quelle

```json
{ "id": "es-sprichwoerter", "file": "woerter/es-sprichwoerter.txt", "lang": "es", "version": 1, "count": 129 }
```

### Vorschläge für Listen

```json
[
  { "id": "es-sprichwoerter", "name": "Spanisch: Sprichwörter", "description": "Deutsche Sprichwörter und ihre spanische Entsprechung", "level": "C1", "answerLang": "es", "filter": { "topics": ["Sprichwörter"] } },
  { "id": "es-sprichwoerter-b2", "name": "Spanisch: Sprichwörter – B1/B2", "description": "Bekannte Sprichwörter: Más vale tarde que nunca, El tiempo es oro …", "level": "B2", "answerLang": "es", "filter": { "topics": ["Sprichwörter"], "levels": ["B1", "B2"] } },
  { "id": "es-sprichwoerter-c1", "name": "Spanisch: Sprichwörter – C1/C2", "description": "Anspruchsvollere Sprichwörter für Fortgeschrittene", "level": "C1", "answerLang": "es", "filter": { "topics": ["Sprichwörter"], "levels": ["C1", "C2"] } }
]
```

Anzahlen: alle 129, B1/B2 72 (Original 73), C1/C2 57 (Original 56). Niveaus: B1 5, B2 67, C1 54, C2 3.
Themen wie im Original: Arbeit & Lernen 20, Zeit & Geduld 15, Geld & Besitz 11, Menschen & Beziehungen 24,
Vorsicht & Klugheit 20, Reden & Handeln 13, Glück & Schicksal 8, Lebensweisheiten 12, Gesundheit & Essen 6.

### Vorgehen und Form

- Antwort ist jeweils der in Spanien gebräuchliche „refrán“, vom Deutschen her gewählt, nicht vom Englischen
  (z. B. Morgenstund → „A quien madruga Dios le ayuda“, Was Hänschen nicht lernt → „Loro viejo no aprende a hablar“,
  Rom → „No se ganó Zamora en una hora“ mit „Roma no se hizo en un día“ als Weitere Antwort, Kleider machen Leute →
  „Como te ven te tratan“, Allen Leuten recht getan → „Nunca llueve a gusto de todos“, Die Welt ist ein Dorf → „El
  mundo es un pañuelo“, Alter schützt vor Torheit nicht → „A la vejez viruelas“).
- Großschreibung am Anfang wie im Original (Satz-Sprichwort), kein Satzzeichen am Ende, also auch kein ¿ ¡.
- Kein Komma, Schrägstrich, keine Klammer in Antworten („Quien ríe el último ríe mejor“, „Ojos que no ven corazón
  que no siente“). In den Beispielsätzen stehen die üblichen Kommas.
- Weitere Antworten: Varianten „Quien … / El que …“, Kurz- und Langformen, die zweite gängige Fassung
  („No todo lo que brilla es oro“, „El tiempo es dinero“).
- Beispiele neu formuliert bzw. an Spanien angepasst (móvil, reforma, deberes); geänderte deutsche Beispiele dort,
  wo die Situation abweicht (u. a. es-sp-0004, 0007, 0009, 0011, 0018, 0019, 0034, 0041, 0043, 0045, 0055, 0058,
  0062, 0074, 0082, 0086, 0107, 0126). Jede Antwort steht im spanischen Beispiel, jedes deutsche Sprichwort im
  deutschen Beispiel (Hilfsskript geprüft). Länge meist 6–12 Wörter; länger bei langen Sprichwörtern:
  es-sp-0061 (20 Wörter, das Sprichwort selbst hat 14), es-sp-0115 (17), einige mit 13–15.
- Antworten innerhalb der Datei alle verschieden. Ähnliche Paare bewusst getrennt: 0071 „Más vale prevenir que
  lamentar“ / 0072 „Más vale prevenir que curar“; 0052 „De tal palo tal astilla“ / 0053 „De tal padre tal hijo“;
  0043 „Lo que no cuesta no se valora“ / 0044 „Lo barato sale caro“; 0024 „Las cosas buenas se hacen esperar“ /
  0025 „Todo llega a quien sabe esperar“; 0097 „Quien no arriesga no gana“ / 0098 „La fortuna sonríe a los audaces“.

### Niveau geändert (Begründung)

- es-sp-0003 Ohne Fleiß kein Preis: B1 → B2. „Quien algo quiere algo le cuesta“ ist deutlich schwerer als das
  englische Schlagwort „No pain no gain“.
- es-sp-0008 Viele Köche verderben den Brei: B2 → C1. „Muchas manos en un plato hacen mucho garabato“ ist ein
  langer Reim-Refrán, den Lernende spät kennenlernen.
- es-sp-0033 Eisen schmieden: B2 → C1. „A la ocasión la pintan calva“ ist bildhaft und nicht durchschaubar.
- es-sp-0044 Wer billig kauft, kauft zweimal: C1 → B2. „Lo barato sale caro“ ist sehr gebräuchlich und einfach.
- es-sp-0056 Jeder Topf findet seinen Deckel: B2 → C1. „Siempre hay un roto para un descosido“ (Wortschatz roto,
  descosido).
- es-sp-0087 Man kann nicht alles haben: C1 → B2. Im Spanischen eine einfache Aussage „No se puede tener todo“,
  kein Idiom wie „to have one's cake and eat it“.

Weitere Kandidaten, die ich bewusst NICHT geändert habe, obwohl sie im Spanischen eher leichter sind: 0035 Quien
ríe el último ríe mejor (C1), 0102 La unión hace la fuerza (C1), 0108 La esperanza es lo último que se pierde (C1),
0089 Quien siembra vientos recoge tempestades (C2). Beim Mergen ggf. auf B2 bzw. C1 senken.

### Unsicherheiten

Keine feste spanische Entsprechung – kurze Umschreibung oder nächstliegende Wendung:
- es-sp-0006 Aller Anfang ist schwer → „Todo comienzo es difícil“ (Umschreibung; Weitere: „Los comienzos siempre son
  difíciles“, „Lo más difícil es empezar“).
- es-sp-0007 Wer rastet, der rostet → „Lo que no se usa se pierde“ (Umschreibung).
- es-sp-0009 Viele Hände, schnelles Ende → „Entre todos se termina antes“ (Umschreibung; „La unión hace la fuerza“
  ist schon 0102).
- es-sp-0015 Probieren geht über Studieren → „La experiencia es la madre de la ciencia“ (nächstliegender Refrán,
  Schwerpunkt Erfahrung statt Ausprobieren).
- es-sp-0019 Wer A sagt, muss auch B sagen → „Lo que se empieza se acaba“ (Umschreibung).
- es-sp-0034 Wer zuerst kommt, mahlt zuerst → „Por orden de llegada“ (feste Formel, die man in genau dieser Lage
  sagt; der alte Refrán „quien primero llega primero muele“ ist heute kaum gebräuchlich und daher nicht aufgenommen).
- es-sp-0041 Wer den Pfennig nicht ehrt … → „Muchos pocos hacen un mucho“ (Sinn: Kleines summiert sich; der
  moralische Teil „ist des Talers nicht wert“ fehlt).
- es-sp-0043 Was nichts kostet, ist nichts wert → „Lo que no cuesta no se valora“ (verbreitete Redensart, kein
  klassischer Refrán).
- es-sp-0055 Liebe geht durch den Magen → „Al hombre se le conquista por el estómago“, Weitere „El amor entra por la
  cocina“. Beides verbreitet, aber ich bin nicht sicher, welche Form in Spanien häufiger ist.
- es-sp-0059 Geteiltes Leid ist halbes Leid → „Las penas compartidas pesan menos“ (Umschreibung; es gibt keinen
  festen Refrán, „Mal de muchos consuelo de tontos“ bedeutet etwas anderes).
- es-sp-0060 Eine Hand wäscht die andere → „Una mano lava la otra“; Weitere „Hoy por ti mañana por mí“ betont eher
  gegenseitige Hilfe als Gefälligkeit – bei strenger Auslegung streichen.
- es-sp-0074 Stille Wasser sind tief → „Del agua mansa líbreme Dios“: warnt vor stillen Menschen (wie die zweite
  Bedeutung des deutschen Sprichworts); Beispiel darauf abgestimmt („Er wirkt ganz ruhig, aber stille Wasser sind
  tief“). Die positive Lesart „stille Menschen haben Tiefe“ deckt es nicht ab.
- es-sp-0082 Hochmut kommt vor dem Fall → „Cuanto más alto se sube más dura es la caída“ (entspricht eher „Wer hoch
  steigt, fällt tief“), Weitere „La soberbia precede a la caída“ (biblisch, seltener).
- es-sp-0091 Reden ist Silber, Schweigen ist Gold → „En boca cerrada no entran moscas“, Weitere „La palabra es plata
  y el silencio es oro“.
- es-sp-0094 Der Ton macht die Musik → „No es lo que dices sino cómo lo dices“ (Umschreibung).
- es-sp-0107 Auch ein blindes Huhn findet mal ein Korn → „Sonó la flauta por casualidad“ (aus der Fabel „El burro
  flautista“; oft nur „sonó la flauta“).
- es-sp-0111 Jeder ist seines Glückes Schmied → „Cada uno es dueño de su destino“ (Redensart).
- es-sp-0112 Der Weg ist das Ziel → „Lo importante es el camino“ (Umschreibung).
- es-sp-0121 Keine Nachrichten sind gute Nachrichten → „Si no hay noticias buenas noticias“ (gesprochen mit Komma:
  „Si no hay noticias, buenas noticias“).
- es-sp-0124 Ein Apfel am Tag … → „Una manzana al día aleja al médico“; es kursieren mehrere Fassungen, keine ist
  klar die übliche.
- es-sp-0115 Kirschen in Nachbars Garten → traditionell „La gallina de mi vecina más huevos pone que la mía“; die
  jüngere Lehnform „La hierba del vecino siempre es más verde“ steht als Weitere Antwort.
- es-sp-0031 Es ist noch nicht aller Tage Abend → „Hasta el rabo todo es toro“ (Stierkampfbild, in Spanien üblich).
- Lange Antworten (0020, 0061, 0076, 0082, 0115) sind per Spracherkennung schwer exakt zu treffen.

### Alias-Kandidaten

Keine: `pruefe.mjs` meldet für die Datei keine Dublette mit anderen spanischen Dateien (Stand der Prüfung; die drei
parallelen T-es-Dateien wendungen-alltag, wendungen-schule-arbeit, redewendungen können beim Zusammenführen noch
Überschneidungen bringen, z. B. bei „El mundo es un pañuelo“, „Más vale tarde que nunca“, „Querer es poder“ oder
„A la tercera va la vencida“, falls dort dieselben deutschen Formen stehen).

### Prüfung

- Nach jedem Block (50, 50, 29 Zeilen) `node scripts/pruefe.mjs woerter/es-sprichwoerter.txt`: 0 Fehler, einziger
  Hinweis „steht noch nicht in katalog.json (129 Wörter)“.
- Hilfsskript (Scratchpad): genau 8 Felder, keine Semikolons in Sätzen, keine Komma/Schrägstrich/Klammer in
  Antworten, Antwort im spanischen Beispiel, deutsches Sprichwort im deutschen Beispiel, Antworten in der Datei
  eindeutig; UTF-8 ohne BOM, LF.
- Stichprobe von 30 Zeilen (0002–0012, 0023–0034, 0052–0060, 0082–0091, 0101, 0115–0121) auf Übersetzung, Niveau
  und Beispiel; danach korrigiert: 0011 Hauptform „Primero la obligación y luego la devoción“ mit „Primero es la
  obligación que la devoción“ als Weitere; 0034 unsicheren alten Refrán aus Weitere gestrichen; 0086 und 0101
  gängige Varianten ergänzt; Beispiele 0045, 0066, 0082, 0115, 0116, 0126 gekürzt.
