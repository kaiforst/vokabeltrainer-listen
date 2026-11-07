# Paket F-it: italienische Wortformen → Grundform

Datei: `formen/it.txt` (Kopfzeile `Form; Grundform; Art`), 1031 Formen, `node scripts/pruefe.mjs` ohne Fehler und
ohne Hinweise (keine Grundform „steht nicht im Katalog“).

## Vorgehen

Alle Antworten und Weiteren Antworten aus den 32 Dateien `woerter/it-*.txt` per Hilfsskript (außerhalb des Repos)
aufgelistet und grob sortiert: Verben (933), Substantive mit Artikel (3261), sonstige Einzelwörter (1119),
Mehrwortausdrücke (2938). Substantive nach Endungen gefiltert, bei denen der einfache Plural (-o → -i, -a → -e,
-e → -i) nicht stimmt. Die Formen selbst sind von Hand geschrieben und geprüft.

Schreibweise wie in den anderen F-Paketen abgesprochen: Grundform genau wie die Antwort im Katalog (Substantive mit
Artikel), Pluralformen mit Pluralartikel („gli uomini; l'uomo“), Femininformen mit Artikel („la direttrice“),
Verben und Adjektive ohne Artikel, Präsensformen ohne Pronomen („vado“).

## Inhalt

| Art | Zeilen | Umfang |
|---|---|---|
| Präsens | 344 | alle sechs Personen von 57 unregelmäßigen Verben im Katalog: essere, avere, andare, fare, dare, stare, dire, venire, tenere, potere, volere, dovere, sapere, uscire, riuscire, bere, rimanere, salire, scegliere, togliere, raccogliere, sciogliere, spegnere, piacere, morire, sedere, possedere, udire, giacere, apparire, comparire, scomparire, die Verben auf -durre, -porre, -tenere, -dire, -trarre, prevenire, soddisfare (mit beiden üblichen Varianten soddisfo/soddisfaccio usw.) |
| Partizip | 148 | alle unregelmäßigen Partizipien der Katalogverben (fatto, detto, preso, messo, scritto, aperto …), dazu -uto/-ito-Sonderfälle (conosciuto, cresciuto, venuto, esistito, insistito) |
| Komparativ, Superlativ | 16 | migliore/ottimo, peggiore/pessimo, maggiore/massimo, minore/minimo, meglio, peggio, più, meno, superiore, inferiore, il migliore, il peggiore |
| Plural (Substantive) | 463 | echt unregelmäßige (uomini, uova, dita, braccia, ginocchia, labbra, paia, mani, mogli, ali …), Endungen -co/-go (amici, medici, laghi, alberghi …), -ca/-ga (banche, colleghe), -cia/-gia nach Konsonant (arance, spiagge), -io (negozi, uffici, zii), maskuline auf -a (problemi, turisti, poeti), unveränderliche mit Pluralartikel (le città, i caffè, i film, gli sport, le foto, le ipotesi, i portavoce …) |
| Plural (Adjektive) | 41 | maskuliner Plural der Adjektive auf -co/-go (simpatici, bianchi, lunghi …), pochi, bei/begli |
| Femininum | 19 | nur Femininformen, die der Katalog nicht schon als Weitere Antwort führt (la direttrice, la ricercatrice, l'imperatrice, la leonessa …), dazu la regina und la nipote (stehen als eigene Einträge im Katalog) |

## Bewusst nicht aufgenommen

- Regelmäßige Plurale (il libro → i libri) und regelmäßige Femininformen (il cuoco → la cuoca), ebenso Formen, die
  nur durch den Artikel regelmäßig wechseln (lo zaino → gli zaini).
- Plurale abstrakter oder unzählbarer Substantive (il coraggio, il petrolio, l'umiltà, la logistica …) und
  Abkürzungen (il PIL, l'IVA …).
- Formen, die im selben Katalogeintrag schon als Antwort oder Weitere Antwort stehen (z. B. „le ali“ bei „l'ala“,
  „gli studi“ bei „lo studio“, „la cantante“ bei „il cantante“) – 10 Plurale und rund 70 Femininformen entfallen
  dadurch. Der Katalog führt die weiblichen Personenbezeichnungen fast durchgehend als Weitere Antwort.
- Femininplurale der Adjektive (bianche, simpatiche) und Plurale der Adjektive auf -io (seri, vari): orthografisch
  regelmäßig, kaum Listeneingaben.
- Mehrwortausdrücke (la camera da letto → le camere da letto), Passato remoto, Congiuntivo, Imperfetto, Futuro.
- Seltene oder umstrittene Formen: esatto (zu esigere), strutto (struggersi), splenduto, strafatto (strafare,
  umgangssprachlich „high“), gli dei (il dio steht nicht im Katalog).

## Mehrdeutige Formen (absichtlich so stehen gelassen)

- „stato“ steht zweimal: Partizip von essere und von stare.
- Formen, die auch eigene Katalogwörter sind: sei (auch „sechs“), fa (auch „vor“ bei Zeitangaben), migliore,
  meglio, più, maggiore, superiore, pochi, i dubbi (Bedenken), i sussidi (Sozialleistungen), gli aromi (Kräuter),
  le autorità (Obrigkeit), le pieghe (Plissee) sowie viele Partizipien, die als Adjektiv im Katalog stehen (aperto,
  chiuso, rotto, morto, soddisfatto, deluso, corretto, conosciuto, compreso, incluso, prevenuto …).
- Gleich geschriebene Wörter ohne Artikel, die nicht im Katalog stehen bzw. dort mit Artikel stehen: date (le date),
  danno (il danno), sale (il sale), compare, riso (il riso), corso, fatto, detto, visto, permesso, successo,
  prodotto; predico auch von predicare. medici und politici stehen als Adjektivplural und (mit Artikel) als
  Substantivplural.

## Unsicherheiten

- Doppelformen sind beide aufgenommen, wo beide üblich sind: i chirurghi/i chirurgi, gli stomaci/gli stomachi,
  le orecchie/gli orecchi, le ginocchia/i ginocchi, soddisfo/soddisfaccio. Bei anderen (le denunce/denuncie,
  i pigiami/i pigiama, perso/perduto, visto/veduto) nur die heute gebräuchlichere bzw. unregelmäßige.
- „le mura“ zu „il muro“ ist der Plural für Stadtmauern; der regelmäßige Plural „i muri“ (Wände) fehlt, weil
  regelmäßig.
- Die Auswahl „zählbar und häufig“ bei unveränderlichen Pluralen (le città, i caffè, i film …) und bei -io-Pluralen
  ist eine Ermessensfrage.
- Präsensformen reflexiver Verben (mi siedo, mi muovo) sind ohne Pronomen auf das nichtreflexive Verb bezogen (siedo
  → sedere); für nur reflexive Verben (accorgersi, muoversi) gibt es nur das Partizip.

## Offene Fragen

- `katalog.json` hat noch keinen Eintrag für Formdateien. Vorschlag (beim Zusammenführen festlegen, gleich für alle
  F-Pakete): `"forms": [{ "file": "formen/it.txt", "lang": "it", "version": 1, "count": 1031 }]`.
- Sollen Formen, die schon als Weitere Antwort im selben Eintrag stehen, doch aufgenommen werden (z. B. damit die App
  „Plural von …“ anzeigen kann)? Hier bewusst weggelassen.
- Sollen Femininformen von Personenbezeichnungen, die bisher fehlen (la direttrice, la ricercatrice …), lieber als
  Weitere Antwort in die Wortdateien (M-it) statt in die Formdatei?
