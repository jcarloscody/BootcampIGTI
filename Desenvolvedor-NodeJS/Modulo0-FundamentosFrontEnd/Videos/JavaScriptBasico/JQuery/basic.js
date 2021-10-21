//$ ( seletor ). ação ()

/*
$(document).ready(function(){

  // jQuery methods go here...

});


ou

$(function(){

  // jQuery methods go here...

});

*/


/*
$("*")	Selects all elements	
$(this)	Selects the current HTML element	
$("p.intro")	Selects all <p> elements with class="intro"	
$("p:first")	Selects the first <p> element	
$("ul li:first")	Selects the first <li> element of the first <ul>	
$("ul li:first-child")	Selects the first <li> element of every <ul>	
$("[href]")	Selects all elements with an href attribute	
$("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
$("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"	
$(":button")	Selects all <button> elements and <input> elements of type="button"	
$("tr:even")	Selects all even <tr> elements	
$("tr:odd")	Selects all odd <tr> elements
*/



$(document).ready(function(){
         
    $("#dev").click(function() {
        $(this).hide();
    });

});

/*

$(document).ready()
click()
dblclick() clica 2x
mouseenter() é executada quando o ponteiro do mouse entra no elemento HTML
mouseleave() executada quando o ponteiro do mouse deixa o elemento HTML
mousedown()  é executada, quando o botão esquerdo, do meio ou direito do mouse é pressionado, enquanto o mouse está sobre o elemento HTML
mouseup()  é executada, quando o botão esquerdo, do meio ou direito do mouse é liberado, enquanto o mouse está sobre o elemento HTML:
hover() é executada quando o mouse entra no elemento HTML, e a segunda função é executada quando o mouse sai do elemento HTML
        $("#p1").hover(function(){
            alert("You entered p1!");
            },
            function(){
            alert("Bye! You now leave p1!");
            });
focus() é executada quando o campo do formulário recebe o foco
blur()  é executada quando o campo do formulário perde o foco
            $(document).ready(function(){
                $("input").focus(function(){
                    $(this).css("background-color", "yellow");
                });
                $("input").blur(function(){
                    $(this).css("background-color", "green");
                });
                });

on() Anexe um evento de clique a um elemento
                $("p").on("click", function(){
                $(this).hide();
                });

                $("p").on({
                mouseenter: function(){
                    $(this).css("background-color", "lightgray");
                },
                mouseleave: function(){
                    $(this).css("background-color", "lightblue");
                },
                click: function(){
                    $(this).css("background-color", "yellow");
                }
                });

*/

$(document).ready(function(){

    $("#hide").click(function(){
        $("#hideshow").hide(1000);
    });

    $("#show").click(function(){
        $("#hideshow").show(1000);
    });

    $("#button_hideshow").click(function(){
        $("#esconder_show").toggle();
    });


    //DESVANECIMENTO
    $("#esmaecer").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
        $("#div3").fadeOut(3000);
        $("#div2").fadeOut("slow");
        $("#div1").fadeOut();
    });

    $("#esmaecer").click(function(){ 
        $("#div11").fadeToggle();
    });

    $("#esmaecer").click(function(){  //opacidade
        $("#div22").fadeTo("slow", 0.2);
    });

    //SLIDEDOWN
    $("#slide_topo").click(function(){
        $("#slide_down").slideDown("slow");
    });
    //$("#panel").slideUp();     .slideToggle();


    //ANIMACAO $(selector).animate({params},speed,callback);
    
    $("button").click(function(){
        $("div").animate({
          left: '250px',
          height: '+=150px', //relativo ao tamanho
          width: '+=150px' //relativo
        });
      }); 

    $("button").click(function(){
      $("div").animate({
        height: 'toggle'
      });
    });


    $("button").click(function(){
      var div = $("div");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });



    //PARAR ANIMAÇÃO   $(selector).stop(stopAll,goToEnd);
    $("#stop").click(function(){
      $("#panel").stop();
    });



    //FUNCAO DE RETORNO DE CHAMADA $ ( seletor ) .hide ( velocidade, retorno de chamada );
    $("button").click(function(){
      $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
      });
    });

    //
    //
    //jQuery - Chaining         O encadeamento nos permite executar vários métodos jQuery (no mesmo elemento) em uma única instrução.
    $(document).ready(function(){
      $("button").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
      });
    });

    //jQuery - Obtenha conteúdo e atributos

    $("#btn1").click(function(){
      alert("Text: " + $("#test").text()); //pega o texto
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html()); //pega o texto e marcacao que houver de um elemento
    });
    $("#btn1").click(function(){
      alert("Value: " + $("#test").val()); //valor dos campos de input
    });
    $("button").click(function(){
      alert($("#w3s").attr("href")); //o attr pega o atributo
    });

    //definir valor 
    $("#btn1").click(function(){
      $("#test1").text("Hello world!");
    });
    $("#btn2").click(function(){
      $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
      $("#test3").val("Dolly Duck");
    });

    //com retorno
    $("#btn1").click(function(){
      $("#test1").text(function(i, origText){
        return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
      });
    });
    $("button").click(function(){
      $("#w3s").attr("href", function(i, origValue){
        return origValue + "/jquery/"; 
      });
    })


    //jQuery - Adicionar Elementos
    $("#btn1").click(function(){
      $("p").append(" <b>Appended text</b>.");//add ao final
    });
  
    $("#btn2").click(function(){
      $("ol").append("<li>Appended item</li>");
    });

    $("#btn1").click(function(){
      $("p").prepend("<b>Prepended text</b>. ");//add no inicio
    });
    $("#btn2").click(function(){
      $("ol").prepend("<li>Prepended item</li>");
    });

    
    function appendText() {
      var txt1 = "<p>Text.</p>";        // Create text with HTML
      var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
      var txt3 = document.createElement("p");
      txt3.innerHTML = "Text.";         // Create text with DOM
      $("body").append(txt1, txt2, txt3);   // Append new elements
    }


    //after e before
    $("#btn1").click(function(){
      $("img").before("<b>Before</b>");
    });
  
    $("#btn2").click(function(){
      $("img").after("<i>After</i>");
    });




    //jQuery - Remover Elementos
    $("button").click(function(){
      $("#div1").remove();
    });
    $("button").click(function(){//remove os elementos filho do (s) elemento (s) selecionado (s).
      $("#div1").empty();
    });

    $("button").click(function(){//remove todos os <p>elementos com class="test"
      $("p").remove(".test");
    });

    $("button").click(function(){// remove todos os <p>elementos com class="test"e class="demo"
      $("p").remove(".test, .demo");
    });






    //jQuery - Obter e definir classes CSS
    $("button").click(function(){
      $("h1, h2, p").addClass("blue");
      $("div").addClass("important  blue");
    });

    $("button").click(function(){
      $("h1, h2, p").removeClass("blue");
    });

    $("button").click(function(){//Este método alterna entre adicionar / remover classes dos elementos selecionados:
      $("h1, h2, p").toggleClass("blue");
    });


    //Método jQuery - css ()
    $("button").click(function(){
      alert("Background color = " + $("p").css("background-color"));//retornará o valor da cor de fundo do FIRST elemento correspondente
    });

    $("p").css("background-color", "yellow");///definirá o valor da cor de fundo para TODOS os elementos correspondentes:
    $("p").css({"background-color": "yellow", "font-size": "200%"});





    //jQuery - Dimensões
    $("button").click(function(){
      var txt = "";
      txt += "Width: " + $("#div1").width() + "</br>";//retorna a largura e a altura de um <div> elemento especificado
      txt += "Height: " + $("#div1").height();
      $("#div1").html(txt);
    });

    $("button").click(function(){
      var txt = "";
      txt += "Inner width: " + $("#div1").innerWidth() + "</br>";//retorna a largura / altura interna de um <div> elemento especificado :
      txt += "Inner height: " + $("#div1").innerHeight();
      $("#div1").html(txt);
    });
    //outerWidth()   outerHeight()

    $("button").click(function(){
      $("#div1").width(500).height(500);//define a largura e a altura de um <div> elemento especificado 
    });

});

