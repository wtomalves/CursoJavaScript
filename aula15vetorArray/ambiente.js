let num = [5, 8, 2]
console.log(`${num}`)// se colocar ${num} o valor exibido sera sem os colchetes
console.log('**************************')
console.log()
//para acrescentar um valor dentro da variável composta, devemos colocar o indice
// e o valor que sera adicionado
num[3] = 6
console.log(`${num}`)
console.log('**************************')
console.log()

// para colocar na ultima posição sem precisar de ficar declarando o indice é usar
//o comando push

num.push(7)
console.log(`${num}`)
console.log('**************************')
console.log()

//para saber o comprimento de um Array é utilizando o atributo length
console.log(`O Array tem ${num.length} elementos! `)
console.log('**************************')
console.log()

//para colocar um vetor em ordem númerica crescente ultilizamos o comando sort()
num.sort()
console.log(`${num}`)
console.log('**************************')
console.log()

//pedir que mostre o valor dentro dos indices, que chamos de percurso pra exibição no vetor
for (let c = 0; c < num.length; c++){
      console.log(`O indice ${c} temos o valor ${num[c]}`)
}
console.log('**************************')
console.log()

//nas versoes mais recentes do ecmaScript do JavaScrit podemos fazer da forma abaixo
console.log()
console.log('let num = [2,5,6,7,8]')
console.log('Versão mais rescente do ecmaScript utilizando for(let pos in num)')
console.log()

for (let pos in num){ // lemos assim: para cada posição na variável composta mostre a varivel na posição
  console.log(`O indice ${pos} temos o valor ${num[pos]}`)
}
console.log('**************************')
console.log()

//buscar valores dentro de um vetor vamos utilizar o método .indexOF

console.log()
console.log('Exemplo: (num.indexOf(6)) <- Aqui eu estou perguntando em que posição está o número 6?')
console.log('Considerando a variavel -> let num = [2,5,6,7,8].')
console.log()
console.log(`Resposta: -> A variável no valor 6 está na posição ${num.indexOf(6)}`)
console.log('**************************')
console.log()


let painel = [3, 8, 50, 25, 100, 18]
let menor = 0
let maior = 0
for (let pos = 0; pos < painel.length; pos += 1){
    if (pos === 0){
      maior = painel[pos]
      menor = painel[pos]
    } else if (painel[pos] > maior){
        maior = painel[pos]
    } else if (painel[pos] < menor){
        menor = painel[pos]
    }
}

console.log(`maior é ${maior} e menor ${menor}`)










