const dia =4;

function diaParOImpar() {
    const moduloDelDia = dia % 2;

    if (moduloDelDia === 0) { //si el dia es par entonces imprime "el dia es par"
        console.log("El dia es par")
    } else {         // de lo contrario "el dia es impar"
        console.log("el dia es impar")
    }
}

diaParOImpar();