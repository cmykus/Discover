$(function () {

  $('.nav-button').click(function () {
    if ($('.nav__list').css('display') == 'none') {
      $('.nav__list').slideDown();
    } else {
      $('.nav__list').slideUp();
    }

  });




});
