---
title: "GitHub Pages 404 error"
date: "2022-04-24"
abstract: "404 inaspettati in fase di deploy"
---

Questo blog è sviluppato con React ma tutti i post vengono scritti in Markdown. Il tutto viene poi pubblicato su GitHub Pages tramite [gh-pages](https://github.com/tschaub/gh-pages).
Qualcosa di simile a quello che fanno Gatsby o Jekyll, solo implementato in maniera probabilmente meno intelligente e con il 60% in più di probabilità di errori.

## Il problema: l'errore 404

Nonostante in locale non sia presente alcun errore evidente e nonostante il processo di deploy vada a buon fine, il sito una volta deployato **ritorna dei 404 per alcuni dei files statici** contenuti nelle sub folder, in particolare proprio i files markdown.

A quanto pare, **GitHub tende a dare per scontato che stiate usando Jekyll**, introducendo nel processo di deploy alcuni automatismi che vanno a intervenire su particolari sub folders. Sembra che il problema si verifichi con folder che cominciano con underscore, ad esempio `_posts` che non essendo necessarie in produzione, non verrebbero copiate nella destinazione finale.

## La soluzione

Nel mio caso, la cartella si chiama semplicemente `posts`, quindi niente underscore, ad ogni modo la soluzione è la stessa: togliere Jekyll di mezzo.

La cosa più immediata e semplice è creare un nuovo file vuoto e nominarlo `.nojekyll`.  
Il file andrà poi inserito nella root del branch che viene usato per il deploy. Nel mio caso si chiama `gh-pages`, ma potrebbe benissimo essere il main.

Attenzione che pushare solo questo file potrebbe non essere sufficiente a triggerare una nuova build, per cui è preferibile forzarla con altre modifiche al sorgente.

## Step necessario nel caso si usasse gh-pages

Rimane un'ultima cosa da fare per evitare ad ogni nuova modifica di dover nuovamente pushare il file. Andrà modificato il comando di deploy nel package.json aggiungendo un `-t true`, come di seguito:

```json
//package.json

"scripts": {
    "deploy": "gh-pages -d build -t true"
}
```
