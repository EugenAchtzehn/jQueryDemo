$(document).ready(function () {
  //這是主標題、段落切換事件
  $('.button1').click(function () {
    $('h1, p').toggle();
  });
  //這是次標題事件
  $('.button2').click(function () {
    $('h2').hide();
  });
  //Slide效果
  $('.CommentButton').click(function () {
    $('.text').slideToggle();
  });
  //Fade效果
  $('.ColorButton').click(function () {
    $('.RedBlock').fadeToggle();
  });
  //使用CSS transition + 自訂toggleClass呈現效果
  $('.TransEffect').click(function () {
    $('.RedBlock').toggleClass('active');
  });
  //jQ連續技寫法
  $('.activate').click(function () {
    $('.ActBox').fadeOut(1000).fadeIn(3000);
  });
  //防止a連結自動帶入"前往網頁"事件
  $('.a_act').click(function () {
    event.preventDefault();
    $('.ActBox').slideToggle(1000);
  });
  //按下a時，叫出ul-li的項目(下拉選單)
  $('.dropdown-menu').click(function () {
    event.preventDefault();
    $('.dropdown-products').slideToggle();
    //
    $('.dropdown-menu').toggleClass('active');
    //$('.dropdown-products').toggleClass('active');
  });
  $('.colorButton').click(function () {
    $('.box1').delay().slideToggle();
    $('.box2').delay(1000).fadeToggle();
    $('.box3').delay(2000).toggle(500);
    //應用delay()搭配slide, fade, toggle等來製造依序啟動的動畫
  });

  $('.fontL').click(function () {
    event.preventDefault();
    $('.content p').css('font-size', '24px');
    //應用css()，設計字體放大縮小功能
  });
  $('.fontM').click(function () {
    event.preventDefault();
    $('.content p').css('font-size', '16px');
    //應用css()，設計字體放大縮小功能
  });
  $('.fontS').click(function () {
    event.preventDefault();
    $('.content p').css('font-size', '10px');
    //應用css()，設計字體放大縮小功能
  });

  $('.adClose').click(function () {
    event.preventDefault();
    $('.adBox').fadeOut();
    //實作一個凍結在瀏覽器左下角的廣告欄
  });

  $('.stoppable').click(function () {
    event.preventDefault();
    $('.stoppableBox').stop().slideToggle(2000);
    //實作一個可中斷動畫的效果
  });

  $('.redStripe').click(function () {
    event.preventDefault();
    $('.canvasSection').toggleClass('canvasAct');
    //實作一個移入畫布的效果，黑色區塊為平移，紅色區塊為覆蓋
  });

  $('.initAnimate').click(function () {
    event.preventDefault();
    $('.jackBox').toggleClass('jackInTheBox');
    if (document.querySelector('.initAnimate').value == 'Jack in the box!') {
      $('.initAnimate').val('再按一次重啟');
    } else {
      $('.initAnimate').val('Jack in the box!');
    }
    //引入Animate.css的動畫效果，並用if判斷式來切換button上的字樣，讓使用者了解狀態
    //可用this.value，取代document.querySelector('.initAnimate').value
  });

  $('.thisDemo li').click(function () {
    event.preventDefault();
    $(this).toggleClass('active');
    //用li的active切換，示範this只指定自身的功用
  });

  $('.addCart').click(function () {
    event.preventDefault();
    $(this).parent().toggleClass('active');
    //從this找到其對應的父元素，使其切換active狀態
  });

  $('.siblingDemo li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    //用siblings()找到同層的元素，載入自己的動畫，並移除同層的動畫
  });

  $('.findDemo li').click(function (e) {
    e.preventDefault();
    $(this).find('h3').toggleClass('active');
    //使用find('selector')，讓點擊父元素時可以在子元素上產生動畫
  });

  $('.question').click(function (e) {
    e.preventDefault();
    $(this).find('h3').toggleClass('active').parent().siblings().find('h3').removeClass('active');
    //讓子元素h3切成active，並取消其他同層h3的active
    $(this).find('p').toggleClass('active').parent().siblings().find('p').removeClass('active');
    //打開原先隱藏的p元素，並關閉其他打開的p元素
  });

  $('.doubleLayerDemo > li > a').click(function (e) {
    //用>選定元素，只針對該層直接影響
    e.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    //回到上層，找到其他一階表單頭，將其下的ul關閉
    $(this).parent().find('ul').slideToggle();
    //回到上層，找到同階的ul，將打開
  });

  $('.doubleLayerDemo a').click(function (e) {
    e.preventDefault();
    //防止第二層表單的<a>造成的行為
  });

  $('.insertDemo').html(
    '哈哈，<a style="color:red">你找不到我。</a><em style="background:orange"></em>'
  );
  $('.insertDemo em').text('我是html()創造的<em>');
  $('.insertDemo2 em').text('#MeThree');
  //用html(), text()將html和文字塞入指定的tag下

  $('.onDemo').on('click', 'h3', function () {
    alert('效果成功！');
  });
  $('.onDemo2').html('<h3>由jQ寫入的h3，按我測試</h3>');
  //jQ寫入一個h3，且放於on()之後，以測試on()的監聽效果

  $('.attrBtn').on('click', function () {
    if ($(this).val() == '圖片給我變大') {
      $('.minuteman').attr('width', '200');
      $(this).val('好了，縮小');
    } else {
      $('.minuteman').attr('width', '50');
      $(this).val('圖片給我變大');
    }
  });
  //利用jQ的attr()來設定img標籤的寬度值

  $('.removeBtn').on('click', function () {
    $(this).parent().parent().remove();
  });
  //用jQ讓位於td(table division)下的btn，刪除隔兩層的父元素(table row)

  $('.backToTop a').on('click', function () {
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      700
    );
  });
  //用animate實作回到頁頂的功能

  $('.fontAwesomeDemo a[href$=".pdf"]').addClass('fas fa-file-pdf');
  $(".fontAwesomeDemo a[href$='.png']").addClass('fas fa-file-image');
  //讓fontAwesome自動偵測a連結類型，並加上相關圖片

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    //首尾循環
  });
  //燈箱客製化效果

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters

    //direction: 'vertical'
    //direction default為水平輪播

    speed: 400,
    //跳到下一張的動畫長度

    loop: true,
    //true=首尾相連

    autoplay: {
      delay: 3000,
    },
    //自動播放，每三秒換一次

    effect: 'coverflow',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  // $('#slick-sec').slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // });

  $('#slick-sec').slick({
    infinite: true,
    // 每次同時顯示多少 slide
    slidesToShow: 3,
    // 每次捲動移動幾張 slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.single-slick-container').slick();
});
