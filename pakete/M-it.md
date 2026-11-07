# Paket M-it: Mehrdeutige deutsche Wörter (Italienisch)

Branch `wortschatz/M-it` (auf origin/main 0202cc5). Nachvollziehbar in `pruefung/mehrdeutig-it.txt` (297 Zeilen: 247
übernommene Klammerhinweise, dazu 50 eigene Fälle: 5 × b, 41 × c, 4 × d; Fall a ist nicht aufgeführt).

## Zusammenfassung

- **Schritt 1, Klammerhinweise aus dem Englischen (247 Zeilen):** Die Hauptsession hatte das Feld Deutsch per Skript wie
  im englischen Original geschrieben (246 Klammerhinweise und ke-0834 „erinnern“ → „sich erinnern“). Ich habe jede
  Zeile neben der englischen geprüft. 235 passten schon (die Fassung war zum englischen Wort übersetzt), **12 Zeilen
  angepasst**:
  - Weitere Antwort der anderen Bedeutung entfernt: ab-0063 Zeugnis (Arbeit) ohne „la pagella“, fb-0041 Freund
    (Partner) ohne „l'amico“, fb-0042 Freundin (Partnerin) ohne „l'amica“, gc-0016 Glück (glücklich sein) ohne „la
    fortuna“, kk-0005 Farbe (Farbton) ohne „la vernice“, pg-0041 Stimme (bei der Wahl) ohne „la voce“, wf-0057 leihen
    (jemandem etwas) ohne „prendere in prestito“, ke-0325 Land (Boden) „il paese“ durch „il terreno“ ersetzt.
  - Antwort und Beispiel neu: ke-0497 Reichweite (Fahrzeug) „la portata“ → „l'autonomia“ (das Beispiel war „außer
    Reichweite von Kindern“), ke-0441 Muster (Design) „il modello“ → „il motivo“ (wie km-0067, Beispiel „il motivo a
    righe“).
  - Beispiel neu: ke-0696 tragen (Last) (war: ein Kleid tragen), ke-0609 gerade (nicht krumm) (war: geradeaus gehen).
  - ke-0834 „sich erinnern“ hatte schon „ricordare [ricordarsi]“ mit „Non riesco a ricordare il suo numero“ – passt.
- **Schritt 2, `woerter/it-bedeutungen.txt`:** bd-0001 … bd-0054 übersetzt (it-bd-0001 … it-bd-0054), Deutsch, Niveau,
  Themen wie im Original. Beispielsatz Deutsch nur bei it-bd-0044 angepasst („Leiter unserer Abteilung“ statt „Schule“,
  weil der Schulleiter italienisch „il preside“ ist).
  Gleiche Antwort für beide Bedeutungen (Zeile trotzdem geschrieben): Garderobe (für Mäntel) / Garderobe (Kleidung)
  beide „il guardaroba“, Kanal (Wasserstraße) / Kanal (Medien) beide „il canale“, Rat (Gremium) / Rat (Ratschlag) beide
  „il consiglio“. Außerdem „il dado“ für Mutter (Schraube) wie für Würfel (Spiel) – anderes deutsches Wort, aber gleiche
  Antwort.
- **Schritt 3, eigene Fälle des Italienischen:** per Skript alle deutschen Wörter der it-Dateien (7636 Paare
  Deutsch–Antwort, Wendungsdateien ausgelassen) nach rund 250 typischen Kandidaten durchsucht und alle Wörter mit
  verschiedenen italienischen Antworten (75) beurteilt.
  - Fall b, **5 Zeilen**: eg-0034 Quittung + „lo scontrino“, ke-0486 pünktlich + „in orario, puntualmente“, ke-0895
    besuchen + „andare a trovare“, ke-0619 U-Bahn: Weitere „il metro“ (= der Meter) war falsch → „la metro“, ke-0860
    sitzen: Antwort „sedersi“ war falsch (= sich setzen) und das Beispiel „Setz dich hier neben mich“ ohne „sitzen“ →
    „essere seduto [stare seduto, sedere]“ mit Beispiel wie gw-0081 (so wie en/fr/es ke-0860 Alias von gw-0081 ist).
  - Fall c, **25 Wörter** (22 nur im Italienischen getrennt, 3 auch im Englischen; 41 Zeilen im Protokoll):
    Hinweisvorschläge unten, Feld Deutsch nicht geändert. Antwort und
    Beispiel der bestehenden Zeilen passen jeweils zu einer Lesart.
  - Fall d, **4 neue Zeilen** it-bd-0501 … 0504: können (beherrschen) – sapere, spielen (Instrument) – suonare, Nagel
    (am Finger) – l'unghia, Kind (Sohn oder Tochter) – il figlio.

