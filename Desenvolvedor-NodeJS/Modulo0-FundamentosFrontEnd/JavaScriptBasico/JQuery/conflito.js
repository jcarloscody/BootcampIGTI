//jQuery - Método noConflict ()       https://www.w3schools.com/jquery/jquery_noconflict.asp

$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("jQuery is still working!");
  });
});



var jq = $.noConflict(); //Você também pode criar seu próprio atalho com muita facilidade.
jq(document).ready(function(){
  jq("button").click(function(){
    jq("p").text("jQuery is still working!");
  });
});