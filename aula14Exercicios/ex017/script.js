
function tabuada(){
    var resp = window.document.getElementById('txtresp')
    resp.value = ''

    var num = window.document.getElementById('txtnum')
    for (var c = 1; c <= 10; c++){
      var resul = (num.value * c)
      resp.value += `${num.value}x${c}=${resul}\n`

    }
}
