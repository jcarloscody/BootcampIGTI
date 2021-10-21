/*APIs da Web - Introdução

API significa A APLICAÇÃO P ROGRAMAÇÃO I nterface.
Uma API da Web é uma interface de programação de aplicativo para a web.
Uma API do navegador pode estender a funcionalidade de um navegador da web::  API de geolocalização...
Uma API de servidor pode estender a funcionalidade de um servidor web.
APIs de terceiros, ocê terá que baixar o código da web: API do YouTube - permite exibir vídeos em um site.
                                                        API do Twitter - permite exibir Tweets em um site da web.
                                                        API do Facebook - permite exibir informações do Facebook em um site*/



//Web History API      API de histórico da web
/*A API Web History fornece métodos fáceis para acessar o objeto windows.history.
O objeto window.history contém os URLs (Web Sites) visitados pelo usuário.*/

//back()
function myFunction() {
    window.history.back();
  }

//go()
function myFunction() {
    window.history.go(-2); //volta duas paginas
}


//Web Storage API  : A API de armazenamento da Web é uma sintaxe simples para armazenar e recuperar dados no navegador
//localStorage
localStorage.setItem("name","John Doe");
document.getElementById("demo").innerHTML = localStorage.getItem("name"); //return John Doe
/*O objeto localStorage fornece acesso a um armazenamento local para um determinado site. Ele permite que você armazene, leia, adicione, modifique e exclua itens de dados para aquele domínio.
Os dados são armazenados sem data de validade e não serão excluídos quando o navegador for fechado.
Os dados ficarão disponíveis por dias, semanas e anos.*/
//objeto sessionStorage
sessionStorage.setItem("name","John Doe");
document.getElementById("demo").innerHTML = sessionStorage.getItem("name");
/*O objeto sessionStorage é idêntico ao objeto localStorage.
A diferença é que o objeto sessionStorage armazena dados para uma sessão.
Os dados são excluídos quando o navegador é fechado.*/






//API Web Workers        Um web worker é um JavaScript em execução em segundo plano, sem afetar o desempenho da página.
//Ao executar scripts em uma página HTML, a página deixa de responder até que o script seja concluído. com web worker o js vai ser executado em segundo plano
let w;

function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}

//arquivo js | demo_workers.js
let i = 0;
function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}
timedCount();









//API JavaScript Fetch      permite que o navegador da web faça solicitações HTTP para servidores da web.
//😀 Não há mais necessidade de XMLHttpRequest.



//Web Geolocation API
const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError); // retorna a latitude e longitude da posição do usuário:
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
}
