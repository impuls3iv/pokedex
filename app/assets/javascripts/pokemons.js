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
    }).done(function(responseData){
      var source = $('#entry-template').html(); //get the template html
      var template = Handlebars.compile(source); //compile template to use
      var output = template(responseData); //load the data into the template
      $('#pokebox').html('');
      $('#pokebox2').html('');
      $('#pokebox').html(output); //append the template to the div
    }).fail(function(){
      console.log("You fucked something up for sure...");
    });
  });

  $('.pokelink2').on('click', function(e){
    e.preventDefault();

    $.ajax({
      url: $(this).attr('href'),
      method: 'GET',
      data: { },
      dataType: 'json'
    }).done(function(responseData){
      $('#pokebox').html('');
      var source = $('#entry-template2').html();
      var template = Handlebars.compile(source);
      var output = template(responseData);
      $('#pokebox2').html(output);
    }).fail(function(){
      console.log("something messed up");
    });
  });
});
