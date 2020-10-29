// select
$(function() {
  $('select, .select').selectric();
});

// Owl Carousel
var $homeSlider = $(".home-slider");

$(window).resize(function() {
  showHomeSlider();
});

function showHomeSlider() {
  if ($homeSlider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia("(max-width: 767.9px)").matches) {
      initialHomeSlider();
    } else {
      destroyHomeSlider();
    }
  }
}
showHomeSlider();

function initialHomeSlider() {
  $homeSlider.addClass("owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    dots: true,
    dotsContainer: '#customDots',
  });
}

function destroyHomeSlider() {
  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}
