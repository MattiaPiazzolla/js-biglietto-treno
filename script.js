// Get data using prompt
let km = prompt('Inserisci il numero di chilometri che devi percorrere');
let age = prompt('Inserisci la tua età');
let discountedPrice = 0
// Calculate the base price
let price = km * 0.21;



// Condition for the application of the discounts
if (age < 18){
     discountPrice = price - (price / 100 * 20);
} else if (age > 65){
     discountedPrice = price - (price / 100 * 40);
} 

document.getElementById('finalPrice').innerHTML = `Il prezzo del tuo biglietto è ${discountedPrice}€`;