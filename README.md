# Prarthana

Ram Raksha Stotram, Hanuman Chalisa and Kal Bhairav Ashtakam in Devanagari, with an English meaning beside every verse.

**Sing along** listens through the browser's speech recognition (Chrome, Edge, Safari) and highlights the line being sung. Click a line or use the arrows to correct it.

It is a static site with no build step. To run it locally:

```bash
python3 -m http.server 8765
```

- `data.js`: verses and meanings
- `romanize.js`: shows the verses in English letters
- `tracker.js`: follows the singer by fuzzy matching on consonants
- `app.js`: page and speech recognition

```bash
node test/tracker.test.js
```

The verses are traditional and public domain. The English meanings were written for this project.
