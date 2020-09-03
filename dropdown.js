$(".drop-nav").css("display", "none");

$(".mobile-menu__item").click(function() {
  if($(".drop-nav").css("display") == "none") {
    $(".drop-nav:not(:animated)", this).slideDown('fast'); 
  }else{
    $(".drop-nav:not(:animated)", this).slideUp('fast');
  }
  $(".mobile-menu ul li.mobile-menu__item").hover(function() {
    $(".drop-nav").slideUp("fast");
  });
});