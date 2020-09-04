function verificar(){
   var data = new Date()
   var ano = data.getFullYear() //FullYear é porque vai pegar o ano com 4 digitos
   var formularioAno = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano ){
        window.alert('Verifique se os dados estão corretos e tente novamente!')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(formularioAno.value)
      var genero = ''

      //vamos fazer aparecer a imagem dinamicamente //criar uma tag
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if (fsex[0].checked){ //se o que estiver marcado for fsex[0] que é masculino
          genero = 'Homem'
          if (idade >= 0 && idade <10){
              //criança
              img.setAttribute('src', 'imagensPessoas/menino.png')
          } else if (idade < 21){
              //adolescente
              img.setAttribute('src', 'imagensPessoas/adolescentehomem.png')
          } else if (idade < 50) {
              //adulto
              img.setAttribute('src', 'imagensPessoas/homem.png')
          } else {
            //idoso
            img.setAttribute('src', 'imagensPessoas/idoso.png')
          }
      } else if (fsex[1].checked){
          genero = 'Mulher'
          if (idade >= 0 && idade <10){
            //criança
            img.setAttribute('src', 'imagensPessoas/menina.png')
        } else if (idade < 21){
            //adolescente
            img.setAttribute('src', 'imagensPessoas/nayane.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'imagensPessoas/mulher.png')
        } else {
          //idoso
          img.setAttribute('src', 'imagensPessoas/idosa.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

      //para aparecer a imagem da foto na tela em baixo
      res.appendChild(img) //vou adicionar um elemento que pe img
   }


}
