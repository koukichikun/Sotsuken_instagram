$(function(){  //TOP画像
    $('.slick1').slick({
        autoplay: true, //自動再生
        dots: false, //ドットのナビゲーションを表示
        infinite: true, //スライドのループ有効化
        autoplaySpeed: 2000,
        speed: 1500, //切り替えのスピード（小さくすると速くなる）
        fade: true, //フェードの有効化
        arrows: false, //矢印
    });
});

$(function(){  //TOP画像
  $('.slick2').slick({
      autoplay: true, //自動再生
      dots: true, //ドットのナビゲーションを表示
      infinite: true, //スライドのループ有効化
      autoplaySpeed: 2000,
      speed: 1500, //切り替えのスピード（小さくすると速くなる）
      fade: false, //フェードの有効化
      arrows: true, //矢印
  });
});

$(function(){  //TOP画像
  $('.slick3').slick({
      autoplay: true, //自動再生
      dots: false, //ドットのナビゲーションを表示
      infinite: true, //スライドのループ有効化
      autoplaySpeed: 2000,
      speed: 1500, //切り替えのスピード（小さくすると速くなる）
      fade: false, //フェードの有効化
      arrows: false, //矢印
  });
});

jQuery(function() {  //TOPに戻る
    var appear = false;
    var pagetop = $('#top');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {  //300pxスクロールしたら出現
        if (appear == false) {
          appear = true;
          pagetop.stop().animate({
            'right': '40px' //右から40pxの位置に
          }, 300); //0.3秒かけて現れる
        }
      } else {
        if (appear) {
          appear = false;
          pagetop.stop().animate({
            'right': '-100px' //右から-100pxの位置に
          }, 300); //0.3秒かけて隠れる
        }
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 300); //0.3秒かけてトップへ戻る
      return false;
    });
  });

  jQuery(window).scroll(function (){
    jQuery(".e").each(function(){
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi){
        jQuery(this).addClass("fadein");
      } else {
        //　スクロールで画面上部に戻った際に要素を非表示にしたい場合は、下記の行のコメントを外し有効にしてください。
        //jQuery(this).removeClass("fadein");
      }
    });
  });

$(window).resize(function () {                     // Windowサイズが変更された時
  var win = $(window).width();
  var bp = 768; //画面幅
  if (win > bp) {
      $(".openbtn1").removeClass("is-active");   // ハンバーガーアイコンを元に戻す
    }
  }
);

function copyUrl() { //現在のURLコピー
  var url = window.location.href;
  navigator.clipboard.writeText('盛岡のインスタ映えスポット!'+url);
  const button = document.getElementById('sns_button');
  
    button.textContent = 'コピー完了!';
}
