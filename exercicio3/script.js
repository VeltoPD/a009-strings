//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul,\ncom os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)

const fraseNova = frase.replace("verde","rosa").replace("azul","laranja")

console.log(`Frase nova: ${fraseNova}`)

const fraseMaius = "Mas não deixe o gato sair".toUpperCase()
console.log(fraseNova.replace("mas não deixe o gato sair",fraseMaius))