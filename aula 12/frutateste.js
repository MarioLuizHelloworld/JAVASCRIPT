var fruta = "kiwi"

console.log(fruta)

switch (fruta) {
    case "maçã":
        console.log("Não vendemos esta fruta aqui")
        break
    case "kiwi":
        console.log("Estamos com escassez de kiwis")
        break
    case "melancia":
        console.log("Aqui está, são 3 reais o quilo")
        break
    case "banana":
        console.log("Infelizmente, já vendemos o estoque de hoje")
        break
    default:
        console.log("[ERRO] Escolha uma fruta válida")
        break

}