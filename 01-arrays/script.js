const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers [3]; //corretto
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers [4] = 'Patrick'; //corretto
console.log (teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log(lastTeacher, teachers); //corretto

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log(firstTeacher, teachers); //corretto

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa') //corretto
console.log(teachers)

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah') //corretto
console.log(teachers)

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
let lewisIndex = teachers.indexOf('Lewis')
console.log (lewisIndex) //era sbagliato --- questa versione è corretta 


// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
//const isTeachersEmpty = teachers.length === 0;
//console.log (isTeachersEmpty) //sbagliato
//variabile deve essere true quando array è vuoto 

const isTeachersEmpty = teachers.length === 0;
if (isTeachersEmpty) {
  console.log ('si è vuoto')
} else {
  console.log('no, non è vuoto')
} // quando abbiamo una variabile che deve contenere un valore booleano
//il valore deve essere la risposta a quella domanda 

