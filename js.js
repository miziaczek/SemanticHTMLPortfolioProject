/**
 * Created by miziak on 7/18/2017.
 */

// $('.owl-carousel').owlCarousel({
//   autoplay: true,
//   autoplayHoverPause: true,
//   loop: true,
//   margin: 20,
//   responsiveClass: true,
//   nav: true,
//   loop: true,
//   responsive: {
//     0: {
//       items: 1
//     },
//     568: {
//       items: 2
//     },
//     600: {
//       items: 3
//     },
//     1000: {
//       items: 4
//     }
//   }
// });
$(document).ready(function() {
  $('.popup-text').magnificPopup({
    disableOn: 320,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });
});
$(document).ready(function() {
  $('.popup-text').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    callbacks: {
      beforeOpen: function() {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });
});




$(document).ready(function() {

  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('#gototop').hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#gototop').fadeIn(500);
    }
    else {
      $('#gototop').fadeOut(500);
    }
  });



  $( ".link" ).mouseenter(function() {
    $(".link").removeClass("active");
    $(this).addClass("active");
  });
  $( ".link" ).mouseleave(function() {
      $( ".link" ).removeClass("active");
      // $( ".link:first" ).addClass( "active" );
    });




});

