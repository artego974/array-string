let nome = 'grau' 
console.log(nome.length)

let frase = 'OiEe'
const fraseMaiuscula = frase.toLocaleUpperCase

const fraseMinuscula = frase.toLocaleLowerCase

const email = '   mika@gmail.com   '
console.log(email.trim())

frase = "hoje comi cenoura"
console.log(frase.includes("cenoura"))
console.log(frase.includes("pizaa"))

frase = 'hoje comi cenoura, adoro cenoura'
const nvfrase = frase.replaceAll('cenoura','batata')
console.log(nvfrase)