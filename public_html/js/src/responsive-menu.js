$(document).ready(function () {

$('#mobileToggle').click(function() {
  var nav = $('#mainNav');
  var newHeight = $('#mainMenu').height() + 10;
  var normalHeight = 50;

  nav.toggleClass('mobileNavOpen');

  if (nav.hasClass('mobileNavOpen')) {
    nav.height(newHeight);
  } else {
    nav.height(normalHeight);
  }
});

$(window).resize(function() {
  var windowWidth = $(window).width();
  var querie = 1200;
  var nav = $('#mainNav');
  var menuState = nav.hasClass('mobileNavOpen');
  var normalHeight = 50;

  if (windowWidth > querie && menuState) {
    nav.height(normalHeight);
    nav.removeClass('mobileNavOpen');
  }

});

});
