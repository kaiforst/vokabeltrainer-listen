# Paket N-no: Norwegisch (Bokmål) als fünfte Lernsprache

Branch `wortschatz/N-no` (auf wortschatz/M2, ff8cd8a), Worktree `e:\Dev\vokabeltrainer-wt\N-no`. Norwegische Fassungen
aller 43 Quellen, die es auf Französisch, Spanisch und Italienisch gibt, dazu Quellen, Listen und Bereichsbaum in
`katalog.json`, Aliase und `formen/no.txt`. Nur Katalogdaten und die Skripte, die eine neue Sprache kennen müssen;
das App-Repository ist unverändert.

## Dateien und Zeilen

43 Dateien `woerter/no-<name>.txt`, **10.531 Zeilen**. IDs `no-<id des englischen Originals>`, gleiche Nummern und
Reihenfolge. Deutsch (mit Klammerhinweis), Niveau und Themen sind per Skript in allen 10.531 Zeilen gleich dem Original
(0 Abweichungen). Kopfzeile `id; Deutsch; Norwegisch; Weitere Antworten; Niveau; Themen; Beispiel Norwegisch; Beispiel
Deutsch`, davor eine Kommentarzeile `# Norwegisch: …` wie bei fr.

| Datei | Zeilen | | Datei | Zeilen |
|---|---|---|---|---|
| no-grundwortschatz | 1200 | | no-karsten | 988 |
| no-business-airport | 200 | | no-wendungen-alltag | 310 |
| no-alltag-zuhause … no-wissenschaft-forschung (23 Themenlisten) | je 150 | | no-wendungen-schule-arbeit | 274 |
| no-business-beschaffung … no-business-vertrag (7) | je 150 | | no-redewendungen | 345 |
| no-ausbau-alltag | 443 | | no-sprichwoerter | 129 |
| no-ausbau-schule-arbeit | 440 | | no-bedeutungen | 59 |
| no-ausbau-natur-welt | 461 | | no-ausbau-nachtrag | 403 |
| no-ausbau-gesellschaft | 442 | | no-ausbau-grundwoerter | 487 |

Unterschiede zu fr/es/it (je 43 Quellen; fr 10.526, es 10.529, it 10.528 Zeilen):

- **Acht Zeilen in `no-karsten` fehlen**, weil der Parser sie verwerfen würde: Das englische Original hat dasselbe
  deutsche Wort zweimal mit zwei englischen Wörtern (every/each, large/big, …), das Norwegische hat dafür nur ein
  Wort, also steht das Wortpaar doppelt in der Datei (pruefe.mjs: Fehler). Es fehlt jeweils die spätere Zeile:
  ke-0198 (jeder, jede, jedes – hver), ke-0327 (groß – stor), ke-0385 (nah, in der Nähe – nær), ke-0436 (besonders –
  spesielt), ke-0445 (vielleicht – kanskje), ke-0512 (Antwort – et svar), ke-0611 (Straße – en gate), ke-0973 (ganz,
  vollständig – hel). fr hat von diesen fünf (0198, 0327, 0445, 0512, 0973) ebenfalls keine, ke-0385, 0436, 0611 hat fr
  mit anderer Antwort. Die Nummern bleiben, die Lücken sind gewollt (pruefe.mjs prüft keine Lücken).
- **Drei Zeilen stehen auf Norwegisch, die fr nicht hat:** xe-0197 indem (`ved å`), xf-0066 sich anfühlen (`å føles`),
  xf-0167 vorbei (räumlich) (`forbi`). fr/es/it haben sie ausgelassen, weil es dort kein Einzelwort gibt; im
  Norwegischen gibt es eine natürliche Entsprechung.
- Das deutsche Beispiel steht in **714 Zeilen** anders als im Original, weil der norwegische Satz einen anderen Inhalt hat
  (norwegische Orte, 25 % Mehrwertsteuer, „du“ statt „Sie“, Stockwerkszählung …). Dort ist `Beispiel Deutsch` die
  Übersetzung des norwegischen Satzes (wie bei fr: 2245 abweichende Beispiele).

## Neue Quellen, Listen, Bereiche, Formen (katalog.json)

- `words`: 43 Einträge `no-<name>` mit `"lang": "no"`, `version` 1, `count` = Zeilen der Datei. Sie stehen hinter
  dem jeweiligen it-Block (Reihenfolge wie dort). Jetzt 220 Quellen.
