/*

AJAX é o sonho de um desenvolvedor, porque você pode:

Leia os dados de um servidor da web - depois que a página for carregada
Atualizar uma página da web sem recarregar a página
Envie dados para um servidor web - em segundo plano.

AJAX = Asynchronous JavaScript And XML.

usa apenas:
XMLHttpRequest    objeto integrado do navegador (para solicitar dados de um servidor da web)
JavaScript e HTML DOM (para exibir ou usar os dados)

O AJAX permite que as páginas da web sejam atualizadas de forma assíncrona

https://www.w3schools.com/js/js_ajax_intro.asp


1. Um evento ocorre em uma página da web (a página é carregada, um botão é clicado)
2. Um objeto XMLHttpRequest é criado por JavaScript
3. O objeto XMLHttpRequest envia uma solicitação a um servidor web
4. O servidor processa o pedido
5. O servidor envia uma resposta de volta à página da web
6. A resposta é lida por JavaScript
7. Ação adequada (como atualização de página) é realizada por JavaScript



Navegadores modernos (Fetch API)




Por razões de segurança, os navegadores modernos não permitem o acesso entre domínios.
Isso significa que tanto a página da web quanto o arquivo XML que ela tenta carregar devem estar localizados no mesmo servidor.


*/



let xhttp = new XMLHttpRequest(); /*cria o objeto*/

xhttp.onload = function() {/*callback function Uma função de retorno de chamada é uma função passada como parâmetro para outra função.*/
    // a função de retorno de chamada deve conter o código a ser executado quando a resposta estiver pronta.
  }

xhttp.open("GET", "ajax_info.txt"); /*aqui abrimos o objeto xmlhttprequest*/
xhttp.send(); /*aqui enviamos ele*/



/*Múltiplas funções de retorno de chamada    
Se você tiver mais de uma tarefa AJAX em um site, deverá criar uma função para executar o XMLHttpRequestobjeto e uma função de retorno de chamada para cada tarefa AJAX.*/
loadDoc("url-1", myFunction1);

loadDoc("url-2", myFunction2);

function loadDoc(url, cFunction) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {cFunction(this);}
  xhttp.open("GET", url);
  xhttp.send();
}

function myFunction1(xhttp) {
  // action goes here
}
function myFunction2(xhttp) {
  // action goes here
}


/*A propriedade onreadystatechange
A readyStatepropriedade mantém o status do XMLHttpRequest.
A onreadystatechangepropriedade define uma função de retorno de chamada a ser executada quando o readyState muda.
A statuspropriedade e a statusTextpropriedade contêm o status do objeto XMLHttpRequest.

> onreadystatechange	Defines a function to be called when the readyState property changes
> readyState	Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
> status	200: "OK"
403: "Forbidden"
404: "Page not found"
> statusText	Returns the status-text (e.g. "OK" or "Not Found")
*/
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}




/*AJAX - XMLHttpRequest 
O objeto XMLHttpRequest é usado para solicitar dados de um servidor.*/
xhttp.open("GET", "ajax_info.txt", true);/*são metodos para enviar solicitações ao servidor*/
    /*open(method, url, async)*/
xhttp.send();
/*
open(method, url, async)	Specifies the type of request
url =>  pode ser qualquer tipo de arquivo, como .txt e .xml de script como .asp .php
async => Assíncrono - verdadeiro ou falso?Ao enviar de forma assíncrona, o JavaScript não precisa esperar pela resposta do servidor, mas pode: execute outros scripts enquanto espera pela resposta do servidor; lidar com a resposta depois que ela estiver pronta.


method: the type of request: GET or POST
url: the server (file) location
async: true (asynchronous) or false (synchronous)
send()	Sends the request to the server (used for GET)
send(string)	Sends the request to the server (used for POST)*/

/*Com get*/
xhttp.open("GET", "demo_get.asp");
xhttp.send();
/*ou*/
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
xhttp.send();

/*com post*/
xhttp.open("POST", "demo_post.asp");
xhttp.send(); /*ou*/
xhttp.open("POST", "ajax_test.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");





/*AJAX - Server Response              AJAX - Resposta do servidor

>> A responseText propriedade retorna a resposta do servidor como uma string JavaScript e você pode usá-la de acordo:
*/