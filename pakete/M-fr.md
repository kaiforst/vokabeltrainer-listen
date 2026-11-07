# Paket M-fr: Mehrdeutige deutsche Wörter (Französisch)

Branch `wortschatz/M-fr`. Grundlage ist Paket M-en (auf main): Die französischen Fassungen bekommen dieselben
Klammerhinweise im Feld Deutsch, die 54 neuen Bedeutungen aus `woerter/bedeutungen.txt` werden übersetzt, dazu kommen
Fälle, die es nur im Französischen gibt. Nachvollziehbar in `pruefung/mehrdeutig-fr.txt` (346 Zeilen: 277 × c, 15 × b,
54 × d; Fall a ist nicht aufgeführt).

## Zusammenfassung

- **Schritt 1, Klammerhinweise übernommen (Fall c):** 247 Zeilen in 32 Dateien haben das Feld Deutsch jetzt genau wie
  das englische Original (246 Klammerhinweise, dazu ke-0834 „erinnern“ → „sich erinnern“). Das Skript der Hauptsession
  hat das Feld geschrieben; ich habe jede der 247 Zeilen neben der englischen Zeile geprüft. Meist passte die Fassung
  schon, weil sie vom englischen Wort übersetzt war. **15 Zeilen angepasst:**
  - Antwort und Beispiel falsche Lesart: fr-ke-0441 Muster (Design) le modèle (Schnittmuster) → le motif, fr-ke-0497
    Reichweite (Fahrzeug) la portée mit Videobeispiel → l'autonomie, neues Beispiel.
  - Nur Beispiel falsche Lesart: fr-ke-0696 tragen (Last) (Beispiel war Kleid tragen), fr-ke-0950 Stimme (beim Sprechen)
    (Beispiel war Wahl), fr-ke-0325 Land (Boden) (Beispiel war Land in Sicht; jetzt Land besitzen, wie im Englischen).
  - Weitere Antwort gehörte zur anderen Bedeutung, entfernt: ab-0063 Zeugnis (Arbeit) ohne le diplôme, le bulletin
    (+ le certificat de travail), ba-0090 Muster (Warenprobe) ohne le modèle, fb-0041/fb-0042 Freund (Partner) /
    Freundin (Partnerin) ohne l'ami/l'amie, gc-0016 Glück (glücklich sein) ohne la chance, gw-0441 Nachricht
    (Mitteilung) ohne la nouvelle, ke-0325 ohne le pays, ke-0609 gerade (nicht krumm) ohne tout droit, kk-0005 Farbe
    (Farbton) ohne la peinture, wf-0057 leihen (jemandem etwas) ohne emprunter.
  - kg-0050 Verband (Wunde): + le pansement (gleich üblich wie le bandage).
- **Schritt 2, `woerter/fr-bedeutungen.txt`:** 54 Zeilen fr-bd-0001 … fr-bd-0054, Deutsch, Niveau, Themen und deutsches
  Beispiel wie im Original, Antwort vom Deutschen übersetzt. Keine Zeile ausgelassen. Keine eigenen Zeilen ab 0501.
  **Gleiche Antwort für beide Bedeutungen** (Zeilen trotzdem geschrieben): fr-bd-0005 Boden (Fußboden) le sol = nt-0088
  Boden (Erde); fr-bd-0019 Blatt (Papier) la feuille = nt-0019 Blatt (Baum); fr-bd-0042 Note (Musik) la note =
  gw-0494/sb-0036 Note (Schule); fr-bd-0049 Rat (Gremium) le conseil = gw-0450 Rat (Ratschlag). Ebenso schon im
  Katalog (aus M-en, siehe Alias-Hinweise unten): Eis la glace, Karte la carte, Preis le prix, Stimme la voix, tragen
  porter, Kraft la force, Verlängerung la prolongation.
