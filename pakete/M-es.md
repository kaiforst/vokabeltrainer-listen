# Paket M-es: Mehrdeutige deutsche Wörter (Spanisch)

Branch `wortschatz/M-es` (auf main 0202cc5). Grundlage: M-en (pakete/M-en.md, pruefung/mehrdeutig-en.txt).
Nachvollziehbar in `pruefung/mehrdeutig-es.txt` (337 Zeilen: 247 übernommene Klammern, 54 übersetzte Bedeutungen,
36 eigene Fälle des Spanischen; Fall a ist nicht aufgeführt).

## Zusammenfassung

1. **Klammerhinweise übernommen (Fall c):** 247 Zeilen in 32 Dateien haben jetzt das Feld Deutsch wie das englische
   Original (246 Klammerhinweise, dazu es-ke-0834 „erinnern“ → „sich erinnern“). Die Übernahme lief per Skript der
   Hauptsession; ich habe jede Zeile neben dem Original geprüft (Antwort, Weitere Antworten, Beispielsatz). Meist passte
   die Fassung schon, weil sie zum englischen Wort übersetzt war. **14 Zeilen angepasst:**
   - Beispiel bzw. Antwort passte zur anderen Bedeutung: es-ke-0834 sich erinnern (Beispiel war „recuérdame …“, jetzt
     acordarse wie es-gw-0307), es-ke-0696 tragen (Last) (Beispiel war ein Kleid tragen), es-ke-0497 Reichweite
     (Fahrzeug) (Antwort el alcance mit Beispiel zur Reichweite eines Kanals → la autonomía wie es-vm-0128).
   - Weitere Antwort der anderen Bedeutung entfernt: es-fb-0041 el amigo, es-fb-0042 la amiga (Freund/Freundin
     (Partner)), es-gw-0072 cargar (tragen (Kleidung)), es-gw-0441 la noticia (Nachricht (Mitteilung)), es-ke-0131 la
     tierra (Land (Staat)), es-ke-0325 el país (Land (Boden)), es-kk-0005 la pintura (Farbe (Farbton)), es-pg-0041 la voz
     (Stimme (bei der Wahl)), es-sb-0024 el deporte (Sport (Schulfach)), es-wf-0057 pedir prestado (leihen (jemandem
     etwas)), es-ab-0063 el título, el boletín de notas (Zeugnis (Arbeit); jetzt Weitere el certificado de trabajo).
2. **Übersetzt:** `woerter/es-bedeutungen.txt` es-bd-0001 … es-bd-0054, gleiche Reihenfolge, Deutsch (mit Klammer),
   Niveau und Themen wie bd-0001 … bd-0054. Antworten vom Deutschen übersetzt (Spanien).
   Antwort gleich wie bei der anderen Bedeutung (Zeile trotzdem geschrieben): Bank (zum Sitzen) el banco, Boden
   (Fußboden) el suelo (= Boden (Erde)), Blatt (Papier) la hoja, Abstieg (vom Berg) el descenso (= Abstieg (Sport)),
   Kanal (Wasserstraße) el canal, Note (Musik) la nota, Rat (Gremium) el consejo, ausziehen (aus der Wohnung) mudarse
   (= umziehen (Wohnung) es-xa-0011). el guardarropa (Garderobe (für Mäntel)) steht auch als Weitere bei Garderobe
   (Kleidung) – das Wort hat im Spanischen beide Bedeutungen.
