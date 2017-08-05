$('.button-show').click(function() {
  $('.ball').fadeIn();
});

$('.button-animate').click(function() {
  $('.ball').slideToggle();
});

$('.button-right').click(function() {
  $('.ball').animate({
    left: '+=100px',
    width: '+=20px',
    height: '+=20px',
  }, 1000);
});

$('.button-hide').click(function() {
  $('.ball').fadeOut();
});

$('.button-reset').click(function() {
  $('.ball').animate({
    left: '0',
    width: '20px',
    height: '20px',
  }, 1000);
});
