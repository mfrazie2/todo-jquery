$(document).ready(function() {
  $('.toDoText').on('click', function() {
    $(this).toggleClass('completed');
  });
  $('.submit').on('click', function(e) {
    e.preventDefault();
    handleSubmit();
  })
  
  
  function handleSubmit() {
    console.log('This is submitting the input field');
    var toDoObj = {
      text: $('#toDoField').val()
    }
    console.log(toDoObj.text);
  }
});
