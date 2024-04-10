// Función para obtener la longitud de una palabra en una posición específica dentro de una frase
function longitudPalabraEnPosicion(frase, posicion) {
    const palabras = frase.split(" ");
    if (posicion >= 1 && posicion <= palabras.length) {
        const palabra = palabras[posicion - 1];
        return palabra.length;
    } else {
        return "Error: La posición especificada está fuera del rango de la frase.";
    }
}

// Función para eliminar una palabra en una posición dada de una frase y devolver la nueva frase
function eliminarPalabraEnPosicion(frase, posicion) {
    const palabras = frase.split(" ");
    if (posicion >= 1 && posicion <= palabras.length) {
        palabras.splice(posicion - 1, 1);
        return palabras.join(" ");
    } else {
        return "Error: La posición especificada está fuera del rango de la frase.";
    }
}

// Función para eliminar todas las palabras cortas de una frase y devolver la nueva frase sin esas palabras
function eliminarPalabrasCortas(frase) {
    const palabras = frase.split(" ");
    const palabrasFiltradas = palabras.filter(palabra => palabra.length > 3);
    return palabrasFiltradas.join(" ");
}

// Frase proporcionada
const frase = "La mejor forma de predecir el futuro es creándolo";

// Ejemplos de uso
console.log(longitudPalabraEnPosicion(frase, 2)); // Devuelve la longitud de la segunda palabra
console.log(eliminarPalabraEnPosicion(frase, 3)); // Devuelve la frase sin la tercera palabra
console.log(eliminarPalabrasCortas(frase)); // Devuelve la frase sin palabras cortas
