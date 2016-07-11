// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $('.pokelink').on('click', function(e){
    e.preventDefault();

    $.ajax({
      url: $(this).attr('href'),
      method: 'GET',
      data: { },
      dataType: 'json'
    });
  });
});
