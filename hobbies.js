// Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
// La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
// Esporta la funzione dal file

function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
  const hobbiesArray = [hobbyOne, `${hobbyTwo}`, `${hobbyThree}`];
  return hobbiesArray;
}

module.exports = hobbies;
