var receptek=[];

$(function(){    

      $.ajax(
        {url: "etelek.json", 
        success: function(result){
        console.log(result);
        receptek=result.receptkonyv;
        console.log(receptek);
        tablazatKiir();
        }
        }
      );
      
      $("#bal").on("click", balra);
      $("#jobb").on("click", jobbra);

    
  });

  function tablazatKiir(){
    $("article").append("<table>");
    $("article table").append("<tr><th>Név</th><th>Elkészítési idő</th><th>Kép</th><th>Leírás</th><th>Hozzávalók</th></tr>");
    for (var i = 0; i < receptek.length; i++) {
      $("article table").append("<tr id='"+i+"'>");
      //$("article table").append("<tr><td>"+receptek[i].nev+"</td><td>"+receptek[i].elkIdo+"</td><td>"+receptek[i].kep+"</td><td>"+receptek[i].leiras+"</td><td>"+receptek[i].hozzavalok+"</td></tr>");

      for(var item in receptek[i]){
        
        console.log([item]);
        $("article table #"+i).append("<td>"+receptek[i][item]+"</td>");
        
      }
    
      $("article table").append("</tr>");
    }
    $("article table tr").hover(hatter);
    $("article table tr").click(kep);
 }

 function hatter(){
   var i=$(this).attr("id");
   $("#"+i).toggleClass("hatter");
 }


 var i;
 function kep(){
    i=Number($(this).attr("id"));
    $("section #kep img").attr("src",receptek[i].kep);
    $("section #kep img").attr("alt",i+".kep");
    
    for (var k = 0; k < receptek.length; k++) {
      if (k===i) {
        $("section p").html("<h2>"+receptek[k].nev+"</h2><h3>Hozzávalók:</h3>");
        for (var j = 0; j < receptek[k].hozzavalok.length; j++) {
          //console.log(receptek[k].hozzavalok[j]);
          for(var item in receptek[k].hozzavalok[j]){
            $("section p").append("<ul><li>"+item+":  "+receptek[k].hozzavalok[j][item]+"</li></ul>");
            
          }
          
      }
      }

    }
    $("section p").append("<h3>Étel elkészítése:</h3>"+receptek[i].leiras);
    
    //$("section p").html("<h2>"+receptek[i].nev+"</h2>");

}

  function balra(){
    i--;
    if(i<0){
        i=receptek.length-1;
    }
    $("section #kep img").attr("src",receptek[i].kep);
    $("section p").empty();
    for (var k = 0; k < receptek.length; k++) {
      if (k===i) {
        $("section p").html("<h2>"+receptek[k].nev+"</h2><h3>Hozzávalók:</h3>");
        for (var j = 0; j < receptek[k].hozzavalok.length; j++) {
          //console.log(receptek[k].hozzavalok[j]);
          for(var item in receptek[k].hozzavalok[j]){
            $("section p").append("<ul><li>"+item+":  "+receptek[k].hozzavalok[j][item]+"</li></ul>");
            
          }
          
      }
      }

    }
    $("section p").append("<h3>Étel elkészítése:</h3>"+receptek[i].leiras);
  }
  
  function jobbra(){
    i++;
    if(i>receptek.length-1){
        i=0;
    }
    $("section #kep img").attr("src",receptek[i].kep);
  }

  






 