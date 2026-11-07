# Paket X-fr: Französische Fassungen der Ausbau-Dateien (W1–W5)

Fünf neue Wortdateien, je eine Fassung der Originale aus W1–W5 (Branches wortschatz/W1 … wortschatz/W5, noch nicht auf
main). IDs `fr-<id des Originals>`, gleiche Nummern und Reihenfolge, keine Zeile ausgelassen. Deutsch (mit
Klammerhinweis), Niveau und Themen wie im Original – per Skript gegen die W-Dateien geprüft.

| Datei | Original | Zeilen |
|---|---|---|
| woerter/fr-ausbau-alltag.txt | woerter/ausbau-alltag.txt (W1) | 443 |
| woerter/fr-ausbau-schule-arbeit.txt | woerter/ausbau-schule-arbeit.txt (W2) | 440 |
| woerter/fr-ausbau-natur-welt.txt | woerter/ausbau-natur-welt.txt (W3) | 461 |
| woerter/fr-ausbau-gesellschaft.txt | woerter/ausbau-gesellschaft.txt (W4) | 442 |
| woerter/fr-ausbau-grundwoerter.txt | woerter/ausbau-grundwoerter.txt (W5) | 487 |

Neue Quellen (lang fr, version 1): `fr-ausbau-alltag` (443), `fr-ausbau-schule-arbeit` (440), `fr-ausbau-natur-welt` (461), `fr-ausbau-gesellschaft` (442), `fr-ausbau-grundwoerter` (487) – zusammen 2273 Wörter.

## Nachträglich von der Hauptsession angeglichen

- **Maler:** W2 und W4 haben inzwischen „Maler (Handwerker)“ (xb-0191) bzw. „Maler (Künstler)“ (xd-0264); die Fassung
  übernimmt das. Die Teilnotizen nennen Maler teils noch als Alias-Kandidaten – das entfällt.
- **Niveau** überall wie im Original; Vorschläge für andere Niveaus stehen nur als Hinweis in den Teilnotizen.
- **Maler (Handwerker)** (xb-0191): Hauptantwort „le peintre en bâtiment“ (Weitere: le peintre); Maler (Künstler)
  (xd-0264) bleibt „le peintre“.
- **Navi** (xc-0387): Hauptantwort „le GPS“ wie im Bestand bei Navigationssystem (fr-vm-0078) – so sagt man es.
- **Kleinigkeit** (xe-0342): Hauptantwort „le détail“ (Weitere: la broutille, la petite chose), Beispiel angepasst.

## Beim Zusammenführen

- W1–W5 zuerst mergen; ändert sich dort eine Zeile, die Fassung nachziehen.
- Alias-Kandidaten: die Wortpaare, die schon in den englischen W-Dateien doppelt stehen (Kantine, Stecker, addieren,
  Ziffer, Metall …), sind hier ebenfalls doppelt und gleich übersetzt → Alias wie im Englischen. Ausnahme: **locker**
  (xa-0169 / xe-0112) ist in dieser Sprache je nach Bedeutung verschieden übersetzt → kein Alias; für eine M-Runde
  „locker (Kleidung)“ / „locker (Schraube, Zahn)“.
- Danach `node scripts/pruefe.mjs --dubletten` über alle fr-Dateien.
- Bestehende fr-Themenlisten wachsen über ihre Filter (count/version erhöhen); neue Listen wie in W1.md–W5.md mit
  id `fr-<id der englischen Liste>` und `answerLang: "fr"` (Details in den Teilen).
- Offene Grundsatzfrage für alle Sprachen: „indem“ (xe) hat kein Einzelwort-Gegenstück (fr „en“, es „mediante“,
  it „facendo“) – Zeile in den Fassungen behalten oder ausblenden?

## X-fr – Ausbau Alltag (Fassung von W1)

Datei `woerter/fr-ausbau-alltag.txt`, **443 Zeilen** (fr-xa-0001 … fr-xa-0443, lückenlos), eine Zeile je Zeile des
Originals `woerter/ausbau-alltag.txt` (W1), gleiche Nummer, gleiche Reihenfolge wie in der Originaldatei (also auch
xa-0430 … xa-0443 an ihrer Stelle beim Thema, nicht am Ende). Deutsch (mit Klammerhinweisen), Niveau und Themen exakt
wie im Original (per Skript gegen das Original verglichen: 0 Abweichungen). Keine Zeile ausgelassen, keine umschrieben.

`node scripts/pruefe.mjs woerter/fr-ausbau-alltag.txt`: 0 Fehler; Hinweise nur „steht noch nicht in katalog.json“ und
die Dubletten unten.

Niveaus (wie Original): 22 × A1, 104 × A2, 154 × B1, 121 × B2, 42 × C1.

### Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| `fr-ausbau-alltag` | `woerter/fr-ausbau-alltag.txt` | fr | 443 |

### Vorschläge für Listen

Wie in W1.md, jeweils mit id `fr-<id der englischen Liste>`, `answerLang: "fr"`, Name „Französisch: …“.

Bestehende französische Themenlisten nehmen die neuen Wörter über ihre Filter auf (count/version anheben):
`fr-alltag-zuhause` (+67), `fr-essen-trinken` (+91), `fr-kleidung-mode` (+30), `fr-einkaufen-geld` (+20),
`fr-familie-beziehungen` (+50), `fr-koerper-gesundheit` (+144), `fr-gefuehle-charakter` (+41, siehe offene Frage 1 in
W1.md: Filter `Mensch` würde Aussehen und Lebensphasen mitnehmen).

Neue Listen (falls die englischen aus W1.md angelegt werden):

| id | name | level | filter |
|---|---|---|---|
| `fr-aussehen-lebensphasen` | Französisch: Aussehen & Lebensphasen | A2 | topics `Mensch/Aussehen`, `Mensch/Lebensphasen` (41) |
| `fr-koerperpflege` | Französisch: Körperpflege | A2 | topics `Gesundheit/Körperpflege` (16) |
| `fr-haushalt-geraete` | Französisch: Haushalt & Geräte | A2 | topics `Alltag/Zuhause/Haushalt`, `Alltag/Zuhause/Geräte` |
| `fr-symptome-krankheiten` | Französisch: Symptome & Krankheiten | B1 | topics `Gesundheit/Symptome`, `Gesundheit/Krankheiten` |
| `fr-obst-gemuese-lebensmittel` | Französisch: Lebensmittel | A1 | topics `Alltag/Essen/Lebensmittel` |

Beschreibungen wie in W1.md.

### Alias-Kandidaten (⚠ Dubletten laut pruefe.mjs)

Gleiches Wortpaar in den parallel entstandenen X-fr-Dateien (dieselben deutschen Wörter stehen auch in den
englischen W-Dateien doppelt; beim Mergen wie dort entscheiden, welche ID Haupt-ID wird). Zeilen behalten:

| hier | dort | Wortpaar |
|---|---|---|
| fr-xa-0006 | fr-xb-0438 | Briefkasten – la boîte aux lettres |
| fr-xa-0016 | fr-xd-0192 | Kaution – la caution |
| fr-xa-0028 | fr-xb-0332 | Stecker – la prise |
| fr-xa-0032 | fr-xb-0258 | Fernbedienung – la télécommande |
| fr-xa-0048 | fr-xe-0452 | unordentlich – désordonné |
| fr-xa-0063 | fr-xc-0092 | Zimmerpflanze – la plante d'intérieur |
| fr-xa-0146 | fr-xb-0224 | Kantine – la cantine |
| fr-xa-0176 | fr-xe-0282 | Loch – le trou |
| fr-xa-0262 | fr-xd-0175 | Gastgeber – l'hôte |
| fr-xa-0266 | fr-xe-0042 | sich verabschieden – dire au revoir |
| fr-xa-0281 | fr-xc-0316 | Friedhof – le cimetière |
| fr-xa-0380 | fr-xc-0356 | Krankenwagen – l'ambulance |

