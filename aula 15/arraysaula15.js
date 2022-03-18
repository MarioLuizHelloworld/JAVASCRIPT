let num = [5, 8, 2, 9, 3]

num.sort() // Ordena os elementos do array

num.push(1) //Adiciona um elemento ao array. Detalhe: Se adicionado antes do sort, tbm é ordenado, depois do sort não. Atenção a ordem de comandos.

console.log(num)
console.log(`O vetor tem ${num.length} posições`) //num.length vai me dar o numero de elementos do array.

console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4) //var.indexOf() mostra onde está o valor q eu escolher.

// Posso colocar assim: console.log(`O valor está na posição ${pos}`), Ou como o if abaixo.

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}