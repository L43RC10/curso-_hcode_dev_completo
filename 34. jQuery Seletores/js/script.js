
    $(document).ready(function(){
        
        $("#logotipo").on("mouseover", function(){
            // mudar só uma propriedade css
            // $("#banner h1").css("color","red");

            // mudar varias propriedades css
            // $("#banner h1").css({"color":"red", "font-size":"12em"});

            // chamando classe css
            $("#banner h1").addClass("exemplo");
            // console.log("passou")

        }).on("mouseout", function(){
            
            $("#banner h1").removeClass("exemplo");

        });

        $("#input-search").on("focus", function(){

            $("li.search").addClass("ativo");

        }).on("blur", function(){

            $("li.search").removeClass("ativo");

        });
    });