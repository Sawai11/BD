// $('a[href^="#"]').click(function (event) {
//     var id = $(this).attr("href");
//     var target = $(id).offset().top;
//     $('html, body').animate({
//         scrollTop: target
//     }, 500);
//     event.preventDefault();
// });

// var offset = $('nav').offset().top;
// $(window).scroll(function () {
//     if ($(this).scrollTop() >= offset) {
//         $('nav').addClass('isFixed');
//         $('html').addClass('whiteSpace');
//     } else {
//         $('nav').removeClass('isFixed');
//         $('html').removeClass('whiteSpace');
//     }
// });var navOffset = $('#nav').offset().top;
var lastScrollTop = 0;
$(window).scroll(function () {
    var currentScrollTop = $(this).scrollTop();
    if (currentScrollTop >= navOffset && lastScrollTop < navOffset) {
        $('#nav').addClass('isFixed');
        $('html').addClass('whiteSpace');
    } else if (currentScrollTop < navOffset && lastScrollTop >= navOffset) {
        $('#nav').removeClass('isFixed');
        $('html').removeClass('whiteSpace');
    }
    lastScrollTop = currentScrollTop;
});