3. **Eigene Fälle des Spanischen** (alle es-Dateien per Skript: je deutsches Wort alle Antworten, alle Wörter mit
   mehreren Hauptantworten, alle englischen Aliase, deren es-Fassungen verschieden übersetzt sind; dazu eine Liste
   typischer Spanisch-Fallen):
   - **Fall b:** 2 Zeilen. es-ke-0441 Muster (Design) + el estampado; es-ke-0606 Sturm: Antwort la tormenta → el
     temporal wie es-wu-0030 (das Original ke-0606 ist Alias von wu-0030), Weitere el vendaval, la tormenta; das
     Beispiel war ein Gewitter mit Donner. Sonst haben die T-/X-Fassungen gleichwertige Antworten schon gut abgedeckt
     (el coche/el auto, la nevera/el frigorífico, la bicicleta/la bici, el colegio/la escuela, la comida/el almuerzo …).
   - **Fall c:** 18 Wörter mit Hinweisvorschlag (unten), Feld Deutsch unverändert. Zwei Zeilen dabei angepasst, weil
     Antwort und Beispiel nicht zur selben Lesart passten: es-ke-0564 Größe (Beispiel „¿Qué tamaño de zapatos usas?“ –
     Schuhgröße heißt el número; jetzt la talla mit dem Hemd-Beispiel des Originals, Weitere el tamaño) und es-kg-0007
     Ohr (la oreja mit Ohrenschmerzen-Beispiel – das wäre el oído; jetzt Ohrring-Beispiel).
   - **Fall d:** 5 neue Zeilen es-bd-0501 … 0505: Ecke (im Zimmer) el rincón, Kind (Sohn oder Tochter) el hijo,
     können (gelernt haben) saber, Bein (Tier, Möbel) la pata, spielen (Instrument) tocar.

## Zeilen

- Geänderte Zeilen in bestehenden Dateien: **250** = 247 übernommene Klammern (davon 14 inhaltlich angepasst; es-ke-0441
  bekam zusätzlich Fall b) + 3 Zeilen ohne Klammer (es-ke-0606, es-ke-0564, es-kg-0007).
  Kurz: Schritt 1 angepasst 14, Schritt 3 b 2 (es-ke-0441, es-ke-0606), Schritt 3 c angepasst 2 (es-ke-0564,
  es-kg-0007).
- Per Skript geprüft: Feld Deutsch aller es-Zeilen (auch es-ausbau-*) ist jetzt gleich dem Original; Niveau und Themen
  unverändert; es-bd-0001 … 0054 haben Deutsch, Niveau und Themen wie bd-0001 … 0054.
- `woerter/es-bedeutungen.txt`: 59 Zeilen (es-bd-0001 … 0054 und es-bd-0501 … 0505).

## Geänderte Dateien (version muss beim Mergen steigen; count bleibt gleich)

es-alltag-zuhause (1→2, 6 Zeilen), es-arbeit-beruf (1→2, 7), es-business-airport (1→2, 2), es-business-beschaffung
(1→2, 8), es-business-buero (1→2, 8), es-business-marketing-vertrieb (1→2, 6), es-business-personalwesen (1→2, 4),
es-business-projektmanagement (1→2, 6), es-business-rechnungswesen (1→2, 3), es-business-verhandlungen (1→2, 5),
es-business-vertrag (1→2, 10), es-einkaufen-geld (1→2, 10), es-essen-trinken (1→2, 6), es-familie-beziehungen (1→2,
5), es-freizeit-hobbys (1→2, 8), es-gefuehle-charakter (1→2, 3), es-grundwortschatz (1→2, 25), es-karsten (3→4, 27),
es-kleidung-mode (1→2, 14), es-koerper-gesundheit (1→2, 5), es-kunst-kultur (1→2, 12), es-medien-kommunikation
(1→2, 5), es-natur-tiere (1→2, 7), es-politik-gesellschaft (1→2, 6), es-reisen-urlaub (1→2, 8), es-schule-bildung
(1→2, 9), es-sport-fitness (1→2, 5), es-technik-computer (1→2, 3), es-verkehr-mobilitaet (1→2, 6), es-wetter-umwelt
(1→2, 3), es-wirtschaft-finanzen (1→2, 10), es-wissenschaft-forschung (1→2, 8) – 32 Dateien, 250 Zeilen laut
`git diff --numstat` (es-ke-0441 zählt einmal). Die Ausbau-Dateien (es-ausbau-*) sind unverändert.

## Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| es-bedeutungen | woerter/es-bedeutungen.txt | es | 59 |

Themen wie in bedeutungen.txt: `Mehrdeutige Wörter/Alltag` (23), `Mehrdeutige Wörter/Mensch` (14),
`Mehrdeutige Wörter/Natur` (6), `Mehrdeutige Wörter/Schule & Arbeit` (8), `Mehrdeutige Wörter/Gesellschaft & Kultur`
(8). Niveaus A1–B2.

