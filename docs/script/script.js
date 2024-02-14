console.clear();

// pc 기능
function SliderBox1__init() {
	let SliderBox1__idx = 0;

	setInterval(function() {
		$('.notice-line .notice-line__con .notice-line__left-text .notice-line__inner-text-l .slider-box-1').attr('data-index', ++SliderBox1__idx % 3);
	}, 3000);
}

SliderBox1__init();

// 모바일 기능
// notice 슬라이더 기능
function SliderBox2__init() {
	let SliderBox1__idx = 0;

	setInterval(function() {
		$('.mob-notice-line .mob-notice-line__con .mob-notice-line__left-text .mob-notice-line__inner-text-l .slider-box-1').attr('data-index', ++SliderBox1__idx % 3);
	}, 3000);
}

SliderBox2__init();

// footer 슬라이드 기능
function SliderBox3__init () {
	let SliderBox1__idx = 0;

	setInterval(function() {
		$('.mob-footer__award-wrap-con .mob-footer__award-wrap-slide-box-1').attr('data-index', ++SliderBox1__idx % 7);
	}, 4000);
}

SliderBox3__init ();