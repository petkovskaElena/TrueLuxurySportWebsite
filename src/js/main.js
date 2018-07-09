$(document).ready(function () {

    // Shrinks the navbar when the page is scrolled
    $(window).scroll(function () {
        if ($("#mainMenu").offset().top > 100) {
            $("#mainMenu").addClass("navbar-shrink");
        } else {
            $("#mainMenu").removeClass("navbar-shrink");
        }
    });

    $("#test").on('click', function () {
        $("#mainMenu").css("background-color", "rgba(black, .6);");
    });


});