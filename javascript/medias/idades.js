var nome1 = prompt("Digite seu nome");
var idade1 = prompt("Digite sua idade");
var cidade1 = prompt("Digite a cidade em que nasceu");
var uf1 = prompt("Digite a UF da cidade em que nasceu");
var maiorDeIdade1 = "maior de idade"
var menorDeIdade1 = "menor de idade"
var sexo1 = prompt("Digite o seu sexo");
if (idade1 => 18){
    idade1 = maiorDeIdade1
}
else {
    idade1 = menorDeIdade1

}

if(sexo1 ==="Masculino" || sexo1=== "Feminino"){
    return sexo1;
}else{
    return document.write("Desculpa mas o usuário digitou ou assexualidade, ou maneira diferente");
}

document.write("Eu " + nome1 + ", tenho " + idade1 + " de idade, sou" + idade1 + " e nasci na cidade de " + cidade1 + " - " + uf1  + ", meu sexo é " + sexo1);

var nome2 = prompt("Digite seu nome");
var idade2 = prompt("Digite sua idade");
var cidade2 = prompt("Digite a cidade em que nasceu");
var uf2 = prompt("Digite a UF da cidade em que nasceu");
var maiorDeIdade2 = "maior de idade"
var menorDeIdade2 = "menor de idade"
var sexo2 = prompt("Digite o seu sexo");
if (idade2 => 18){
    idade2 = maiorDeIdade2
}
else {
    idade2 = menorDeIdade2

}
//if(sexo2 ==="Masculino" || sexo2=== "Feminino"){
/*    return sexo1;
}else{
    console.log("Desculpa mas o usuário digitou ou assexualidade, ou maneira diferente");
}



document.write("Eu " + nome2 + ", tenho " + idade2 + " de idade, sou" + idade2 + " e nasci na cidade de " + cidade2 + " - " + uf1  + ", meu sexo é " + sexo2);
if(sexo2 ==="Masculino" || sexo2=== "Feminino"){
   return true;
}else{
   console.log("Desculpa mas o usuário digitou ou assexualidade, ou maneira diferente");
}
*/
