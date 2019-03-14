$(document).ready(function(){
	//這是主標題、段落切換事件
	$('.button1').click(function(){
		$('h1, p').toggle();
	});
	//這是次標題事件
	$('.button2').click(function(){
		$('h2').hide();
	});
	//Slide效果
	$('.CommentButton').click(function() {
		$('.text').slideToggle();
	});
	//Fade效果
	$('.ColorButton').click(function() {
		$('.RedBlock').fadeToggle();
	});
	//使用CSS transition + 自訂toggleClass呈現效果
	$('.TransEffect').click(function() {
		$('.RedBlock').toggleClass('active');
	});
	//jQ連續技寫法
	$('.activate').click(function() {
		$('.ActBox').fadeOut(1000).fadeIn(3000);
	});
	//防止a連結自動帶入"前往網頁"事件
	$('.a_act').click(function() {
		event.preventDefault();
		$('.ActBox').slideToggle(1000);
	})
	//按下a時，叫出ul-li的項目(下拉選單)
	$('.dropdown-menu').click(function() {
		event.preventDefault();
		$('.dropdown-products').slideToggle();
		//
		$('.dropdown-menu').toggleClass('active');
		//$('.dropdown-products').toggleClass('active');
	})
	$('.colorButton').click(function() {
		$('.box1').delay().slideToggle();
		$('.box2').delay(1000).fadeToggle();
		$('.box3').delay(2000).toggle(500);
		//應用delay()搭配slide, fade, toggle等來製造依序啟動的動畫
	})

	$('.fontL').click(function(){
		event.preventDefault();
		$('.content p').css('font-size','24px');
		//應用css()，設計字體放大縮小功能
	})
	$('.fontM').click(function(){
		event.preventDefault();
		$('.content p').css('font-size','16px');
		//應用css()，設計字體放大縮小功能
	})
	$('.fontS').click(function(){
		event.preventDefault();
		$('.content p').css('font-size','10px');
		//應用css()，設計字體放大縮小功能
	})

	$('.adClose').click(function() { 
		event.preventDefault();
		$('.adBox').fadeOut();
		//實作一個凍結在瀏覽器左下角的廣告欄		
	});

	$('.stoppable').click(function() { 
		event.preventDefault();
		$('.stoppableBox').stop().slideToggle(2000);
		//實作一個可中斷動畫的效果
	});
	
	$('.redStripe').click(function() { 
		event.preventDefault();
		$('.canvasSection').toggleClass('canvasAct');
	});


});