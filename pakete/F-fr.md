# Paket F-fr: französische Wortformen → Grundform

Datei: `formen/fr.txt`, Kopfzeile `Form; Grundform; Art`, 954 Formen. `node scripts/pruefe.mjs formen/fr.txt`: 0 Fehler,
0 Hinweise (jede Grundform steht als Antwort oder weitere Antwort in einer `fr-*`-Datei).

## Neue Quellen

Keine Wortdatei, daher kein Eintrag unter `words` in `katalog.json`. `katalog.json` kennt noch keinen Abschnitt für
Formen; falls die App die Formdateien über den Katalog lädt, wäre ein Eintrag nötig, etwa
`"forms": [{ "file": "formen/fr.txt", "lang": "fr", "version": 1, "count": 954 }]` (Form beim Zusammenführen mit den
anderen F-Paketen festlegen).

Keine Vorschläge für Listen (Formen sind keine Lernwörter).

## Vorgehen

Alle Antworten und weiteren Antworten aus den 32 `woerter/fr-*.txt` per Skript aufgelistet und nach Wortart grob
sortiert (943 Verben, 3153 Substantive mit Artikel, 987 Einzelwörter). Daraus von Hand ausgewählt und die Formen selbst
geschrieben:

| Art | Zeilen | Inhalt |
|---|---|---|
| Präsens | 476 | alle sechs Personen (je, tu, il, nous, vous, ils) von 78 häufigen unregelmäßigen Verben, dazu `il faut`, `il pleut`; bei `s'asseoir` beide Reihen (assieds/assois) |
| Partizip | 117 | Partizip Perfekt (maskulin Singular) aller Verben der 3. Gruppe im Katalog sowie aller, deren Präsens aufgenommen ist (auch `allé`, `envoyé`, `dormi`, `parti` …) |
| Plural | 109 | Substantive auf -al/-ail → -aux, -eau/-au/-eu → -x, bijou/genou/hibou, œil → yeux, ciel → cieux, zusammengesetzte Substantive, deren erstes Glied sich ändert (grands-mères, arcs-en-ciel, chefs-d'œuvre …); Adjektive auf -al → -aux und beau/nouveau |
| Femininum | 242 | Personen- und Tierbezeichnungen mit unregelmäßiger weiblicher Form (-eur → -euse/-rice, -ien → -ienne, -er/-ier → -ère/-ière, patronne, copine, compagne, épouse, maîtresse, hôtesse, louve …); Adjektive mit unregelmäßigem Femininum (-eux → -euse, -if → -ive, -el → -elle, -er → -ère, -et → -ète/-ette, -on → -onne, belle, nouvelle, vieille, blanche, longue, sèche, fraîche, douce, fausse, bénigne, maligne, aiguë …) |
| Komparativ / Superlativ | 5 / 5 | meilleur, mieux, pire, plus, moins und le meilleur, le mieux, le pire, le plus, le moins |

Schreibweise wie abgesprochen: Grundform genau wie die Antwort im Katalog (Substantive mit Artikel, `l'` bei Vokal),
Plural mit `les`, Femininum mit `la`/`l'`, Verben und Adjektive ohne Artikel, Präsens mit Pronomen (`j'` vor Vokal,
reflexive Verben mit `me/te/se/nous/vous`).

Nicht aufgenommen (bewusst): regelmäßige Plurale (-s) und unveränderliche Plurale (-s/-x/-z, die sich nur im Artikel
unterscheiden), regelmäßige Femininformen (+e, z. B. l'amie, l'étudiante, l'auteure, l'ingénieure) und Formen, die sich
nur im Artikel unterscheiden (le/la journaliste), Präsens und Partizip der regelmäßigen Verben auf -er, -ir (finir) und
-re (vendre, attendre, rompre), sowie Formen, die im Katalog ein eigenes Wort mit eigener Bedeutung sind und nicht
dasselbe Lexem (la reine, la nièce, la fille).

Selbstkontrolle: 30 zufällige Zeilen und alle zusammengesetzten Plurale, -trice/-euse-Formen und Partizipien noch
einmal einzeln geprüft; dazu per Skript alle Formen gesucht, die selbst als Antwort im Katalog stehen (siehe unten).

## Unsicherheiten

- **Präsens nur mit je, tu, il, nous, vous, ils.** `elle`, `on`, `elles` fehlen (sonst 33 % mehr Zeilen bei gleicher
  Verbform). Falls der Abgleich Formen nur exakt vergleicht, sollte er `elle/on` wie `il` und `elles` wie `ils`
  behandeln, oder die Zeilen werden ergänzt.
- **Präsens nur für häufige Verben.** Bei seltenen oder fachsprachlichen Ableitungen (acquérir, conquérir, concevoir,
  percevoir, promouvoir, enfreindre, étreindre, feindre, contraindre, coudre, moudre, dissoudre, élire, émettre,
  compromettre, remettre, prescrire, prédire, contredire, déduire, reconduire, entretenir, convenir, prévenir, survenir,
  conclure, inclure, cueillir, recueillir, haïr, s'enfuir, consentir, poursuivre, combattre, débattre, joindre,
  accroître, croître, recouvrir) nur das Partizip.
- **Verben mit Stammwechsel auf -er** (acheter → j'achète, appeler → j'appelle, préférer → je préfère, manger → nous
  mangeons, commencer → nous commençons, payer, essayer, nettoyer, jeter, lever, mener …) gelten als „Verben mit
  Besonderheiten“, nicht als unregelmäßig, und sind nicht aufgenommen. Sie sind häufig; wenn gewünscht, als Ergänzung.
- **Nur Partizip maskulin Singular.** Feminine Partizipien (prise, faite, mise, écrite, ouverte …) fehlen.
- **Andere Zeiten** (Futur j'irai, Subjonctif que je sois, Imparfait) sind nicht aufgenommen; „Konjunktiv“ würde für
  den Subjonctif passen, war für Französisch aber nicht verlangt.
- **Adjektivformen vor Vokal** (bel, nouvel, vieil) fehlen, weil keine der Arten passt.
- **Plural ohne Alternativen:** les stations-service (auch stations-services), les chèques-cadeaux (auch
  chèques-cadeau), les cieux (auch ciels) – jeweils nur die gängigste Form. Ausnahmen mit -s (pneus, landaus, bisous,
  clous, cous, régals, banals, finals) sind als regelmäßig weggelassen.
- Weibliche Formen, die sich in der Bedeutung verschoben haben, sind trotzdem aufgenommen, weil der Katalog sie selbst
  als weitere Antwort führt: l'entraîneuse (Trainer), la maîtresse (Lehrer), la cuisinière (auch „Herd“), l'autrice.
  Nicht aufgenommen: la chatte, la doctoresse, la poétesse, la tigresse.

## Offene Fragen

- **Formen, die zugleich eigene Katalogwörter sind.** Diese Formen stehen auch als Antwort eines anderen oder desselben
  deutschen Worts im Katalog; der Abgleich sollte zuerst den Katalog direkt prüfen und erst danach `formen/fr.txt`:
  - Partizipien, die als Adjektiv eigene Einträge haben: écrit (schriftlich), connu (berühmt), cru (roh), ouvert
    (geöffnet), couvert (bewölkt), mort (tot), parti (weg), déçu (enttäuscht), inclus (einschließlich), dû (fällig),
    prévenu (voreingenommen).
  - Plurale mit eigener Bedeutung: les travaux (Baustelle), les maux (Beschwerden), les jumeaux (Zwillinge),
    les cheveux (Haar), les yeux (Auge), les bureaux (Büro), les panneaux (Beschilderung).
  - Femininformen mit eigenem Hauptwort: l'infirmière (Krankenschwester), la cuisinière (Herd). Die übrigen
    weiblichen Formen (la chanteuse, l'actrice …) stehen bereits als weitere Antwort beim männlichen Wort.
  - Steigerungsformen: meilleur und mieux (besser), plus (mehr).
- **Mehrdeutige Formen** sind doppelt aufgenommen: je suis / tu suis → être und suivre. Mehrdeutig nach Entfernen der
  Akzente: cru (croire) und crû (croître).
- **Eintrag in `katalog.json`** für Formdateien: siehe „Neue Quellen“, gemeinsam mit F-de, F-en, F-es, F-it klären.
