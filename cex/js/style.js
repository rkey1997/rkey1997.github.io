$(function() {
    var header = $('.header'),
        cloneHeader = header.clone();
    cloneHeader.addClass('fixed');
    header.before(cloneHeader);

    $(window).scroll(function() {
        if ($(window).scrollTop() > 15) {
            cloneHeader.addClass('fixed-on');
        } else {
            cloneHeader.removeClass('fixed-on');
        }
        // console.log($(window).scrollTop());
    })


});