/*jQuery - AJAX Introduction  */
//AJAX é a arte de trocar dados com um servidor e atualizar partes de uma página da web - sem recarregar a página inteira.
/*AJAX = JavaScript assíncrono e XML.
esumidamente; O AJAX trata de carregar dados em segundo plano e exibi-los na página da web, sem recarregar a página inteira.*/

/*
jQuery fornece vários métodos para a funcionalidade AJAX.

Com os métodos jQuery AJAX, você pode solicitar texto, HTML, XML ou JSON de um servidor remoto usando HTTP Get e HTTP Post - E você pode carregar os dados externos diretamente nos elementos HTML selecionados de sua página da web!*/





/*Método jQuery load ()*/
//O load()método carrega dados de um servidor e coloca os dados retornados no elemento selecionado.
$(selector).load(URL,data,callback);


$(document).ready(function(){
    $("button").click(function(){
      $("#div1").load("demo_test.txt");
    });
});


$(document).ready(function(){
    $("button").click(function(){
      $("#div1").load("demo_test.txt #p1");
    });
});



$("button").click(function(){
    $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){//com callback
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});






/*jQuery - AJAX get() and post() Methods*/
//Os métodos jQuery get () e post () são usados ​​para solicitar dados do servidor com uma solicitação HTTP GET ou POST.

/*
Solicitação HTTP: GET vs. POST
Dois métodos comumente usados ​​para uma solicitação-resposta entre um cliente e um servidor são: GET e POST.

GET - Solicita dados de um recurso especificado
POST - Envia dados a serem processados ​​para um recurso especificado
GET é basicamente usado apenas para obter (recuperar) alguns dados do servidor. Nota: O método GET pode retornar dados em cache.

O POST também pode ser usado para obter alguns dados do servidor. No entanto, o método POST NUNCA armazena dados em cache e costuma ser usado para enviar dados junto com a solicitação.*/
$.get(URL,callback);
$("button").click(function(){
    $.get("demo_test.asp", function(data, status){//método para recuperar dados de um arquivo no servidor:
      alert("Data: " + data + "\nStatus: " + status);
    });
});


$.post(URL,data,callback);
$("button").click(function(){
    $.post("demo_test_post.asp",
    {
      name: "Donald Duck",
      city: "Duckburg"
    },
    function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
});