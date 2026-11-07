# Paket F-es: spanische Wortformen → Grundform

Datei: `formen/es.txt`, Kopfzeile `Form; Grundform; Art`, 823 Formen. `node scripts/pruefe.mjs formen/es.txt`: 0 Fehler,
0 Hinweise (jede Grundform steht als Antwort oder weitere Antwort in einer `es-*`-Datei).

## Neue Quellen

Keine Wortdatei, daher kein Eintrag unter `words` in `katalog.json`. `katalog.json` kennt noch keinen Abschnitt für
Formen; falls die App die Formdateien über den Katalog lädt, wäre ein Eintrag nötig, etwa
`"forms": [{ "file": "formen/es.txt", "lang": "es", "version": 1, "count": 823 }]` (Form beim Zusammenführen mit den
anderen F-Paketen festlegen).

Keine Vorschläge für Listen (Formen sind keine Lernwörter).

## Vorgehen

Alle Antworten und weiteren Antworten aus den 31 `woerter/es-*.txt` per Skript aufgelistet und grob nach Wortart
sortiert (8629 verschiedene Antworten: 1001 Einzelwörter auf -ar/-er/-ir(se), 3359 Substantive mit Artikel, 1080
andere Einzelwörter, Rest Mehrwortausdrücke). Daraus von Hand die unregelmäßigen Wörter ausgewählt und die Formen
selbst geschrieben. Geprüft nach jedem Block von höchstens 50 Zeilen.

| Art | Zeilen | Inhalt |
|---|---|---|
| Präsens | 633 | 203 Verben (Grundform wie im Katalog, auch reflexive). `ser`, `estar`, `ir`, `irse`, `haber` alle sechs Personen (dazu `hay`). Stammwechsel e → ie, o/u → ue, e → i, -uir → y: die vier stammbetonten Formen (yo, tú, él, ellos), z. B. `pienso, piensas, piensa, piensan`; nosotros/vosotros sind regelmäßig und fehlen. Unregelmäßige 1. Person: `tengo, vengo, digo, hago, pongo, salgo, sé, doy, veo, oigo, caigo, traigo, valgo` und Ableitungen (contener, detener, mantener, obtener, sostener, entretener, prevenir, contradecir, predecir, componer, imponer, posponer, presuponer, proponer, suponer, prever), alle Verben auf -cer/-cir mit -zco, Schreibänderungen in der 1. Person (`cojo, escojo, recojo, protejo, dirijo, exijo, finjo, infrinjo, convenzo, venzo, ejerzo, esparzo, distingo`). Unpersönliche/fast nur 3. Person: `nieva, llueve, cuesta(n), duele(n)`, `se despliega(n)`, `se disuelve(n)`, `se cuelga(n)` |
| Partizip | 32 | alle unregelmäßigen Partizipien der Katalogverben: abierto, (des/en)cubierto, dicho, contradicho, predicho, (d)escrito, inscrito, suscrito, hecho, impreso, frito, sofrito, muerto, puesto und Ableitungen, (de/di/re/)suelto/vuelto, roto, visto, previsto, podrido |
| Plural | 118 | -z → -ces (los lápices, las veces, las voces, felices, veloces …); unveränderliche Substantive auf -s (los lunes, los paraguas, los cumpleaños, las tesis …); feminine Substantive mit `el` (el agua → las aguas, el arte → las artes …); Fremdwörter mit -s nach Konsonant (los tests, los chefs, los cómics, los currículums …) und auf -y (los hobbies, los jerséis, los ferris, los penaltis) |
| Femininum | 27 | 12 Personen/Tiere, deren weibliche Form noch nicht als Antwort im Katalog steht (la emperatriz, la tigresa, la burguesa, la presentadora, la tutora …); 15 Adjektive auf -or/-ón (trabajadora, conservadora, innovadora, gruñona, burlona …) |
| Komparativ / Superlativ | 7 / 6 | mejor (bueno, bien), peor (malo, mal), mayor, menor, más; el mejor, el peor, óptimo, pésimo, máximo, mínimo |

Schreibweise wie abgesprochen: Grundform genau wie die Antwort im Katalog (Substantive mit Artikel), Plural mit
`los/las`, Femininum mit `la`, Verben und Adjektive ohne Artikel, Präsens ohne Subjektpronomen (`voy`). Reflexive Verben
mit Reflexivpronomen (`me acuerdo; acordarse`), weil die Form ohne Pronomen meist zum nicht reflexiven Verb gehört.

Selbstkontrolle: 30 zufällige Zeilen nachgelesen (keine Fehler gefunden), alle Präsensformen und Partizipien noch
einmal gegen die Konjugation geprüft, dazu per Skript alle Formen gesucht, die selbst als Antwort im Katalog stehen
(siehe Unsicherheiten).

## Bewusst nicht aufgenommen

- **Plurale, die sich nur im Akzent von der regelmäßigen Bildung unterscheiden**: -ión → -iones (352 Substantive im
  Katalog), -án/-én/-ín/-ón/-és → ohne Akzent (el autobús → los autobuses), und umgekehrt mit neuem Akzent (el examen →
  los exámenes, el joven → los jóvenes, la imagen → las imágenes, el carácter → los caracteres). Der Abgleich (`norm`)
  entfernt Akzente, damit sind diese Formen gleich der regelmäßigen Bildung (Endung -s bzw. -es). Auf Wunsch leicht zu
  ergänzen (rund 420 Zeilen).
