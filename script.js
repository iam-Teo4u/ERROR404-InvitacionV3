// The most useless way to use jQuery: Part 1

$(window).scroll(() => {
  $('.scrolldown').fadeOut(200);
});

$('.scrolldown').click(() => {
  $('html, body').animate({
    scrollTop: ($('#content').offset().top)
},500);
})