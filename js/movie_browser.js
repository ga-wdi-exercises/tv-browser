// API Docs at:
// http://www.omdbapi.com


$(document).ready(function(){
  $('#movie-select').hide()
  $("#search").on('submit', function(){
    event.preventDefault();
    var query = $("#movie-search").val();
    var url = "http://www.omdbapi.com/?s=" + query;
    $.getJSON(url)
    .done(function(omdb){
      var list = "<option value=''>Movies matching '" + query + "'...</option>"
      for (i = 0; i < omdb.Search.length; i++) {
        list += "<option value='" + omdb.Search[i].imdbID + "'>" + omdb.Search[i].Title + "</option>";
      }
      $('#movie-select').show().html(list);
    })
    .fail(function(){
      console.log("NOPE")
    })

    $('#movie-select').change(function(){
      console.log($(this).val());
      var url = "http://www.omdbapi.com/?i=" + $(this).val();
      $.getJSON(url)
      .done(function(omdb){
        console.log('confirmed');
        var movie = '<h2>' + omdb.Title + '</h2>' + '<img src="' + omdb.Poster + '">';
        $("#movie-detail").html(movie);
      })
      .fail(function(){
        console.log("ya broke it")
      })
    })
  })
})
