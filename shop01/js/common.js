$(function() {


	$('.quantity-bottom').click(function () {
		let action = $(this).data('action');
		let prodID = $(this).data('prod-id');
		let quantityInput = $('#' + prodID);
		let quantity = quantityInput.val();

		if (action == 'increase') {
			quantityInput.val(++quantity);
		} else {
			quantityInput.val(--quantity);
		}
	});


	$('.burger-button').click(function () {
		$('.mobile-menu__block').css('display', 'block');
		$('.window-overlay').css('display', 'block');
		$('.mobile-menu').css('display', 'block');
	});
	$('.mobile-menu__close').click(function () {
		$('.mobile-menu__block').css('display', 'none');
		$('.window-overlay').css('display', 'none');
		$('.mobile-menu').css('display', 'none');
	});
	$('.window-overlay').click(function () {
		$('.mobile-menu__block').css('display', 'none');
		$('.window-overlay').css('display', 'none');
		$('.mobile-menu').css('display', 'none');
	});
	$('.sub-menu > a').click(function () {
		let subMenu = $(this).parent();
		let subMenuList = subMenu.children('.sub-menu__list');

		if (subMenuList.is(':hidden')) {
			subMenuList.css('display', 'block');
		} else {
			subMenuList.css('display', 'none');
		}
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		slidesPerRow: 8,
		autoplay: false,
		infinite: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: true,
		slidesPerRow: 8,
		autoplay: false,
		infinite: false,
		focusOnSelect: true
	});
	$('a[data-slide]').click(function (e) {
		e.preventDefault();
		var slideno = $(this).data('slide');
		$('.slider-nav').slick('slickGoTo', slideno - 1);
	});


	$('.uncycle').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		infinite: false,
		dots: true,
		zIndex: 10000,
		arrows: true,
		speed: 350,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]

	});

	$('.slider-logos').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: false,
		zIndex: 10000,
		arrows: true,
		speed: 350,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},

			{
				breakpoint: 650,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]

	});

	$('.category').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		infinite: false,
		zIndex: 10000,
		arrows: true,
		speed: 350

	});

	$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
		if (!$(this).next().hasClass('show')) {
			$(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
		}
		var $subMenu = $(this).next('.dropdown-menu');
		$subMenu.toggleClass('show');


		$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
			$('.dropdown-submenu .show').removeClass('show');
		});


		return false;
	});


	$(".polzunok-5").slider({
		min: 0,
		max: 2899,
		values: [10, 1900],
		range: true,
		animate: "fast",
	});

	$("#customRange1").slider({
		min: 0,
		max: 5000,
		values: [10, 3500],
		range: true,
		animate: "fast",
	});

	$('#nav-filter').click(function () {
		$('.mobile-menu-close').css('display', 'block');
		$('.window-background').css('display', 'block');
		$('#leftsidebar').css('display', 'block');
	});
	$('.mobile-menu-close').click(function () {
		$('.window-background').css('display', 'none');
		$('#leftsidebar').css('display', 'none');
		$('.mobile-menu-close').css('display', 'none');

	});
	$('.window-background').click(function () {
		$('.window-background').css('display', 'none');
		$('#leftsidebar').css('display', 'none');
		$('.mobile-menu-close').css('display', 'none');
	});




});