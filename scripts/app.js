$(document).ready(function() {
  $('.toDoText').on('click', function() {
    $(this).toggleClass('completed');
  });
});