- **Schritt 3, eigene Fälle:** per Skript alle fr-Zeilen nach deutschem Wort gruppiert (224 Wörter mit mehreren
  Antworten), Kreuzprüfung, welche Zeile die Hauptantwort einer anderen nicht annimmt (59 Wörter), und gleiche Antwort
  mit unterschiedlichen Weiteren Antworten (321 Fälle, meist Fachwörter und Fall a). Frühere Pakete haben schon viel
  Fall b erledigt (Auto/l'auto, Fahrrad/la bicyclette, Jahr l'an/l'année, Tag, Abend, Zimmer, Fluss, neu/neuf …).
  - **Fall b, 15 Zeilen:** 14 ergänzt – Adjektiv/Adverb wie schon bei schnell (ke-0050 schlecht + mal, ke-0567 langsam +
    lentement, ke-0490 schnell + rapide, wahrscheinlich ke-0337/gw-0603 + probablement, ke-0476 + probable), während
    gw-0347/ke-0171 + pendant que, ke-0970 + pendant (Englisch nimmt during und while an), et-0016 Kuchen + la tarte,
    ke-0611 Straße + la route, ke-0742 fliegen + prendre l'avion, aller en avion (Beispiel benutzt es), ke-0247
    Tankstelle + la station d'essence, ke-0988 Arbeit + le boulot (jeweils wie die Grundwortschatz-Zeile). 1 entfernt:
    ke-0606 Sturm ohne l'orage (heißt Gewitter, steht als wu-0026).
  - **Fall c:** 13 Wörter mit Hinweisvorschlag (unten), 30 Zeilen im Protokoll. Dabei ein Beispiel neu: fr-ab-0036
    Werkstatt l'atelier hatte das Auto-Beispiel (dafür sagt man le garage), jetzt Schreiner in der Werkstatt.
  - **Fall d:** keiner. Die zweite Lesart steht bei allen französischen Fällen schon im Katalog (Partei la partie,
    Wettbewerb le concours, Welle l'onde, Huhn le poulet, Zimmer la pièce …).

Zeilen: 263 geänderte Zeilen (247 Schritt 1, davon 15 inhaltlich angepasst; 16 Schritt 3: 15 × b, 1 Beispiel), 54 neue.

## Geänderte Dateien (version muss beim Mergen steigen)

Geänderte Zeilen in Klammern; count ändert sich nirgends.

fr-alltag-zuhause (6), fr-arbeit-beruf (8), fr-business-airport (2), fr-business-beschaffung (8), fr-business-buero (8),
fr-business-marketing-vertrieb (6), fr-business-personalwesen (4), fr-business-projektmanagement (6),
fr-business-rechnungswesen (3), fr-business-verhandlungen (5), fr-business-vertrag (10), fr-einkaufen-geld (10),
fr-essen-trinken (7), fr-familie-beziehungen (5), fr-freizeit-hobbys (8), fr-gefuehle-charakter (3),
fr-grundwortschatz (27), fr-karsten (37), fr-kleidung-mode (14), fr-koerper-gesundheit (4), fr-kunst-kultur (12),
fr-medien-kommunikation (5), fr-natur-tiere (7), fr-politik-gesellschaft (6), fr-reisen-urlaub (8),
fr-schule-bildung (9), fr-sport-fitness (5), fr-technik-computer (3), fr-verkehr-mobilitaet (6), fr-wetter-umwelt (3),
fr-wirtschaft-finanzen (10), fr-wissenschaft-forschung (8) – 32 Dateien, alle version 1→2, nur fr-karsten 3→4.
Neu: woerter/fr-bedeutungen.txt, pruefung/mehrdeutig-fr.txt. Die fr-ausbau-Dateien waren schon angeglichen (Skript:
0 fr-Zeilen, deren Deutsch vom Original abweicht).

## Neue Quelle

| id | file | lang | count |
|---|---|---|---|
| fr-bedeutungen | woerter/fr-bedeutungen.txt | fr | 54 |

Themen wie im Original: `Mehrdeutige Wörter/Alltag` (22), `/Mensch` (12), `/Natur` (5), `/Schule & Arbeit` (8),
`/Gesellschaft & Kultur` (7).

## Vorschlag für Listen

| id | name | description | level | answerLang | filter |
|---|---|---|---|---|---|
| fr-mehrdeutig | Französisch: Mehrdeutige Wörter | wie Liste `mehrdeutig` | B1 | fr | topics: ["Mehrdeutige Wörter"] |

Gruppe wie die englische Liste `mehrdeutig` (gleiche id ohne Sprachkürzel). Falls `mehrdeutig-a2` kommt, ebenso
`fr-mehrdeutig-a2` mit levels ["A2"].

## Hinweisvorschläge (Fall c, für alle Sprachen)

Französisch verlangt hier je nach Bedeutung ein anderes Wort, das Englische meist nicht. Die Zeilen sind unverändert;
Antworten und Beispiele passen schon zur jeweiligen Lesart.

| Wort | Vorschlag | Zeilen | fr |
|---|---|---|---|
| Partei | Partei (Politik) / Partei (Vertrag) | pg-0015 / vt-0040 | le parti / la partie |
| Wettbewerb | Wettbewerb (Konkurrenz) / Wettbewerb (um einen Preis) | ba-0058, mv-0031, wf-0053 / fh-0063, gw-0666 | la concurrence / le concours |
| Kündigung | Kündigung (Arbeitsstelle) / Kündigung (Vertrag) | ab-0053, pw-0133 / vt-0036 | le licenciement / la résiliation (wie kündigen (Stelle) / (Vertrag) aus M-en) |
| buchen | buchen (Reise, Hotel) / buchen (Buchhaltung) | ru-0026 / rc-0052 | réserver / comptabiliser |
| Verbindung | Verbindung (Zusammenhang) / Verbindung (Internet, Telefon) | gw-0669 / tc-0045 (wi-0069 hat schon (Chemie)) | le lien / la connexion |
| Rechnung | Rechnung (im Restaurant) | et-0060, gw-0361 (die anderen sieben bleiben ohne) | l'addition / la facture |
| besuchen | besuchen (jemanden) / besuchen (einen Ort) | gw-0066, fb-0077 / ru-0040, ke-0895 | rendre visite à / visiter |
| wiederholen | wiederholen (noch einmal sagen) / wiederholen (Lernstoff) | mk-0037 / sb-0043 | répéter / réviser (Englisch: to repeat / to revise) |
| schwer | schwer (schwierig) / schwer (Gewicht) | gw-0217 / ke-0280 | difficile / lourd – betrifft auch Englisch (difficult / heavy), in M-en offenbar übersehen |
| Werkstatt | Werkstatt (Auto) | vm-0069 (ab-0036, fh-0084 ohne oder „(Handwerk)“) | le garage / l'atelier |
| Welle | Welle (im Wasser) / Welle (Physik) | ru-0091 / wi-0039 | la vague / l'onde (schwächer: wi-0039 nimmt la vague an) |
| Zimmer | Zimmer (im Hotel) | ru-0005 (die anderen Zimmer-Zeilen nehmen la chambre und la pièce an) | la chambre / la pièce (schwach) |
| Ordner | Ordner (Computer) | tc-0023 (bb-0044 nimmt le dossier an) | le dossier / le classeur (schwach) |

Geprüft und **kein Hinweis nötig**, weil die Zeilen beide Antworten annehmen: Huhn (la poule / le poulet), Batterie (la
pile / la batterie), Kissen, Fehler (la faute / l'erreur), Spiel (le jeu / le match), Straße, Zimmer (außer ru-0005),
Schwein, neu (nouveau / neuf), bringen (apporter / amener), hören, wachsen (pousser / grandir), Pause / récréation.
Streit (la dispute / le litige vt-0058) und Vertrag (le traité pg-0088) sind Fall a: das Fachwort steht nur in
Geschäfts- und Politiklisten.

## Alias-Kandidaten und erwartete Hinweise von pruefe.mjs

- **Neue Dubletten ohne Alias (6):** fr-ke-0749 → fr-al-0127, fr-ke-0359 → fr-gw-0441, fr-ke-0834 → fr-gw-0307,
  fr-ke-0679 → fr-gw-0511 (dieselben vier wie in M-en), fr-ke-0441 → fr-km-0067 (Muster (Design) le motif; im Englischen
  ist ke-0441 schon Alias von km-0067), fr-ke-0605 „Geschäft, Laden“ → fr-gw-0239 „Geschäft (Laden)“ (beide le magasin;
  im Englischen store / shop, daher dort keine Dublette).
- **„Wortpaar weicht … ab“ (9):** fr-fh-0065, fr-ke-0696, fr-ke-0950, fr-ru-0021, fr-vm-0019, fr-vt-0038, fr-wi-0033,
  fr-wu-0019 wie erwartet (Klammer verbindet jetzt verschiedene Bedeutungen mit gleicher Antwort). **Sonderfall
  fr-ke-0497:** Alias von fr-mk-0121 Reichweite (Medien), die Zeile war aber schon im Englischen Reichweite (Fahrzeug)
  (ke-0497 → vm-0128). Mit der neuen Antwort l'autonomie ist sie inhaltlich gleich fr-vm-0128; der alte fr-Alias ist
  falsch zugeordnet.
- Sonst nur „fr-bedeutungen.txt steht noch nicht in katalog.json“.

## Unsicherheiten

- fr-bd-0030 gerade (zeitlich): Französisch hat kein Einzelwort; Antwort „venir de“ (sie hat gerade … = elle vient de
  …), Weitere „en ce moment“ für „gerade jetzt“. Als Antwort zum Sprechen etwas ungewohnt.
- fr-bd-0015 Futter (für Tiere): la nourriture pour animaux (+ le fourrage); für Kühe sagt man eher le fourrage.
- fr-bd-0025 Entschuldigung (Bitte um Verzeihung): les excuses (Plural, wie im Französischen üblich).
- fr-bd-0044 Leiter (Chef): le directeur (+ la directrice, le chef), passend zum Schulbeispiel; in Firmen auch le
  responsable (nicht aufgenommen).
- Fall b bewusst zurückhaltend: viele Unterschiede bei Fachwörtern (Angebot le devis, Kosten le coût/les coûts,
  Gewährleistung …) und umgangssprachliche Varianten (la maman, le papa, la photographie) nicht angeglichen.
- fr-ke-0895 besuchen hat das Burg-Beispiel (visiter), das englische ke-0895 das Großeltern-Beispiel; das Französische
  ist in sich stimmig, deshalb unverändert.
- Englisch ke-0609 gerade (nicht krumm): das Beispiel „Go straight ahead“ ist eigentlich geradeaus; fr-ke-0609 hat
  „ligne droite“ und passt.

## Offene Fragen

1. Hinweisvorschläge oben: übernehmen beim Mergen für alle Sprachen? Besonders Partei, Wettbewerb, Kündigung, buchen,
   Verbindung, schwer.
2. Alias fr-ke-0497 → fr-mk-0121 verbindet jetzt Fahrzeug und Medien (Lernstand hängt daran). Wie beim Mergen der
   anderen „weicht ab“-Fälle entscheiden.

## Kontrolle

- `node scripts/pruefe.mjs`: 0 Fehler, 11 Hinweise (die oben genannten).
- Stichprobe: alle 247 übernommenen Zeilen neben der englischen gelesen, dazu 30 Zeilen (22 geänderte, 8 aus
  fr-bedeutungen) erneut auf Übersetzung, Niveau und Beispiel durchgesehen; keine weitere Korrektur nötig.