(Stand bei Abschluss; die anderen X-fr-Agents schrieben gleichzeitig, beim Mergen `pruefe.mjs --dubletten` erneut.)
Gegen die bestehenden fr-Dateien auf main: keine Dublette.

### Gleiche Antwort, anderes deutsches Wort (kein Alias, nur zur Kenntnis)

Im Französischen fallen hier Wörter zusammen, die im Deutschen getrennt sind:
- Schwiegervater – le beau-père = Stiefvater (fr-fb-0032); Halbschwester – la demi-sœur = Stiefschwester (fr-ke-0602).
- Torte – le gâteau = Kuchen (fr-et-0016, fr-gw-0165); Französisch unterscheidet hier nicht üblich.
- Hähnchen – le poulet = Huhn (fr-et-0033); Karotte/Möhre – la carotte (beide hier, wie im Original).
- Kassenzettel – le ticket de caisse = Kassenbon (fr-eg-0084), echte Synonyme.
- Brieftasche – le portefeuille steht bei Geldbeutel (fr-eg-0054) als Weitere Antwort.
- Körpergröße und Taille (xa-0229, xa-0296) – beide la taille, wie Größe (fr-eg-0045, fr-km-0050).
- Station (im Krankenhaus) und Bedienung (xa-0382, xa-0148) – beide le service.
- Kontaktlinse – la lentille (Weitere) wie Linse (Hülsenfrucht) – la lentille (xa-0085).
- Stecker – la prise wie Steckdose (fr-al-0083); umgangssprachlich sagt man für beides „la prise“, „la fiche“ steht als
  Weitere Antwort.
- Vermieter – le propriétaire wie Eigentümer (fr-ke-0428); Pickel – le bouton wie Knopf; Blase (auf der Haut) –
  l'ampoule wie Glühbirne; Serviette – la serviette wie Handtuch; Creme – la crème wie Sahne; Walnuss – la noix wie
  Nuss; Farbe (zum Streichen) – la peinture (auch „Malerei“); Kantine – la cantine wie Mensa (fr-sb-0058);
  Erziehung – l'éducation wie Bildung (fr-ke-0179); schlank – mince wie dünn (fr-ke-0650).
- Verbandskasten – la trousse de secours wie Reiseapotheke (fr-ru-0142).

### Unsicherheiten und offene Fragen

1. **Abfluss (xa-0014) – l'évacuation**, Weitere la bonde. Es gibt kein einzelnes Alltagswort; „l'évacuation“ ist auch
   „Evakuierung“ (fr-ap-0080). Alternativen wären „le siphon“ oder „la canalisation“ (eher Rohr).
2. **Haushalt (zu Hause) (xa-0042) – le ménage**, Weitere le foyer. Englisch „household“ meint den Haushalt als
   Einheit (eher le foyer), der Beispielsatz zeigt die Hausarbeit („im Haushalt mithelfen“ – participer au ménage).
   „le ménage“ deckt beides ab.
3. **satt (xa-0139) – rassasié**: im Alltag sagt man eher „je n'ai plus faim“ oder „j'ai bien mangé“; „rassasié“ ist
   im Französischen eher B1 als A2 (Niveau nicht geändert).
4. **schwindelig (xa-0328) – pris de vertige**, Weitere étourdi. Üblicher ist die Wendung „avoir la tête qui tourne“,
   die als Antwort zu lang wäre.
5. **Atemnot (xa-0330) – l'essoufflement**, Weitere la difficulté respiratoire. Atemnot ist stärker als
   „Kurzatmigkeit“; „la détresse respiratoire“ wäre der medizinische Notfall.
6. **Wurzelbehandlung (xa-0373) – la dévitalisation**, Weitere le traitement de canal, le traitement de racine.
7. **weitsichtig (xa-0358) – hypermétrope**, Weitere presbyte (eigentlich „alterssichtig“, im Alltag aber üblich).
8. **gemütlich (xa-0018) – douillet**, Weitere chaleureux, cosy. Kein genaues Gegenstück; für Menschen/Abende passt
   eher „convivial“ (bewusst nicht aufgenommen, weil das Original den Raum meint).
9. **Plural-Antworten bei deutschem Singular:** Po – les fesses, Gummistiefel – les bottes en caoutchouc (wie im
   Englischen „wellington boots“), Zahnfleisch – les gencives (Weitere la gencive), Spinat – les épinards,
   Spargel – l'asperge (Weitere les asperges), Kleidung – les vêtements, Schmuck – les bijoux.
10. **Mama/Papa/Oma/Opa** ohne Artikel (maman, papa, mamie, papi) wie als Anrede üblich, Formen mit Artikel als
    Weitere Antwort (wie fr-fb-0002 „la mère; maman“).
11. **Toast (xa-0102) – le pain grillé**, Weitere le toast, le pain de mie (Toastbrot ungeröstet).
12. **Kakao (xa-0116) – le chocolat chaud**, Weitere le cacao (das Getränk heißt in Frankreich „chocolat chaud“).
13. **Senior (xa-0236) – la personne âgée**, Weitere le senior.
14. **Kleinkind (xa-0234) – le tout-petit**, Weitere le jeune enfant, le bambin.
15. **Ehepartner (xa-0253) – le conjoint**; „conjoint“ wird auch für nichteheliche Partner benutzt, l'époux/l'épouse
    als Weitere Antworten.