- `lists`: **86 Listen** `no-<id der englischen Liste>`, `"answerLang": "no"`, Name „Norwegisch: …“ (aus
  „Italienisch: …“ gebildet), gleiche `filter`, `level`, `description`, `group` (`no-grundwortschatz-a1` trägt
  `group: "grundwortschatz-start"`) und Reihenfolge der Schlüssel wie bei it. `version` 1. `count` per Skript aus den
  norwegischen Dateien berechnet (gleiche Zählung wie bei den vorhandenen Listen: Zeilen, deren Themen zum Filter
  passen). Es weichen nur neun Zählungen von it ab, alle durch die Zeilen oben: `no-karsten` 988, `no-karsten-woerter`
  737, `no-allgemein-a2` 208, `-b1` 312, `-b2` 162, `-verben` 155, `-kleine-woerter` 81, `-zeit-raum` 148 und
  `no-mehrdeutig` 59. Jetzt 449 Listen.
- `areas.tree`: jede `no-`-Liste steht direkt hinter der `it-`-Liste (90 Einträge, weil manche Listen an mehreren
  Stellen hängen). `areas.version` 16 → 17.
- `aliases`: 1682 neue Aliase (Wortpaare, die in mehreren no-Dateien stehen), `aliases.version` 7 → 8, `count` 8265.
- `forms`: neuer Eintrag `{ "lang": "no", "file": "formen/no.txt", "version": 1, "count": 552 }`.

## Konventionen (wie bei fr/es/it, plus Norwegisch)

- Bokmål, keine Nynorsk-, Dialekt-, dänischen oder schwedischen Formen. Sprachcode `no`, Locale für die Sprachausgabe
  `nb-NO`.
- Antwort: genau eine gebräuchliche Übersetzung; kein Komma, Schrägstrich, Klammer, Satzzeichen am Ende. Ausnahme `?`
  und `!` dort, wo die englische Antwort sie hat (Wendungen), **ohne Leerzeichen davor** (norwegische Typografie, anders
  als bei fr „ça va ?“).
- **Substantive mit unbestimmtem Artikel** (`en bil`, `ei jente`, `et hus`), auch Stoffnamen (`et vann`, `en melk`). Bei
  Wörtern, die im Bokmål wahlweise en- oder ei-Wort sind, ist die Hauptantwort die in Bokmålsordboka gängigere Form, die
  andere steht unter Weitere Antworten (406 Zeilen haben `ei` als Hauptantwort). Dasselbe Wort hat überall dasselbe
  Genus der Hauptantwort: Ein Skript hat 14 Fälle mit wechselndem en/ei vereinheitlicht (Mehrheit, bei Gleichstand
  `ei`). Ohne Artikel stehen Pluralwörter (`foreldre`, `penger`), Eigennamen und Länder, Schulfächer, Himmelsrichtungen,
  Wochentage, Spielnamen (`sjakk`) und Wendungen; außerdem `mamma`, `pappa`, `bestemor`, `bestefar` (Anrede).
- Verben mit `å` (`å veie`, `å glede seg`, `å ringe opp`).
- Adjektive in der Grundform (`stor`, `god`), Adverbien unverändert.
- Es gibt kein „Sie“: Wendungen und Beispiele sind in der du-Form (`Kan jeg hjelpe deg?`); Weitere teils mit `dere`.
- Uhrzeiten wie im Norwegischen (`halv fire` = 3:30, `kvart over tre`), Stockwerke norwegisch gezählt (første etasje =
  1. Stock).
- Satzanfang von Wendungen (wa-, ws-) in der Antwort **klein** geschrieben wie bei fr (`hva er klokka?`); Beispielsätze
  normal.
- Redewendungen und Sprichwörter: die norwegische Entsprechung, wo sie bekannt ist, sonst eine natürliche
  Umschreibung. Weitere Antworten bei Komma-Feldern (karsten) nach der Regel aus M2: Die Antwort übersetzt das erste
  Teilwort (oder das, das das deutsche Beispiel meint), die anderen stehen unter Weitere, wenn gleichwertig.
- Beispielsätze 6–12 Wörter (Sprichwörter bis 14), ohne Semikolon: 10.512 Zeilen im Bereich, 2 kürzer, 17 länger
  (Sprichwörter, Redewendungen).
- Niveau unverändert wie im Original.

## Vorgehen und Prüfung

1. Alle Quellen nach Kategorie in 36 Einheiten à 59–291 Zeilen geteilt. Pro Einheit hat ein eigener Unteragent die
   Antworten, Weiteren Antworten und Beispielsätze auf Norwegisch geschrieben (Eingabe: Deutsch, Niveau, deutsches
   Beispiel, englische und französische Antwort zur Orientierung) und mit `check.mjs` (Formen, Reihenfolge, Länge,
   Artikel, å) geprüft.
