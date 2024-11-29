var button = document.getElementById("btn");
button.addEventListener('keypress', function(event){
  if(event.keyCode == 13) {
    event.preventDefault();
    busca();
  }
});


document.getElementById("form").onsubmit=function() {
    return false;
}

document.getElementById("btn").onclick=busca;
async function busca () {
    if (document.getElementById("cep").value=="") {
        alert("Digite um número");
        document.getElementById("cep").focus();
        return;
    } else {
        var cep = document.getElementById("cep").value;
        let retorno = await fetch("https://viacep.com.br/ws/"+cep+"/json/")
        var texto = await retorno.json();
        document.getElementById("p").innerHTML=JSON.stringify(texto);
        
          }
    
    
}