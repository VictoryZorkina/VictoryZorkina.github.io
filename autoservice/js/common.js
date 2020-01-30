$(document).ready(function() {


	$(".ms_item_wrap ul").each(function () {
		$(this).after("<div class='ms_item_wrap_af'></div>");
	});
	$(".ms_toggle").click(function () {
		if ($(this).parent().parent().children("ul").is(":visible")) {
			$(this).parent().parent().children("ul").slideUp();
			$(this).parent().parent().children(".ms_item_wrap_af").hide();
		} else {
			$("body .ms_wrap .ms_item_wrap > ul, .ms_item_wrap_af").hide();
			$(".ms_item_wrap").removeClass("active");
			$(this).parent().parent().addClass("active");
			$(this).parent().parent().children("ul").slideDown();
			$(this).parent().parent().children(".ms_item_wrap_af").show(0);
			}
	});




	//Stellar - Parallax Plugin
	//Документация: https://github.com/markdalgleish/stellar.js
	//HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".content_item, .sb_content > div";
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();



	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});





	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form#callback-pop").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$(".mfp-close").click();
			}, 1000);
		});
		return false;
	});

	$('.callback').click(function () {
		$('#holder_block').css({
			'display' : 'block',
			'opacity' : '1'
		});

		let windowHeight =  document.documentElement.clientHeight;
		let formHeihgt = $('#callback-pop').height();
		let formTop = (windowHeight - formHeihgt) / 2;

		$('#callback-pop').css({
			'display' : 'block',
			'opacity' : '1',
			'top' : formTop
		});
	});

	$('#holder_block').click(function () {
		$('#callback-pop').css({
			'display' : 'none',
			'opacity' : '0',
			'top' : '0'
		});

		$('#holder_block').css({
			'display' : 'none',
			'opacity' : '0'
		});
	});

	$('.mfp-close').click(function () {
		$('#callback-pop').css({
			'display' : 'none',
			'opacity' : '0',
			'top' : '0'
		});

		$('#holder_block').css({
			'display' : 'none',
			'opacity' : '0'
		});
	});

	
});

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
};
$(document).ready(function() {
	resizeWindow();
});
$(window).bind("resize", function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);