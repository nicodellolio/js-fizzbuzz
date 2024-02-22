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


// Dichiariamo la costante che chiama il conntainer nel DOM
const container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
  // creiamo un div di cui all'interno inserire l'oggetto iterato dal ciclo
  let markupElement = document.createElement('div');
  // creiamo le condizioni che soddisfino il nostro ciclo.
  //La prima utilizzando l'operatore remainder per confermare che 'i' ogni volta che viene moltiplicato per 3 sia identico a 0 e che 'i' ogni volta che viene moltiplicato per 5 sia identico a 0, utilizzando l'operatore logico AND per confermare entrambe le condizioni
  if (i % 3 === 0 && i % 5 === 0) {
    markupElement.append("FizzBuzz");
    // altrimenti la seconda condizione, utilizzando l'operatore remainder per confermare che 'i' ogni volta che viene moltiplicato per 5 sia identico a 0
  } else if (i % 3 === 0) {
    markupElement.append("Fizz");
    
    // altrimenti in questo altro caso utilizziamo anche l'operatore logico AND per confermare che 'i' ogni volta che viene moltiplicato per 3 sia identico a 0
  } else if (i % 5 === 0) {
    markupElement.append("Buzz");

    // infine, se il numero iterato non soddisfa nessuna delle condizioni precedenti, semplicemnte viene stampato il numero corrispondente nell'ordine 
  } else {
    markupElement.append(i);
  }

  container.append(markupElement);
}
// Creiamo un nuovo elemento div



    



    
    
    
    
    


