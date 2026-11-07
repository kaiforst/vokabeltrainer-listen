# Paket F-de: deutsche Wortformen → Grundform

## Ergebnis

Neue Datei `formen/de.txt` (Kopfzeile `Form; Grundform; Art`), **2531 Formen**:

| Art | Zeilen |
|---|---|
| Plural | 1972 |
| Präteritum | 256 |
| Partizip | 229 |
| Komparativ | 28 |
| Superlativ | 24 |
| Präsens | 21 |
| Konjunktiv | 1 |

`node scripts/pruefe.mjs formen/de.txt`: 0 Fehler, 0 Hinweise. Jede Grundform steht so im Katalog (Spalte Deutsch).

## Vorgehen

- Alle Werte der Spalte Deutsch aus allen 132 Wortdateien (alle Sprachen) per Hilfsskript eindeutig aufgelistet
  (5235 verschiedene Einträge: 3245 einzelne Substantive, 1355 andere Einzelwörter, 635 Einträge mit mehreren
  Wörtern). Aus `lesen-grundschule.txt` nur die Wortzeilen, nicht die Sätze.
- Die Formen habe ich selbst geschrieben, Substantiv für Substantiv und Verb für Verb; Skripte nur zum Auflisten,
  Formatieren und Prüfen (nicht im Repo).
- **Plurale:** alle Substantive mit gebräuchlichem Plural, der sich von der Einzahl unterscheidet. Ausgelassen:
  Plural gleich Einzahl (Lehrer, Zimmer), Stoff- und Sammelnamen ohne üblichen Plural (Milch, Armut, Gepäck),
  Einträge, die selbst schon Plural sind (Eltern, Kosten, Abgase), seltene oder fachsprachliche Plurale (Abholzungen).
  Mehrere Plurale, wo beide üblich sind (Banken/Bänke, Wörter/Worte, Jungen/Jungs, Balkone/Balkons).
- **Verben:** Präteritum und Partizip II aller starken, unregelmäßigen und gemischten Verben im Katalog (auch mit
  Vorsilbe: abbiegen, verschieben, wahrnehmen …). Trennbare Verben im Präteritum getrennt („stand auf; aufstehen“).
  Partizip weggelassen, wenn es dem Infinitiv gleicht (bekommen, vergessen, erhalten).
- **Steigerung:** gut, viel, hoch, bald und die Steigerung mit Umlaut (alt → älter, am ältesten; groß, jung, kalt,
  klug, kurz, lang, stark, warm …) sowie dunkler, teurer, saurer (e fällt weg). Superlativ als „am besten“.
- **Zusätzlich** (über die Paketbeschreibung hinaus, weil sehr häufig und ganz unregelmäßig): Präsens von sein (bin,
  bist, ist, sind, seid), haben (hast, hat), werden (wirst, wird), wissen (weiß, weißt) und den Modalverben (kann,
  muss, darf, will, mag), Konjunktiv „wäre“.
- **Einträge mit mehreren Wörtern:** Grundform ist immer der ganze Eintrag, wie er in der Spalte Deutsch steht.
  - Komma-Einträge („Ding, Sache“): Formen nur für die Teile, die nicht selbst als eigener Eintrag im Katalog stehen
    („Dinge; Ding, Sache“, „Sachen; Ding, Sache“). Steht der Teil auch allein im Katalog (Art → Arten), zeigt die Form
    nur auf den Einzeleintrag.
  - Verben, die nur in Wendungen vorkommen: „fiel; fallen, stürzen“, „kam aus; mit jemandem auskommen“,
    „durfte; dürfen, können“, „tat weh; weh tun“. Reflexive mit „sich“ im Präteritum („verhielt sich; sich verhalten“).
    Bildhafte Redewendungen (ins Fettnäpfchen treten, auf Granit beißen) bekommen keine Formen.
  - Wortgruppen mit Substantiv, deren Plural gebräuchlich ist („befristete Verträge; befristeter Vertrag“,
    „soziale Netzwerke; soziales Netzwerk“, „Start- und Landebahnen“).
- **Lesen (Grundschule):** Substantive mit Artikel, die es nur dort gibt („der Dieb“, „der Stein“, „die Puppe“): Form
  ohne Artikel, Grundform mit Artikel wie im Katalog („Diebe; der Dieb; Plural“).
- **Mehrdeutige Formen** mit beiden Zeilen bzw. beiden Plurals: Bank (Banken, Bänke), Mutter (Muttern; „Mütter“ siehe
  unten), Kiefer (Kiefern), Leiter (Leitern), Schuppe (Schuppen), liegen/lügen („lag“, „log“ → „liegen, lügen“).

