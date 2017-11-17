var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$(document).ready(function () {




  $('header a[href^="#"]').on('click', function (event) {

    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('#gototop').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#gototop').fadeIn(500);
    }
    else {
      $('#gototop').fadeOut(500);
    }
  });

  $(".link").mouseenter(function () {
    $(".link").removeClass("active");
    $(this).addClass("active");
  });
  $(".link").mouseleave(function () {
    $(".link").removeClass("active");
  });

  $('.ang').click(function () {
    var clicks = $(this).data('clicks');
    if (clicks) {
      $(this).text('EN');
      $('#about').text('O mnie');
      $('#tech').text('Technologie');
      $('#project').text('Projekty');
      $('#contact').text('Kontakt');

      $('#text1').text('Dwa lata temu zdecydowałam się rozpocząć naukę programowania. W tym czasie ukończyłam wiele kursów online(Freecodecamp, CodeSchool, Udemy, CodingBat, etc.) oraz poszerzałam swoją wiedzę czytając artykuły branżowe. Obecnie pracuję jako freelancer i chciałabym podjąć kolejne wyzwanie którym jest praca w zespole, dzięki czemu będę w stanie podnosić moje kwalifikacje.');


      $('#text2').text('Technologie w których piszę:');


      $('#text3').text('Zealizowane projekty:');
      $('#text31').text('Projekt zlecony z uzyciem JQuery i Google Maps Api, z szblonu wykonananego przez grafika.');
      $('#text32').text('Gra kolko-krzyzyk w technologii React.js');
      $('#text33').text('Portfolio wynonane z użyciem JS, JQuery. Desin włsny.');

      $('#text4').text('Formularz kontaktowy');
      $('#Fname').attr("placeholder", "Imię");
      $('#Femail').attr("placeholder", "E-mail");
      $('#Ftext').attr("placeholder", "Wiadomość");
      $('#button-blue').val('Wyślij');

    } else {
      $(this).text('PL');
      $('#about').text('About me');
      $('#tech').text('Technologies');
      $('#project').text('Projects');
      $('#contact').text('Contact');

      $('#text1').text('Technologie');
      $('#text11').text('Technologie w których piszę:');
      $('#text12').text('Technologie w których piszę:');
      $('#text13').text('Technologie w których piszę:');

      $('#text2').text('Here are some of the technologies I enjoy writing day-to-day:');


      $('#text3').text('My projects:');
      $('#text31').text('Commercial projects, made with JQuery and Google Maps Api. Template made by graphic designer.');
      $('#text32').text('Cross game in React.js');
      $('#text33').text('Portfolio project made with JS, JQuery. Desing of my own.');

      $('#text4').text('Contact me');
      $('#Fname').attr("placeholder", "Name");
      $('#Femail').attr("placeholder", "Email");
      $('#Ftext').attr("placeholder", "Message");
      $('#button-blue').val('Send');
    }
    $(this).data("clicks", !clicks);
  });

  $('.git').hover(function(){
    $(this).attr('src','github_logo- Coral.png');
  },function(){
    $(this).attr('src','github-512%20-%20white.png');
  });
  $('.linkedin').hover(function(){
    $(this).attr('src','linkedin_logo-Coral.png');
  },function(){
    $(this).attr('src','linkedin_logowhite.png');
  });



// Get the modal
  var modal = document.getElementById('myModal');
  var modal2 = document.getElementById('myModal2');
  var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  var btn2 = document.getElementById("myBtn2");
  var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span2 = document.getElementsByClassName("close2")[0];
  var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  };
  btn2.onclick = function() {
    modal2.style.display = "block";
  };
  btn3.onclick = function() {
    modal3.style.display = "block";
  };

// When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
  span2.onclick = function() {
    modal2.style.display = "none";
  };
  span3.onclick = function() {
    modal3.style.display = "none";
  };

// When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }
  window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }




});

