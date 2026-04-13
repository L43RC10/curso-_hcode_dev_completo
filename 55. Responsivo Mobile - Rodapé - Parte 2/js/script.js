



    

    

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

        let owl = $(".thumbnails").data('owlCarousel');

        $("#btn-news-prev").on("click", function(){
            owl.prev();
        });

        $("#btn-news-next").on("click", function(){
            owl.next();
        });


        $(".thumbnails .item").on("click", function(){
            // console.log();
            $("video").attr({
                "src":"../mp4/"+$(this).data("video")+".mp4",
                "poster":"img/"+$(this).data("video")+".jpg"
            });
        });

        $("#volume").on("change", function(){
            $("video")[0].volume = parseFloat($(this).val());
        });

        $("#btn-play-pause").on("click", function(){

            let video = $("video")[0];

            if($(this).hasClass("btn-success")){
                $(this).text("PAUSE");
                video.play();
            } else {
                $(this).text("PLAY");
                video.pause();
            }

            $(this).toggleClass("btn-success btn-danger");

        });

    });

    
    // INICIO PLYR
    (function(d, p){
        var a = new XMLHttpRequest(),
            b = d.body;
        a.open("GET", p, true);
        a.send();
        a.onload = function(){
            var c = d.createElement("div");
            c.style.display = "none";
            c.innerHTML = a.responseText;
            b.insertBefore(c, b.childNodes[0]);
        }
    })(document, "lib/plyr/dist/sprite.svg");

    plyr.setup(); //disparando player PLYR
    // FIM PLYR