## Vorschlag für Listen

| id | name | description | level | answerLang | filter |
|---|---|---|---|---|---|
| es-mehrdeutig | Spanisch: Mehrdeutige Wörter | Zweite Bedeutungen bekannter Wörter: Bank (zum Sitzen), Ecke (im Zimmer), spielen (Instrument) … | B1 | es | topics: ["Mehrdeutige Wörter"] |

count 59 (die fünf Zeilen ab es-bd-0501 gibt es nur auf Spanisch; die Liste zeigt sie mit, das englische Gegenstück
hat 54). Falls die Fassungen gleiche counts haben sollen, die Zeilen ab 0501 nach dem Mergen auch fürs Englische
übernehmen (siehe Hinweisvorschläge) – dann bd-0055 ff. im Original und die es-Zeilen umnummerieren? Lieber nicht:
IDs bleiben, die Original-Zeilen bekämen eigene bd-Nummern und die es-Zeilen ab 0501 würden dann Aliase.

## Hinweisvorschläge für alle Sprachen (Fall c)

Wörter, die im Spanischen je nach Gebrauch zwei verschiedene Wörter verlangen, das Englische aber nicht trennt. Feld
Deutsch habe ich nicht geändert. Wo die englischen Zeilen Aliase sind, müssten die Aliase beim Setzen der Hinweise
getrennt werden (das Wortpaar unterscheidet sich dann).

| Wort | Vorschlag | Zeilen | Spanisch |
|---|---|---|---|
| Fisch | Fisch (Tier) / Fisch (als Speise) | nt-0004, ke-0225 / et-0007, gw-0160 | el pez / el pescado |
| Ecke | Ecke (Straße); neu Ecke (im Zimmer) = es-bd-0501 | gw-0428, vm-0060 | la esquina / el rincón |
| Glas | Glas (zum Trinken) / Glas (Material) | al-0043, et-0055, gw-0176, ke-0252 / wu-0048 | el vaso / el vidrio |
| Vorhang | Vorhang (am Fenster) / Vorhang (Theater) | al-0032, gw-0474 / kk-0044 | la cortina / el telón |
| Welle | Welle (Wasser) / Welle (Physik) | ru-0091 / wi-0039 | la ola / la onda |
| Partei | Partei (Politik) / Partei (Vertrag) | pg-0015 (rd-0106) / vt-0040 | el partido / la parte |
| Wettbewerb | Wettbewerb (um einen Preis) / Wettbewerb (Konkurrenz) | fh-0063, gw-0666 / ba-0058, mv-0031, wf-0053 | el concurso / la competencia |
| Spiel | Spiel (Gesellschaftsspiel) / Spiel (Sport) | fh-0003, ke-0245, tc-0017 / sf-0007 | el juego / el partido |
| Pause | Pause (Schule) / Pause (Arbeit) | sb-0020 / ab-0019, pw-0101, gw-0496 | el recreo / el descanso |
| heiß | heiß (Wetter) / heiß (Speise, Gegenstand) | wu-0010 / gw-0211, ke-0291 | caluroso (hace calor) / caliente |
| Größe | Größe (Kleidung) / Größe (Ausmaß) | eg-0045, km-0050, ke-0564 / – | la talla / el tamaño |
| Rechnung | Rechnung (Restaurant) / Rechnung (Geschäft) | et-0060, gw-0361, ke-0068 / ba-0113, bb-0028, rc-0006, vt-0014, eg-0051, wf-0015 | la cuenta / la factura |
| Kind | Kind (junger Mensch); neu Kind (Sohn oder Tochter) = es-bd-0502 | fb-0005, gw-0093, ke-0106, pg-0010 | el niño / el hijo |
| können | können (möglich sein, dürfen); neu können (gelernt haben) = es-bd-0503 | ke-0088 | poder / saber |
| Bein | Bein (Mensch); neu Bein (Tier, Möbel) = es-bd-0504 | ke-0332, kg-0003 | la pierna / la pata |
| spielen | spielen (Spiel, Sport); neu spielen (Instrument) = es-bd-0505 | fh-0002, gw-0042, ke-0813, sf-0005 | jugar / tocar |
| Huhn | Huhn (Tier) / Huhn (Fleisch) – niedrige Priorität, beide Zeilen nehmen beide Antworten an | nt-0011 / et-0033 | la gallina / el pollo |
| Ohr | Ohr (außen) / Ohr (Gehör) – niedrige Priorität, kg-0007 nimmt beide an | kg-0007 | la oreja / el oído |

