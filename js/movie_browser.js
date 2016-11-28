// API Docs at:
// http://www.omdbapi.com

var app = angular.module("Movie", []);
app.controller("MovieController", function(){
  this.findMovie = function (){
    let searchTerm = $("#movie-search").val();

    $("#movie-select").removeClass("hidden");
    $("#movie-select").empty().append('<option>Movies matching "' + searchTerm + '"</option>');

    let ajaxUrl = "http://www.omdbapi.com/?s=" + searchTerm;

    $.ajax({
      url: ajaxUrl,
      type: 'get',
      dataType: 'json'
      }).done((response) => {
        response.Search.forEach(function(movie){
          $("#movie-select").append('<option>'+movie.Title+'</option>')
        })

        $("#movie-select").on("change", () => {

          let selectedMovie = $("#movie-select").val()

            for (i=0; i < response.Search.length; i++) {
              if (response.Search[i]["Title"] == selectedMovie) {
                $("#movie-detail").empty().append('<h2>'+response.Search[i]["Title"]+'</h2><img src="'+response.Search[i]["Poster"]+'" />');
              }
            }
        })
      })
  }
})
