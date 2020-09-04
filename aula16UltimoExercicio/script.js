let painel = []



function adicionar(){

  let add = window.document.getElementById('txtnum')
  if (add.value === ''){
    window.alert('Digite um valor')
  } else if (add.value < 1 || add.value > 100){
    window.alert('Digite um número entre 1 e 100')
  } else if (painel.indexOf(add.value) >= 0 ){
    window.alert('Valor já consta na tabela, digite outro número!')
  } else {
    painel.push(Number(add.value))
    let caixa = window.document.getElementById('txtcaixa')
    let item = document.createElement('option')
    item.text = `Valor ${add.value} adicionado!`
    caixa.appendChild(item)
  }
  resp.innerHTML = ''
}


function analise_dos_dados(){
  let menor = 0
  let maior = 0
  let pos = 0
  let soma = 0

  if (painel.length === 0){
    window.alert(`Adicione valores antes de finalizar!`)
  } else {
    for (pos; pos < painel.length; pos++){

      //VERIFICAR QUAL É MAIOR OU MENOR
        if (pos === 0){
          maior = painel[pos]
          menor = painel[pos]
        } else if (painel[pos] > maior){
          maior = painel[pos]
        }else if (painel[pos] < menor){
          menor = painel[pos]
        }
        //SOMANDO OS VALORES
        soma += painel[pos]

    }
    let resp = window.document.getElementById('resp')
    resp.innerHTML = `Ao todo temos ${painel.length} cadastrados! </br>
    O menor numero é ${menor} </br> O maior numero é ${maior} </br>
    Os valores somam o total de ${soma} </br> A média dos valores são ${soma / painel.length}`

  }

}


