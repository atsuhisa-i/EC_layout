$(".plus-icon").on("click", function() {
  $(".size-spec-open").slideToggle();
});

var itemHeights = [];
var returnHeight;

$(function(){
  $(".explain-content").each(function(){ //ターゲット(縮めるアイテム)
    itemHeights.push(thisHeight); //それぞれの高さを配列に入れる
    $(this).addClass("is-hide"); //CSSで指定した高さにする
    returnHeight = $(this).height(); //is-hideの高さを取得
  });
});

$(".readmore").click(function(){ //トリガーをクリックしたら
  if(!$(this).hasClass("is-show")) {
    var index = $(this).index(".readmore"); //トリガーが何個目
    var addHeight = itemHeights[index]; //個数に対応する高さを取得
    $(this).addClass("is-show").prev().animate({height: addHeight},200).removeClass("is-hide"); //高さを元に戻す
  } else {
    $(this).removeClass("is-show").prev().animate({height: returnHeight},200).addClass("is-hide"); //高さを制限する
  }
});