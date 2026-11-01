# Vokabeltrainer – Katalog

Wortschatz und Listen für den Vokabeltrainer. Die App baut diesen Stand mit `node scripts/bundle-catalog.mjs` ein
(dieses Repository liegt dafür neben dem App-Repository) und kann neuere Stände über GitHub nachladen.

- `katalog.json`: Quellen (Wortdateien mit Version und Anzahl) und fertige Listen (Bedingung oder feste Auswahl)
- `woerter/<quelle>.txt`: je Quelle die Wörter im Importformat mit Kopfzeile
  `id; Deutsch; Englisch; Weitere Antworten; Niveau; Themen; Beispiel Englisch; Beispiel Deutsch`

Ändert sich eine Wortdatei, steigt ihre `version` in `katalog.json`; ändert sich eine Liste, deren `version`.
IDs bleiben stabil, denn an ihnen hängt der Lernstand. Andere Lernsprachen bekommen eine eigene Quelle mit
`"lang": "fr"` (bzw. `es`, `it`) und eigene IDs (`fr-…`).
