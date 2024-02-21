console.log('It workssss!');

/*
TOOLS

-loop (for)
-remainder (%)
-AND (&&)
-innerHTML


    Uno degli strumenti per capire se un numero è divisibile per un altro 
    é il remainder (%), il quale se utilizza due numeri a confronto, il divisore ed un secondo operatore. Se i due numeri danno risultato identico a 0, allora è true.
*/



const markupContainer = document.getElementById(container);
//Creiamo il ciclo da 1 a 100 con incremento
for (let i = 1; i <= 100; i++) {

    // creiamo le condizioni che soddisfino il nostro ciclo.
    //La prima utilizzando l'operatore remainder per confermare che 'i' ogni volta che viene moltiplicato per 3 sia identico a 0 e che 'i' ogni volta che viene moltiplicato per 5 sia identico a 0, utilizzando l'operatore logico AND per confermare entrambe le condizioni
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");

    // altrimenti la seconda condizione, utilizzando l'operatore remainder per confermare che 'i' ogni volta che viene moltiplicato per 5 sia identico a 0
    } else if (i % 3 === 0) {
        console.log("Fizz");

    // altrimenti in questo altro caso utilizziamo anche l'operatore logico AND per confermare che 'i' ogni volta che viene moltiplicato per 3 sia identico a 0
    } else if (i % 5 === 0) {
      console.log("Buzz");

    // infine, se il numero iterato non soddisfa nessuna delle condizioni precedenti, semplicemnte viene stampato il numero corrispondente nell'ordine 
    } else {
      console.log(i);
    }

    console.log(i);
    const markupBoxItem = `<div class="box">${i}</div>`;
    console.log(markupBoxItem);

    markupContainer.innerHTML += markupBoxItem;

}
// Creiamo un nuovo elemento div
//     const div = document.createElement("div");
 
//   //const content = document.createTextNode(`${i}`);
//     div.innerText = i;

//     document.getElementById(container).appendChild(div);










