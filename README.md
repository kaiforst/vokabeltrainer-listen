# Vokabeltrainer – Katalog

Wortschatz und Listen für den Vokabeltrainer. Die App baut diesen Stand mit `node scripts/bundle-catalog.mjs` ein
(dieses Repository liegt dafür neben dem App-Repository) und kann neuere Stände über GitHub nachladen.

- `katalog.json`: Quellen (Wortdateien mit Version und Anzahl), fertige Listen (Bedingung oder feste Auswahl) und
  unter `areas` der Baum der Bereiche, durch den man sich in der App klickt. Jeder Knoten hat `name`, `lists`
  (Listen-IDs in Anzeigereihenfolge) und optional `areas` (Unterbereiche); eine Liste darf an mehreren Stellen
  hängen. Listen, die nirgends hängen, zeigt die App unter „Weitere Listen“.
  Eine Liste kann unter `media` ein Video tragen (`{ "title": …, "url": "https://…" }`, nur https), etwa die Rede
  auf YouTube; die App zeigt dafür einen Knopf auf der Listenseite, in der Übung und im Ergebnis.
- `woerter/<quelle>.txt`: je Quelle die Wörter im Importformat mit Kopfzeile
  `id; Deutsch; Englisch; Weitere Antworten; Niveau; Themen; Beispiel Englisch; Beispiel Deutsch`

Ändert sich eine Wortdatei, steigt ihre `version` in `katalog.json`; ändert sich eine Liste, deren `version`;
ändert sich der Baum, `areas.version`.
IDs bleiben stabil, denn an ihnen hängt der Lernstand. Andere Lernsprachen bekommen eine eigene Quelle mit
`"lang": "fr"` (bzw. `es`, `it`) und eigene IDs (`fr-…`).
