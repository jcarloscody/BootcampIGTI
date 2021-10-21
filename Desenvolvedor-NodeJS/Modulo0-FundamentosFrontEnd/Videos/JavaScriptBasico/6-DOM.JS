/*O HTML DOM (Document Object Model)
Quando uma página da web é carregado, o navegador cria um D ocument O bject M odelo da página.

O modelo HTML DOM é construído como uma árvore de objetos :*/

/*https://www.w3schools.com/js/js_htmldom_document.asp*/

const element = document.getElementById("intro"); /*Encontrando Elemento HTML por Id*/
const element = document.getElementsByTagName("p"); /*Localização de elementos HTML por nome de tag*/


const x = document.getElementById("main");
const y = x.getElementsByTagName("p");/*encontra todos os <p>elementos dentro de "main"*/

const x = document.getElementsByClassName("intro");/*Encontrando Elementos HTML por Nome de Classe*/

const x = document.querySelectorAll("p.intro");/*Encontrar elementos HTML por seletores CSS: lista de todos os <p>elementos com class="intro*/


const x = document.forms["frm1"];/*Encontrando Elementos HTML por Coleções de Objetos HTML*/
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>"; /*retorna o valor de cada elemento que tiver value*/
}
document.getElementById("demo").innerHTML = text;




document.getElementById("p1").innerHTML = "New text!";/*Alterar o conteúdo HTML*/

document.getElementById("myImage").src = "landscape.jpg";/*Mudando o valor de um atributo*/

document.getElementById("demo").innerHTML = "Date : " + Date();  /*Conteúdo HTML dinâmico*/

document.write(Date()); /* gravar diretamente no fluxo de saída HTML*/

document.getElementById("p2").style.color = "blue";/*Mudando o estilo do HTML css*/

/*<button type="button"
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>



/*Eventos JavaScript HTML DOM*/
/*<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>*/

/*
>> Os eventos onloade onunload são acionados quando o usuário entra ou sai da página.
>> O onchange evento é freqüentemente usado em combinação com a validação de campos de entrada.
>> Os eventos onmouseovere onmouseoutpodem ser usados ​​para acionar uma função quando o usuário passa o mouse sobre ou fora de um elemento HTML
>> Os onmousedown, onmouseupe onclick os eventos são todos partes de um clique do mouse:
 onmousedown: quando um botão do mouse é clicado, o evento onmousedown é acionado, então, 
 onmouseupe quando o botão do mouse é liberado, o evento onmouseup é acionado, finalmente, 
 onclick quando o clique do mouse é concluído, o evento onclick é acionado*/




 /*JavaScript HTML DOM EventListener               addEventListener ()*/
 element.addEventListener(event, function, useCapture);
/*useCapture::    false-bubbling   true-capture
No bubbling, o evento mais interno do elemento é tratado primeiro e depois o externo: o evento de clique do elemento <p> é tratado primeiro e, em seguida, o evento de clique do elemento <div>.
Na captura, o evento mais externo do elemento é tratado primeiro e depois o interno: o evento de clique do elemento <div> será tratado primeiro, depois o evento de clique do elemento <p>. */

var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}

element.removeEventListener("mousemove", myFunction); /*remover*/








/*Navegação JavaScript HTML DOM*/
myTitle = document.getElementById("demo").innerHTML;/*==*/myTitle = document.getElementById("demo").firstChild.nodeValue; /*==*/ myTitle = document.getElementById("demo").childNodes[0].nodeValue;

document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;/*propriedade especifica o nome de um nó.*/
/*nodeName é somente leitura
nodeName de um nó de elemento é o mesmo que o nome da tag
nodeName de um nó de atributo é o nome do atributo
nodeName de um nó de texto é sempre #text
nodeName do nó do documento é sempre #document*/



/*nodeValue      propriedade especifica o valor de um nó*/
/*nodeValue para nós de elemento é null
nodeValue para nós de texto é o próprio texto
nodeValue para nós de atributo é o valor do atributo*/




/*Creating New HTML Elements (Nodes)*/
const para = document.createElement("p");/*criação node p*/
const node = document.createTextNode("This is new."); /* criação node texto*/
para.appendChild(node);                               /*anexando node texto ao node p*/
const element = document.getElementById("div1");     
element.appendChild(para);                            /*anexando node p/texto ao node existente div*/


const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
const child = document.getElementById("p1");
element.insertBefore(para, child);    /*inserir antes*/


document.getElementById("p1").remove();/*remover*/

const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);/*remover o child*/



const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.replaceChild(para, child);      /*substituindo valores*/









/*Coleções JavaScript HTML DOM        objeto HTMLCollection
O getElementsByTagName()método retorna um HTMLCollection , uma coleção de elementos. parece um array, mas ñ é. não cabe as funções de array aqui.*/
const myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "The innerHTML of the 2º paragraph is: " + myCollection[1].innerHTML;
document.getElementById("demo").innerHTML = "This document contains " + myCollection.length + " paragraphs.";     /*quantidade da coleção*/
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}










/*JavaScript HTML DOM Node Lists é uma coleção de nós de documentos.*/
const myNodelist = document.querySelectorAll("d");
document.getElementById("demo").innerHTML = "The innerHTML of the 2º paragraph is" + myNodelist[1].innerHTML;

const myNodelist = document.querySelectorAll("p");
for (let i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.color = "red";
}

/*A diferença entre um HTMLCollection e um NodeList
Um HTMLCollection(capítulo anterior) é uma coleção de elementos HTML.

A NodeListé uma coleção de nós de documentos.

Um NodeList e uma coleção de HTML são praticamente a mesma coisa.

Tanto um objeto HTMLCollection quanto um objeto NodeList são uma lista (coleção) de objetos semelhante a uma matriz.

Ambos têm uma propriedade de comprimento que define o número de itens na lista (coleção).

Ambos fornecem um índice (0, 1, 2, 3, 4, ...) para acessar cada item como uma matriz.

Os itens HTMLCollection podem ser acessados ​​por seu nome, id ou número de índice.

Os itens NodeList só podem ser acessados ​​por seu número de índice.

Apenas o objeto NodeList pode conter nós de atributo e nós de texto.*/



