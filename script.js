    // Get data using prompt
    let km = prompt('Inserisci il numero di chilometri che devi percorrere');
    let age = prompt('Inserisci la tua età');
    
    // Calculate the base price
    let price = km * 0.21;
    
    let discountedPrice = price.toFixed(2)
    
    
    // Condition for the application of the discounts
    if (age < 18){
         discountPrice = (price - (price / 100 * 20)).toFixed(2);
         document.getElementById('congratulationMsg').innerHTML = `<p>Congratulazioni hai diritto ad uno <span class="fw-bold">sconto</span> del <span class="text-success">20%</span></p>`;
    } else if (age > 65){
         discountPrice = (price - (price / 100 * 40)).toFixed(2);
         document.getElementById('congratulationMsg').innerHTML = `<p>Congratulazioni hai diritto ad uno <span class="fw-bold">sconto</span> del <span class="text-success">40%</span></p>`;
    } 
    
    document.getElementById('finalPrice').innerHTML = `<p>Il prezzo del tuo biglietto è ${discountedPrice}€</p>`;