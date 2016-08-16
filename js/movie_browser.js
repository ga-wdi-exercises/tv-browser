// API Docs at:
// http://www.omdbapi.com


$(document).ready(function(evt) {

  $("input[type=submit]").on("click", function(evt) {
    evt.preventDefault();

    $("#movie-select").css("visibility", "visible");

    var searchInput = $("#movie-search").val();
    searchMovies(searchInput);
    function searchMovies(searchInput) {
      $.ajax({
        url: 'http://www.omdbapi.com/?s='+searchInput+'',
        type: "get",
        dataType: "json"
      }).done(function(response) {
        for (var i = 0; i < response.Search.length; i += 1) {
          console.log(response.Search[i].Title);
          $("#movie-select").append('<option value="'+response.Search[i].Title+'">'+response.Search[i].Title+'</option')
        }

      }).fail(function() {

      }).always(function() {

      })



    }

  })
})

// http://www.omdbapi.com/?s=
