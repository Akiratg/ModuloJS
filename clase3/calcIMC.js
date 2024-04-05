    //variables
    const peso = 109;
    const altura = 1.85;

    const test = 85;
    const test1 = 1.85;

function calcularIMC(peso, altura) {
    // Verificar si los valores iniciales son numero o menor a cero
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        console.log("Los valores no son validos.");
        return;
    }

    // Calcular el IMC
    let imc = peso / (altura * altura);

    // Determinar la categoría del IMC
    let categoria = "";

    if (imc < 18.5) {
        categoria = "Bajo peso";
    } else if (imc < 24.9) {
        categoria = "Peso saludable";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }

    // imprimir en console
    console.log("Categoria:", categoria);
    console.log("Tu IMC es:", imc);
}

calcularIMC(test, test1);

