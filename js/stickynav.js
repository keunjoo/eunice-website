var num = 0; //number of pixels before modifying styles
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav-right').addClass('fixed');
    } else {
        $('.nav-right').removeClass('fixed');
    }
});