/*JavaScript Window - The Browser Object Model        Janela JavaScript - O modelo de objeto do navegador*/
/*O Browser Object Model (BOM) permite que o JavaScript "converse com" o navegador.
Uma vez que os navegadores modernos implementaram (quase) os mesmos métodos e propriedades para a interatividade do JavaScript, eles costumam ser chamados de métodos e propriedades do BOM.*/



/*O objeto da janela window
> representa a janela do navegador
> Variáveis ​​globais são propriedades do objeto janela.
> Funções globais são métodos do objeto janela.
> Até mesmo o objeto de documento*/
window.document.getElementById("header");
document.getElementById("header");




/*Tamanho da janela*/
var w = window.innerWidth /*para os navegadores*/         /*largura*/
|| document.documentElement.clientWidth /* para Internet Explorer 8, 7, 6, 5*/
|| document.body.clientWidth; /* para Internet Explorer 8, 7, 6, 5*/

var h = window.innerHeight/*para os navegadores*/                  /*altura*/
|| document.documentElement.clientHeight /* para Internet Explorer 8, 7, 6, 5*/
|| document.body.clientHeight; /* para Internet Explorer 8, 7, 6, 5*/

var x = document.getElementById("demo");
x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";






/*Tela da janela JavaScript        JavaScript Window Screen - contém informações sobre a tela do usuário*/

/*screen.widthpropriedade retorna a largura da tela do visitante em pixels*/
document.getElementById("demo").innerHTML = 
"Screen width is " + screen.width;
/*screen.heightpropriedade retorna a altura da tela do visitante em pixels.*/
document.getElementById("demo").innerHTML = 
"Screen height is " + screen.height;
/*screen.availWidthpropriedade retorna a largura da tela do visitante, em pixels, menos os recursos da interface, como a barra de tarefas do Windows.*/
document.getElementById("demo").innerHTML =
"Available Screen Width: " + screen.availWidth;
/*screen.availHeightpropriedade retorna a altura da tela do visitante, em pixels, menos os recursos da interface, como a barra de tarefas do Windows.*/
document.getElementById("demo").innerHTML =
"Available Screen Height: " + screen.availHeight;
/*screen.colorDepthpropriedade retorna o número de bits usados ​​para exibir uma cor*/
document.getElementById("demo").innerHTML =
"Screen Color Depth: " + screen.colorDepth;
/*screen.pixelDepthpropriedade retorna a profundidade de pixel da tela*/
document.getElementById("demo").innerHTML =
"Screen Pixel Depth: " + screen.pixelDepth;








/*JavaScript Window Location 
objeto pode ser usado para obter o endereço da página atual (URL) e para redirecionar o navegador para uma nova página.*/

/*window.location.hrefpropriedade retorna o URL da página atual*/
document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;
/*window.location.hostnamepropriedade retorna o nome do host da Internet (da página atual).*/
document.getElementById("demo").innerHTML =
"Page hostname is " + window.location.hostname;
/*window.location.pathnamepropriedade retorna o nome do caminho da página atual.*/
document.getElementById("demo").innerHTML =
"Page path is " + window.location.pathname;
/*window.location.protocolpropriedade retorna o protocolo da web da página*/
document.getElementById("demo").innerHTML =
"Page protocol is " + window.location.protocol;
/* window.location.assign()método carrega um novo documento.*/
(function newDoc() {
    window.location.assign("https://www.w3schools.com")
})()











/*JavaScript Window History  window.history
> objeto contém o histórico do navegador.*/

/*history.back()método carrega o URL anterior na lista de histórico.*/
function goBack() {
    window.history.back()
}

/*history.forward()método carrega o próximo URL na lista de histórico.*/
function goForward() {
    window.history.forward()
}






/*JavaScript Window Navigator       JavaScript Window Navigator
window.navigator objeto contém informações sobre o navegador do visitante.*/

document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled; /*cookieEnabledpropriedade retorna verdadeiro se os cookies estiverem ativados*/

document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName; /*appNamepropriedade retorna o nome do aplicativo do navegador*/

document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName; /*appCodeNamepropriedade retorna o nome do código do aplicativo do navegador:*/

document.getElementById("demo").innerHTML =
"navigator.product is " + navigator.product; /*productpropriedade retorna o nome do produto do mecanismo do navegador:*/

document.getElementById("demo").innerHTML = navigator.appVersion; /*appVersionpropriedade retorna informações sobre a versão do navegador*/

document.getElementById("demo").innerHTML = navigator.userAgent;/* userAgentpropriedade retorna o cabeçalho do agente do usuário enviado pelo navegador ao servidor*/

document.getElementById("demo").innerHTML = navigator.platform; /*platformpropriedade retorna a plataforma do navegador (sistema operacional)*/

document.getElementById("demo").innerHTML = navigator.language; /*languagepropriedade retorna o idioma do navegador*/

document.getElementById("demo").innerHTML = navigator.onLine;/*onLinepropriedade retorna true se o navegador estiver online*/

document.getElementById("demo").innerHTML = navigator.javaEnabled(); /*javaEnabled()método retorna verdadeiro se o Java estiver ativado*/










/*JavaScript Popup Boxes      Caixas pop-up de JavaScript

Caixa de Alerta*/
alert("I am an alert box!");

/*Caixa de Confirmação*/

function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}

/*Caixa de Prompt*/
function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
}







/*JavaScript Timing Events          Eventos de cronometragem de JavaScript
JavaScript pode ser executado em intervalos de tempo.
Isso é chamado de eventos de tempo.

O método setTimeout ()           Executa uma função, depois de esperar um número especificado de milissegundos.*/
setTimeout(function, milliseconds);
<button onclick="setTimeout(myFunction, 3000);">Try it</button>
function myFunction() {
    alert('Hello');
}
<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>
<button onclick="clearTimeout(myVar)">Stop it</button> /*limpar o setTimeout*/


/* método setInterval () método repete uma determinada função em cada intervalo de tempo determinado.*/
setInterval(function, milliseconds);

var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


<button onclick="clearInterval(myVar)">Stop time</button>/*limpar*/








/*JavaScript Cookies */
/*Os cookies permitem que você armazene informações do usuário em páginas da web.*/
/*Os cookies são salvos em pares nome-valor como: username = John Doe*/
document.cookie = "username=John Doe";/*cria um cookie*/
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC"; /*criacao com data de expiracao*/
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"; /*dizer ao cookie qual caminho pertence*/

var x = document.cookie; /*document.cookieretornará todos os cookies em uma string, como: cookie1 = valor; cookie2 = valor; cookie3 = valor;*/

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";/* excluir: Basta definir o parâmetro expires para uma data anterior:*/