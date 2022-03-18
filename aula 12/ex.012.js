var hora = 1
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 6 && hora < 12) {
    console.log('Bom dia!')

} else if (hora <= 18 && hora >= 12) {
    console.log('Boa Tarde!')

} else if (hora > 18) {
    console.log('Boa noite!')

} else {
    console.log('Boa madrugada!')
}

/* SE EU QUISER COLOCAR A HORA ATUAL QUE ESTÁ NO MEU SERVIDOR, BASTA COLOCAR ANTES DA VAR:
EX - VAR AGORA = new Date()
    VAR HORA = agora.getHours() */