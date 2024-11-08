/* ESERCIZIO 1
*/

let pippo = 9;
let pluto = 12;

  if( pippo < pluto) {
    console.log("pluto è maggiore di pippo");
} else if (pippo> pluto) {
  console.log("pippo è maggiore di pluto");
} else {
  console.log("pippo e pluto sono uguali");
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numero = 7;

if (numero !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const dividiamo = 25;

if (dividiamo % 5 === 0) {
  console.log("é divisibile per 5");
} else {
  console.log("il numero non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let ciao = 3;
let grazie = 5;

if (ciao === 8 || grazie === 8 || ciao + grazie === 8) {
  console.log("il valore di uno di essi è uguale a 8");
}
  

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 58;
let speseSpedizione = 10;

if (totalShoppingCart >= 50) {
   console.log("spese di spedizone in omaggio; totale carrello:" + totalShoppingCart);
} else  {
  console.log("spese di spedizione non omaggio; totale carrello:" + totalShoppingCart + speseSpedizione);
}
 


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCart = totalShoppingCart -(totalShoppingCart * 0.2);
if (totalShoppingCart >= 50) {
  console.log("spese di spedizone in omaggio; totale carrello:" + totalShoppingCart);
} else  {
 console.log("spese di spedizione non omaggio; totale carrello:" + totalShoppingCart + speseSpedizione);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

//const chicco = 35 ;

// if (typeof(chicco) === "number") {
  //console.log("Il valore è un numero.");
//} else {
 // console.log("il valore non è un numero");
//}
  

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let fornito = 17;

if(fornito % 2 === 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

  let val = 7
  if (val < 5 ) {
      console.log("Meno di 10");
    } else if (val < 10) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/


delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2]

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let scaletta = [];
scaletta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(scaletta);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

scaletta [9] = 100;
console.log(scaletta)