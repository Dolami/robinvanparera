$( document ).ready(function() {

    $(".arrow").click(function() {
        $('html,body').animate({
            scrollTop: $(".main").offset().top},
            'slow');
    });

    $("#code").mouseenter(function() {
        $(this).closest(".main").find(".mac_img").attr("src", "images/mac_code2.svg");
        $(this).addClass('selected');
    });

    $("#code").mouseleave(function() {
        $(this).closest(".main").find(".mac_img").attr("src", "images/mac.svg");
        $(this).removeClass('selected');
    });

    $("#design").mouseenter(function() {
        $(this).closest(".main").find(".mac_img").attr("src", "images/mac_design2.svg");
        $(this).addClass('selected');
    })

    $("#design").mouseleave(function() {
        $(this).closest(".main").find(".mac_img").attr("src", "images/mac.svg");
        $(this).removeClass('selected');
    });

    $("#edit").mouseenter(function() {
        $(this).closest(".main").find(".mac_img").attr("src", "images/mac_edit2.svg");
        $(this).addClass('selected');
    })

    $("#edit").mouseleave(function() {
        $(this).closest(".main").find(".mac_img").attr("src", "images/mac.svg");
        $(this).removeClass('selected');
    });

    $("#code ,#edit ,#design").click(function() {
        $('html,body').animate({
            scrollTop: $(".portfolio").offset().top},
            'slow');
    });

    $(".logo_nav").click(function() {
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
    });

    $(".home-nav").click(function() {
        $('html,body').animate({
            scrollTop: $("header").offset().top},
            'slow');
    });

    $(".about-nav").click(function() {
        $('html,body').animate({
            scrollTop: $(".main").offset().top},
            'slow');
    });

    $(".portfolio-nav").click(function() {
        $('html,body').animate({
            scrollTop: $(".portfolio").offset().top},
            'slow');
    });

    $(".contact-nav").click(function() {
        $('html,body').animate({
            scrollTop: $(".footer").offset().top},
            'slow');
    });

});



