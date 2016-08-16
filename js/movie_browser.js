$(document).ready(function(){
  $("#submit").on("click", function(evt){
      evt.preventDefault();

    var searchOriginal = $("#movie-search").val()
    var searchConverted = ""
    for (var i = 0; i < searchOriginal.length; i++) {
      if (searchOriginal[i] == " ") {
        searchConverted += "+"
      } else {
        searchConverted += searchOriginal[i]
      }
    }
  var searchUrl = "http://www.omdbapi.com/?s=" + searchConverted
  $.ajax({
    url: searchUrl,
    type: "get",
    dataType: "json"

  }).done(function(response){
    var imdbID = response.Search[0].imdbID
      var indexUrl = "http://www.omdbapi.com/?i=" + imdbID;
      $.ajax({
        url: indexUrl,
        type: "get",
        dataType: "json"
      }).done(function(response){
        var moviePoster = response["Poster"]
        var innerHTML = "<img src=" + moviePoster + ">"
        $("#movie-detail").html(innerHTML)
      }).fail(function(){
        alert("fail")
      })
    }).fail(function(){
    alert("ID look-up fail")
  })
})
})
