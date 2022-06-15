//Questão 01
let idade = 17;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//Questão 02
let maiorDeIdade = 18;
let humano = true;
if ((idade >= maiorDeIdade) && (humano)) {
    console.log("Maior de idade e humano");
} else {
    console.log("Menor de idade ou alienígena");
}

//Questão 03
let aniversario = "Abril";
if ((aniversario === "Janeiro") || (aniversario === "Dezembro")) {
    console.log(true);
} else {
    console.log(false);
}

//Questão 04
let nome = "Gustavo";
if (nome.charAt(0) === "R") {
    console.log(true);
} else {
    console.log(false);
}

//Questão 05
if ((nome.length === 6) || (nome.charAt(0) === "E")) {
    console.log(true);
} else {
    console.log(false);
}
