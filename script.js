$(function() {
  // Write the jquery to  fill in the span when you hover one of the span.
  $("span").hover(function () {
    $(this).addClass('filled')
  })

  // Write the jQuery to clear all drawings when the user clicks the clear button
  $('.clear').click(function () {
    $('span').removeClass('filled')
  })
});