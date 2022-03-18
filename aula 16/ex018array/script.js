let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
 
    //PARA NÃO ADICIONAR O ZERO OU VALOR JÁ ADICIONADO
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) //PUSH, ADICIONA VALORES AO ARRAY
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) //CHILD ELEMENTO FILHO
        res.innerHTML = '' // LIMPA A TELA DEPOIS QUE EU FINALIZAR UMA LISTA E QUISER FAZER OUTRA.
    } else {
        alert('Valor Inválido ou já encontrado na lista.')
    }
 
    // PARA APAGAR DEPOIS DE ADICIONAR O NUMERO
    num.value = ""
    
    // PARA VOLTAR O CURSOR A PISCAR DEPOIS DE APAGAR
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        let tot = valores.length  //QUANTOS NUMEROS COLOQUEI
        // Para ver o maior e menor valor, a media e a soma.
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media= 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`

    }
}