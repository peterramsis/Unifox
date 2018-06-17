$(function() {


    $('.bloger').slick({
        prevArrow: false,
        nextArrow: false
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

    var header = $("header").innerHeight();
    var win = $(window).height();


    var home = $(".home").height(header + win);


    $(window).scroll(function() {

        if ($(this).scrollTop() > 100) {

            $("header").addClass("sticky");


        } else {
            $("header").removeClass("sticky");

        }

    });


    $(".Portfolios .list-inline-item").on("click", function(e) {

        e.preventDefault();

        $(this).addClass("active").siblings().removeClass("active");



        if ($(this).data("dispaly") === "all") {

            $(".port .col-md-4").css({ 'opacity': 1 });

        } else {
            $(".port .col-md-4").css({ 'opacity': '.5' });
            $($(this).data("dispaly")).parent().css({ 'opacity': '1' });

        }




    });


    $(".c_panel ul li").on("click", function(e) {

        e.preventDefault();


        $(".c_info").css({ "display": "none" });
        $($(this).data("rola")).css({ "display": "block" });

    });



});