# Paket T-fr: Französische Fassungen von R1–R4

Vier neue Wortdateien, je eine Fassung der Originale aus R1–R4 (Branches wortschatz/R1 … wortschatz/R4, noch nicht
auf main). IDs `fr-<id des Originals>`, gleiche Nummern und Reihenfolge, keine Zeile ausgelassen. Deutsch, Niveau und
Themen wie im Original.

| Datei | Original | Zeilen |
|---|---|---|
| woerter/fr-wendungen-alltag.txt | woerter/wendungen-alltag.txt (R1) | 310 |
| woerter/fr-wendungen-schule-arbeit.txt | woerter/wendungen-schule-arbeit.txt (R2) | 274 |
| woerter/fr-redewendungen.txt | woerter/redewendungen.txt (R3) | 345 |
| woerter/fr-sprichwoerter.txt | woerter/sprichwoerter.txt (R4) | 129 |

Neue Quellen (lang fr, version 1): `fr-wendungen-alltag` (310), `fr-wendungen-schule-arbeit` (274), `fr-redewendungen` (345), `fr-sprichwoerter` (129).

## Nachträglich von der Hauptsession angeglichen

- **Satzzeichen:** Die Teilnotizen unten sagen, Antworten hätten kein „?“/„!“ am Ende. Das ist überholt: Wo die englische
  Antwort ein Frage- oder Ausrufezeichen hat (41 Zeilen in R1/R2), hat es jetzt auch die Fassung, in Haupt- und Weiteren
  Antworten (mit Leerzeichen davor, wie „ça va ?“). Für den Abgleich ohne Bedeutung (`norm` entfernt Satzzeichen).
- **Niveau:** überall wie im Original. Wo eine Teilnotiz eine Niveauänderung beschreibt, ist sie zurückgenommen; die
  Begründung bleibt als Hinweis für eine spätere Entscheidung stehen (Niveaus je Sprache abweichen lassen?).

## Beim Zusammenführen

- R1–R4 zuerst mergen; ändert sich dort eine Zeile (z. B. Alias wa-0020/ws-0092), die Fassung nachziehen.
- `fr-wa-0020` und `fr-ws-0092` („eine Pause machen“) sind doppelt wie im Englischen → Alias wie dort.
- Danach `node scripts/pruefe.mjs --dubletten` über alle fr-Dateien.
- Listen: je Datei wie in R1.md–R4.md, id `fr-<id der englischen Liste>`, `answerLang: "fr"` (Details in den Teilen).


## T-fr – Alltagswendungen (Fassung von R1)

Datei `woerter/fr-wendungen-alltag.txt`, 310 Zeilen (fr-wa-0001 … fr-wa-0310), eine Zeile je Zeile des Originals
`woerter/wendungen-alltag.txt` (R1), gleiche Nummer, gleiche Reihenfolge. Deutsch und Themen wie im Original,
Niveau wie im Original bis auf eine Zeile (siehe unten). Keine Zeile ausgelassen.

Niveaus: 137 × A1, 143 × A2, 30 × B1.

### Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| `fr-wendungen-alltag` | `woerter/fr-wendungen-alltag.txt` | fr | 310 |

### Vorschläge für Listen

Analog zu pakete/R1.md, jeweils mit `"answerLang": "fr"`, Name „Französisch: …“, Filter über dieselben Themen
(und Niveaus) wie die englische Liste.

| id | name | filter |
|---|---|---|
| `fr-wendungen-alltag-a1` | Französisch: Alltagswendungen – A1 | topics `Wendungen/Alltag`, levels `A1` (137) |
| `fr-wendungen-alltag-a2` | Französisch: Alltagswendungen – A2 | topics `Wendungen/Alltag`, levels `A2` (143) |
| `fr-wendungen-alltag-b1` | Französisch: Alltagswendungen – B1 | topics `Wendungen/Alltag`, levels `B1` (30) |
| `fr-wendungen-zeitangaben` | Französisch: Wendungen: Zeitangaben | topics `Wendungen/Alltag/Zeitangaben` (60) |
| `fr-wendungen-tagesablauf-wohnen` | Französisch: Wendungen: Tagesablauf & Wohnen | topics `…/Tagesablauf`, `…/Wohnen` (50) |
| `fr-wendungen-essen-einkaufen` | Französisch: Wendungen: Essen & Einkaufen | topics `…/Essen & Trinken`, `…/Einkaufen` (80) |
| `fr-wendungen-freizeit` | Französisch: Wendungen: Freizeit | topics `…/Freizeit` (50) |
| `fr-wendungen-reisen-unterwegs` | Französisch: Wendungen: Reisen & Unterwegs | topics `…/Reisen`, `…/Unterwegs` (50) |
| `fr-wendungen-gesundheit-wetter-feste` | Französisch: Wendungen: Gesundheit, Wetter & Feste | topics `…/Gesundheit`, `…/Wetter`, `…/Feste & Wünsche` (20) |

Hinweis: Weil die Listen nur über Themen filtern, würde z. B. `fr-wendungen-alltag-a1` alle französischen Zeilen mit
Thema `Wendungen/Alltag` und Niveau A1 enthalten – das sind nur die aus dieser Datei, solange keine andere fr-Datei
dieses Thema nutzt.

### Dubletten und Alias-Kandidaten

`pruefe.mjs` meldet eine Dublette:
- **fr-wa-0020** „eine Pause machen – faire une pause“ = **fr-ws-0092** (Fassung von R2, parallel entstanden).
  Behalten, weil die Zeile zum Original gehört → Alias-Kandidat. Haupt-ID nach Regel die ältere Quelle; welche das
  ist, hängt davon ab, wie wa-0020 / ws-0092 im Englischen gelöst werden (gleiches Paar „eine Pause machen – to take
  a break“?). Am besten die französische Entscheidung der englischen folgen lassen. Ich habe „prendre une pause“
  als Weitere Antwort ergänzt, wie in fr-ws-0092.

Ähnliche Einträge (anderes Deutsch, gleiche oder überlappende Antwort) – bewusst behalten, nur zur Kenntnis:
- fr-wa-0051/0053/0054/0057 „am Morgen – le matin“, „am Abend – le soir“, „in der Nacht – la nuit“,
  „am Wochenende – le week-end“ / gw-0122–0124, gw-0146 (Substantive „Morgen – le matin“ usw.). Französisch
  drückt „am Morgen“ mit dem Artikel aus, deshalb gleiche Antwort wie das Substantiv.