Bei Fisch, Glas, Vorhang, Welle, Partei, Wettbewerb, Spiel, Pause, heiß, Größe und Huhn stehen beide Lesarten schon im
Katalog (nur mit gleichem Feld Deutsch), daher kein Fall d. Die Weiteren Antworten der bestehenden es-Zeilen nehmen die
andere Lesart oft mit an (es-gw-0428 Ecke + el rincón, es-fb-0005 Kind + el hijo, es-gw-0042 spielen + tocar,
es-ke-0088 können + saber); beim Setzen der Hinweise diese Weiteren Antworten entfernen.

**Lesart der Fassung weicht vom Original ab** (beim Setzen der Hinweise beachten):
- es-ke-0225 Fisch: el pez mit Tier-Beispiel; das Original ke-0225 hat „We eat fish with rice“ und ist Alias von
  gw-0160 (Speise). Im Spanischen ist es-ke-0225 Alias von es-nt-0004. Mit Hinweis: ke-0225 „Fisch (als Speise)“ und
  es-ke-0225 → el pescado mit Speise-Beispiel, oder das englische Beispiel ändern.
- es-ke-0068 Rechnung: la factura mit Geschäftsbeispiel; das Original ke-0068 hat „Could we have the bill“ (Restaurant,
  Alias von gw-0361), im Spanischen Alias von es-bb-0028.
- es-ke-0088 können: poder mit „¿Puedes ayudarme …?“; das Original ke-0088 hat „I can swim very well“ (= saber).

## Alias-Kandidaten und erwartete ⚠

`node scripts/pruefe.mjs`: 0 Fehler, 8 Hinweise – alle erwartet:
- `es-bedeutungen.txt steht noch nicht in katalog.json (59 Wörter)`.
- **Wortpaar weicht ab (6):** Alias-Gruppen, die durch die Klammern jetzt verschiedene Bedeutungen verbinden:
  es-ke-0497 → es-mk-0121 (Reichweite Fahrzeug/Medien), es-ke-0696 → es-gw-0072 (tragen Last/Kleidung), es-ke-0834 →
  es-gw-0572 (sich erinnern / erinnern (jemanden)), es-kg-0043 → es-gw-0355 (Rezept Arzt/Kochen), es-vt-0038 →
  es-sf-0074 (Verlängerung Frist/Sport), es-wi-0033 → es-sf-0062 (Kraft Physik/körperlich). Vorschlag wie im
  Englischen: **es-ke-0834 → es-gw-0307** (jetzt gleiches Paar „sich erinnern – acordarse“, auch gleiches Beispiel),
  **es-ke-0497 → es-vm-0128** („Reichweite (Fahrzeug) – la autonomía“); die anderen vier Aliase aufheben.
- **Dubletten ohne Alias (6 Wortpaare)** – beim Zusammenführen mit `node scripts/aliase.mjs` aufnehmen:
  - „aufstehen (morgens, aus dem Bett) – levantarse“: es-ke-0749 = es-al-0127 (wie M-en)
  - „Nachricht (Mitteilung) – el mensaje“: es-bb-0035, es-ke-0359, es-tc-0038 = es-gw-0441 (wie M-en)
  - „annehmen (vermuten) – suponer“: es-ke-0679 = es-gw-0511 (wie M-en)
  - „Geschäft (Laden) – la tienda“: es-mv-0004, es-eg-0004, es-ke-0605, es-wf-0008 = es-gw-0239 (es-ke-0605 heißt
    „Geschäft, Laden“; die Vergleichsform macht es gleich)
  - „Größe – la talla“: es-ke-0564 = es-eg-0045 (wie der englische Alias ke-0564 → eg-0045; km-0050 ist schon Alias)
  - „Sturm – el temporal“: es-ke-0606 = es-wu-0030 (wie der englische Alias ke-0606 → wu-0030)
  Die Paare „sich erinnern – acordarse“ und „Reichweite (Fahrzeug) – la autonomía“ erscheinen nicht als offene
  Dubletten, weil es-ke-0834 bzw. es-ke-0497 schon Aliase sind (siehe oben, umhängen).

