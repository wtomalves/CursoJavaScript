function par_impar(n){
  if (n % 2 == 0){
    return 'Par'
  } else {
    return 'Impar'
  }
}
console.log()
let resp = par_impar(6)
console.log(resp)
console.log('======================')
console.log()

//com parametros opcionais
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(`A soma entre os dois valores é ${soma(4, 3)}`)
console.log('=================================')
console.log()

//conseguimos lançar uma função dentro de uma função em JavaScript

let variavel = function(n){
    return n * 2
}

console.log(variavel(5))

console.log('=================================')
console.log()


function fatorial(num){
  let res = 1
  for(let c = num; c > 1; c -= 1){
      res *= c
  }
  return res

}

console.log(`O fatorial de 5 é ${fatorial(5)}`)
console.log('=================================')
console.log()

//recursividade

function fat(numero){
  if (numero == 1){
    return 1
  } else {
    return numero * fat(numero - 1)
  }
}
console.log('Usando RECURSIVIDADE')
console.log()
console.log(`O fatorial de 5 é ${fat(5)}`)
console.log('=================================')
console.log()



