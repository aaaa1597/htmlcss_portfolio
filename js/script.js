$(function () {

  /* top200でヘッダを白背景+登録ボタン表示 */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.header').addClass('header--active');
		} else {
			$('.header').removeClass('header--active');
		}
  });
  
  /* HPタイトルのアニメ処理 */
  function BgFadeAnime() {
    $('.bgLRextendTrigger').each(function() {
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight)
        $(this).addClass('bgLRextend');
      else
        $(this).removeClass('bgLRextend');
    });

    $('.bgappearTrigger').each(function() {
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight)
        $(this).addClass('bgappear');
      else
        $(this).removeClass('bgappear');
    });
  }

    /* タイトルAnim(スクロール) */
  $(window).scroll(function (){
    BgFadeAnime();
  });

  /* タイトルAnim(load) */
  $(window).on('load', function(){
    BgFadeAnime();
  });

  /* スクロールエフェクト */
  function fadeUpEffect() {
		$('.fadeUpEffect').each(function () {
			var elemPos = $(this).offset().top + 200;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight) {
				$(this).addClass('fadeUp');
			}
		});
  }
  $(window).scroll(function () {
		fadeUpEffect();
  });

  /* トレーナータブ押下 */
  var tabs = $('.trainer__tab');
  $('.trainer__tab').on('click', function() {
    $('.tab--active').removeClass('tab--active');
    $(this).addClass('tab--active');
    var index = tabs.index(this);
    $('.trainer__tab--content').removeClass('show').eq(index).addClass('show');
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation:{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }
  });

  /* FAQのアコーディオン */
  $('.faqlist dd').hide();
  $('.faqlist dt').on('click', function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle(200);
  });

  /* ページトップBtn表示/非表示 */
  var $pageTop = $('.page-top');
  $(window).scroll(function() {
    if($(this).scrollTop() > 300)
      $pageTop.fadeIn();
    else
      $pageTop.fadeOut();
  });

  /* ページトップへ戻る */
  $pageTop.on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 200);
    return false;
  });

});