function alerta(){
    alert("clicou em esmaecer");
}





/*jQuery Traversing      
 significa "mover-se", é usado para "encontrar" (ou selecionar) elementos HTML com base em sua relação com outros elementos.*/

 /*jQuery Traversing - Ancestrais*/
 $(document).ready(function(){
  $("span").parent().css({"color": "red", "border": "12px solid red"});/*retorna o elemento pai direto de cada <span> elemento*/
});


/*Método dos pais jQuery ()*/
$(document).ready(function(){
  $("span").parents().css({"color": "red", "border": "2px solid red"});/* retorna todos os ancestrais de todos os <span>elementos:*/
});

/*Método jQuery ParentsUntil ()*/
$(document).ready(function(){
  $("span").parentsUntil("div").css({"color": "red", "border": "2px solid red"});/*retorna todos os elementos ancestrais entre um <span>e um <div>elemento*/
});



/*jQuery Traversing - descendentes*/
/*Método jQuery children ()*/
$(document).ready(function(){
  $("div").children().css({"color": "red", "border": "2px solid red"}); /*percorre apenas um único nível abaixo da árvore DOM.
O exemplo a seguir retorna todos os elementos que são filhos diretos de cada <div>elemento:*/
});

/*Método jQuery find ()*/
$(document).ready(function(){
  $("div").find("span").css({"color": "red", "border": "2px solid red"});/* retorna todos os <span>elementos que são descendentes de <div>*/
});
$(document).ready(function(){
  $("div").find("*").css({"color": "red", "border": "2px solid red"});/*retorna todos os descendentes de <div>*/
});



/*jQuery Traversing - Irmãos*/
siblings()    /*método retorna todos os elementos irmãos do elemento selecionado.*/
siblings("p");
next()             /*todo retorna o próximo elemento irmão do elemento selecionad*/
nextAll()      /*método retorna todos os próximos elementos irmãos do elemento selecionado*/
nextUntil()      /*método retorna todos os próximos elementos irmãos entre dois argumentos fornecidos.*/
prev(), prevAll(), prevUntil()     /*funcionam exatamente como os métodos acima*/





/*jQuery Traversing - Filtragem*/
$(document).ready(function(){
  $("div").first().css("background-color", "yellow");/*seleciona o primeiro <div> elemento*/
});
last()    /*método retorna o último elemento dos elementos especificados*/
$(document).ready(function(){
  $("p").eq(1).css("background-color", "red");
});/* números do índice começam em 0, então o primeiro elemento terá o número do índice 0 e não 1. O exemplo a seguir seleciona o segundo <p>elemento (número do índice 1):*/

$(document).ready(function(){
  $("p").filter(".intro").css("background-color", "red");
});/*método permite que você especifique um critério*/


$("p").not(".intro"); /*étodo retorna todos os elementos que não correspondem aos critérios.*/

