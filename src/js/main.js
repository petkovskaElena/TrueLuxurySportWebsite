$(document).ready(function () {

    // Shrinks the navbar when the page is scrolled
    $(window).scroll(function () {
        if ($("#mainMenu").offset().top > 100) {
            $("#mainMenu").addClass("navbar-shrink");
        } else {
            $("#mainMenu").removeClass("navbar-shrink");
        }
    });

    if ($("#mainMenu").offset().top > 100) {
        $("#mainMenu").addClass("navbar-shrink");
    }

    $('#btnToggle').on('click', function () {
        $("#mainMenu").toggleClass('navBackground');
    });


});