## Zeilen in woerter/it-bedeutungen.txt

58 Zeilen: it-bd-0001 … it-bd-0054 (Übersetzung) und it-bd-0501 … it-bd-0504 (nur Italienisch).
Themen: `Mehrdeutige Wörter/Alltag` 22, `/Mensch` 15, `/Gesellschaft & Kultur` 8, `/Schule & Arbeit` 8, `/Natur` 5.
Niveaus: A1 3, A2 20, B1 25, B2 10.

## Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| it-bedeutungen | woerter/it-bedeutungen.txt | it | 58 |

## Vorschlag für Listen

Analog zur englischen Liste `mehrdeutig`:

| id | name | description | answerLang | level | filter |
|---|---|---|---|---|---|
| it-mehrdeutig | Italienisch: Mehrdeutige Wörter | Zweite Bedeutungen bekannter Wörter: Bank (zum Sitzen), Schloss (an der Tür), spielen (Instrument) … | it | B1 | topics: ["Mehrdeutige Wörter"] |

count 58; im Baum neben `mehrdeutig` (gleiche id ohne Sprachkürzel, also gleiche Gruppe).

## Geänderte Dateien (version muss beim Mergen steigen)

Zahl der geänderten Zeilen (Schritt 1 und 3 zusammen): it-alltag-zuhause 6, it-arbeit-beruf 7, it-business-airport 2,
it-business-beschaffung 8, it-business-buero 8, it-business-marketing-vertrieb 6, it-business-personalwesen 4,
it-business-projektmanagement 6, it-business-rechnungswesen 3, it-business-verhandlungen 5, it-business-vertrag 10,
it-einkaufen-geld 11, it-essen-trinken 6, it-familie-beziehungen 5, it-freizeit-hobbys 8, it-gefuehle-charakter 3,
it-grundwortschatz 25, it-karsten 29, it-kleidung-mode 14, it-koerper-gesundheit 4, it-kunst-kultur 12,
it-medien-kommunikation 5, it-natur-tiere 7, it-politik-gesellschaft 6, it-reisen-urlaub 8, it-schule-bildung 9,
it-sport-fitness 5, it-technik-computer 3, it-verkehr-mobilitaet 6, it-wetter-umwelt 3, it-wirtschaft-finanzen 10,
it-wissenschaft-forschung 8 – 32 Dateien, 252 Zeilen (247 aus Schritt 1, davon 12 zusätzlich inhaltlich angepasst,
und 5 aus Schritt 3). Die Ausbau-Dateien (it-ausbau-*) waren schon angeglichen, keine Änderung.
Außerdem `formen/it.txt`: Zeile „gli schemi; lo schema; Plural“ entfernt (die Grundform stand nur als Weitere Antwort
in ke-0441 Muster (Design), die ich gestrichen habe; sonst meldet pruefe.mjs ⚠). Neu: woerter/it-bedeutungen.txt,
pruefung/mehrdeutig-it.txt. Der count ändert sich in keiner bestehenden Datei.

## Hinweisvorschläge für alle Sprachen (Fall c)

Wörter, die im Italienischen zwei ganz verschiedene Antworten verlangen. Beide Lesarten stehen schon im Katalog, außer
wo „neu“ steht:

- **können** → „können (möglich sein)“ für ke-0088; neu it-bd-0501 „können (beherrschen)“ – sapere („Sai nuotare?“).
- **spielen** → „spielen (Spiel, Sport)“ für gw-0042, ke-0813, fh-0002, sf-0005; neu it-bd-0502 „spielen
  (Instrument)“ – suonare. gw-0042 und ke-0813 haben „suonare“ noch als Weitere Antwort; mit dem Hinweis streichen.
- **Nagel** → „Nagel (zum Einschlagen)“ für al-0095; neu it-bd-0503 „Nagel (am Finger)“ – l'unghia (xa-0302
  „Fingernagel“ gibt es schon).
- **Kind** → „Kind (junger Mensch)“ für gw-0093, ke-0106, fb-0005, pg-0010; neu it-bd-0504 „Kind (Sohn oder Tochter)“
  – il figlio („Hanno tre figli“). fb-0005 und pg-0010 haben „il figlio“ als Weitere Antwort und dürfen es behalten.