16. **Gastgeber (xa-0262) – l'hôte**, Weitere l'hôtesse (auch „Stewardess“); „l'hôte“ heißt zugleich „Gast“.
17. Personenbezeichnungen mit Femininum als Weitere Antwort (Mieter, Vermieter, Untermieter, Gärtner, Optiker,
    Kassierer, Metzger, Konditor, Waise, Nachkomme, Mitbewohner, Kinderarzt, Facharzt, Physiotherapeut, Sanitäter,
    Raucher, Nichtraucher, Ehepartner). Eindeutig weiblich ohne maskuline Form: Putzfrau (la femme de ménage),
    Tagesmutter (l'assistante maternelle, Weitere la nounou), Hebamme (la sage-femme), Hausfrau.
18. „le thermos“ (Thermoskanne) ist ursprünglich ein Markenname, im Französischen aber das übliche Wort.
19. Keine Abkürzungen als Antwort: bewusst weggelassen „la coloc“, „le papier alu“, „le kiné“, „l'ophtalmo“, „le déo“.

### Stichprobe (30 Zeilen)

Kritisch durchgesehen (Übersetzung, Niveau, Beispiel): xa-0008, 0014, 0018, 0029, 0042, 0061, 0102, 0116, 0134, 0139,
0148, 0151, 0161, 0168, 0194, 0197, 0225, 0236, 0262, 0283, 0297, 0328, 0330, 0346, 0358, 0373, 0382, 0401, 0404,
0414. Geändert: xa-0373 (Weitere Antwort „le traitement de racine“ ergänzt). Die übrigen Zweifel stehen oben unter
Unsicherheiten.

---

## X-fr: Französische Fassung von ausbau-schule-arbeit (W2)

Datei `woerter/fr-ausbau-schule-arbeit.txt`, **440 Zeilen** (fr-xb-0001 bis fr-xb-0440), eine Zeile je Zeile des
Originals `woerter/ausbau-schule-arbeit.txt` (W2), gleiche Nummer, gleiche Reihenfolge. Deutsch (mit Klammerhinweisen),
Niveau und Themen unverändert, keine Zeile ausgelassen. Alle Beispielsätze neu auf Französisch geschrieben (Orte in
Frankreich, Grammatikbeispiele aus dem Französischen).

`node scripts/pruefe.mjs woerter/fr-ausbau-schule-arbeit.txt`: 0 Fehler, 25 Hinweise (die Datei steht noch nicht in
`katalog.json`, dazu 24 Wortpaare, die auch in den parallel entstandenen fr-ausbau-Dateien stehen, siehe unten).
Gegen die fr-Dateien auf main gibt es keine Dubletten; `gibt-es.mjs --lang fr` meldete nur „sägen“ (Umlaut-Fehltreffer
„sagen“, wie in W2.md beschrieben).

Niveau (wie Original): 14 × A1, 88 × A2, 171 × B1, 132 × B2, 35 × C1.

### Neue Quelle

```json
{ "id": "fr-ausbau-schule-arbeit", "file": "woerter/fr-ausbau-schule-arbeit.txt", "lang": "fr", "version": 1, "count": 440 }
```

### Listen

Die bestehenden fr-Listen mit Filter auf ein Oberthema wachsen beim Mergen mit (count/version anpassen):
`fr-schule-bildung` („Bildung“) +187, `fr-arbeit-beruf` („Arbeit“) +67, `fr-technik-computer` („Technik“) +109,
`fr-medien-kommunikation` („Medien“) +49; die 28 Werkzeug-Zeilen erscheinen in den Listen mit Filter „Alltag“.

Vorschläge analog zu W2.md (jeweils `"answerLang": "fr"`, Name mit „Französisch: …“):

| id | name | level | filter |
|---|---|---|---|
| fr-sprache-grammatik | Französisch: Sprache & Grammatik | B1 | `{ "topics": ["Bildung/Sprache"] }` |
| fr-berufe | Französisch: Berufe | A2 | `{ "topics": ["Arbeit/Beruf/Berufe"] }` |
| fr-buero-arbeitsplatz | Französisch: Büro & Arbeitsplatz | B1 | `{ "topics": ["Arbeit/Beruf/Arbeitsplatz"] }` |
| fr-werkzeug-handwerk | Französisch: Werkzeug & Handwerk | B1 | `{ "topics": ["Alltag/Zuhause/Werkzeug", "Technik/Material"] }` |
| fr-strom-maschinen | Französisch: Strom, Geräte & Maschinen | B1 | `{ "topics": ["Technik/Elektrik", "Technik/Maschinen"] }` |
| fr-schule-klassenzimmer | Französisch: Im Klassenzimmer | A2 | `{ "topics": ["Bildung/Schule"] }` |

### Alias-Kandidaten (Stand beim Schreiben; die Nachbardateien entstanden parallel)

Gleiches Wortpaar wie in den anderen fr-ausbau-Dateien (vermutlich steht das deutsche Wort auch in den englischen
Originalen W1/W3/W4/W5 doppelt – beim Mergen dort dieselbe Haupt-ID wählen):

- fr-ausbau-alltag: Briefkasten – la boîte aux lettres (fr-xa-0006), Stecker – la prise (fr-xa-0028),
  Fernbedienung – la télécommande (fr-xa-0032), Kantine – la cantine (fr-xa-0146)
- fr-ausbau-natur-welt: Stromausfall – la panne de courant (fr-xc-0295)
- fr-ausbau-gesellschaft: Privatsphäre (xd-0063), Maler (xd-0264), Titel (xd-0285), Kritiker (xd-0307), Lupe (xd-0337),
  Erfinder (xd-0339), Metall (xd-0350), Eisen (xd-0351), Stahl (xd-0352), addieren (xd-0358), subtrahieren (xd-0359),
  multiplizieren (xd-0360), dividieren (xd-0361), Ziffer (xd-0363), Geometrie (xd-0370), Computerspiel (xd-0432),
  Spielkonsole (xd-0433)
- fr-ausbau-grundwoerter: Ziffer (fr-xe-0347), sich konzentrieren (fr-xe-0375), zitieren (fr-xe-0402)

Stecker: zuerst „la fiche“ (technisch genauer) gewählt, dann an fr-xa-0028 angeglichen („la prise“, Weitere „la fiche“),
damit es ein sauberer Alias wird. Sonst kein deutsches Wort mit abweichender Antwort in den Nachbardateien.

In der Datei selbst (gleiche Antwort, anderes Deutsch, also kein Alias): Mitschüler/Klassenkamerad (le camarade de
classe), Lehrbuch/Handbuch (le manuel), Urkunde/Diplom (le diplôme). Gleiche Antwort wie andere deutsche Wörter im
Katalog: Hochschule – l'université (wie Universität), Klebstoff – la colle (wie Kleber), Schraubendreher – le tournevis
(Schraubenzieher), Desktop – le bureau (Büro, Schreibtisch), Tabelle – le tableau (Tafel), Schriftart – la police
(Polizei), Staffel (Serie) – la saison (Jahreszeit), Stecker – la prise (Steckdose).

### Entsprechungen für deutsche oder britische Begriffe

- Nachsitzen → la retenue; Hausmeister → le concierge; Vorwahl → l'indicatif; besetzt → occupé; Postleitzahl → le code
  postal; Briefkasten → la boîte aux lettres; Rundfunk → la radiodiffusion (Beispiel zur deutschen Rundfunkgebühr).
- Schulsystem: Gesamtschule → l'école polyvalente, Ganztagsschule → l'école à plein temps, Fachhochschule → la haute
  école spécialisée (Begriff aus der Schweiz), Bachelor → la licence (Weitere: le bachelor), Klassenlehrer → le
  professeur principal, Klassensprecher → le délégué de classe, Klassenarbeit → le contrôle, Hausaufgabenheft → le
  cahier de textes, Geodreieck → l'équerre, Schulstunde → l'heure de cours (Beispiel mit 55 Minuten wie in Frankreich).
- Grammatik und Sprache: Beispiele mit französischen Formen (bon/meilleur, Endung er, Vorsilbe in, Nachsilbe ment,
  ne … pas, cheval/chevaux, il pleut des cordes, UE).

### Unsicherheiten und offene Fragen

- **Keine feste französische Entsprechung** (Wahl begründet, aber ein Muttersprachler sollte draufschauen):
  Aula (la salle des fêtes; Weitere la salle polyvalente, l'auditorium), Gesamtschule (l'école polyvalente),
  Ganztagsschule (l'école à plein temps), Fachhochschule (la haute école spécialisée), Stichpunkt (la puce; Weitere le
  tiret – „la puce“ ist auch Weitere bei Mikrochip), Ausdruck (Papier) (la version imprimée; Weitere l'impression,
  la copie papier), Sachbearbeiter (l'agent administratif), Projektwoche (la semaine de projet).
- **Mehrdeutige Antworten:** Zeitform → le temps (auch Zeit/Wetter), Textaufgabe → le problème, Substantiv → le nom
  (auch Name). Im Zusammenhang der Liste klar, beim Abfragen ohne Kontext aber nicht eindeutig.
- **Abkürzungen, die zum Wort gehören:** la clé USB, la carte SIM, le code QR, l'imprimante 3D; bei SMS ist „le texto“
  die Antwort und „le SMS“ Weitere Antwort.
- **Femininformen** nur, wo üblich; bewusst weggelassen bei Klempner, Maurer, Webdesigner (la plombière, la maçonne
  selten).
- **Adjektiv/Adverb:** fließend → couramment (so sagt man „fließend sprechen“), Weitere courant. befristet/unbefristet →
  à durée déterminée / à durée indéterminée (ohne Artikel, Weitere temporaire / permanent).
- **Niveau** unverändert; im Französischen anders einzuschätzen wären u. a. Konjunktion und Wortart (C1, im
  Französischunterricht früh gelernt, eher B1/B2), Klassenarbeit (le contrôle, eher A2 – passt), Bachelor (la licence,
  eher B2).

---

## Paket X-fr: Französische Fassung von ausbau-natur-welt.txt (W3)

Datei `woerter/fr-ausbau-natur-welt.txt`, **461 Zeilen** (fr-xc-0001 … fr-xc-0461) = Zeilen des Originals
`woerter/ausbau-natur-welt.txt` (W3). Gleiche Nummern, gleiche Reihenfolge, keine Zeile ausgelassen. Deutsch (mit
Klammerhinweisen), Niveau und Themen exakt wie im Original (maschinell gegen das Original verglichen).
Niveaus: A1 22 · A2 104 · B1 177 · B2 122 · C1 36 (wie W3).

`node scripts/pruefe.mjs woerter/fr-ausbau-natur-welt.txt`: 0 Fehler, 13 Hinweise (1 × „steht noch nicht in
katalog.json“, 12 × Dublette mit einer anderen X-fr-Datei, siehe Alias-Kandidaten).

Vorgehen: in Blöcken zu 50 Zeilen geschrieben, nach jedem Block `pruefe.mjs` und `gibt-es.mjs --lang fr` (Kandidaten
„Deutsch; Antwort“) laufen lassen, verwandte Wörter des Katalogs nachgeschlagen (Landwirt, Schauer, Hitze, Navigationssystem,
Reiseführer …), damit die Antworten zum Bestand passen. Zum Schluss Stichprobe von 30 Zeilen und maschinelle Prüfung
(Wort im Beispielsatz, Satzlänge 6–12 Wörter, keine „, / ( )“ in Antworten); dabei 8 Beispielsätze nachgebessert
(Küken „ont éclos“, Brennnessel, Rüssel, Kontinent, spanisch, biologisch abbaubar, Passagier, rasen).

### Neue Quelle (für katalog.json)

| id | file | lang | count |
|---|---|---|---|
| `fr-ausbau-natur-welt` | `woerter/fr-ausbau-natur-welt.txt` | fr | 461 |

### Vorschläge für Listen

Analog zu pakete/W3.md, jeweils `"answerLang": "fr"`, Name „Französisch: …“, gleiche Filter wie die englische Liste.

| id | name | filter |
|---|---|---|
| `fr-laender-nationalitaeten` | Französisch: Länder & Nationalitäten | topics `Reisen/Länder & Nationalitäten` (59) + Kontinente aus `Natur/Geografie` |
| `fr-geografie` | Französisch: Geografie: Erde, Himmelsrichtungen, Karten | topics `Natur/Geografie` (30) |
| `fr-stadt-gebaeude` | Französisch: Stadt & Gebäude | topics `Alltag/Stadt` (42) |
| `fr-tiere-ausbau` | Französisch: Tiere: mehr Wörter | topics `Natur/Tiere`, nur Quelle fr-ausbau-natur-welt (73) |
| `fr-natur-landschaft-ausbau` | Französisch: Pflanzen, Landschaft & Landwirtschaft | topics `Natur/Pflanzen`, `Natur/Landschaft`, `Natur/Landwirtschaft` (61) |
| `fr-wetter-ausbau` | Französisch: Wetter & Naturkatastrophen | topics `Natur/Umwelt/Wetter`, `Natur/Umwelt/Naturkatastrophen` (48) |
| `fr-verkehr-ausbau` | Französisch: Verkehr: Auto, Rad, Bahn | topics `Reisen/Verkehr` (61) |

Wie in W3.md: Sind die bestehenden fr-Themenlisten per Themenfilter definiert, nehmen sie die neuen Wörter automatisch auf.

### Alias-Kandidaten (gleiches Wortpaar in anderen X-fr-Dateien, von pruefe.mjs gemeldet)

Alle Zeilen behalten, weil sie zum Original gehören. Beim Mergen prüfen, ob die englischen Originale dieselbe Dublette
haben (dann Alias wie dort):

| diese Datei | Deutsch – Antwort | dieselbe Zeile in |
|---|---|---|
| fr-xc-0092 | Zimmerpflanze – la plante d'intérieur | fr-xa-0063 |
| fr-xc-0316 | Friedhof – le cimetière | fr-xa-0281 |
| fr-xc-0356 | Krankenwagen – l'ambulance | fr-xa-0380 |
| fr-xc-0328 | Botschaft (Vertretung) – l'ambassade | fr-xd-0033 |
| fr-xc-0320 | Ruine – la ruine | fr-xd-0242 |
| fr-xc-0321 | Statue – la statue | fr-xd-0266 |
| fr-xc-0449 | Eintritt – l'entrée | fr-xd-0274 |
| fr-xc-0256 | Gefrierpunkt – le point de congélation | fr-xd-0349 |
| fr-xc-0338 | Schaukel – la balançoire | fr-xd-0427 |
| fr-xc-0227 | kühl – frais | fr-xe-0104 |
| fr-xc-0390 | Kurve – le virage | fr-xe-0299 |
| fr-xc-0295 | Stromausfall – la panne de courant | fr-xb-0338 |

Gegen den bestehenden fr-Katalog (ohne X-Dateien) gibt es keine Dublette.

### Gleiche Antwort bei anderem deutschen Wort (keine Aliase, nur zur Kenntnis)

Im Französischen fallen hier Bedeutungen zusammen, die das Deutsche trennt:
- **Schatten (kühler Ort)** und **Schatten (Umriss)** → beide `l'ombre` (fr-xc-0243/0244); Französisch unterscheidet nicht.
- **Orkan** und **Hurrikan** → beide `l'ouragan` (wie im Englischen „hurricane“).
- **Stadtteil** und **Stadtviertel** → beide `le quartier` (Stadtteil zusätzlich `l'arrondissement`).
- **Scheinwerfer** (fr-xc-0377) und **Leuchtturm** (fr-xc-0454) → beide `le phare`.
- **Beere** (fr-xc-0090) und **Bucht** (fr-xc-0115) → beide `la baie` (Bucht zusätzlich `la crique`).
- **Quelle (Wasser)** → `la source`, wie die bestehende Zeile fr-mk-0100 „Quelle – source“ (Herkunft). gibt-es.mjs meldet „DA“,
  weil es die Klammer entfernt. W3.md empfiehlt dort einen Klammerhinweis „Quelle (Herkunft)“; im Französischen bliebe die
  Antwort trotzdem gleich.
- **Sackgasse (Straße)** → `l'impasse`, wie fr-vh-0076 „Sackgasse“ (ausweglose Lage) – im Französischen dieselbe Antwort.
- Synonyme mit gleicher Antwort wie im Bestand: Blüte/Blume (`la fleur`), Wärme/Hitze (`la chaleur`), Sonnenschein/Sonne
  (`le soleil`), Kernenergie/Atomkraft (`l'énergie nucléaire`), Ausweis/Personalausweis (`la carte d'identité`),
  Passagier/Fahrgast/Fluggast (`le passager`), Bürgersteig/Gehweg (`le trottoir`), Kathedrale/Dom (`la cathédrale`),
  Landkarte/Speisekarte (`la carte`), Gang (Auto)/Geschwindigkeit (`la vitesse`), Reiseleiter/Reiseführer (`le guide`),
  Abreise/Abflug (`le départ`), Bauer/Landwirt (`l'agriculteur`), ökologisch/umweltfreundlich (`écologique`),
  tauen/schmelzen (`fondre`). Strömung `le courant` steht im Bestand auch als Weitere Antwort bei „Strom“ (Elektrizität).
- **rasen – rouler trop vite**: gibt-es.mjs meldet „DA“ wegen „Rasen – la pelouse“ (nur Groß-/Kleinschreibung), anderes Wort.

### Umschriebene Zeilen (keine Ein-Wort-Entsprechung im Französischen)

- **seekrank** (fr-xc-0446): Französisch hat kein gängiges Adjektiv → `avoir le mal de mer` (Wendung statt Adjektiv).
- **Einheimischer** (fr-xc-0207): `l'habitant de la région`, Weitere `l'autochtone`. Ein einzelnes neutrales Wort für
  „local“ gibt es nicht; „les gens du coin“ ist umgangssprachlich und Plural.
- **nördlich / östlich** (fr-xc-0150/0151): `du nord` / `de l'est`, Weitere `nord, septentrional` / `est, oriental`.
- **rasen** (fr-xc-0388): `rouler trop vite`, Weitere `foncer`.
- **umweltschädlich** (fr-xc-0305): `polluant`, Weitere `nocif pour l'environnement, mauvais pour l'environnement`.
- **energiesparend** (fr-xc-0297): `économe en énergie`.
- **Gegenverkehr** (fr-xc-0400): `la circulation en sens inverse`.
- **Auffahrunfall** (fr-xc-0398): `la collision par l'arrière`, Weitere `le télescopage`.
- **Arbeitsweg** (fr-xc-0403): `le trajet domicile-travail`.
- Deutsche Alltagsbegriffe übertragen: Pfandflasche `la bouteille consignée`, Mehrwegflasche `la bouteille réutilisable`,
  Biomüll `les déchets organiques`, Restmüll `les ordures ménagères`, Sperrmüll `les encombrants`, Kulturbeutel
  `la trousse de toilette`, Schwarzfahrer `le fraudeur`, Monatskarte `l'abonnement mensuel`, Einzelfahrschein
  `le ticket à l'unité`, Hauptbahnhof `la gare centrale` (in Frankreich unüblich, weil Städte mehrere Bahnhöfe haben).

### Unsicherheiten und offene Fragen

1. **Navi** (fr-xc-0387): Hauptantwort `le système de navigation`, Weitere `le GPS, le navigateur`. Gesprochen sagt man fast
   nur „GPS“; das ist eine Abkürzung, steht aber schon als Hauptantwort im Bestand (fr-vm-0078 „Navigationssystem – le GPS“).
   Soll „le GPS“ Hauptantwort werden (Bestand) oder bleibt die ausgeschriebene Form (Regel „keine Abkürzungen“)?
2. **Starthilfe** (fr-xc-0379): `l'aide au démarrage`, Weitere `le démarrage avec câbles` – im Alltag umschreibt man eher
   („démarrer avec des câbles“); als Substantiv unsicher.
3. **Städtereise** (fr-xc-0433): `le séjour en ville`, Weitere `le city-trip, le voyage en ville`. Ein festes französisches
   Wort fehlt; „city-trip“ ist ein verbreiteter Anglizismus.
4. **Reisewarnung** (fr-xc-0445): `l'avertissement aux voyageurs`, Weitere `les conseils aux voyageurs` (so heißt die Rubrik
   des französischen Außenministeriums). Kein fester Begriff.
5. **Pinguin** (fr-xc-0051): Hauptantwort `le manchot` (zoologisch richtig), `le pingouin` als Weitere, weil Lernende
   und Alltagssprache meist „pingouin“ sagen. Ggf. tauschen.
6. **Tintenfisch** (fr-xc-0047): `le calmar`, Weitere `le calamar, la pieuvre, le poulpe, la seiche` – „Tintenfisch“ deckt
   im Deutschen alle ab.
7. **Stall** (fr-xc-0015): `l'écurie` (Pferde), Weitere `l'étable` (Rinder) – das Französische trennt nach Tierart.
8. **Kastanie** (fr-xc-0085): `la châtaigne` (Esskastanie), Weitere `le marron` (Rosskastanie bzw. im Alltag beides).
9. **Laub** (fr-xc-0093): `les feuilles`, Weitere `le feuillage, les feuilles mortes`.
10. **Lenken (Auto)** (fr-xc-0374): `diriger`, Weitere `conduire` – „conduire“ heißt meist „fahren“.
11. **Hochwasser** (fr-xc-0270): `la crue` (Fluss), Weitere `l'inondation` (= Überschwemmung im Bestand).
12. **Platzregen** (fr-xc-0235): `la pluie battante`, Weitere `la grosse averse, l'averse` – „l'averse“ ist im Bestand schon
    „Schauer“ (fr-wu-0039).
13. **Wetterbericht** (fr-xc-0241): `le bulletin météo`, Weitere `la météo`; „les prévisions météo“ bleibt bei
    „Wettervorhersage“ (fr-wu-0034).
14. **Fußballplatz** (fr-xc-0339): Weitere `le terrain de foot` – „foot“ ist eine Kurzform, aber das übliche Wort.
15. Feminine Formen nur, wo üblich (vétérinaire, agricultrice, cycliste, conductrice, passagère, voyageuse, vacancière,
    routarde, monitrice, fraudeuse, pilote, accompagnatrice); bei Jäger, Fischer, Busfahrer, Taxifahrer bewusst keine.

### Niveau (nur Hinweis, nicht geändert)

Niveaus überall wie im Original. Im Französischen wohl anders:
- **seekrank** (B1): als Wendung „avoir le mal de mer“ eher B1–B2, passt.
- **Gang (Auto) – la vitesse** (B2) und **Scheinwerfer – le phare** (B2): im Französischen leichter, weil es Grundwörter
  mit anderer Bedeutung sind; Niveau trotzdem belassen.
- **Hauptbahnhof** (A2): „la gare centrale“ ist in Frankreich selten, für französische Lehrwerke eher B1.

---

## X-fr: Französische Fassung von ausbau-gesellschaft.txt (W4)

Neue Wortdatei `woerter/fr-ausbau-gesellschaft.txt` mit **442 Zeilen** (fr-xd-0001 bis fr-xd-0442), eine Zeile je Zeile
des Originals `woerter/ausbau-gesellschaft.txt` (W4), gleiche Nummer und Reihenfolge, keine Zeile ausgelassen.
Deutsch (mit Klammerhinweisen), Niveau und Themen exakt wie im Original (per Skript verglichen).

- Niveaus wie im Original: A1 17 · A2 93 · B1 166 · B2 124 · C1 42. Zeilen je Thema wie in pakete/W4.md.
- In 9 Blöcken (höchstens 50 Zeilen) geschrieben, nach jedem Block `node scripts/pruefe.mjs` laufen lassen.
  Ergebnis am Schluss: 0 Fehler, Hinweise nur „steht noch nicht in katalog.json“ und Dubletten mit den parallelen
  X-fr-Dateien (siehe Alias-Kandidaten).
- Vorher `node scripts/gibt-es.mjs --lang fr` mit allen 442 deutschen Wörtern: 438 neu, die vier „DA“ sind genau die
  vier bewusst anderen Bedeutungen aus W4 (Fest, Reich, Probe, Würfel).
- Skriptprüfung: acht Felder, IDs, Deutsch/Niveau/Themen gleich, kein Komma/Schrägstrich/Klammer in einer Antwort,
  Beispielsätze 6–12 Wörter (Ausnahme wie im Original: die Rechensätze xd-0354 bis 0356 mit 5 Wörtern), UTF-8 ohne BOM, LF.
- Schlusskontrolle: 30 Zeilen stichprobenartig auf Übersetzung, Niveau und natürliche Sätze durchgesehen; dabei zwei
  Sätze überarbeitet (xd-0292, xd-0411). Computerspiel (xd-0432) auf die Antwort von fr-xb-0320 („le jeu vidéo“)
  umgestellt, damit es ein sauberer Alias wird.

### Neue Quelle (für katalog.json)

```json
{ "id": "fr-ausbau-gesellschaft", "file": "woerter/fr-ausbau-gesellschaft.txt", "lang": "fr", "version": 1, "count": 442 }
```

### Listen

Die bestehenden fr-Themenlisten filtern nach Oberthemen; die neuen Wörter erscheinen dort wie im Englischen automatisch
(fr-politik-gesellschaft +161, fr-kunst-kultur +111, fr-wissenschaft-forschung +46, fr-freizeit-hobbys +45,
fr-sport-fitness +42, fr-wirtschaft-finanzen +38; count und version steigen). Vorschläge analog zu pakete/W4.md, jeweils
`"answerLang": "fr"`, Name „Französisch: …“, gleicher Filter wie die englische Liste:

| id | name | level | filter |
|---|---|---|---|
| fr-religion | Französisch: Religion & Glaube | B1 | topics ["Gesellschaft/Religion"] |
| fr-feste-feiertage | Französisch: Feste & Feiertage | A2 | topics ["Freizeit/Feste & Feiern"] |
| fr-geschichte | Französisch: Geschichte | B1 | topics ["Kultur/Geschichte"] |
| fr-recht-kriminalitaet | Französisch: Recht & Kriminalität | B1 | topics ["Gesellschaft/Recht"] |
| fr-politik-international | Französisch: Krieg, Frieden & Weltpolitik | B2 | topics ["Gesellschaft/Politik/Internationales"] |
| fr-rechnen-geometrie | Französisch: Rechnen & Geometrie | A2 | topics ["Wissenschaft/Mathematik"] |
| fr-musik-instrumente | Französisch: Musik & Instrumente | A2 | topics ["Kultur/Musik", "Freizeit/Musik"] |

### Alias-Kandidaten

Gleiches Wortpaar (Deutsch, Antwort) in einer parallelen X-fr-Datei, laut `pruefe.mjs` (29 Paare beim letzten Lauf; die anderen X-fr-Dateien waren da noch in Arbeit, es
können also noch welche dazukommen). Die Zeilen bleiben
in der Datei, weil sie zum Original gehören. Haupt-ID beim Mergen wie im Englischen (dort sind es dieselben Dubletten
zwischen W1–W5):

- mit fr-xa (Alltag): Kaution (xd-0192 ↔ xa-0016), Gastgeber (xd-0175 ↔ xa-0262)
- mit fr-xb (Schule/Arbeit): Privatsphäre (0063 ↔ xb-0304), Maler (0264 ↔ xb-0191, siehe Frage 1), Lupe (0337 ↔ 0382),
  Erfinder (0339 ↔ 0345), Metall (0350 ↔ 0358), Eisen (0351 ↔ 0360), Stahl (0352 ↔ 0359), addieren (0358 ↔ 0050),
  subtrahieren (0359 ↔ 0051), multiplizieren (0360 ↔ 0052), dividieren (0361 ↔ 0053), Ziffer (0363 ↔ xb-0057 und
  xe-0347), Geometrie (0370 ↔ 0058), Computerspiel (0432 ↔ 0320), Spielkonsole (0433 ↔ 0265), Titel (0285 ↔ 0411), Kritiker (0307 ↔ 0405)
- mit fr-xc (Natur/Welt): Botschaft (Vertretung) (0033 ↔ xc-0328), Gefrierpunkt (0349 ↔ 0256), Ruine (0242 ↔ 0320),
  Statue (0266 ↔ 0321), Schaukel (0427 ↔ 0338)
- mit fr-xe (Grundwörter): Kreuz (0148 ↔ xe-0284), gratulieren (0177 ↔ 0368), kreativ (0271 ↔ 0455),
  begabt (0270 ↔ 0463), Rechteck (0365 ↔ 0285), Ziffer (s. o.)

Gleiches deutsches Wort mit anderer Bedeutung (kein Alias, Klammerhinweise sind schon da bzw. Groß/Klein unterscheidet):
würfeln (Spiel) ↔ fr-xa-0125 würfeln (Gemüse), surfen (Wellen) ↔ fr-xb-0311 surfen (im Internet),
Verstecken ↔ fr-xe-0011 verstecken, mal (beim Rechnen) – fois ↔ fr-xe-0217 Mal (das erste Mal) – la fois.

### Unsicherheiten und offene Fragen

1. **Maler (xd-0264):** Hier der Künstler (Thema Kunst & Museum, „le peintre“), in fr-xb-0191 der Handwerker (Thema
   Berufe, Satz „Die Maler streichen unsere Wohnung“). Im Französischen ist die Antwort zufällig gleich, `pruefe.mjs`
   meldet deshalb eine Dublette. Eigentlich zwei Bedeutungen: Sollen W2/W4 „Maler (Künstler)“ und „Maler (Handwerker)“
   bekommen? Dann wäre es kein Alias.
2. **Feste ohne Artikel:** Weihnachten – Noël, Ostern – Pâques, Halloween – Halloween stehen ohne Artikel, weil man im
   Französischen so sagt („à Noël“, „pour Pâques“). Mit Artikel bei la Pentecôte, la Saint-Sylvestre, la Saint-Valentin,
   le jour de l'An, la fête des Mères, l'Avent. Gott – Dieu ebenfalls ohne Artikel.
3. **Singular im Deutschen, Plural im Französischen** (Antwort mit les): Achterbahn – les montagnes russes,
   Kreuzworträtsel – les mots croisés, Kampfsport – les arts martiaux, Wintersport – les sports d'hiver,
   Glücksspiel – les jeux de hasard (le jeu de hasard als weitere), Liedtext – les paroles,
   Glückwunsch – les félicitations, Aufklärung (Epoche) – les Lumières. Umgekehrt Lebenshaltungskosten – le coût de la vie.
4. **Freie Wahl unter mehreren Entsprechungen** (bitte ggf. prüfen):
   - Raub – le braquage (weitere: le vol à main armée), Räuber – le braqueur (weitere: le brigand, le bandit). „Le vol“
     ist schon Diebstahl; „brigand“ passt eher zu Märchen.
   - Kopfball – la tête (weitere: le coup de tête), so sagt man im Fußball („marquer de la tête“). „Le coup de tête“ heißt
     auch Kopfstoß.
   - jubeln – crier de joie (weitere: exulter, acclamer). Ein einzelnes gleichwertiges Verb gibt es nicht.
   - Sachbuch – le livre documentaire. Gängig, aber im Französischen kein so festes Wort wie im Deutschen.
   - Gottesdienst – la messe (weitere: l'office, le culte). „La messe“ ist katholisch, „le culte“ evangelisch.
   - Pfarrer – le curé (weitere: le pasteur), Priester – le prêtre. So sind die beiden deutschen Wörter unterschieden.
   - Militär – l'armée (weitere: les forces armées). „Le militaire“ wäre der Soldat.
   - Rate – le versement (weitere: la mensualité), Kontostand – le solde, Überziehungskredit – le découvert.
   - Verstecken – le cache-cache (weitere: cache-cache). Meist ohne Artikel („jouer à cache-cache“).
   - Fest (Feier) – la fête (weitere: la célébration), Luftballon – le ballon (weitere: le ballon de baudruche).
   - Holocaust – la Shoah (weitere: l'Holocauste); in Frankreich ist „la Shoah“ üblicher.
5. **Gleiche Antwort bei anderem deutschen Wort** (kein Alias, in der App zwei Wörter mit gleicher Antwort):
   Videospiel/Computerspiel – le jeu vidéo, Geldschein – le billet (auch Fahrkarte), Kleingeld – la monnaie (auch
   Wechselgeld/Währung), Eintritt – l'entrée (auch Eingang/Vorspeise), Schall – le son (auch Ton/Klang),
   Szene – la scène (auch Bühne), Kopfball – la tête (auch Kopf), Gastgeber – l'hôte (auch Gast), Malerei – la peinture
   (auch Farbe zum Streichen), verhaften – arrêter (auch anhalten/aufhören), Gipfeltreffen – le sommet (auch Berggipfel).
6. **Niveaus** sind unverändert. Im Französischen wären einige Internationalismen eher leichter als im Original:
   le capitalisme, la bureaucratie, le consulat, le vandalisme, la propagande, le féminisme (C1, eher B2).
   Schwerer als im Original wirken eher: le soulèvement (Aufstand, C1 ok), le découvert (C1 ok), l'acquittement (C1 ok),
   faire du crochet (B2 ok), la flûte à bec (A2, für Französisch eher B1), le cerf-volant (A2, eher B1),
   le toboggan (A2, eher B1).
7. **Kulturbezug:** Konfirmation – la confirmation (gibt es in Frankreich bei Katholiken und Protestanten),
   Weihnachtsmann – le père Noël, Karneval – le carnaval, Jahrmarkt – la fête foraine. Beispielsätze mit Orten aus
   Frankreich (Reims, Lascaux, Biarritz, Bretagne, Pont du Gard) und Euro.

---

## Paket X-fr: Französische Fassung von ausbau-grundwoerter (W5)

Datei `woerter/fr-ausbau-grundwoerter.txt`, **487 Zeilen** (fr-xe-0001 … fr-xe-0487) = Zeilen des Originals
`woerter/ausbau-grundwoerter.txt` (W5). Gleiche Nummern, gleiche Reihenfolge, keine Zeile ausgelassen. Deutsch (mit
Klammerhinweisen), Niveau und Themen sind exakt wie im Original (per Skript gegen das Original geprüft).

- Vorgehen: `gibt-es.mjs --lang fr` über alle 487 deutschen Wörter. Es gab nur zwei Treffer: „drücken“ fand „drucken –
  imprimer“ (Umlaut), „vor (räumlich)“ fand „vor … – il y a“ (andere Bedeutung). Es gab also keine bestehende
  französische Antwort, an die ich mich hätte angleichen müssen. Danach habe ich zehn Blöcke mit höchstens 50 Zeilen
  geschrieben und nach jedem Block `pruefe.mjs` laufen lassen.
- Antworten: Substantive mit bestimmtem Artikel, Verben im Infinitiv, reflexive Verben mit „se“, Adjektive maskulin.
  Kein Komma, kein Schrägstrich und keine Klammer in einer Antwort. Beispiele: eigene französische Sätze mit 6–12
  Wörtern. Das deutsche Beispiel ist das des Originals, wenn der Satz ihm entspricht. Sonst habe ich ein neues deutsches
  Beispiel geschrieben (74 Zeilen). Orte angepasst: London → Paris, München → Lyon, Hamburg → Lyon, Spanien →
  Madrid, Tom → Théo.
- `node scripts/pruefe.mjs woerter/fr-ausbau-grundwoerter.txt`: 0 Fehler, 12 Hinweise. Ein Hinweis ist „steht noch
  nicht in katalog.json“, die anderen 11 sind Dubletten (siehe unten).
- Stichprobe von 31 Zeilen (jede 16. Zeile), geprüft auf Übersetzung, Niveau und natürliche Beispiele. Danach habe ich
  einen Satz verbessert (fr-xe-0023 „récompensé par“). Vier Beispiele außerhalb von 6–12 Wörtern habe ich schon beim
  Schreiben gekürzt oder verlängert.

### Neue Quelle (für katalog.json)

```json
{ "id": "fr-ausbau-grundwoerter", "file": "woerter/fr-ausbau-grundwoerter.txt", "lang": "fr", "version": 1, "count": 487 }
```

### Niveaus (wie im Original)

18 × A1, 120 × A2, 220 × B1, 111 × B2, 18 × C1. Ich habe kein Niveau geändert. In der französischen Fassung wären
eher höher: „débonnaire“ (gutmütig, C1, passt), „à savoir“ (nämlich, B2), „l'assiduité“ (Fleiß, B2 → eher C1),
„après que“ (nachdem, B1; im Französischen wegen der Zeitenfolge schwieriger). „hebdomadaire/mensuel/annuel“ (B1)
sind französisch eher B2.

### Listenvorschläge (analog zu W5.md)

Die Listen-ids gelten erst, wenn die englischen Listen aus W5.md so angelegt sind. Alle Listen haben `"answerLang": "fr"`,
den Namen „Französisch: …“ und dieselben Filter wie die englische Liste:

| id | name | filter |
|---|---|---|
| fr-allgemein-verben | Französisch: Häufige Verben | topics: ["Allgemein/Verben"] (87) |
| fr-allgemein-adjektive | Französisch: Häufige Adjektive | topics: ["Allgemein/Adjektive"] (58) |
| fr-allgemein-kleine-woerter | Französisch: Kleine Wörter | topics: ["Allgemein/Kleine Wörter"] (62) |
| fr-allgemein-zeit-raum | Französisch: Zeit, Raum & Richtung | topics: ["Allgemein/Zeit", "Allgemein/Raum"] (110) |
| fr-allgemein-mengen | Französisch: Mengen & Maße | topics: ["Allgemein/Mengen"] (44) |
| fr-allgemein-denken-sprechen | Französisch: Denken & Sprechen | topics: ["Allgemein/Denken & Sprechen"] (57) |
| fr-allgemein-a2 | Französisch: Grundwörter plus – A1/A2 | topics: ["Allgemein"], levels: ["A1", "A2"] (125) |
| fr-allgemein-b1 | Französisch: Grundwörter plus – B1 | topics: ["Allgemein"], levels: ["B1"] (195) |
| fr-allgemein-b2 | Französisch: Grundwörter plus – B2/C1 | topics: ["Allgemein"], levels: ["B2", "C1"] (98) |

Die 69 Zeilen unter `Mensch/Gefühle` und `Mensch/Charakter` erscheinen automatisch in `fr-gefuehle-charakter`, falls
diese Liste wie die englische mit `topics: ["Mensch"]` filtert. Dann steigt ihr count, und die version muss steigen.

### Alias-Kandidaten (Dubletten laut pruefe.mjs)

Alle elf Wortpaare stehen auch in den französischen Fassungen der anderen W-Dateien. Sie sind schon im Englischen
doppelt (Original-ID in Klammern), sollten also so wie dort zu Aliasen werden:

| diese Datei | dort | Wortpaar |
|---|---|---|
| fr-xe-0042 | fr-xa-0266 | sich verabschieden – dire au revoir |
| fr-xe-0104 | fr-xc-0227 | kühl – frais |
| fr-xe-0282 | fr-xa-0176 | Loch – le trou |
| fr-xe-0284 | fr-xd-0148 | Kreuz – la croix |
| fr-xe-0347 | fr-xb-0057 | Ziffer – le chiffre (englisch auch xd-0363) |
| fr-xe-0368 | fr-xd-0177 | gratulieren – féliciter |
| fr-xe-0375 | fr-xb-0095 | sich konzentrieren – se concentrer |
| fr-xe-0402 | fr-xb-0087 | zitieren – citer |
| fr-xe-0452 | fr-xa-0048 | unordentlich – désordonné |
| fr-xe-0455 | fr-xd-0271 | kreativ – créatif |
| fr-xe-0463 | fr-xd-0270 | begabt – doué |

Beim Mergen bitte `pruefe.mjs` noch einmal über alle fr-Dateien laufen lassen. Die anderen X-fr-Dateien waren beim
Prüfen evtl. noch nicht fertig, und Ziffer könnte zusätzlich mit fr-xd-0363 doppelt sein.

### Gleiche französische Antwort bei verschiedenen deutschen Wörtern (gewollt)

Wie im Englischen (W5.md, Frage 3). Jedes deutsche Wort ist eine eigene Zeile, im Französischen fällt die Antwort
zusammen:
utiliser (benutzen, verwenden, nutzen) · suffire (genügen, ausreichen) · oser (sich trauen, wagen) · représenter
(darstellen, vertreten) · se tromper (sich irren, sich täuschen) · le conseil (Tipp, Ratschlag) · le moment (Weile,
Zeitpunkt) · le début (Anfang, Beginn) · la fin (Ende, Schluss (Ende)) · l'après-midi (Nachmittag, nachmittags) ·
le trou (Loch, Lücke) · devant (vor (räumlich), vorne) · inutile (nutzlos, sinnlos) · clair (hell, eindeutig) ·
appuyer (drücken, lehnen) · absolument (unbedingt, absolut) · à (an, um (Uhrzeit), nach (Richtung)).
Wo es ging, habe ich unterschieden, z. B. verstecken – cacher / verbergen – dissimuler / verdecken – masquer,
sich ärgern – se fâcher / sich aufregen – s'énerver, nachdenken – réfléchir / überlegen – réfléchir à.

### Unsicherheiten und offene Fragen

1. **Wörter ohne genaue französische Entsprechung**, mit Umschreibung oder Annäherung:
   - hoffentlich → „j'espère que“ (Weitere: espérons que, pourvu que). Das ist eine Wendung, kein Adverb.
   - indem → „en“ (Gerundium: en cuisinant). Allein abgefragt ist das sehr knapp.
   - einander → „l'un l'autre“. Meist steht im Französischen nur das Reflexivpronomen.
   - gegenseitig → „mutuellement“ (Adverb). Das Original hat im Englischen „mutual“, das Beispiel ist aber adverbial.
   - Vorfreude → „l'impatience“ (Weitere: la joie anticipée). Gemeint ist das „attendre avec impatience“; es gibt kein
     eigenes Wort.
   - Unsinn → „les bêtises“ (Plural, weil man „dire des bêtises“ sagt). Weitere: n'importe quoi, l'absurdité.
   - Kleinigkeit → „la petite chose“. Weitere: le petit quelque chose (für Geschenke), le détail.
   - Fleiß → „l'assiduité“ (Weitere: l'application, le zèle). „l'application“ habe ich nicht als Hauptantwort genommen,
     weil man dabei an eine App denkt.
   - gutmütig → „débonnaire“ (Weitere: bon enfant). Das Wort ist etwas gehoben, passt aber zu C1.
   - zuletzt → „la dernière fois“ (im Sinn von „wann zuletzt“). Weitere: en dernier.
   - wöchentlich, monatlich, jährlich → die Adjektive „hebdomadaire“, „mensuel“, „annuel“ (Weitere: chaque semaine …).
     Als Adverb benutzt man die Umschreibung.
2. **Bedeutung anhand des Beispiels gewählt**, andere Bedeutung nicht abgedeckt:
   - locker → „desserré“ (Schraube, Weitere: lâche). Für einen Zahn sagt man „qui bouge“, deshalb hat die Zeile ein
     neues Beispiel.
   - wild → „sauvage“. Das Original meint im Beispiel „wilde Kinder“, im Französischen „excités, turbulents“. Ich habe
     die Grundbedeutung genommen und ein neues Beispiel mit einem wilden Pferd geschrieben.
   - gemischt → „mélangé“ (Weitere: mixte). Das Beispiel ist jetzt „gemischter Salat“. „Gemischte Reaktionen“ wären
     „mitigé“.
   - eckig → „anguleux“ (Weitere: carré). Das Beispiel ist jetzt „eckiges Gesicht“. Ein eckiger Tisch wäre „carré“ oder
     „rectangulaire“.
   - fertig → „fini“ (Weitere: terminé, prêt). „prêt“ ist eine andere Bedeutung, ich habe es aber wie im Original
     („ready“) mitgenommen.
   - Lücke → „le trou“ (Weitere: l'espace, la brèche). Das ist dieselbe Antwort wie bei Loch, eine Lücke im Wissen wäre
     „la lacune“.
   - erledigen → „régler“ (Weitere: s'occuper de). Umgangssprachlich sagt man oft „faire“, das ist aber zu allgemein.
   - holen → „aller chercher“. Das bloße „chercher“ heißt „suchen“, deshalb habe ich es nicht als Weitere genommen.
   - Umgebung → „les environs“ (Plural, Weitere: les alentours).
3. **Weitere Antworten, die nicht ganz gleichwertig sind**, beim Mergen vielleicht streichen: bestimmen → déterminer,
   entstehen → apparaître/se former, gelten → être valable, sich verabschieden → prendre congé, sinnlos → vain,
   über (Thema) → sur/à propos de, nach (Richtung) → en (vor Ländernamen: en France).
4. „Schluss (Ende)“ und „Ende“ haben beide „la fin“. Wenn W2 „Schluss (Text)“ hat, wäre dort „la conclusion“ richtig.
5. Personenbezeichnung: Angeber → „le frimeur“, Weitere „la frimeuse, le vantard“.
