# Faktenprüfung Erdkunde (probe-ed, probe-ew), 11. 11. 2026

Geprüft: 100 Fragen, davon 5 geändert, 3 ersetzt

| ID | Problem | Änderung |
|---|---|---|
| qz-ed-0008 | Gleiche Frage (Anzahl Bundesländer) schon in probe-al.txt (qz-al-0014) | Ersetzt: „Welcher große Fluss fließt durch Hamburg?“ – Elbe (Rhein, Donau, Main), Stufe 2 |
| qz-ed-0011 | „Welcher kleinste Staat der Welt liegt …“ sprachlich holprig | Umformuliert: „Wie heißt der kleinste Staat der Welt, der mitten in Rom liegt?“ |
| qz-ed-0032 | Hinweis ungenau: Golfstrom kommt aus dem Golf von Mexiko, nicht aus der Karibik; bis Norwegen fließt der Nordatlantikstrom | Hinweis: „… aus dem Golf von Mexiko über den Atlantik nach Europa.“ |
| qz-ed-0044 | „Gilt oft als höchster Berg Europas“ mit Mont Blanc als falscher Antwort – Mont Blanc gilt je nach Grenzziehung ebenfalls als höchster Berg Europas | Ersetzt: „Wie heißt der höchste Berg des Kaukasus?“ – Elbrus (Kasbek, Ararat, Mont Blanc) |
| qz-ed-0049 | Längster Nebenfluss der Donau: Theiß und Save je nach Quelle (mit/ohne Quellfluss) | Ersetzt: „Welcher Fluss mündet in Belgrad in die Donau?“ – Save (Theiß, Drau, Inn), Hinweis Slowenien/Zagreb |
| qz-ew-0012 | Hinweis „Sein Name bedeutet …“ bezieht sich beim Hören auf den Mount Everest statt aufs Gebirge | „Der Name des Gebirges bedeutet Wohnsitz des Schnees.“ |
| qz-ew-0025 | Hinweis: Aus dem Victoriasee fließt der Victoria-Nil, „Weißer Nil“ heißt er erst später | „Aus ihm fließt der Nil ab.“ |
| qz-ew-0048 | Seit 2020 hat Äthiopien mehrere Arbeitssprachen des Bundes; „wichtigste Amtssprache“ angreifbar | Frage: „In welchem afrikanischen Land ist Amharisch eine Amtssprache?“ (eindeutig, da nur dort) |

## Ohne Änderung bestätigt (unsichere Fälle des Erstellers)

- qz-ed-0042 Ladogasee: größter Süßwassersee Europas (rund 17 700 km²), Kaspisches Meer ist salzig – richtig.
- qz-ed-0034 Müritz: größter ganz in Deutschland liegender See (rund 117 km²) – richtig.
- qz-ed-0036 Finnland: nördlichster EU-Punkt bei Nuorgam (etwa 70° N), Schweden etwa 69° N; Norwegen, Grönland nicht EU – richtig.
- qz-ed-0048 Galdhøpiggen (2469 m) vor Glittertind (2452 m) – richtig.
- qz-ed-0015 Monaco zweitkleinster Staat, qz-ed-0011 Vatikanstadt kleinster – richtig.
- qz-ew-0026 Baikal (rund 1640 m) tiefster See – richtig.
- qz-ew-0032 Indonesien größter Inselstaat nach Fläche und Einwohnern – richtig.
- qz-ew-0041 Salto Ángel (979 m) – richtig.
- qz-ew-0045 Kongo zweitlängster Fluss Afrikas, überquert den Äquator zweimal – richtig.
- qz-ew-0020 Yen, Schriftzeichen 円 bedeutet „rund/Kreis“ – richtig.
- qz-ew-0027 Monsun von arabisch mausim „Jahreszeit“ – richtig.
- qz-ew-0040 China eine offizielle Zeitzone (Pekinger Zeit) – richtig.
- qz-ew-0044 Kasachstan größter Binnenstaat (Kaspisches Meer gilt nicht als offenes Meer, steht in der Frage) – richtig.

## Offene Punkte

- qz-ed-0048: Antwort und falsche Antwort „Snøhetta“ enthalten „ø“; Prüfskript meldet nichts, Aussprache durch Sprachausgabe und Erkennung („Galdhöpiggen“) in der App testen. Ebenso „Salto Ángel“ (qz-ew-0041).
- qz-ed-0050 Rysy: Der höchste Gipfel (2503 m) liegt in der Slowakei, der polnische Nebengipfel (2499 m) ist Polens höchster Punkt; Frage und Hinweis sind so richtig, aber Spezialwissen.

Prüfskript: `node scripts/pruefe-quiz.mjs quiz/probe-ed.txt quiz/probe-ew.txt` und ohne Argumente – je 0 Fehler, 0 Warnungen; Stufenverteilung unverändert.