- fr-wa-0151 „den Einkauf erledigen – faire les courses“ / fr-al-0130, fr-eg-0024 „einkaufen – faire les courses“
- fr-wa-0196 „wandern gehen – faire de la randonnée“ / fr-fh-0054, fr-sf-0032 „wandern“
- fr-wa-0198 „reiten gehen – faire du cheval“ / fr-sf-0033 „reiten“
- fr-wa-0207 „eine Grillparty machen – faire un barbecue“ / fr-fh-0060 „grillen – faire un barbecue“
- fr-wa-0246 „den Koffer packen – faire sa valise“ / fr-ru-0029 „packen – faire sa valise“
- fr-wa-0109 „vor Kurzem – récemment“ / fr-gw-0344, fr-ke-0504 „kürzlich“, fr-gw-1139 „unlängst“
- fr-wa-0099 „auf einmal – tout à coup“ / fr-gw-0345, fr-ke-0622 „plötzlich – soudain (tout à coup)“
- fr-wa-0085 „ab und zu – de temps en temps“ / fr-gw-0642 „gelegentlich – de temps en temps“
- fr-wa-0288 „weit weg – loin“ / fr-ke-0212 „weit – loin“
- fr-wa-0272 „Verspätung haben – avoir du retard“ / fr-ws-0113 „in Verzug sein – avoir du retard“
- fr-wa-0146 „Die Rechnung, bitte! – l'addition s'il vous plaît“ / fr-et-0060, fr-gw-0361 „Rechnung – l'addition“

Innerhalb der Datei haben zwei Zeilenpaare dieselben Antworten in vertauschter Rolle, weil das Französische nicht
unterscheidet: fr-wa-0085 „ab und zu – de temps en temps (de temps à autre)“ und fr-wa-0086 „von Zeit zu Zeit – de
temps à autre (de temps en temps)“. fr-wa-0021 „nach Hause gehen – rentrer à la maison“ und fr-wa-0022 „nach Hause
kommen – rentrer“ überlappen ebenfalls in den Weiteren Antworten.

### Regeln, die ich angewandt habe

- Antworten ohne Komma, Schrägstrich, Klammer und ohne Satzzeichen am Ende (auch bei Fragen: „quelle heure est-il“,
  „combien ça coûte“). Beispielsätze in französischer Typografie mit Leerzeichen vor „?“ und „!“ wie in den
  bestehenden fr-Dateien.
- Reflexive Verben mit „se“, Possessiv als „son/sa/ses“ („faire sa valise“, „ranger sa chambre“, „fêter son
  anniversaire“). Wo Französisch den Artikel statt des Possessivs nimmt, so („se brosser les dents“, „se casser la
  jambe“). Formen mit „ton/ta“ habe ich nicht als Weitere Antworten aufgenommen (anders als „your“ im Englischen).
- Feste Sätze in der Form, die man spricht, bei Sie/du nach dem deutschen Feld: „Kann ich Ihnen helfen?“ → „je peux
  vous aider“, „Bedien dich!“ → „sers-toi“ (Weitere: „servez-vous“), „Fühl dich wie zu Hause!“ → „fais comme chez
  toi“ (Weitere: „faites comme chez vous“).
- Beispiele neu und für Frankreich geschrieben (Paris, Lyon, Bordeaux statt London, Oxford; Uhrzeiten „à quinze
  heures“, „vers vingt heures“ beim Abendessen; Trinkgeld in Frankreich). Alle Beispiele 6–12 Wörter.

### Unsicherheiten und offene Fragen

1. **Niveau geändert:** fr-wa-0259 „Heimweh haben – avoir le mal du pays“ A2 → B1. Die französische Wendung ist
   idiomatisch und kommt in Lehrwerken erst später; das deutsche/englische Gegenstück ist einfacher.
2. **Lange oder ungewöhnliche Hauptantworten** (Spracherkennung):
   - fr-wa-0107 „rund um die Uhr – vingt-quatre heures sur vingt-quatre“: Die Erkennung liefert vermutlich
     „24 heures sur 24“ oder „24h/24“ mit Ziffern; ob die App Ziffern und Zahlwörter gleich behandelt, ist eine
     Frage an die App.
   - Uhrzeiten fr-wa-0089–0091 („trois heures et quart“, „quatre heures moins le quart“, „trois heures et demie“):
     dasselbe Ziffernproblem („3 heures et quart“, „15 h 15“).
3. **Freie Entsprechungen statt wörtlicher Übersetzung** (bitte gegenlesen):
   - fr-wa-0113 „Hunger bekommen – commencer à avoir faim“ (es gibt kein festes Verb dafür).
   - fr-wa-0114 „satt sein – ne plus avoir faim“ (Weitere: „être rassasié“). „être plein“ ist umgangssprachlich und
     gilt oft als unschön, deshalb nicht aufgenommen.
   - fr-wa-0117 „Was gibt es zum Abendessen? – qu'est-ce qu'on mange ce soir“ (Weitere: „qu'est-ce qu'il y a pour
     le dîner“).
   - fr-wa-0163 „Sonst noch etwas? – et avec ceci“ (typische Ladenformel; Weitere: „et avec ça“, „autre chose“).
   - fr-wa-0166 „Hier, bitte. – voilà“ (Weitere: „tenez“, „voici“) – sehr kurz, aber die übliche Formel.
   - fr-wa-0231 „Wie wäre es mit …? – que dirais-tu de“ (Weitere: „ça te dirait“); ohne Auslassungspunkte wie im
     Original.
   - fr-wa-0264 „Wie weit ist es? – c'est à quelle distance“ (Weitere: „c'est loin“ – nicht ganz gleich, aber das,
     was man meist fragt).
   - fr-wa-0278 „Wie komme ich zum Bahnhof? – comment aller à la gare“ (Weitere: „pour aller à la gare“).
   - fr-wa-0302 „nass werden – se faire mouiller“ (Weitere: „se mouiller“; das hat auch die bildliche Bedeutung
     „sich exponieren“).
