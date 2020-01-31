$(function ( ) {

	var introH = $("#header").innerHeight(),
		scrollOffset = $(window).scrollTop();


	/* Fixed header */
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll() {
		if (scrollOffset >= introH) {
			$('#menu').addClass("fixed");
		} else {
			$('#menu').removeClass("fixed");
		}
	}


	/* Smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});

	/* Button leave review */
	$("form#reviewStars-input").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$(".review-close").click();
			}, 1000);
		});
		return false;
	});

	$('#rating-button').click( function () {
		$('#review_bg').css({
			'display' : 'block',
			'opacity' : '1'
		});

		let windowHeight =  document.documentElement.clientHeight;
		let formHeihgt = $('#reviewStars-input').height();
		let formTop = (windowHeight - formHeihgt) / 2;

		$('#reviewStars-input').css({
			'display' : 'block',
			'opacity' : '1',
			'top' : formTop
		});
	});
	$('#review_bg').click(function () {
		$('#reviewStars-input').css({
			'display' : 'none',
			'opacity' : '0',
			'top' : '0'
		});

		$('#review_bg').css({
			'display' : 'none',
			'opacity' : '0'
		});
	});
	$('.review-close').click(function () {
		$('#reviewStars-input').css({
			'display' : 'none',
			'opacity' : '0',
			'top' : '0'
		});

		$('#review_bg').css({
			'display' : 'none',
			'opacity' : '0'
		});
	});

});
