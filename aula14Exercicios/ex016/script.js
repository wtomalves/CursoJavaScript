function contar(){
  resp.innerHTML = ''
  var ini = document.getElementById('txtini')
  var fim  = document.getElementById('txtfim')
  var passo = document.getElementById('txtpasso')
  var inicio = parseInt(ini.value)
  var fimm = parseInt(fim.value)
  var passos = parseInt(passo.value)
  if (ini.value === '' ){
      resp.innerHTML = 'Impossivel contar, tente outra vez'
  } else if (passos === 0){
    var passos = 1
    for (inicio; inicio <= fimm; inicio += passos ){
      resp.innerHTML += `"${inicio}"... 😁❤🐶🐕 <br></br>`
    }
  }else {
    for (inicio; inicio <= fimm; inicio += passos ){
      resp.innerHTML += `"${inicio}"... 😁❤🐶🐕 <br></br>`
    }
  }




}



