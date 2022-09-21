function Arraya(arrays){
    var i = 0, summ = 0, Arrayb = arrays.length;
    while(i < Arrayb){
        summ= summ + arrays[i++];
    }
    return summ / Arrayb;
}



var arrays = [1,2,5,5,2,3,5];
var a = Arraya(arrays);
console.log(a);


console.log("Exercicio " + 4);


var nome = prompt("Digite seu nome");
var idade = prompt("Digite sua idade");
var cidade = prompt("Digite a cidade em que nasceu");
var uf = prompt("Digite a UF da cidade em que nasceu");
var maiorDeIdade = "maior de idade"
var menorDeIdade = "menor de idade"

if (idade > 18){
    idade = maiorDeIdade
}
else {
    idade = menorDeIdade

}

document.write("Eu " + nome + ", tenho " + idade + " de idade, sou" + idade + " e nasci na cidade de " + cidade + " - " + uf );



console.log("   Exercicio numero 5")

const pessoa ={
    name: "Lucas",
    sex: "Masculino",
}

const pessoa2 ={
    name: "Guilherme",
    sex: "Masculino",
}
const pessoa3 ={
    name: "Josias",
    sex: "Masculino",
}
const pessoa4 ={
    name: "Alvaro",
    sex: "Masculino",
}
const pessoa5 ={
    name: "Abdael",
    sex: "Masculino",
}
console.log(pessoa, pessoa2, pessoa3, pessoa4, pessoa5, mouf());

function mouf(){
    console.log("Tem 5 pessoas que são do sexo masculino;");
}
