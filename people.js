// Importa la tua funzione da names.js
// Importa la tua funzione da hobbies.js
//
// Crea una funzione che non ha parametri.
// La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies.
// All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const name = require("./names.js");
const hobbiesArray = require("./hobbies.js");

function people() {
  const person = [
    (fullName = name("Brady", "Shehu")),
    (hobbies = hobbiesArray("musica", "leggere", "giocare")),
  ];

  return person;
}

console.log(people());
