function parallax(event) {

	this.querySelectorAll('.layers').forEach(layer => {
		let speed = layer.getAttribute('data-speed');
		layer.style.transform = `translateY(${event.clientY*speed/1000}px) translateX(${event.clientX*speed/1000}px)`
	});

}

document.addEventListener('mousemove', parallax);
$(function() {
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

});