2. Zeilen, die durch Alias (Wortpaar gleich wie in einer anderen Datei) mit einer Haupt-Zeile verbunden sind (1518 von
   10.539), bekamen die Antwort und Weiteren der Haupt-Zeile; ein zweiter Durchgang schrieb nur die Beispielsätze.
3. Gegenlesen: 12 unabhängige Durchsichten über alle 10.531 Zeilen (je ~880), nur echte Fehler: **128 Korrekturen**
   (falsche Bedeutung, Genus, nicht existierende Wörter wie `lettdrukken`, `istedet`, `ledeevne`, unnatürliche
   Beispiele, nicht gleichwertige Weitere). Danach sieben Nacharbeiten von Hand (Anruf, abgelegen, einbeziehen, Tankstelle
   `en bensinstasjon`, Druck (Verhandlung) `et press`, 3D-Drucker, Geodreieck).
4. `node scripts/pruefe.mjs`: **0 Fehler in den no-Dateien**. Die vier verbleibenden Fehler sind nicht von diesem Paket
   (siehe unten). Hinweise: 38 wie vorher, keine neuen. `node scripts/pruefe.mjs woerter/no-*.txt`: 0 Fehler,
   Dubletten-Hinweise nur für die Wortpaare, die jetzt Aliase sind.
5. Eigene Skripte: Zeilenzahl, ID, Deutsch, Niveau und Themen je Zeile gleich dem Original (10.531 Zeilen, 0
   Abweichungen); genau 7 Semikolons je Zeile; keine leeren Pflichtfelder; keine Antwort mit Komma, Schrägstrich, Klammer
   oder Punkt am Ende; keine doppelten Wortpaare in einer Datei; `katalog.json` gültig, Listen- und Quellenzähler
   stimmen mit den Dateien (pruefe.mjs prüft Quellen; die Listenzahlen sind wie oben berechnet).

Nicht per Skript prüfbar und deshalb nur durch die Durchsichten abgedeckt: ob jedes Wort in Bokmålsordboka genau so
steht, das Genus von Fachwörtern und die Idiomatik der Sprichwörter. Die Unteragenten haben knapp 400 Zeilen als
unsicher gemeldet; die wichtigsten stehen unter „Offene Fragen“.

## Skripte

- `scripts/katalog-lib.mjs`: `SPRACHEN` kennt `Norwegisch: "no"`.
- `scripts/pruefe.mjs`: ID-Muster `(fr|es|it|no)-`, `lemmas.no`, Kopfzeile „Norwegisch“, `formen/no.txt` erlaubt.
- `scripts/gibt-es.mjs`: Aufrufhinweis `--lang fr|es|it|no`.
- `aliase.mjs` unverändert; die Aliase habe ich mit einer um den Filter `no|` verkürzten Kopie erzeugt, damit die vier
  noch offenen Aliase aus M2 (it-fb-0077, it-ke-0732, vm-0069, fr-vm-0069) nicht in dieses Paket wandern.
  `node scripts/aliase.mjs` würde sie nachtragen.

## formen/no.txt

552 Formen, Kopfzeile `Form; Grundform; Art`, Grundform genau wie die Antwort im Katalog (mit `å`, bzw. mit Artikel):
unregelmäßiges Präsens (`er`, `vet`, `kan`, `vil`, `skal`, `må`, `gjør`, `sier`, `spør`, `tør`, `dør`: 19), Präteritum
(199) und Partizip (190) der starken und unregelmäßigen Verben (103 Wurzeln, auch mit Vorsilben und Partikel:
`å forstå` – forsto, `å stå opp` – sto opp), unregelmäßige Plurale (112, Komposita mit: `bøker`, `menn`, `hender`,
`føtter`, `tenner`, `lærebøker`, `politimenn` …), Komparativ und Superlativ (18/18). `pruefe.mjs formen/no.txt`: 0
Fehler, 0 Hinweise (jede Grundform steht als Antwort oder Weitere Antwort im Katalog). Regelmäßige Formen (-er, -te,
-et, -ere) sind nicht aufgenommen. Die Formen entstehen aus einer Wurzeltabelle (103 Verben) und den Antworten des
Katalogs; bei neuen Verben Tabelle erweitern.

## Offene Fragen

1. **App: Normalisierung.** `norm` in `katalog-lib.mjs` ersetzt wie die App `æ`, `ø` (und Zeichen außer a–z, ä, ö, ü, ß)
   durch ein Leerzeichen; `å` wird zu `a`. Wer „gjore“ statt „gjøre“ tippt (Tastatur ohne ø), wird
   in der App nur erkannt, wenn die App `ø→o` (und `æ→ae`) faltet. In den Skripten hier hat das nur Folgen für die
   Dublettenerkennung, und die ist unkritisch.
