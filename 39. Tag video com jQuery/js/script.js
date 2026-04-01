
    $(function(){
        
        $("#logotipo").on("mouseover", function(){

            $("#banner h1").addClass("exemplo");

        }).on("mouseout", function(){
            
            $("#banner h1").removeClass("exemplo");

        });

        $("#input-search").on("focus", function(){

            $("li.search").addClass("ativo");

        }).on("blur", function(){

            $("li.search").removeClass("ativo");

        });


        // owl-carousel
        $(".thumbnails").owlCarousel({
            loop: true,
            margin: 10,
            nav:true,
            navText: ["Anterior", "Próximo"],
            responsive: {
                0 :{
                    items: 1
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1200: {
                    item: 6
                }
            }
        });


        $(".thumbnails .item").on("click", function(){
            // console.log();
            $("video").attr({
                "src":"mp4/"+$(this).data("video")+".mp4",
                "poster":"img/"+$(this).data("video")+".jpg"
            })
        });

    });