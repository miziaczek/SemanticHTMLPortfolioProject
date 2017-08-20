$(document).ready(function () {

  // $('.popup-text').magnificPopup({
  //   // you may add other options here, e.g.:
  //   preloader: true,
  //
  //   callbacks: {
  //     open: function() {
  //       // Will fire when this exact popup is opened
  //       // this - is Magnific Popup object
  //     },
  //     close: function() {
  //       console.log('dupa');
  //       // Will fire when popup is closed
  //     }
  //     // e.t.c.
  //   }
  // });


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

      $('#text1').text('Programowaniem inetersuję się od 2 lat, w tym czasie poszerzałam wiedzę we własnym zakresie:');
      $('#text11').text('Zdobyłam Front End Development Certification na FreeCodeCamp');
      $('#text12').text('przeszam kursy na Coode School');
      $('#text13').text('ćwiczyłam algorytymy na CodingBat');

      $('#text2').text('Technologie');
      $('#text21').text('Technologie w których piszę:');

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

      $('#text2').text('Technologies');
      $('#text21').text('Here are some of the technologies I enjoy writing day-to-day:');

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