- **Glas** → „Glas (zum Trinken)“ für al-0043, et-0055, gw-0176, ke-0252 (il bicchiere) / „Glas (Material)“ für
  wu-0048 (il vetro).
- **Maus** → „Maus (Tier)“ nt-0008 (il topo) / „Maus (Computer)“ tc-0008, bb-0043 (il mouse).
- **Huhn** → „Huhn (Tier)“ nt-0011 (la gallina) / „Huhn (als Speise)“ et-0033 (il pollo).
- **Vorhang** → „Vorhang (am Fenster)“ al-0032, gw-0474 (la tenda) / „Vorhang (im Theater)“ kk-0044 (il sipario).
- **schmecken** → „schmecken (gut schmecken)“ gw-0089 (essere buono) / „schmecken (nach etwas)“ et-0071 (sapere di).
- **besuchen** → „besuchen (jemanden)“ fb-0077, gw-0066, ke-0895 (andare a trovare / visitare) / „besuchen (Ort)“
  ru-0040 (visitare). Achtung: ru-0040 ist in allen Sprachen Alias von gw-0066.
- **wiederholen** → „wiederholen (Lernstoff)“ sb-0043 (ripassare) / „wiederholen (noch einmal sagen)“ mk-0037
  (ripetere).
- **Partei** → „Partei (Vertrag)“ vt-0040 (la parte) / „Partei (Politik)“ pg-0015 (il partito).
- **Wettbewerb** → „Wettbewerb (Wirtschaft)“ ba-0058, mv-0031, wf-0053 (la concorrenza) / „Wettbewerb (um einen
  Preis)“ fh-0063, gw-0666 (il concorso).
- **Qualifikation** → „Qualifikation (Beruf)“ ab-0117, pw-0013 (la qualifica) / „Qualifikation (Sport)“ sf-0105
  (la qualificazione).
