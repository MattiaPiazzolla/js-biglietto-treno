calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Ricordatevi di fare il file README.md in cui scomponete il problema in sotto problemi
Numero minimo di push: 6

SCOMPOSIZIONE IN SOTTOPROBLEMI

>definire una variabile km 
    >>attribuirle come valore il dato ottenuto attraverso un prompt
>definire una variabile age
    >>attribuirle come valore il dato ottenuto attraverso un prompt
>definire una variabile price
    >>attribuirle come valore il risultato del calcolo ottenuto moltiplicando il numero di chilometri da precorrere dall'utente con 0,21 
>definire una variabile per definire lo sconto 
>definire delle condizioni che vadano ad applicare gli sconti nei casi in cui necessario
    >>eseguire il calcolo per sottrarre il 20% del prezzo base al prezzo base e definire il prezzo scontato del 20% se age è inferiore a 18
    >>eseguire il calcolo per sottrarre il 40% del prezzo base al prezzo base e definire il prezzo scontato del 40% se age è superiore a 65
>utilizzando template literals, crea una frase per restiuire una frase contente il prezzo del biglietto finale.