$(function(){
	//手机端顶部导航页点击收起
	$(".nav li:gt(5)").on("click",function(){
		$("#bs-example-navbar-collapse-1").removeClass('in')
	})

	//第一个swiper
	var mySwiper1 = new Swiper('#swiper1', {
		speed:1000,
		autoplay: {
			autoplay: true,
		    disableOnInteraction: false,
		  },
		loop : true,
		effect : 'cube',
		pagination: {
			el: '.swiper-pagination',
			clickable :true,
		},
		mousewheel: true,
		lazy: {
			loadPrevNext: true,
		}
	})
	//如果你在swiper初始化后才决定使用clickable，可以这样设置
	mySwiper1.params.pagination.clickable = true ;
	//此外还需要重新初始化pagination
	mySwiper1.pagination.destroy()
	mySwiper1.pagination.init()
	mySwiper1.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');

	//搜索按钮
	$(".submit").on("click",function(){
		alert("搜索功能暂时未启用")
	})


	//滑轮滚动固定
	var owidth = $(document.body).width()
	if(owidth>1000){
		var aboutmeOffset=$(".aboutme").offset().top;
		var backOffset=$(".backtop").offset().top;
		var aboutmeHeight = $(".aboutme").height()

	    $(window).scroll(function(){
	        var scrollPos=$(window).scrollTop();
	        var myHeight = scrollPos - aboutmeOffset;
	        if(scrollPos >=aboutmeOffset-250){
	        	$(".aboutme").css("top",myHeight+250)
	        	$(".backtop").css("top",myHeight+aboutmeHeight)
	        }else{
	        	$(".aboutme").css("top",0)
	        	$(".backtop").css("top","100")
	        }
	    })
	}

	//返回顶部功能
	$(".backtop").on("click",function(){
		$("html,body").animate({scrollTop:0}, 1000)
	})

	//点击下滑功能
	var worksHeight = $(".works").offset().top+100;
	var courseHeight = $("#course").offset().top+100;
	var meHeight = $(".aboutme").offset().top;

	$("#person").on("click",function(){
		$("html,body").animate({scrollTop:worksHeight}, 1000)
	})
	$("#study").on("click",function(){
		$("html,body").animate({scrollTop:courseHeight}, 1000)
	})
	$("#aboutme").on("click",function(){
		$("html,body").animate({scrollTop:meHeight}, 1000)
	})

	//初始化插件
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
		(function(){
			window.scrollReveal = new scrollReveal({reset: true});
		})();
	};
})