## Unsicherheiten

- **Weitere Antworten entfernt, die das Englische behält:** Freund (Partner) hat im Englischen „friend“ als Weitere,
  Land (Staat) „land“, Stimme (bei der Wahl) „voice“, Farbe (Farbton) „paint“, Sport (Schulfach) „sports“, leihen
  (jemandem etwas) „to borrow“. Im Spanischen habe ich el amigo, la tierra, la voz, la pintura, el deporte, pedir
  prestado entfernt, weil sie nur zur anderen Bedeutung gehören. Falls die App lieber großzügig bewertet: zurücknehmen.
- **es-ke-0649 dick (Gegenstand)** behält gordo als Weitere (un libro gordo ist umgangssprachlich üblich), obwohl gordo
  auch die Antwort von es-bd-0024 dick (Körper) ist.
- **ausziehen (aus der Wohnung)** = mudarse wie umziehen; das genauere „irse del piso, dejar el piso“ steht als Weitere.
- **gerade (zeitlich)**: Englisch „just“ (gerade eben) mit Beispiel „She has just left the house“. Die Hauptsession hat
  es-bd-0030 an das Original und an fr („venir de“) und it („appena“) angeglichen: Antwort „acabar de“ (kein Einzelwort),
  Weitere „ahora mismo, en este momento“ (wie Englisch „right now, at the moment“), Beispiel „Mi hermana acaba de salir de casa.“
- **Neue Zeilen nicht in den Klammer-Sprachstil des Originals?** Hinweise wie „Kind (Sohn oder Tochter)“ und „können
  (gelernt haben)“ sind länger als die englischen; bitte beim Mergen für alle Sprachen gleich formulieren.
- **sein (ser/estar)**: der klassische Fall, aber nicht mit einem Klammerhinweis lösbar; es-gw-0021 und es-ke-0682
  nehmen beide Antworten an. So lassen.
- Nicht aufgenommen (selten oder mit eigenem üblichem deutschem Wort im Katalog): Fuß (Tier) la pata, Holz (Brennholz)
  la leña, Fenster (Auto) la ventanilla, Stunde (Schulstunde) la clase, treffen (zufällig) encontrarse, Batterie
  pila/batería (beide Zeilen nehmen beide an), Bild cuadro/imagen.

## Offene Fragen

1. Sollen die Hinweisvorschläge oben in allen Sprachen gesetzt werden? Einige trennen englische Aliase (wu-0048 →
   gw-0176, kk-0044 → gw-0474, wi-0039 → ru-0091, vt-0040 → pg-0015, ba-0058/mv-0031/wf-0053/fh-0063 → gw-0666,
   sf-0007 → fh-0003, sb-0020 → gw-0496, nt-0004 → gw-0160, nt-0011 → et-0033, wu-0010 → gw-0211).
2. Die neuen Zeilen es-bd-0501 … 0505 haben kein englisches Original. Fürs Englische wären sie Dubletten (corner,
   child, can, leg, to play) – also nur sinnvoll, wenn das Feld Deutsch der bestehenden Zeilen den Hinweis bekommt.
3. Wie M-en Frage 1: Der Abgleich eigener Listen sollte den Klammerhinweis ignorieren.

## Kontrolle

- `node scripts/pruefe.mjs` nach jedem Schritt und am Ende: 0 Fehler, 8 Hinweise (oben erklärt).
- Alle 247 übernommenen Zeilen einzeln neben dem Original geprüft; alle 59 Zeilen in es-bedeutungen.txt und eine
  Stichprobe von 30 geänderten bzw. neuen Zeilen nochmals auf Übersetzung, Niveau und Beispielsatz durchgesehen.
- Feld Deutsch, Niveau, Themen und IDs bestehender Zeilen unverändert (nur Antwort, Weitere Antworten, Beispiele).
