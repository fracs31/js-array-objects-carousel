let images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"] //array con le immagini del carosello
let img = document.getElementById("img"); //immagine del carosello
let btnLeft = document.getElementById("btn-left"); //bottone per andare indietro con le immagini del carosello
let btnRight = document.getElementById("btn-right"); //bottone per andare avanti con le immagini del carosello
let index = 0; //indice

console.log(images); //stampo l'array con le immagini del carosello
console.log("Indice di partenza: " + index); //stampa dell'indice di partenza

//Quando viene premuto il tasto per andare avanti con le immagini del carosello
btnRight.addEventListener("click", function() {
    //Se l'indice è minore della lunghezza dell'array di immagini
    if (index < (images.length - 1)) {
        console.log("Indice prima dell'incremento: " + index); //stampa dell'indice prima dell'incremento
        index++; //incremento l'indice
        console.log("Indice dopo l'incremento: " + index); //stampa dell'indice dopo l'incremento
        img.src = images[index]; //cambio l'immagine
    } else if (index == (images.length - 1)) { //altrimenti se l'indice è uguale alla lunghezza dell'array di immagini
        console.log("Indice prima dell'azzeramento: " + index); //stampa dell'indice prima dell'azzeramento
        index = 0; //azzero l'indice
        console.log("Indice dopo l'azzeramento: " + index); //stampa dell'indice dopo dell'azzeramento
        img.src = images[index]; //cambio l'immagine
    }
});

//Quando viene premuto il tasto per andare indietro con le immagini del carosello
btnLeft.addEventListener("click", function() {
    //Se l'indice è maggiore di 0
    if (index > 0) {
        console.log("Indice prima del decremento: " + index); //stampa dell'indice prima del decremento
        index--; //decremento l'indice
        console.log("Indice dopo il decremento: " + index); //stampa dell'indice dopo il decremento
        img.src = images[index]; //cambio l'immagine
    } else if (index == 0) { //altrimenti se l'indice è uguale a 0
        console.log("Indice prima di andare nell'ultima posizione: " + index); //stampa dell'indice prima di andare nell'ultima posizione dell'array di immagini
        index = images.length - 1; //assegno all'indice il valore della lunghezza dell'array di immagini meno 1
        console.log("Indice dopo essere andato nell'ultima posizione: " + index); //stampa dell'indice dopo essere andato nell'ultima posizione dell'array di immagini
        img.src = images[index]; //cambio l'immagine
    }
});