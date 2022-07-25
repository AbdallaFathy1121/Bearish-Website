$(document).ready(function() {

    $("#tel").each( function(){
        $("#tel").intlTelInput({
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
        });
    });

    $('.owl-item').each(function(){
        $('.owl-item').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            items: 6,
            responsive:{
                0:{
                    items:2,
                },
                576:{
                    items:3,
                },
                768:{
                    items:4,
                },
                992:{
                    items:5,
                },
                1200: {
                    items: 6,
                }
            }
        })
    });

    $('.owl-pro').each(function(){
        $('.owl-pro').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            items: 4,
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                992:{
                    items:3,
                },
                1200: {
                    items: 4,
                }
            }
        })
    });


        // Slide Toggle & over-Lay

        $('.top-bar .lang').click(function () {
            $('.top-bar .lang .slide-toggle').slideToggle(400);
        });
    
        $('.over-lay').click(function () {
            $('.top-bar .slide-toggle').slideUp(400);
        });
    
        $('.top-bar .lang').click(function () {
            $('.over-lay').animate({
                height: '100%'
            }, 0);
        });
    
        $('.over-lay') .click(function(){
            $(this) .animate ({
                height: '0%'
            }, 0);
        });
        
    /////////////////////////////////////////

    $(".login .box .input-group #eye1").click(function() {
        $("#pass").attr("type", "text");
        $(this).hide();
        $(".login .box .input-group #eye").show();
    });

    $(".login .box .input-group #eye").click(function() {
        $("#pass").attr("type", "password");
        $(this).hide();
        $(".login .box .input-group #eye1").show();
    });

    /////////////////////////////////////////

    // ScrollTop 

    $('#scroll').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    });

    $(window).scroll(function(){

        if ( $(window).scrollTop() > 100 ) {
            
            $('.scroll').css({
                opacity: 1
            });

        } else{

            $('.scroll').css({
                opacity: 0
            });

        }
    });

    /////////////////////////////////////////////
    AOS.init();

    ////////////////////////////////////////////
    $('.owl-1').each(function(){
        $('.owl-1').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            lazyLoad: true,
            smartSpeed: 700,
            items: 4,
            responsive:{
                0: {
                    items: 1,
                    nav: false
                },
                650:{
                    items:2,
                    nav:true
                },
                992:{
                    items:3,
                    nav:true
                },
                1200: {
                    items: 4,
                    nav: true
                }
            }
        })
    });

    $('.owl-cover').each(function(){
        $('.owl-cover').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            lazyLoad: true,
            smartSpeed: 900,
            items: 1,
            autoplayTimeout: 6000
        })
    });

    ///////////////////////////////////////////////

    $('.evaluate').click(function() {
        $('.ev-box').css({
            top: 0
        });
    });

    $(".ev-box .overlay").click(function() {
        $('.ev-box').css({
            top: '100%'
        });
    });

    $(".ev-box .star .one").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .two").removeClass('active');
        $(".ev-box .star .three").removeClass('active');
        $(".ev-box .star .four").removeClass('active');
        $(".ev-box .star .five").removeClass('active');
        $("#star").val(1);
    });

    $(".ev-box .star .two").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .one").addClass('active');
        $(".ev-box .star .three").removeClass('active');
        $(".ev-box .star .four").removeClass('active');
        $(".ev-box .star .five").removeClass('active');
        $("#star").val(2);
    });

    $(".ev-box .star .three").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .one").addClass('active');
        $(".ev-box .star .two").addClass('active');
        $(".ev-box .star .four").removeClass('active');
        $(".ev-box .star .five").removeClass('active');
        $("#star").val(3);
    });

    $(".ev-box .star .four").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .one").addClass('active');
        $(".ev-box .star .two").addClass('active');
        $(".ev-box .star .three").addClass('active');
        $(".ev-box .star .five").removeClass('active');
        $("#star").val(4);
    });

    $(".ev-box .star .five").click(function(){
        $(this).addClass('active');
        $(".ev-box .star .one").addClass('active');
        $(".ev-box .star .two").addClass('active');
        $(".ev-box .star .three").addClass('active');
        $(".ev-box .star .four").addClass('active');
        $("#star").val(5);
    });

    /////////////////////////////////////////////////////////////////

    $('.owl-carousel-1').each(function(){
        $('.owl-carousel-1').owlCarousel({
            loop: false,
            autoplay: false,
            smartSpeed: 700,
            items: 8,
            stagePadding: 20,
            responsive:{
                0: {
                    items: 3,
                },
                500: {
                    items: 4,
                },
                768:{
                    items:5,
                },
                992:{
                    items:6,
                },
                1200: {
                    items: 8,
                }
            }
        })
    });

    $('.owl-logo').each(function(){
        $('.owl-logo').owlCarousel({
            loop: false,
            autoplay: false,
            smartSpeed: 700,
            items: 3,
            stagePadding: 20,
            responsive:{
                0: {
                    items: 3
                },
                410: {
                    items: 4,
                },
                576: {
                    items: 5,
                },
                768: {
                    items: 4,
                },
                992:{
                    items:2,
                },
                1200: {
                    items: 3,
                }
            }
        })
    });

    ///////////////////////////////////////////////////////////////////////

    // Day

    $(".confirm .form .owl-carousel .item").click (function() {
        $(".confirm .form .owl-carousel .item").each( function() {
            $(".confirm .form .owl-carousel .item").removeClass("active_item");
        });
        $(this).addClass("active_item");
        $(".confirm .form .day").val($(this).text());
        $(".confirm .date_time").addClass("date_time_active");
    });

    $(".confirm .form .select").click(function() {
        $(".confirm .form .owl-carousel").addClass("owl-active");
    });

    $(".confirm .form .sel").click(function() {
        $(".confirm .form .owl-carousel").removeClass("owl-active");
        $(".confirm .date_time").removeClass("date_time_active");
    });

    /////////////////////////////

    // Date_time

    $(".confirm .box").click(function() {
        $(".confirm .box").each( function() {
            $(".confirm .box").removeClass("active_box");
        });
        $(this).addClass("active_box");
        $(".confirm .date-time").val($(this).text());
    });

    $(".payment .box").click(function() {
        $(".payment .box").each(function() {
            $(".payment .box").removeClass("active_box");
        });
        $(this).addClass("active_box");
    });

    /////////////////////////////////

    $(".single_pro form .select-box").click(function() {
        $(".single_pro form .number").slideToggle(400);
    });

    $(".single_pro form .select-box-2").click(function() {
        $(".single_pro form .colors").slideToggle(400);
    });

    $(".single_pro form .number span").click(function() {
        $(".single_pro form .number span").each(function() {
            $(".single_pro form .number span").removeClass("active_span");
        });
        $(this).addClass("active_span");
        $(".single_pro form .select-box #num").val($(this).text());
    });

    /////////////////////////////////

    // Colors

    var color = '';
    hexc($(".single_pro form .select-box-2 span").css('backgroundColor'));
    $(".single_pro form #color").val(color);

    $(".single_pro form .colors span").click(function() {
        var x = $(this).css('backgroundColor');
        hexc(x);
        $(".single_pro form .select-box-2 span").css('backgroundColor', color);
        $(".single_pro form #color").val(color);
    });


    function hexc(colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
          parts[i] = parseInt(parts[i]).toString(16);
          if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        color = '#' + parts.join('');
    }

    ///////////////////////////////////////

    $('.single_pro .string #logo-1').change(function(){
        if ($('.single_pro .string #logo-1:checked')) {
            $(".single_pro .string .carousel_1").slideDown(100);
            $(".single_pro .string .box .input-form-1").slideUp(100);
            $(".single_pro .string .box .input-form-2").slideUp(100);
            $(".single_pro .string .box .carousel_2").slideUp(100);
        }
        $(".single_pro .string #name-1").prop("checked", false);
        $(".single_pro .string #shape-1").prop("checked", false);
    });

    $('.single_pro .string #name-1').change(function(){
        if ($('.single_pro .string #name-1:checked')) {
            $(".single_pro .string .box .input-form-1").slideDown(100);
            $(".single_pro .string .carousel_1").slideUp(100);
            $(".single_pro .string .box .input-form-2").slideUp(100);
            $(".single_pro .string .carousel_2").slideUp(100);
        }
        $(".single_pro .string #logo-1").prop("checked", false);
        $(".single_pro .string #shape-1").prop("checked", false);
    });

    $('.single_pro .string #shape-1').change(function(){
        if ($('.single_pro .string #shape-1:checked')) {
            $(".single_pro .string .carousel_2").slideDown(100);
            $(".single_pro .string .box .input-form-2").slideDown(100);
            $(".single_pro .string .box .carousel_1").slideUp(100);
            $(".single_pro .string .box .input-form-1").slideUp(100);
        }
        $(".single_pro .string #name-1").prop("checked", false);
        $(".single_pro .string #logo-1").prop("checked", false);
    });

    $(".single_pro .string .carousel_1 .item").click(function(){
        $(".single_pro .string .carousel_1 .item").each(function() {
            $(".single_pro .string .carousel_1 .item").removeClass("active_item");
        });
        $(this).addClass("active_item");
        $(".single_pro .string #logo_name_1").val($(".single_pro .string .carousel_1 .active_item .name").text());
    });

    $(".single_pro .string .carousel_2 .item").click(function(){
        $(".single_pro .string .carousel_2 .item").each(function() {
            $(".single_pro .string .carousel_2 .item").removeClass("active_item");
        });
        $(this).addClass("active_item");
        $(".single_pro .string #shape_name_1").val($(".single_pro .string .carousel_2 .active_item .name").text());
    });

    /////////

    $('.single_pro .string #logo-2').change(function(){
        if ($('.single_pro .string #logo-2:checked')) {
            $(".single_pro .string .carousel_3").slideDown(100);
            $(".single_pro .string .box .input-form-3").slideUp(100);
            $(".single_pro .string .box .input-form-4").slideUp(100);
            $(".single_pro .string .box .carousel_4").slideUp(100);
        }
        $(".single_pro .string #name-2").prop("checked", false);
        $(".single_pro .string #shape-2").prop("checked", false);
    });

    $('.single_pro .string #name-2').change(function(){
        if ($('.single_pro .string #name-2:checked')) {
            $(".single_pro .string .box .input-form-3").slideDown(100);
            $(".single_pro .string .carousel_3").slideUp(100);
            $(".single_pro .string .box .input-form-4").slideUp(100);
            $(".single_pro .string .carousel_4").slideUp(100);
        }
        $(".single_pro .string #logo-2").prop("checked", false);
        $(".single_pro .string #shape-2").prop("checked", false);
    });

    $('.single_pro .string #shape-2').change(function(){
        if ($('.single_pro .string #shape-2:checked')) {
            $(".single_pro .string .carousel_4").slideDown(100);
            $(".single_pro .string .box .input-form-4").slideDown(100);
            $(".single_pro .string .box .carousel_3").slideUp(100);
            $(".single_pro .string .box .input-form-3").slideUp(100);
        }
        $(".single_pro .string #name-2").prop("checked", false);
        $(".single_pro .string #logo-2").prop("checked", false);
    });

    $(".single_pro .string .carousel_3 .item").click(function(){
        $(".single_pro .string .carousel_3 .item").each(function() {
            $(".single_pro .string .carousel_3 .item").removeClass("active_item");
        });
        $(this).addClass("active_item");
        $(".single_pro .string #logo_name_2").val($(".single_pro .string .carousel_3 .active_item .name").text());
    });

    $(".single_pro .string .carousel_4 .item").click(function(){
        $(".single_pro .string .carousel_4 .item").each(function() {
            $(".single_pro .string .carousel_4 .item").removeClass("active_item");
        });
        $(this).addClass("active_item");
        $(".single_pro .string #shape_name_2").val($(".single_pro .string .carousel_4 .active_item .name").text());
    });


});

