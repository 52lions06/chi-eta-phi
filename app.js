'use strict';
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// const myFunction = () => {
//   const x = document.getElementById('myTopnav');
//   if (x.className === 'nav') {
//     x.className += ' responsive';
//   } else {
//     x.className = 'nav';
//   }
// };



$(document).ready(function() {

/* inserting a slider */

  let width = 1414;
  let animationSpeed = 5000;
  let pause = 2000;
  let currentSlide = 1;

  const $slider = $('#slider');
  const $sliderContainer = $slider.find('.slides');
  const $slides = $sliderContainer.find('.slide');

  let interval;

  const startSlider = () => {
    interval = setInterval(() => {
      $sliderContainer.animate({ 'margin-left': `-=${+width}` }, animationSpeed, () => {
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $sliderContainer.css('margin-left', 10);
        }
      });
    }, pause);
  };

  const pauseSlider = () => {
    clearInterval(interval);
  };

  $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

startSlider();

/* sliding items in as you scroll */

 //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');
});