2. **App: Sprachpräfix.** Die Gruppierung der Fassungen („gleiche id ohne Sprachkürzel vorne“) und der Aliasabgleich
   müssen `no-` kennen.
3. **Ziffern.** `en 3D-printer` (xb-0264) enthält eine Ziffer, wie `l'imprimante 3D` bei fr/es/it; pruefe.mjs meldet das
   nicht.
4. **Niveau.** Das Niveau ist wie im Original; die Sprichwörter und Redewendungen sind für Lernende des
   Norwegischen oft höher einzuordnen.
5. **Stark vereinfachte oder behelfsmäßige Entsprechungen** (von Unteragenten gemeldet, nicht durch eine
   Muttersprachlerin geprüft). Vor Veröffentlichung gegenlesen lassen:
   - Staatliche Begriffe ohne norwegisches Gegenstück: Aufsichtsrat `et styre`, Vorstand `en konsernledelse`,
     Standesamt `et rådhus`, Gesamtschule `ei enhetsskole`, Abitur `et abitur`, Habilitation `en habilitering`,
     Gewerbesteuer `en lokal næringsskatt`.
   - Umschreibungen statt fester Fachwörter: Gewährleistung `en lovfestet garanti`, Plan-Ist-Vergleich
     `en sammenligning av plan og utfall`, Studienabbrecher `en som avbryter studiene`, Verkehrsberuhigung
     `en trafikksanering`, Verkehrsverlagerung, Fahrerflucht, Verkehrssicherungspflicht, Rechenschaftspflicht
     `en redegjørelsesplikt`.
   - Sprichwörter, die als frei gewählt gemeldet sind: sp-0007 `bruk det eller mist det` (Lehnübersetzung aus dem
     Englischen), sp-0041, sp-0044, sp-0100, sp-0120.
   - Redewendungen mit Umschreibung statt fester Wendung: ri-0184, 0187, 0199, 0208 (nur Bahnhof verstehen), 0165,
     0263, 0275, 0292, 0342.
   - Wendungen: wa-0093 `hva tid?` (um wie viel Uhr), wa-0146 `kan jeg få regningen` (ohne Komma wegen der Regel),
     ws-0141 `et øyeblikk takk`.
   - Genus unsicher gemeldet (Bokmålsordboka prüfen): en/ei tålmodighet, ferdighet, sannhet (ke-0439, ke-0565,
     ke-0928: hier `ei`), ei starthjelp, en/ei knipe (gw-1156), fallgruve (gw-1158), søppel (gw-0465), finregn (xc-0234
     jetzt `et finregn`), en pust (xa-0311), pollen (xc-0094).
6. **Ein Wort, zwei deutsche Einträge mit derselben Antwort** (Freund/Freundin `en kjæreste`, Bauch/Magen `en mage`,
   Autor/Schriftsteller `en forfatter`, Karotte/Möhre `en gulrot`, Priester/Pfarrer `en prest`, Gehalt/Lohn `en lønn`): 138
   solcher Paare, bei fr 178. Sie stehen in verschiedenen Zeilen derselben Datei mit unterschiedlichem Deutsch, das ist
   erlaubt.

## Hinweise fürs Zusammenführen

- Erst M2 (und davor W6 usw.) auf main, dann dieser Branch. Er ändert nur: `katalog.json` (words, lists, areas, forms,
  aliases), `aliase.txt`, drei Skripte und neue Dateien. Konflikte sind in `katalog.json` (Listenende, `areas.version`,
  `aliases`) und `aliase.txt` zu erwarten, wenn M2 vorher noch Zeilen ergänzt.
- **Bereits vorhandene Fehler auf M2, nicht von diesem Paket:** `katalog.json` zählt `bedeutungen` (en 54, fr 54, es
  59, it 58) anders, als die Dateien (59/59/61/59) Wörter haben; deshalb meldet `pruefe.mjs` auf M2 vier Fehler.
  Die Listen `mehrdeutig` (en 54, fr 54, es 59, it 58) haben denselben veralteten `count` (richtig: 59/59/61/59).
  `no-bedeutungen` und `no-mehrdeutig` sind bereits richtig (59). Außerdem sind vier Aliase aus M2 noch nicht
  eingetragen (`node scripts/aliase.mjs --trocken`).
- Ändert sich nach dem Zusammenführen ein Original (Deutsch, Klammerhinweis), die Norwegische Zeile nachziehen. Ändert
  sich eine norwegische Antwort, die einen Alias hat, die Alias-Zeilen mitändern oder den Alias lösen (einmal vergebene
  Aliase ändern sich sonst nie; `pruefe.mjs` meldet „Wortpaar weicht ab“).
- Danach `node scripts/pruefe.mjs --dubletten` über alles.
