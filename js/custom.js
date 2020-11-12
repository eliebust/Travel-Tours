(function ($) {
  "use strict";

  var package_cotent = $('.tour_cotent');
  if (package_cotent.length) {
    package_cotent.owlCarousel({
      items: 2,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        'Next',
        'Prev'
      ],
      responsive: {
        0: {
          nav: false,
          items: 1
        },
        575: {
          nav: false,
          items: 1
        },
        768: {
          nav: true,
          items: 1
        },
        1200: {
          nav: true,
          items: 2
        },
      }
    });
  }
  var review = $('.player_info_item');
  if (review.length) {
    review.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      margin: 40,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      navText: [
        '<img src="images/left.svg" alt="">',
        '<img src="images/right.svg" alt="">'
      ],
      responsive: {
        0: {
          margin: 15,
        },
        600: {
          margin: 10,
        },
        1000: {
          margin: 10,
        }
      }
    });
  }





  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });

 //UPDATED

 $('.slider').on('afterChange', function(event, slick, currentSlide){
   $('.content').hide();
   $('.content[data-id=' + (currentSlide + 1) + ']').show();
 });






}(jQuery));
