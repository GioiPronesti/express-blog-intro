/*Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità 
1) - Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”
2) - Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un   array di stringhe)
3) - Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
4) - Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman*/

//console.log("We are in app.js");

const express = require("express"); // importo il framework express nel mio file.js
const app = express(); // l'applicativo vive dentro questa funzione memorizzato dentro la variabile APP
const port = 3000; // questa è la porta per comunicare con il server!

//console.log(app);

//2 array of post)
const postList = [
  {
    title: "Ciambellone",
    content: content,
    img: img,
    strtags: (tags = ["ricetta"]),
  },

  {
    title: "Cracker Barbabietola",
    content: content,
    img: img,
    strtags: (tags = ["ricetta"]),
  },

  {
    title: "Pane fritto dolce",
    content: content,
    img: img,
    strtags: (tags = ["ricetta"]),
  },

  {
    title: "Pasta barbabietola",
    content: content,
    img: img,
    strtags: (tags = ["ricetta"]),
  },

  {
    title: "Torta paesana",
    content: content,
    img: img,
    strtags: (tags = ["ricetta"]),
  },
];

// 1)
// definisco la prima rotta di default per accedere al server,
// qui potrò ricevere le richieste e gestire le risposte
// con il metodo GET
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// qui avvio il mio server e gli dico di rimanere in ascolto sulla porta 3000 del local host
app.listen(port, () => {
  console.log("Server in ascolto");
});