- **buchen** → „buchen (reservieren)“ ru-0026 (prenotare) / „buchen (Buchhaltung)“ rc-0052 (registrare).
- **Ordner** → „Ordner (für Papiere)“ bb-0044 (il raccoglitore) / „Ordner (Computer)“ tc-0023 (la cartella).
- **erwarten** → „erwarten (Besuch)“ gw-0277 (aspettare) / „erwarten (rechnen mit)“ ke-0732 (aspettarsi).
- **untersuchen** → „untersuchen (Arzt)“ kg-0059 (visitare) / „untersuchen (prüfen, erforschen)“ wi-0015 (esaminare).
- **Werkstatt** → „Werkstatt (Auto)“ ab-0036, vm-0069 (l'officina) / „Werkstatt (Handwerk)“ fh-0084 (il laboratorio).
- **verfeinern** → „verfeinern (Kochen)“ et-0131 (insaporire) / „verfeinern (verbessern)“ gw-0787 (perfezionare).
- **Rechnung** → „Rechnung (im Restaurant)“ et-0060, gw-0361, ke-0068 (il conto) / „Rechnung (Geschäft)“ für die
  Business-Zeilen (la fattura). Die meisten Zeilen haben die andere Antwort als Weitere, nur et-0060, ba-0113, vt-0014
  nicht.
- **Kündigung** → „Kündigung (Arbeitsstelle)“ ab-0053, pw-0133 (il licenziamento) / „Kündigung (Vertrag)“ vt-0036
  (la disdetta), passend zu kündigen (Stelle) / kündigen (Vertrag).

Auch im Englischen getrennt (verschiedene Antworten, aber kein Hinweis): **Vertrag** „Vertrag (zwischen Staaten)“
pg-0088 (treaty / il trattato); **jagen** „jagen (hinterherlaufen)“ gw-0547 (to chase / inseguire) / „jagen (Jagd)“
nt-0108 (to hunt / cacciare); **während** „während (+ Nebensatz)“ ke-0970 (while / mentre) neben gw-0347, ke-0171
(during / durante).

Erwogen, aber Fall a: Fußball (il calcio; der Ball wäre il pallone, in Listen selten gemeint), Zeit (il tempo; „Mal“ –
la volta – ist ein eigenes Wort), Uhr und Fisch (italienisch je ein Wort), Knopf (il bottone geht auch für Geräte),
Feuer (ke-0222 hat „l'incendio“ schon), Größe, Bild, Spiel, Junge/Mädchen (Weitere decken bambino/ragazzo ab).

## Alias-Kandidaten

pruefe.mjs meldet 7 Wortpaare ohne Alias im Italienischen:
- durch die übernommenen Klammern (wie im Englischen): it-ke-0749 → it-al-0127 (aufstehen (morgens, aus dem Bett) –
  alzarsi), it-bb-0035, it-ke-0359, it-tc-0038 → it-gw-0441 (Nachricht (Mitteilung) – il messaggio), it-ke-0679 →
  it-gw-0511 (annehmen (vermuten) – supporre), it-mv-0004, it-eg-0004, it-ke-0605, it-wf-0008 → it-gw-0239 (Geschäft
  (Laden) – il negozio);
- durch meine Korrekturen, jeweils so wie im Englischen schon als Alias geführt: it-ke-0860 → it-gw-0081 (sitzen –
  essere seduto), it-ke-0441 → it-km-0067 (Muster (Design) – il motivo), it-ke-0497 → it-vm-0128 (Reichweite
  (Fahrzeug) – l'autonomia).

Die 6 ⚠ „Wortpaar weicht … ab“ (it-ke-0696/gw-0072 tragen, it-ke-0834/gw-0572 erinnern, it-kg-0043/gw-0355 Rezept,
it-mv-0061/sb-0100 Bewertung, it-sf-0067/ap-0189 Laufband, it-wi-0033/sf-0062 Kraft) sind erwartet: Die Aliase
verbinden jetzt verschiedene Bedeutungen. it-ke-0834 „sich erinnern“ entspricht inhaltlich it-gw-0307, nicht gw-0572.
Keine anderen neuen ⚠.

## Unsicherheiten

- **Weitere Antworten der anderen Bedeutung**: Ich habe sie im Italienischen entfernt (Auftrag). Die englischen
  Originale haben die entsprechenden noch: fb-0041 „friend“, gc-0016 „luck“, ke-0325 „country“, kk-0005 „paint“,
  pg-0041 „voice“, wf-0057 „to borrow“, ab-0063 „report“. Beim Mergen ggf. im Englischen ebenso streichen.
- **it-bd-0011 ausziehen (aus der Wohnung) – lasciare l'appartamento [lasciare la casa]**: Italienisch gibt es kein
  einzelnes Verb; „traslocare“ ist schon umziehen (it-xa-0011).
- **it-bd-0021 Lager (Zeltlager) – il campo [l'accampamento]**: „il campo“ ist auch das Feld; „il campeggio“ wäre der
  Campingplatz.
- **it-bd-0044 Leiter (Chef) – il direttore [la direttrice, il capo, il responsabile]**: Schulleiter wäre „il preside“,
  deshalb das Beispiel mit Abteilung.
- **it-bd-0504 Kind (Sohn oder Tochter)**: im Englischen „child“ wie die bestehenden Zeilen; im Deutschen ist die
  Trennung ungewohnt. Wenn der Hinweis nicht gewollt ist, Zeile streichen und es bei der Weiteren Antwort „il figlio“
  in fb-0005/pg-0010 lassen.
- ke-0917 Stadt hat „il paese“ als Weitere Antwort (eher Dorf, Land); nicht geändert.
- Fall b bewusst nicht angeglichen: Rechnung (et-0060, ba-0113, vt-0014 ohne die andere Antwort, weil der Zusammenhang
  eindeutig ist), Stift sb-0007 (nur „la penna“).

## Offene Fragen

1. Sollen die Fall-c-Hinweise oben (können, spielen, Nagel, Kind, Glas, Maus …) in allen Sprachen gesetzt werden?
   Ohne Hinweis bleibt z. B. „spielen – giocare“ neben „spielen (Instrument) – suonare“ stehen; der Abgleich eigener
   Listen findet beides.
2. Brauchen it-bd-0501 … 0504 englische Gegenstücke in bedeutungen.txt? Im Englischen wären es Dubletten des
   Wortpaars (can, to play, nail, child) mit anderem Hinweis.
3. Die Weiteren Antworten „suonare“ (gw-0042, ke-0813) und „il sipario“ (gw-0474) gehören zur anderen Lesart; ich habe
   sie stehen lassen, solange es keinen Hinweis gibt.

## Kontrolle

- `node scripts/pruefe.mjs`: 0 Fehler; Hinweise nur it-bedeutungen.txt (noch nicht in katalog.json), die 6 „Wortpaar
  weicht ab“ und die 7 Dubletten ohne Alias oben.
- Alle 247 übernommenen Zeilen neben dem englischen Original gelesen, alle 58 neuen Zeilen geschrieben und
  durchgesehen; Stichprobe 30 Zeilen (geänderte und neue) auf Übersetzung, Niveau und Beispiel: keine weitere
  Korrektur nötig.
