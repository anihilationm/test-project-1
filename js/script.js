$(document).ready(function(){
    $('.slider-wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /***Cart slidedown***/

    $("#cart").find("a").on("click", function() {
        $("#dropdown-cart").slideToggle()
    });


    /***Goods counter***/
        var counter = "1";
        var getPrice = $(".product-price span").data("price");
        $(".fa-plus-circle").on("click", function () {
            $(this).parent().find("span").text(++counter);
            $(this).parent().parent().find(".product-price").find("span").text(getPrice * counter);
        });

        $(".fa-minus-circle").on("click", function() {
            $(this).parent().find("span").text(--counter);
            $(this).parent().parent().find(".product-price").find("span").text(getPrice * counter);
        });


    $(".logo-bar #bars a").hover(function() {
        $(this).addClass("animated rubberBand");
    },
        function(){
            window.setTimeout(function(){
                $(".logo-bar #bars a").removeClass("animated rubberBand");
            }, 2000);
        }
    );
    $(".logo-bar #cart a").hover(function() {
            $(this).addClass("animated rubberBand");
        },
        function(){
            window.setTimeout(function(){
                $(".logo-bar #cart a").removeClass("animated rubberBand");
            }, 2000);
        }
    );
    $(".logo-bar #search a").hover(function() {
            $(this).addClass("animated rubberBand");
        },
        function(){
            window.setTimeout(function(){
                $(".logo-bar #search a").removeClass("animated rubberBand");
            }, 2000);
        }
    )

});