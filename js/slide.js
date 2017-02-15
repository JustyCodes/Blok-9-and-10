var main = setInterval(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    if (nextSlide.length === 0) {
      nextSlide = $('.slide').first();
    }
      
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
  }, 5000);
$(document).ready(main);
