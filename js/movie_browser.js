// API Docs at:
// http://www.omdbapi.com
//http://img.omdbapi.com/?i=tt2294629&apikey=425bb1c1
//Key: 425bb1c1

var limit = 100;
var offset = 100;

$(document).ready(function(){
  $('#movie-select').hide();

  $(".submit").on('click', function(evt){
    evt.preventDefault();
    $('#movie-select').show();


    var url = "http://www.omdbapi.com/?s=" + $('#movie-search').val();
    // var url = "http://api.giphy.com/v1/gifs/search?q=" + $('.search-input').val() + "&api_key=dc6zaTOxFJmzC"
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      for(var i = 0; i<response.Search.length; i++) {
        console.log("It works!");
        //select movie by title in select field & display on screen
        $('#movie-select').append($('<option value=' + i + '>' + response.Search[i].Title + '</option>'))
}
        $('#movie-select').change(function(){
          var movieSelect = $('#movie-select').val();
          console.log(movieSelect);
            $('#movie-detail').append($('<h1>' + response.Search[movieSelect].Title + '</h1> <br>' + '<img src="' + response.Search[movieSelect].Poster + '">'));
        })

    }).fail(function(){
      console.log("Well this sux. It failed");
    }).always(function(){
      console.log("This always happens");
    })
  })
})
