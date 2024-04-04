// variables: numero de ordenes de un dia, monto previsto superado, 

//Monto previsto
const montoPrevisto = 5;

//numero de ordenes de un dia
const ordenesEfectivas = 5;

// Día del mes
const diaDelMes = 3;


//Imprime si se tiene que reducir o aumentar la capacidad y que dia es.
function proyeccionCapacidad() {
// Verificar si el día del mes es par o impar
let tipoDeDia = diaDelMes % 2;

if (ordenesEfectivas > montoPrevisto && tipoDeDia == 1) {
    console.log("Carlos, hoy es un dia impar y las ordenes superaron el monto previsto. Manana debes incrementar la capacidad.");

} else if (ordenesEfectivas > montoPrevisto) {
    console.log("Carlos, las ordenes superaron el monto previsto. Manana debes incrementar la capacidad.");

} else if (ordenesEfectivas < montoPrevisto) {
    console.log("Debes reducir la capacidad");
} else {
    console.log("Manten la misma capacidad");
}
}


//Imprime que tipo de dia es.
function diaParOImpar() {
// Verificar si el día del mes es par o impar
let tipoDeDia = diaDelMes % 2;

if (tipoDeDia == 1) {
    console.log("Hoy es dia impar");

} else {
    console.log("Hoy es un dia par");
}
}

//Muestra la proporcion ordenes vs previsto

function proporcionOrdenes () {
    const ordenesContraPrevisto = ordenesEfectivas / montoPrevisto;
    console.log(`El dia de hoy, la proporcion de ordenes efectivas respecto a las ordenes previstas es de ${ordenesContraPrevisto}`)
}

//llamado de las funciones
diaParOImpar();
proyeccionCapacidad ();
proporcionOrdenes ();
