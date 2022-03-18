let valores = [3, 9, 5, 1, 8, 0, 2, 7, 6, 4]

console.log(valores)
/* valores.sort() se eu quiser ordenar

PRIMEIRA MANEIRA
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// MANEIRA SIMPLIFICADA

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}