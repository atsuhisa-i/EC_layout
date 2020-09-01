$(function() {
  $(".mobile-menu__item").click(function() {
    $(".drop-nav:not(:animated)", this).slideDown();
  }, function() {
    $(".drop-nav:not(:animated)", this).slideUp();
  });
});