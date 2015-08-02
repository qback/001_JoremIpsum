$(document).ready(function() {
  /*Scroll to section*/
  $.scrollIt();

  /*Feature slider*/
  $('.bxslider').bxSlider({
    mode: 'fade',
    slideWidth: 417,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 0,
    auto: true,
    pager: false,
    adaptiveHeight: true,
    speed: 500
  });

  /*Back to top button*/

  var offset = 100;
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });

  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  });


});
