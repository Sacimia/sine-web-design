

function soma(n){
    n.value *= n.value
    return n
}

const objv = {value: 10}
console.log(soma(objv));
console.log("Teste")
console.log(soma(3))
var soma = function (n){
    n += n 
    return n;
}
 console.log(soma(2))

var sub = (n)=>{
    return n -= n;
}

console.log(sub(10));
//Callback7

function multi(values, func){
    for ( const i in values) {
        values[i] = func(values[i])
    }
    return values
}
const values = [1,2,3,4,5]
const func = (n) => 3
console.log(multi(values,func))