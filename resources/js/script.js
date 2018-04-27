// Navigation: Scroll to Section
$(document).ready(function() {
  $("#toAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top -100
    }, 1000);
  });
  $("#toDonuts").click(function() {
    $('html, body').animate({
        scrollTop: $("#donuts").offset().top -100
    }, 1000);
  });
  $("#toTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 800);
  });
  $("#toLocations").click(function() {
    $('html, body').animate({
        scrollTop: $("#locations").offset().top -100
    }, 1000);
  });
  $("#toContact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top -100
    }, 1000);
  });
})



// Change Navbar on Scroll
$(window).scroll(function() {
  if ($(window).scrollTop() > 50 ) {
  $('nav').css({
    'position' : 'fixed',
    'top' : 0,
    'background-color' : '#faf981',
    'border-top' : '8px solid #00AFD7'
  });
  // $('.hero-box').addClass('gradient');
  // $('.nav ul li').css({'color' : '#474747'});
  // $('nav ul li:hover').css({'color' : '#6E7888'})
  } else {
    $('nav').css({
      'position' : 'fixed',
      'top' : 0,
      'background-color' : '#fff',
      'border-top' : '8px solid #fc80b2'
    });
    // $('.hero-box').removeClass('gradient');
    // $('nav ul li').css({'color' : '#474747'});
    // $('nav ul li:hover').css({'color' : '#6E7888'})
  }
});



// Chart-pie Animation
$("#getFacts").click(function() {
  $('.getFacts').slideDown();
  var chart = AmCharts.makeChart( "chartdiv", {
    "type": "pie",
    "theme": "chalk",
    "dataProvider": [ {
      "nutrion": "Fat",
      "percentage": 17
    }, {
      "nutrion": "Carb",
      "percentage": 14
    }, {
      "nutrion": "Dietary Fiber",
      "percentage": 1
    }, {
      "nutrion": "Sugars",
      "percentage": 20
    }, {
      "nutrion": "Protein",
      "percentage": 4
    }, {
      "nutrion": "Deliciousness",
      "percentage": 64
    } ],
    "valueField": "percentage",
    "titleField": "nutrion",
    "startEffect": "elastic",
    "startDuration": 2,
    "labelRadius": 15,
    "innerRadius": "50%",
    "depth3D": 10,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "angle": 15,
    "export": {
      "enabled": true
    }
  } );
  $('#getFacts').fadeOut();
});



// Material Contact Form
$(document).ready(function(){
	$('.contact-form').find('.box-control').each(function() {
	  var targetItem = $(this).parent();
	  if ($(this).val()) {
		$(targetItem).find('label').css({
		  'top': '10px',
		  'fontSize': '14px'
		});
	  }
	})
	$('.contact-form').find('.box-control').focus(function() {
	  $(this).parent('.input-block').addClass('focus');
	  $(this).parent().find('label').animate({
		'top': '10px',
		'fontSize': '14px'
	  }, 300);
	})
	$('.contact-form').find('.box-control').blur(function() {
	  if ($(this).val().length == 0) {
		$(this).parent('.input-block').removeClass('focus');
		$(this).parent().find('label').animate({
		  'top': '25px',
		  'fontSize': '18px'
		}, 300);
	  }
	})
});



// Mobile Navigation
$(function(){
  var width   = 200,
      height  = 44 * 4 + 20,
      speed   = 300,
      button  = $('#menu-button'),
      overlay = $('#overlay'),
      menu    = $('#hamburger-menu');

  button.on('click',function(e){
    if(overlay.hasClass('open')) {
      animate_menu('close');
    } else {
      animate_menu('open');
    }
  });

  overlay.on('click', function(e){
    if(overlay.hasClass('open')) {
      animate_menu('close');
    }
  });

  $('a[href="#"]').on('click', function(e){
    e.preventDefault();
  });

  function animate_menu(menu_toggle) {
    if(menu_toggle == 'open') {
      overlay.addClass('open');
      button.addClass('on');
      overlay.animate({opacity: 1}, speed);
      menu.animate({width: width, height: height}, speed);
    }

    if(menu_toggle == 'close') {
      button.removeClass('on');
      overlay.animate({opacity: 0}, speed);
      overlay.removeClass('open');
      menu.animate({width: "0", height: 0}, speed);
    }
  }
});

// Mobile Navigation: Scroll to Section
$(document).ready(function() {
  $("#mob-top").click(function() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 800);
  });
  $("#mob-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top -100
    }, 1000);
  });
  $("#mob-donuts").click(function() {
    $('html, body').animate({
        scrollTop: $("#donuts").offset().top -100
    }, 1000);
  });
  $("#mob-locations").click(function() {
    $('html, body').animate({
        scrollTop: $("#locations").offset().top -100
    }, 1000);
  });
  $("#mob-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top -100
    }, 1000);
  });
})