4. **Mehrdeutige deutsche Felder:**
   - fr-wa-0108 „über Nacht – pendant la nuit“: nur die wörtliche Bedeutung (Teig über Nacht im Kühlschrank). Die
     bildliche („über Nacht berühmt“ = „du jour au lendemain“) habe ich nicht als Weitere Antwort aufgenommen, weil
     sie nicht gleichwertig ist.
   - fr-wa-0178 „ausverkauft sein – être épuisé“ (Ware); Weitere „être complet“ (Konzert, Vorstellung).
   - fr-wa-0237/0238 „ein Spiel gewinnen/verlieren – gagner/perdre un match“; Weitere „une partie“ (Karten-,
     Brettspiel).
   - fr-wa-0275 „den Führerschein machen – passer le permis“: „passer“ heißt genau genommen „die Prüfung ablegen“,
     wird aber auch für den ganzen Weg gebraucht; Weitere „apprendre à conduire“.
5. fr-wa-0014/0015 „déjeuner“/„dîner“ als Verben: In Belgien, der Schweiz und Kanada heißt „déjeuner“ Frühstück
   und „dîner“ Mittagessen; die Antworten folgen dem Gebrauch in Frankreich.
6. fr-wa-0222 „Computerspiele spielen – jouer aux jeux vidéo“: Französisch unterscheidet Computer- und Videospiele
   im Alltag nicht.

### Kontrolle

- Nach jedem Block `node scripts/pruefe.mjs woerter/fr-wendungen-alltag.txt` (Blöcke 1–5 je 50 Zeilen, der letzte
  Block 0251–0310 mit 60 Zeilen in einem Zug): 0 Fehler, Hinweise nur „steht noch nicht in katalog.json“ und die
  Dublette fr-wa-0020 / fr-ws-0092.
- Hilfsskript (Scratchpad) vergleicht jede Zeile mit dem Original: 310 = 310 Zeilen, IDs, Deutsch, Themen gleich,
  Niveau gleich außer fr-wa-0259; keine Antwort mit Komma, Schrägstrich, Klammer oder Satzzeichen am Ende; alle
  Beispiele 6–12 Wörter, genau acht Felder.
