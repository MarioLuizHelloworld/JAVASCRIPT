/*
Eu posso passar um valor para o parametro formal, assim, se eu só mandar um número na chamada, ele não ficará indefinido. ex abaixo passei o 0 no formal.
*/

function soma(n1=0, n2=0){
    return n1 + n2
}

//Posso passar um ou dois numeros.
console.log(soma(7))