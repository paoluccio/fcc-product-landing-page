$(function() {

  $('.nav-link').click(function() {
    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 400);
  })
  
});