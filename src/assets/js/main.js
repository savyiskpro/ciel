(function ($) {
	// loading functions

	var interval = setInterval(function () {
		if (document.readyState === 'complete') {
			clearInterval(interval);
			console.log(document.readyState);

			setTimeout(function () {
				// $(".loading-group").fadeOut(500);
				AOS.init({
					// once: true,
					// disable: 'mobile',
				});

				$('.slider-group .active-bar').css('left', $('.slider-group li.slick-active').offset().left);
			}, 500);
		}
	}, 100);

	$('.open-btn').click(function () {
		$(this).addClass('active');
		$('.loading-group video').addClass('active')
		setTimeout(function () {
			$(".loading-group").fadeOut(500);
			AOS.init({
				// once: true,
				// disable: 'mobile',
			});
		}, 500)
	})

	// header show menu click functions 
	$('.toggle-btn').click(function () {
		$('.navigation').fadeIn();
	});
	$('.close-btn').click(function () {
		$('.navigation').fadeOut();
	});

	// tab sections
	$('.tab-section li a').click(function (e) {
		e.preventDefault();
		var getImage = $(this).attr('href');
		$(getImage).addClass('active').siblings().removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
	})
	if ($(window).width() >= 767) {
		$('.navigation .colmn-text li').hover(
			function () {
				$(this).addClass('active');
				$(this).parent().addClass('active');
				var getImg = $(this).children('a').attr('data-img');
				$(getImg).addClass('active').siblings().removeClass('active');
			},
			function () {
				$(this).removeClass('active');
				$(this).parent().removeClass('active')
				// $('.navigation .colmn-img img:first').addClass('active');

			}
		)
	}

	$('.tab-section li:first,.tab-section figure img:first,.navigation .colmn-img img:first').addClass('active');

	// sldier 
	$('.slider-section').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true
	});
	$('.slider-section').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		// console.log(nextSlide);
		$('.slider-group .active-bar').css('left', $('.slider-group li.slick-active').offset().left);
	});

	// header fixed

	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('header').addClass('header-fixed');
		}
		else {
			$('header').removeClass('header-fixed');
		}
	})
})(jQuery);




