$(window).on('load', function() {
	// Loader
	$('.loader').fadeOut(700);
});

$(document).ready(function() {
	
	// Fire the scroll
	$("body").niceScroll({
		cursorcolor:"#f8cd47",
		cursorwidth: "15px",
		cursorborder: "none",
		cursorborderradius: "0",
		background: "#333",
		zindex: 999,
		cursoropacitymin: 0.9,
		horizrailenabled: false
	});

	var scrolled = false;
	function Scroll_toTop() {
		var top = $(window).scrollTop();

		if(top <= 100 && !scrolled) { $('.top').animate({bottom: '-150px'}, 1); scrolled = true; }
		else if(top > 100 && scrolled) { $('.top').animate({bottom: '50px'}, 1); scrolled = false; }

		if(top >= $('.slider').outerHeight() - 50) $('.navbar').addClass('nav-white');
 		else $('.navbar').removeClass('nav-white');
	}

	// Run this function on scroll
	$(window).scroll(function() { Scroll_toTop(); });

	// Run this on load
	Scroll_toTop();

	// Scroll to Top
	$(document).on('click', '.top', function() {
		 $('body, html').animate({scrollTop: 0}, 300);
	});

	// Fire fancybox plugin
	$(".item").fancybox();

	// Slider
    var mySwiper = new Swiper ('.slider', {
     	direction: 'horizontal',
      	loop: true,
      	speed: 700,
	   	pagination: {
		    el: '.swiper-pagination',
		    type: 'bullets',
		    hideOnClick: false,
		    clickable: true
		},
		autoplay: {
			delay: 3000,
		},
    });


    // navbar Navigation
    $(document).on('click', '.nav-link', function(e) {
    	e.preventDefault();

    	var dataNav = $(this).data('nav');
    	var navigate = 0;
    	if(dataNav != 'home') navigate = $('.' + dataNav).offset().top - 50;
		 $('body, html').animate({scrollTop: navigate}, 600);

    });
});