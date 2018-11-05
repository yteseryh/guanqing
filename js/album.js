$(function(){
	//第一个swiper
	var mySwiper1 = new Swiper('#swiper1', {
		speed:1000,
		autoplay: {
			autoplay: true,
		    disableOnInteraction: false,
		  },
		slidesPerView : 3,
		mousewheel: true,
		spaceBetween:15
	})

	//第二个swiper
	var mySwiper2 = new Swiper('#swiper2', {
		speed:1000,
		autoplay: {
			autoplay: true,
		    disableOnInteraction: false,
		  },
		slidesPerView : 3,
		mousewheel: true,
		spaceBetween:15
	})

	//第三个swiper
	var mySwiper3 = new Swiper('#swiper3', {
		speed:1000,
		autoplay: {
			autoplay: true,
		    disableOnInteraction: false,
		  },
		slidesPerView : 3,
		mousewheel: true,
		spaceBetween:15
	})

	//第四个swiper
	var mySwiper4 = new Swiper('#swiper4', {
		speed:1000,
		autoplay: {
			autoplay: true,
		    disableOnInteraction: false,
		  },
		slidesPerView : 3,
		mousewheel: true,
		spaceBetween:15
	})

	//鼠标移入暂停轮播移出继续轮播
	$('#swiper1').mouseenter(function () {
	   mySwiper1.autoplay.stop();
	})
	$('#swiper1').mouseleave(function () {
	   mySwiper1.autoplay.start();
	})
	$('#swiper2').mouseenter(function () {
	   mySwiper2.autoplay.stop();
	})
	$('#swiper2').mouseleave(function () {
	   mySwiper2.autoplay.start();
	})
	$('#swiper3').mouseenter(function () {
	   mySwiper3.autoplay.stop();
	})
	$('#swiper3').mouseleave(function () {
	   mySwiper3.autoplay.start();
	})
	$('#swiper4').mouseenter(function () {
	   mySwiper4.autoplay.stop();
	})
	$('#swiper4').mouseleave(function () {
	   mySwiper4.autoplay.start();
	})

	//Viewer.js插件初始化
	$('#swiper1').viewer();
	$('#swiper2').viewer();
	$('#swiper3').viewer();
	$('#swiper4').viewer();
})