## Neue Quellen

Keine Wortdatei. Neu ist nur `formen/de.txt`; `katalog.json` enthält bisher keinen Abschnitt für Formen, die Datei
wird von `pruefe.mjs` aber schon geprüft.

| id | file | lang | count |
|---|---|---|---|
| (formen-de) | formen/de.txt | de | 2531 |

## Vorschläge für Listen

Keine. Die Formen sind für den Abgleich eigener Listen gedacht, nicht zum Üben.

## Unsicherheiten und offene Fragen

1. **Klammerhinweise aus M-en:** M-en hängt parallel an manche deutschen Wörter einen Hinweis in Klammern an
   („Bank (Geldinstitut)“). Meine Grundformen stehen so, wie die Spalte Deutsch jetzt auf main aussieht („Bank“).
   Beim Zusammenführen sollten Grundformen mit Klammerhinweis aus M-en **ohne die Klammer** verglichen werden
   (sonst meldet `pruefe.mjs` „Grundform steht nicht im Katalog“ bzw. findet der Abgleich den Eintrag nicht).
2. **Plurale, die sich nur im Umlaut unterscheiden, fehlen** (Äpfel, Väter, Mütter, Brüder, Töchter, Gärten, Vögel,
   Böden, Öfen, Mäntel, Nägel … insgesamt 35), ebenso die Konjunktive hätte, würde, könnte, müsste, möchte, dürfte
   und das Partizip „heraufbeschworen“.
   Grund: Die Vergleichsform `norm` (wie `normalize` in der App) entfernt Umlautpunkte, also gilt „Äpfel“ = „Apfel“
   und „hätte“ = „hatte“; `pruefe.mjs` meldet dann „Form gleich Grundform“ bzw. „steht doppelt“ als Fehler. Für den
   Abgleich ist das unschädlich, solange auch der Abgleich so normalisiert (Äpfel findet dann Apfel direkt). Soll der
   Abgleich Umlaute unterscheiden, müssten `norm` bzw. die Prüfung angepasst und diese Zeilen ergänzt werden.
3. **Komma-Einträge:** Ist es richtig, die Form auf den ganzen Eintrag „Ding, Sache“ zeigen zu lassen? Alternative
   wäre, für jeden Teil einen eigenen Grundform-Eintrag vorzusehen; dann müsste der Abgleich Komma-Einträge zerlegen.
4. **Bewusst weggelassen:** „Rat“ (Plural Räte gehört zu Rat = Gremium, der Katalog meint Ratschlag), „Erbe“ (Erben
   gehört zu der Erbe = Erbe als Person, im Katalog ist das Erbe gemeint), „Band“ nur „Bands“ (Bänder/Bände gehören zu
   anderen Bedeutungen), „Basketball“/„Fußball“ (Katalog meint die Sportart), „Streit“ (Streite ist kaum üblich,
   Streitigkeiten ist Plural von Streitigkeit), „Unterhaltung“ (Unterhaltungen = Gespräche, Katalog meint
   Entertainment), „Schuld“ (Schulden steht als eigener Eintrag).
5. **Grenzfälle, die ich aufgenommen habe:** „Geschmäcker“ (umgangssprachlich, Duden: Geschmäcke), „Rechtsstreite“,
   „Kodizes“, „Halbfinals“, „Magnete“ (auch Magneten), „Visa“ (auch Visen), „backte“ und „mahlte“ (regelmäßiges
   Präteritum, aber unregelmäßiges Partizip), „sandte/sendete“ und „wandte ein/wendete ein“ (beides üblich),
   „Westen“ (Plural von Weste, gleich geschrieben wie der Eintrag „Westen“ = Himmelsrichtung), „weiß“ (von wissen, gleich
   geschrieben wie die Farbe), „Herde“ (Plural von Herd, auch eigener Eintrag).
6. **Umfang der Steigerung:** Die Paketbeschreibung nennt „unregelmäßige Steigerungen“; ich habe die Steigerung mit
   Umlaut (älter, größer, wärmer) und mit Ausfall des e (dunkler, teurer) dazugenommen, regelmäßige (schneller)
   nicht. Präsensformen mit Vokalwechsel (fährt, gibt, nimmt) habe ich nicht aufgenommen; einige stehen schon als
   eigene Wörter in `lesen-grundschule.txt`.
7. **Arbeitsweise:** Ich habe in größeren Blöcken als 50 Zeilen geschrieben (alphabetisch je etwa 300 Substantive)
   und nach jedem Zusammenbau mit `pruefe.mjs` geprüft. Kontrolle zum Schluss: 30 Zeilen stichprobenartig gelesen,
   keine Fehler gefunden.