- **Verben, deren Besonderheit nur ein Akzent ist**: enviar → envío, continuar → continúo, confiar, actuar, ampliar,
  criar, efectuar, esquiar, evaluar, fluctuar, fotografiar, guiar, insinuar, reenviar, vaciar, variar, atenuar,
  resfriarse, reunir → reúno – aus demselben Grund.
- **Regelmäßige Femininformen** (-o → -a: la alumna; Personen auf -or, wenn die weibliche Form schon als Antwort im
  Katalog steht: la profesora, la directora, la jugadora … – das betrifft fast alle) und Formen, die sich nur im Artikel
  unterscheiden (la estudiante, la periodista, la gerente).
- **Eigene Wörter statt Formen** (la reina, la madre, la yegua, la vaca, la nuera, la madrina) – das ist ein anderes
  Lexem, kein gebeugtes.
- **Nicht zählbare Fremdwörter** ohne üblichen Plural (feedback, doping, phishing, software, internet, wifi …) und nicht
  zählbare Substantive auf -z (el arroz, la paz, la escasez, la liquidez, el ajedrez …).
- **Kaum gebrauchte Formen**: florezco (florecer), yazco (yacer), me extingo (extinguirse); bei desplegarse, disolverse,
  colgarse nur die se-Formen.
- **Andere Zeiten**: Indefinido (fui, tuve, hice, dije, estuve, pude …), Futur, Subjuntivo, Imperativ und Gerundium
  (yendo, diciendo, durmiendo) – für Spanisch nicht verlangt. Das Indefinido der unregelmäßigen Verben ist häufig und
  wäre die nächste sinnvolle Ergänzung (Art „Präteritum“).
- **Verkürzte Adjektive** (buen, mal, gran, primer, tercer, algún, ningún, cien) – keine der Arten passt; buen, mal,
  cien stehen ohnehin als Antwort im Katalog.
- **Unregelmäßige Elativformen** (riquísimo, larguísimo, poquísimo, amabilísimo, jovencísimo, antiquísimo) – riquísimo,
  carísimo, bellísimo stehen selbst als Antwort im Katalog.

## Unsicherheiten und offene Fragen

- **sonar/soñar fallen im Abgleich zusammen.** `norm` macht aus ñ ein n, deshalb meldet `pruefe.mjs` `sueno; sonar` und
  `sueño; soñar` (ebenso suenas/sueñas usw.) als doppelt. Aufgenommen sind nur die Formen von soñar; die von sonar
  (sueno, suenas, suena, suenan) fehlen, weil sie im Abgleich identisch wären. Sollte `norm` ñ künftig von n
  unterscheiden, die vier Zeilen ergänzen. Gleiches gilt für pícnic/picnic und pódcast/podcast (je nur eine Zeile).
- **Akzentlose Gleichheit mit anderen Wörtern**: `estás`/`está` (estar) sind im Abgleich gleich `estas`/`esta`
  (Demonstrativ, beide im Katalog). Formen, die selbst als eigenes Wort im Katalog stehen: asiento, concierto, gobierno,
  acuerdo, cuento, cuenta, encuentro, fuerza, juego, muestra, prueba, recuerdo, sueño, vuelo, despido, frío, río,
  abierto, dicho, hecho, muerto, puesto, compuesto, impuesto, presupuesto, supuesto, roto, mejor, mayor, más; dazu die
  Plurale los altavoces (Lautsprecheranlage), las voces (Gesang), los tenis (Sportschuhe), las actas (Protokoll),
  las alas (Flügel) und trabajadora/gruñona. Beim Abgleich eigener Listen sollte ein exakter Katalogtreffer Vorrang vor
  einer Form haben.
- **Mehrdeutige Formen** (je zwei Zeilen): `me siento` (sentarse, sentirse), `visto` (ver Partizip, vestir Präsens),
  `mejor` (bueno, bien), `peor` (malo, mal).
- **Reflexive Präsensformen mit me/te/se.** Der Hinweis „ohne Pronomen“ bezieht sich auf Subjektpronomen; das
  Reflexivpronomen gehört zur Form (`me acuerdo`, `me voy`). Bei reflexiven Verben ohne nicht reflexives Gegenstück im
  Katalog (despertarse, sentarse, avergonzarse …) gibt es keine pronomenlose Zeile. Mit F-it abgleichen, ob dort
  `mi ricordo` genauso geschrieben ist.
- **Präsens nur stammbetonte Formen.** Bei Stammwechsel- und -uir-Verben fehlen nosotros/vosotros (regelmäßig:
  pensamos, pensáis). F-fr nimmt dagegen alle sechs Personen auf; falls der Abgleich regelmäßige Formen nicht selbst
  erkennt, wären sie zu ergänzen.
- **Fremdwortplurale** nach RAE bzw. gängigem Gebrauch, je nur eine Form: los tickets (auch tiques), los currículums
  (RAE auch currículos), los referéndums (auch referendos), los sponsors (RAE espónsores), los ferris (auch ferries),
  los jerséis. `el club → los clubes` ist regelmäßig und fehlt (los clubs wäre die Alternative).
- **Seltenes und Fachsprachliches** ist mit aufgenommen, soweit es im Katalog steht (desherbar → deshierbo, segar →
  siego, escarnecer → escarnezco, sobreesforzarse). Nach Häufigkeit filtern, falls die Datei schlank bleiben soll.
- **la productora** heißt auch „Produktionsfirma“, **la patrona** auch „Schutzheilige“ – als Femininum trotzdem richtig.
