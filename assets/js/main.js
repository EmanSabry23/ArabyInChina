(function($) {

	"use strict";
	    //Toggle Fixed Header
		$(window).scroll(function(){
			if ($(window).scrollTop() >= 148) {
				$('.bottom-navbar').addClass('fixed-header');
			}
			else {
				$('.bottom-navbar').removeClass('fixed-header');
			}
		});

		// Show And Hidden Button Scroll Top
		$('body').append("<div class='go-top'><i class='fas fa-angle-double-up'></i></div>");
		$(window).on('scroll', function() {
			var scrolled = $(window).scrollTop();
			if (scrolled > 600)
				$('.go-top').addClass('active');
			if (scrolled < 600)
				$('.go-top').removeClass('active');
		});
		$('.go-top').on('click', function() {
			$('html, body').animate({
				scrollTop: '0',
			}, 50);
		});

		// Toggle Counter
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});


})(jQuery);