- Zweites Hilfsskript sucht in allen fr-Dateien gleiches Deutsch oder gleiche Antwort (Ergebnis oben).
- Stichprobe von gut 30 Zeilen auf Übersetzung, Niveau und Beispiel; daraufhin geändert: vier Beispielsätze gekürzt
  (0096, 0134, 0137, 0247 hatten 13 Wörter), Weitere Antworten ergänzt (0020 „prendre une pause“, 0163 „et avec
  ça“, 0193 „s'inscrire à un club“).

---

## T-fr: Wendungen für Schule, Arbeit, Gespräch (Fassung von R2)

Neue Datei `woerter/fr-wendungen-schule-arbeit.txt`, französische Fassung von `woerter/wendungen-schule-arbeit.txt`
(R2): **274 Zeilen**, fr-ws-0001 bis fr-ws-0274, lückenlos, gleiche Nummern und Reihenfolge wie das Original. Keine Zeile
ausgelassen. Deutsch, Niveau und Themen per Skript gegen das Original geprüft: identisch. Kein Niveau geändert
(A2: 92, B1: 144, B2: 38). `node scripts/pruefe.mjs woerter/fr-wendungen-schule-arbeit.txt`: 0 Fehler, 2 Hinweise
(Datei noch nicht in `katalog.json`; eine Dublette, siehe unten).

### Neue Quelle

```json
{ "id": "fr-wendungen-schule-arbeit", "file": "woerter/fr-wendungen-schule-arbeit.txt", "version": 1, "count": 274, "lang": "fr" }
```

### Vorschläge für Listen

Analog zu pakete/R2.md (Anzahlen gleich, da Niveaus und Themen unverändert):

| id | name | description | level | filter |
|---|---|---|---|---|
| fr-wendungen-schule | Französisch: Wendungen: Schule & Studium | Feste Wendungen für Unterricht, Hausaufgaben und Prüfungen | A2 | `{ "topics": ["Wendungen/Schule"] }` (60) |
| fr-wendungen-arbeit | Französisch: Wendungen: Arbeit & Beruf | Bewerbung, Arbeitsalltag, Besprechungen, Telefon und E-Mail | B1 | `{ "topics": ["Wendungen/Arbeit"] }` (105) |
| fr-wendungen-gespraech | Französisch: Wendungen: Gespräch & Meinung | Höflich nachfragen, Meinung sagen, zustimmen und widersprechen | B1 | `{ "topics": ["Wendungen/Gespräch"] }` (109) |
| fr-wendungen-telefon-email | Französisch: Wendungen: Telefon & E-Mail | Telefonieren und Geschäftsbriefe | B1 | `{ "topics": ["Wendungen/Arbeit/Telefon und E-Mail"] }` (28) |
| fr-wendungen-gespraech-a2 | Französisch: Wendungen im Gespräch – A2 | Die wichtigsten Sätze zum Nachfragen und Antworten | A2 | `{ "topics": ["Wendungen/Gespräch"] }`, `"levels": ["A2"]` (35) |

Alle mit `"answerLang": "fr"`. Namen nach dem Muster „Französisch: …“; ob der doppelte Doppelpunkt („Französisch:
Wendungen: …“) stört, beim Zusammenführen entscheiden (Alternative „Französisch: Schule & Studium – Wendungen“).

### Vorgehen

- In Blöcken zu 50 Zeilen geschrieben, nach jedem Block `pruefe.mjs` und ein eigenes Vergleichsskript (IDs, Deutsch,
  Niveau, Themen gleich wie im Original; keine Kommas, Schrägstriche, Klammern, Satzzeichen in der Antwort; Länge der
  Beispielsätze).
- Antwort vom Deutschen aus übersetzt, Infinitive ohne Artikel, Platzhalter „quelqu'un“/„quelque chose“, Possessiv
  generisch mit „son/sa/ses“ („faire ses devoirs“, „gagner sa vie“, „perdre son emploi“).
- Satzartige Antworten klein, ohne Schlusszeichen (auch ohne „?“, wie in den Hinweisen verlangt; die älteren fr-Dateien
  schreiben z. B. „ça va ?“ mit Fragezeichen – beim Zusammenführen ggf. vereinheitlichen). Feste Formeln, die sonst
  ein Komma hätten, ohne Komma: „un instant s'il vous plaît“, „asseyez-vous je vous en prie“, „pourriez-vous répéter
  s'il vous plaît“, „Madame Monsieur“.
- Beispiele neu formuliert, wo der englische Satz nicht passte: Orte in Frankreich statt England (Klassenfahrt nach
  Lyon, Universität in Lille, Abschluss in Toulouse), französische Namen (Madame Dupont, Monsieur Martin, Madame
  Leroy), Uhrzeiten mit „dix-sept heures“, „contrôle de maths“ statt Französischarbeit. Die deutsche Übersetzung wurde
  dann mit angepasst (das Feld Deutsch selbst ist unverändert).
- Stichprobe von 30 Zeilen (jede neunte etwa) auf Übersetzung, Niveau und Beispiele geprüft; korrigiert: fr-ws-0061
  (Beispiel zu lang), fr-ws-0241 (natürlicheres Beispiel), fr-ws-0201 (Weitere Antwort „avoir une discussion“
  entfernt, weil sie die Antwort von fr-ws-0263 ist), fr-ws-0255 (Beispiel nicht mehr gleich wie fr-ws-0260).

### Alias-Kandidaten (Dubletten mit anderen fr-Dateien)

- fr-ws-0092 „eine Pause machen – faire une pause“ = fr-wa-0020 (fr-wendungen-alltag, T-fr). Entspricht der im
  Original vermuteten Überschneidung ws-0092/R1. Behalten (gehört zum Original), Alias beim Zusammenführen anlegen;
  Haupt-ID nach Regel die ältere Quelle bzw. so wie bei ws-0092/wa-0020 im Englischen entschieden.
- Weitere Überschneidungen, die R2 mit R1 vermutete (ws-0166, 0173–0175, 0177, 0199, 0200, 0222/0223, 0244 …),
  ergeben auf Französisch keine Wortpaar-Dublette (pruefe.mjs meldet nur die eine). Nach dem Mergen aller T-fr-Dateien
  noch einmal `node scripts/pruefe.mjs --dubletten` laufen lassen.

### Unsicherheiten und Entscheidungen

- **Schulsystem:** „das Abitur machen – passer le baccalauréat“ (Weitere: passer le bac; wie fr-sb-0064 mit
  „le baccalauréat“ als Antwort), „eine Klassenarbeit schreiben – faire un contrôle“, „nachsitzen müssen – avoir une
  retenue“ (Weitere: être collé), „Nachhilfe nehmen – prendre des cours particuliers“, „das Zeugnis bekommen – recevoir
  son bulletin“ (in Frankreich pro Trimester, Beispiel trotzdem „vor den Ferien“), „mit Auszeichnung bestehen – réussir
  avec mention“, „die volle Punktzahl – la note maximale“ (Weitere: avoir vingt sur vingt).
- **fr-ws-0153 „Sehr geehrte Damen und Herren – Madame Monsieur“:** Die übliche Briefanrede ist „Madame, Monsieur,“
  mit Komma; das Komma darf nicht in die Antwort. „Madame Monsieur“ ohne Komma sieht ungewohnt aus, wird aber so
  gesprochen. Weitere: Mesdames et Messieurs, Madame ou Monsieur.
- **fr-ws-0154/0155 Grußformeln:** „Mit freundlichen Grüßen – cordialement“ (E-Mail-Standard; im Brief eigentlich
  „Veuillez agréer … l'expression de mes salutations distinguées“, als Weitere nur „salutations distinguées“), „Viele
  Grüße – amicalement“ (Weitere: bien amicalement, bien à toi).
- **fr-ws-0189 „Wie sagt man das auf Englisch?“:** Feld Deutsch muss gleich bleiben, also „comment dit-on ça en
  anglais“. In einer französischen Liste wäre „auf Französisch – en français“ nützlicher; ggf. als eigene Zeile in einem
  späteren Paket.
- **fr-ws-0068 „eine Bewerbung schreiben – écrire une lettre de motivation“:** Im Französischen schreibt man das
  Anschreiben (lettre de motivation) und schickt die candidature; „écrire une candidature“ sagt man kaum. Weitere:
  rédiger une lettre de motivation, rédiger une candidature.
- **fr-ws-0069 „rédiger un CV“:** „CV“ ist eine Abkürzung, aber im Katalog bereits die Antwort für „Lebenslauf“
  (fr-ab-0042, fr-pw-0004, fr-sb-0122); Weitere: rédiger un curriculum vitae.
- **fr-ws-0079 „im Schichtdienst arbeiten – travailler en horaires décalés“:** Es gibt keine einzelne gängige Wendung;
  „horaires décalés“ ist etwas weiter (auch Nacht-/Wochenendarbeit), Weitere: travailler par roulement. Alternativen
  wären „travailler en équipes“ (verwechselbar mit „im Team arbeiten“) oder „faire les trois-huit“ (zu speziell).
- **fr-ws-0203 „Small Talk machen – parler de la pluie et du beau temps“:** bildhafte Wendung, aber die übliche
  Entsprechung; Weitere: bavarder de tout et de rien, faire la conversation. Niveau B1 belassen, auf Französisch eher B2.
- **fr-ws-0248 „auf jeden Fall – absolument“:** „en tout cas“ ist ein falscher Freund (= jedenfalls), deshalb nicht
  aufgenommen. Weitere: bien sûr, sans faute, c'est sûr.
- **fr-ws-0216/0217:** „alles in allem – tout compte fait“ und „im Großen und Ganzen – dans l'ensemble“ bewusst
  verschieden gewählt, damit die zwei Zeilen unterscheidbar bleiben.
- **fr-ws-0088 „jemanden feuern – virer quelqu'un“:** umgangssprachlich wie das Deutsche; neutral als Weitere
  (renvoyer, licencier).
- **fr-ws-0095 „frei haben – être en congé“**, **fr-ws-0097 „sich krankmelden – se faire porter malade“**,
  **fr-ws-0144 „Kann ich etwas ausrichten? – je peux lui transmettre un message“** (Weitere: voulez-vous laisser un
  message), **fr-ws-0259 „Das ist ein guter Punkt – c'est une bonne remarque“** („c'est un bon point“ ist ein
  Anglizismus, nicht aufgenommen): jeweils die gebräuchlichste Form gewählt, Alternativen als Weitere.
- **Kurzformen und Fragen:** Fragen in der Inversions- und der Umgangsform als gleichwertig behandelt
  („qu'est-ce que vous faites dans la vie“, Weitere „que faites-vous dans la vie“). Bindestriche („que faites-vous“,
  „asseyez-vous“) stehen in Antworten; sie sind kein Trennzeichen für den Parser.
- Mehrere Zeilen haben dieselbe Weitere Antwort wie die Antwort einer anderen Zeile (z. B. „je vois ce que tu veux
  dire“ in 0195 als Weitere, „pas question“ in 0249 und 0262). Keine Wortpaar-Dublette, aber beim Abfragen sind beide
  richtig – gewollt.

### Offene Fragen

1. Sollen satzartige Antworten wie in den älteren fr-Dateien („ça va ?“) Frage- und Ausrufezeichen behalten? Ich habe
   die Hinweise befolgt und sie weggelassen.
2. „Madame Monsieur“ ohne Komma (fr-ws-0153) so lassen, oder lieber „Mesdames et Messieurs“ als Antwort?
3. Alias fr-ws-0092 → fr-wa-0020 (oder umgekehrt) beim Zusammenführen anlegen.

---

## T-fr: Redewendungen (Fassung von R3)

Neue Datei `woerter/fr-redewendungen.txt`, französische Fassung von `woerter/redewendungen.txt` (R3): **345 Zeilen**,
`fr-ri-0001` bis `fr-ri-0345`, lückenlos, gleiche Nummern und Reihenfolge wie das Original. Keine Zeile ausgelassen.
Deutsch, Niveau und Themen unverändert übernommen (per Skript gegen das Original geprüft), also wie in R3:
B1 11, B2 160, C1 168, C2 6; Themen und Anzahlen wie in `pakete/R3.md`.

Antwort jeweils die französische Wendung, wo es eine gebräuchliche gibt (croiser les doigts, tourner autour du pot,
vendre la mèche, mettre son grain de sel …), sonst eine kurze natürliche Umschreibung. Platzhalter „quelqu'un“/„quelque chose“.
Kein Komma, Schrägstrich oder Klammer in Antworten. Beispielsätze neu auf Französisch, das deutsche Beispiel meist aus
dem Original; wo der französische Satz anders gebaut ist, ist das deutsche Beispiel angepasst (z. B. 0022, 0034, 0036,
0065, 0088, 0091, 0118, 0141, 0172, 0202, 0234, 0328).

Geprüft in sieben Blöcken (≤ 50 Zeilen) mit `node scripts/pruefe.mjs woerter/fr-redewendungen.txt`: 0 Fehler, nur der
erwartete Hinweis „steht noch nicht in katalog.json“. Zusätzlich mit Hilfsskript: acht Felder, keine Kommas/Schrägstriche/
Klammern in Antworten, Länge der Beispiele, doppelte Antworten in der Datei und gleiche Antworten in anderen fr-Dateien.
Stichprobe von gut 30 Zeilen zum Schluss (Übersetzung, Niveau, Beispiele).

### Neue Quelle

```json
{ "id": "fr-redewendungen", "file": "woerter/fr-redewendungen.txt", "version": 1, "lang": "fr", "count": 345 }
```

### Vorschläge für Listen

Wie in R3, mit `answerLang` und Präfix `fr-` (Filter nach Themen, wie bei den übrigen fr-Listen):

```json
[
  { "id": "fr-redewendungen-b2", "name": "Französisch: Redewendungen – B1/B2", "description": "Bildhafte Wendungen, die man oft hört: Daumen drücken, die Nase voll haben", "level": "B2", "answerLang": "fr", "filter": { "topics": ["Redewendungen"], "levels": ["B1", "B2"] } },
  { "id": "fr-redewendungen-c1", "name": "Französisch: Redewendungen – C1/C2", "description": "Bildhafte Wendungen für Fortgeschrittene", "level": "C1", "answerLang": "fr", "filter": { "topics": ["Redewendungen"], "levels": ["C1", "C2"] } },
  { "id": "fr-redewendungen-gefuehle-beziehungen", "name": "Französisch: Redewendungen: Gefühle & Beziehungen", "description": "B1–C2, mit Beispielsätzen", "answerLang": "fr", "filter": { "topics": ["Redewendungen/Gefühle", "Redewendungen/Beziehungen"] } },
  { "id": "fr-redewendungen-reden-denken", "name": "Französisch: Redewendungen: Reden, Denken & Ehrlichkeit", "description": "B1–C2, mit Beispielsätzen", "answerLang": "fr", "filter": { "topics": ["Redewendungen/Reden & Schweigen", "Redewendungen/Denken & Verstehen", "Redewendungen/Ehrlichkeit & Täuschung"] } },
  { "id": "fr-redewendungen-charakter", "name": "Französisch: Redewendungen: Charakter & Verhalten", "description": "B1–C2, mit Beispielsätzen", "answerLang": "fr", "filter": { "topics": ["Redewendungen/Charakter & Verhalten"] } },
  { "id": "fr-redewendungen-arbeit-erfolg", "name": "Französisch: Redewendungen: Arbeit, Erfolg & Probleme", "description": "B1–C2, mit Beispielsätzen", "answerLang": "fr", "filter": { "topics": ["Redewendungen/Arbeit & Anstrengung", "Redewendungen/Erfolg & Misserfolg", "Redewendungen/Probleme & Schwierigkeiten"] } },
  { "id": "fr-redewendungen-entscheidungen-glueck-geld", "name": "Französisch: Redewendungen: Entscheidungen, Glück, Geld & Zeit", "description": "B1–C2, mit Beispielsätzen", "answerLang": "fr", "filter": { "topics": ["Redewendungen/Entscheidungen & Risiko", "Redewendungen/Glück & Pech", "Redewendungen/Geld", "Redewendungen/Zeit & Tempo"] } }
]
```

Anzahlen wie in R3: B1/B2 171, C1/C2 174; Gefühle & Beziehungen 92, Reden/Denken/Ehrlichkeit 99, Charakter 43,
Arbeit/Erfolg/Probleme 76, Entscheidungen/Glück/Geld/Zeit 35. `count`/`version` beim Zusammenführen setzen.

### Alias-Kandidaten

Keine: `pruefe.mjs` meldet kein Wortpaar (Deutsch + Antwort), das schon in einer anderen fr-Datei steht – auch nicht in
den parallel entstandenen `fr-wendungen-alltag.txt`, `fr-wendungen-schule-arbeit.txt`, `fr-sprichwoerter.txt` (Stand
beim letzten Prüflauf; keine gleichen deutschen Grundformen dort gefunden).

### Unsicherheiten und offene Fragen

1. **Gleiche französische Antwort, anderes deutsches Wort** (kein Alias, aber verwechselbar):
   - fr-ri-0079 „jemanden hinters Licht führen – mener quelqu'un en bateau“ wie fr-gw-1198 „jemandem einen Bären
     aufbinden“; dieselbe Wendung ist auch weitere Antwort von fr-ri-0091 „jemanden an der Nase herumführen“.
   - fr-ri-0262 „ins Wasser fallen – tomber à l'eau“ wie fr-gw-1186 „ins Leere laufen“.
   - fr-ri-0309 „am seidenen Faden hängen – ne tenir qu'à un fil“ wie fr-gw-1197 „auf Messers Schneide stehen“.
   - fr-ri-0089 „jemanden übers Ohr hauen – arnaquer quelqu'un“ hat „rouler quelqu'un“ als weitere Antwort; das ist die
     Hauptantwort von fr-vh-0146 „jemanden über den Tisch ziehen“.
   - In der Datei teilen sich 0010/0011 (être au septième ciel, être aux anges) bewusst weitere Antworten, wie im Original.
2. **Umschreibung statt echter Wendung** (keine gleichwertige französische Redewendung gefunden): 0038 Musik in jemandes
   Ohren (être une douce musique aux oreilles de quelqu'un – eher Lehnbildung, weitere: faire plaisir à entendre),
   0035 mit einem lachenden und einem weinenden Auge (avec des sentiments mitigés), 0049 jemandem nach dem Mund reden
   (dire à quelqu'un ce qu'il veut entendre), 0118 den Rücken stärken (soutenir quelqu'un), 0154 in die Wüste schicken
   (limoger quelqu'un), 0183 über die Stränge schlagen (faire des excès), 0184 die Puppen tanzen lassen (faire la fête),
   0187 die Kirche im Dorf lassen (garder le sens de la mesure), 0190 eine Extrawurst bekommen, 0192 Rückgrat zeigen
   (faire preuve de caractère), 0202 den Wald vor lauter Bäumen nicht sehen (se perdre dans les détails), 0214 sich einen
   Reim machen (s'expliquer quelque chose), 0230 sich etwas durch den Kopf gehen lassen (réfléchir à quelque chose),
   0255 übers Knie brechen (précipiter quelque chose), 0286 sich ins gemachte Nest setzen (profiter d'une situation
   toute faite), 0300 die Suppe auslöffeln müssen (devoir assumer les conséquences), 0308 über den Kopf wachsen
   (dépasser quelqu'un). Wer hier eine andere natürliche Formulierung sagt, wird abgelehnt – ggf. weitere Antworten
   ergänzen.
3. **Bedeutung nicht ganz deckungsgleich**, aber die übliche Entsprechung:
   - 0201 auf dem Schlauch stehen – avoir un blanc (frz. eher „Blackout“; weitere: ne pas capter, bloquer).
   - 0150 jemandem auf der Nase herumtanzen – marcher sur les pieds de quelqu'un (frz. auch „jemandem zu nahe treten“);
     0122 jemandem auf die Füße treten bekam deshalb „marcher sur les plates-bandes de quelqu'un“.
   - 0244 die Kastanien aus dem Feuer holen – tirer les marrons du feu: heute im Französischen oft umgekehrt verstanden
     („den Nutzen einstreichen“); Beispielsatz macht die deutsche Bedeutung klar, trotzdem prüfen.
   - 0146 ein Dorn im Auge – une épine dans le pied (frz. eher „lästiges Problem“).
   - 0032 jemandem fällt die Decke auf den Kopf – tourner en rond.
   - 0204 etwas auf dem Schirm haben – avoir quelque chose en tête (fast gleich wie 0203 garder quelque chose en tête).
   - 0234 ein alter Hut – être du déjà-vu (Beispielsatz deshalb neu: Zaubertrick statt CDs).
4. **Umgangssprachliche Hauptantworten** (dem deutschen Register entsprechend): en avoir marre, sortir par les yeux,
   mettre un râteau, plaquer, être gaga de, se la couler douce, partir en vrille (weitere: foirer), avoir du bol, se
   dégonfler, être du gâteau. Falls lieber neutral: Hauptantwort und weitere Antwort tauschen.
5. **Hals- und Beinbruch** (0330): echte Entsprechung ist das Theater-„Merde !“; als derb eingestuft und daher nur
   weitere Antwort, Hauptantwort „bonne chance“.
6. **Schmetterlinge im Bauch** (0009): „avoir des papillons dans le ventre“ kommt aus Québec, ist in Frankreich aber
   inzwischen verbreitet; Niveau B1 belassen.
7. **Subjektwechsel**: 0016 jemandem fällt ein Stein vom Herzen – être soulagé d'un poids, 0065 jemandem auf der Zunge
   liegen – avoir quelque chose sur le bout de la langue, 0212 jemandem schwirrt der Kopf – avoir la tête qui tourne,
   0200 jemandem geht ein Licht auf – faire tilt (unpersönlich: „ça a fait tilt“).
8. **Substantive** mit bestimmtem Artikel: le loup déguisé en agneau, le hic, la pomme de discorde, le cercle vicieux,
   la partie émergée de l'iceberg, le coup d'épée dans l'eau, le travail de Sisyphe. „le hic“ ist kurz; Spracherkennung
   prüfen.
9. Niveaus unverändert. Einige Wendungen sind im Französischen für Lernende eher leichter (tomber à l'eau, être du gâteau,
   coûter les yeux de la tête) bzw. schwerer (tomber de Charybde en Scylla, finir en eau de boudin, sonner les cloches);
   keine Änderung, weil die Abweichung nicht eindeutig ist.

---

## T-fr: Sprichwörter (Fassung von R4)

Neue Datei `woerter/fr-sprichwoerter.txt`, französische Fassung von `woerter/sprichwoerter.txt` (R4): 129 Zeilen,
fr-sp-0001 bis fr-sp-0129, lückenlos, gleiche Nummern und Reihenfolge wie das Original. Keine Zeile ausgelassen.
Deutsch, Niveau und Themen unverändert übernommen (per Skript gegen das Original geprüft).

### Neue Quelle

```json
{ "id": "fr-sprichwoerter", "file": "woerter/fr-sprichwoerter.txt", "lang": "fr", "count": 129 }
```

### Vorschläge für Listen

Analog zu R4 (Anzahlen gleich, da Niveaus unverändert):

```json
[
  { "id": "fr-sprichwoerter", "name": "Französisch: Sprichwörter", "description": "Deutsche Sprichwörter und ihre französische Entsprechung", "level": "C1", "answerLang": "fr", "filter": { "topics": ["Sprichwörter"] } },
  { "id": "fr-sprichwoerter-b2", "name": "Französisch: Sprichwörter – B1/B2", "description": "Bekannte Sprichwörter: Übung macht den Meister, Zeit ist Geld …", "level": "B2", "answerLang": "fr", "filter": { "topics": ["Sprichwörter"], "levels": ["B1", "B2"] } },
  { "id": "fr-sprichwoerter-c1", "name": "Französisch: Sprichwörter – C1/C2", "description": "Anspruchsvollere Sprichwörter für Fortgeschrittene", "level": "C1", "answerLang": "fr", "filter": { "topics": ["Sprichwörter"], "levels": ["C1", "C2"] } }
]
```

Anzahlen: alle 129, B1/B2 73, C1/C2 56. (Ob die Listen die Quelle per `source` o. ä. einschränken müssen, richtet sich
danach, wie die übrigen fr-Listen in `katalog.json` gebaut sind – beim Zusammenführen angleichen.)

### Inhalt

- Themen wie im Original: Arbeit & Lernen 20, Zeit & Geduld 15, Geld & Besitz 11, Menschen & Beziehungen 24,
  Vorsicht & Klugheit 20, Reden & Handeln 13, Glück & Schicksal 8, Lebensweisheiten 12, Gesundheit & Essen 6.
- Niveaus wie im Original: B1 6, B2 67, C1 53, C2 3. Kein Niveau geändert.
- Antwort: das gebräuchliche französische Sprichwort, vom Deutschen aus gewählt (nicht vom Englischen), z. B.
  „C'est en forgeant qu'on devient forgeron“, „Quand le vin est tiré il faut le boire“, „Un tiens vaut mieux que deux
  tu l'auras“, „C'est l'hôpital qui se moque de la charité“, „Faute de grives on mange des merles“.
- Kein Komma, kein Schrägstrich, keine Klammer in Antworten: Sprichwörter, die üblicherweise mit Komma geschrieben
  werden, stehen ohne („Loin des yeux loin du cœur“, „Premier arrivé premier servi“, „Chose promise chose due“,
  „Pas de nouvelles bonnes nouvelles“, „L'homme propose Dieu dispose“, „La parole est d'argent le silence est d'or“).
  In den Beispielsätzen stehen die Kommas normal.
- Beispiele: neue französische Sätze, wo der englische Satz nicht passte (z. B. fr-sp-0042 „Chaque euro compte“,
  fr-sp-0043 kostenlose App statt billiger Schuhe, weil „Ce qui ne coûte rien ne vaut rien“ sonst unlogisch wäre;
  fr-sp-0044 übernimmt dafür die billigen Schuhe). Die deutsche Übersetzung enthält jeweils das Sprichwort aus dem Feld
  Deutsch (per Skript geprüft), die französische jeweils die Antwort.
- Beispiellänge: meist 6–12 Wörter; bei langen Sprichwörtern (fr-sp-0005, 0032, 0061, 0076, 0087, 0120) bis 20,
  weil das Sprichwort selbst schon 9–14 Wörter hat.

### Unsicherheiten

Antworten, die keine 1:1-Entsprechung sind, sondern das nächstliegende französische Sprichwort oder eine kurze
Umschreibung (es gibt kein gängiges französisches Sprichwort mit derselben Bedeutung):

- fr-sp-0007 Wer rastet, der rostet → Qui n'avance pas recule (nächstliegendes Sprichwort, Bedeutung leicht anders:
  „wer nicht vorankommt, fällt zurück“)
- fr-sp-0009 Viele Hände, schnelles Ende → À plusieurs c'est plus vite fait (Umschreibung; „L'union fait la force“
  ist für fr-sp-0102 vergeben)
- fr-sp-0012 Was Hänschen nicht lernt … → Ce qu'on n'apprend pas jeune on ne l'apprend plus (Umschreibung;
  „On n'apprend pas à un vieux singe à faire des grimaces“ bewusst nicht, weil es das Gegenteil meint: Erfahrene muss
  man nichts lehren)
- fr-sp-0015 Probieren geht über Studieren → Il faut essayer pour savoir (Umschreibung)
- fr-sp-0024 Gut Ding will Weile haben → Les bonnes choses prennent du temps (Umschreibung; „Tout vient à point à
  qui sait attendre“ steht bei fr-sp-0025)
- fr-sp-0043 Was nichts kostet, ist nichts wert → Ce qui ne coûte rien ne vaut rien (wörtlich, im Französischen
  verständlich und gebraucht, aber kein fest geprägtes Sprichwort)
- fr-sp-0045 Wie gewonnen, so zerronnen → Vite gagné vite perdu (Umschreibung in Sprichwortform; das alte „Ce qui
  vient de la flûte s'en va par le tambour“ ist veraltet)
- fr-sp-0051 Blut ist dicker als Wasser → Les liens du sang sont plus forts que tout (Umschreibung; „Le sang est plus
  épais que l'eau“ ist Lehnübersetzung)
- fr-sp-0059 Geteiltes Leid ist halbes Leid → Un chagrin partagé est moins lourd à porter (Umschreibung)
- fr-sp-0062 Wie man in den Wald hineinruft … → C'est l'effet boomerang (Umschreibung; „On récolte ce que l'on sème“
  ist für fr-sp-0090 vergeben)
- fr-sp-0064 Kleider machen Leute → L'apparence compte, Weitere: La première impression compte (Umschreibung;
  „L'habit ne fait pas le moine“ meint das Gegenteil und ist deshalb nicht genommen)
- fr-sp-0068 Undank ist der Welt Lohn → Le monde est ingrat (Umschreibung)
- fr-sp-0070 Eigenlob stinkt → Il ne faut pas se vanter, Weitere: Qui se loue s'emboue (das eigentliche Sprichwort
  ist selten und altmodisch, daher nur als Weitere Antwort)
- fr-sp-0084 Ehrlich währt am längsten → Mieux vaut être honnête, Weitere: L'honnêteté paie toujours (Umschreibung)
- fr-sp-0086 Hinterher ist man immer klüger → On est toujours plus malin après coup (Umschreibung)
- fr-sp-0107 Auch ein blindes Huhn findet mal ein Korn → Aux innocents les mains pleines (nächstliegendes Sprichwort:
  „Unbedarfte haben Glück“; Beispielsatz darauf zugeschnitten)
- fr-sp-0112 Der Weg ist das Ziel → L'important c'est le chemin (Umschreibung)
- fr-sp-0116 Es wird nichts so heiß gegessen … → Rien n'est jamais aussi grave qu'on le croit (Umschreibung)
- fr-sp-0120 Alter schützt vor Torheit nicht → Il n'y a pas d'âge pour faire des bêtises (Umschreibung)

Weitere Einzelpunkte:

- fr-sp-0008 „Trop de cuisiniers gâtent la sauce“ gibt es, ist im Französischen aber weniger geläufig als das
  deutsche/englische Gegenstück.
- fr-sp-0106 Aller guten Dinge sind drei → La troisième fois sera la bonne; Weitere „Jamais deux sans trois“ (in
  Wörterbüchern das übliche Paar, meint aber eher „was zweimal passiert, passiert ein drittes Mal“, oft negativ). Bei
  strenger Auslegung von „nur gleichwertige“ streichen.
- fr-sp-0129 Im Wein liegt die Wahrheit → In vino veritas (so sagt man es im Französischen; Latein könnte die
  französische Spracherkennung schlechter treffen), Weitere: La vérité est dans le vin.
- fr-sp-0023 Paris statt Rom („Paris ne s'est pas fait en un jour“ ist die übliche französische Form), Rome als
  Weitere Antwort. fr-sp-0081 printemps statt Sommer, fr-sp-0094 chanson statt musique – jeweils die französische Form.
- fr-sp-0071: Antwort „On n'est jamais trop prudent“ (passt zum Niveau B1 und zum Beispiel), das eigentliche
  Sprichwort „Prudence est mère de sûreté“ als Weitere Antwort. „Mieux vaut prévenir que guérir“ steht bei fr-sp-0072.
- Niveau: unverändert. Einige französische Entsprechungen sind für Lernende eher schwerer als das englische Gegenstück
  (z. B. fr-sp-0001 „C'est en forgeant qu'on devient forgeron“ auf B1, fr-sp-0124 „Une pomme chaque matin éloigne le
  médecin“ auf B1 – im Französischen weniger bekannt). Ggf. beim Mergen auf B2 heben.
- Weitere Antworten sind teils andere, gleichbedeutende Sprichwörter statt bloßer Varianten (fr-sp-0006, 0026, 0041,
  0046, 0049, 0076, 0093, 0128). Bei strenger Auslegung kürzen.
- Lange Antworten (fr-sp-0005, 0032, 0061, 0087) sind per Spracherkennung schwer exakt zu treffen.

### Alias-Kandidaten / Dubletten

- `pruefe.mjs` meldet keine Dublette (0 Wortpaare der Datei in mehreren Dateien).
- Zusätzlich per Hilfsskript geprüft: Keine Antwort und keine Weitere Antwort kommt in einer anderen fr-Datei vor
  (auch nicht in den parallel entstehenden fr-wendungen-alltag, fr-wendungen-schule-arbeit, fr-redewendungen – Stand
  bei Abschluss dieser Datei). Keine Antwort doppelt innerhalb der Datei. Da die Nachbardateien noch in Arbeit waren,
  beim Zusammenführen `pruefe.mjs` über alle fr-Dateien erneut laufen lassen (naheliegende Kandidaten: „Le monde est
  petit“, „Mieux vaut tard que jamais“, „Quand on veut on peut“, „Tel père tel fils“, falls sie dort als Wendung
  auftauchen – mit anderem Feld Deutsch wären es aber keine Dubletten im Sinne von pruefe.mjs).

### Offene Fragen

- Paraphrasen-Antworten (Liste oben): Sollen sie bleiben, oder lieber wörtlichere, aber im Französischen ungebräuchliche
  Fassungen? Gewählt wurde nach Regel 4 jeweils die natürliche Umschreibung.
- „Jamais deux sans trois“ (fr-sp-0106) als Weitere Antwort zulassen?

### Prüfung

- `node scripts/pruefe.mjs woerter/fr-sprichwoerter.txt` nach jedem Block (50, 50, 29 Zeilen): 0 Fehler; einziger
  Hinweis „steht noch nicht in katalog.json“ (erwartet).
- Hilfsskript (Scratchpad, nicht im Repo): ids, Deutsch, Niveau, Themen gleich wie im Original; genau 8 Felder; keine
  „,“, „/“, „(“ in Antworten; Antwort im französischen und Sprichwort im deutschen Beispiel; Beispiellängen;
  Dubletten in der Datei und gegen alle anderen fr-Dateien. UTF-8 ohne BOM, LF.
- Kritische Stichprobe von 30 Zeilen (0001, 0002, 0007, 0009, 0012, 0015, 0019, 0023, 0029, 0039, 0041, 0043, 0044,
  0045, 0055, 0057, 0062, 0063, 0064, 0076, 0090, 0094, 0106, 0107, 0110, 0114, 0115, 0116, 0120, 0129) auf
  Übersetzung, Niveau und natürliche Beispiele; dabei sieben Beispielsätze gekürzt bzw. neu gefasst (0018, 0029,
  0065, 0090, 0114, 0115, 0116) und bei 0043/0044 die Beispiele getauscht, damit sie zur Bedeutung passen.
