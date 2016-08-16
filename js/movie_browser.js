// API Docs at:
// http://www.omdbapi.com


$(document).ready(function(evt) {

  $("input[type=submit]").on("click", function(evt) {
    evt.preventDefault();
    $("#movie-select").empty();
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
          $("#movie-select").append('<option value="'+response.Search[i].Title+'">'+response.Search[i].Title+'</option');
        }
        $("#movie-select").on("change", function(e) {
          $("#movie-detail").empty();
          var optionSelected = $("option:selected", this);
          var valueSelected = this.value;
          var movieObject = response.Search.
          $("#movie-detail").append('<h1>'+valueSelected+'</h1>');
          $("#movie-detail").append('<img src="'+valueSelected.Poster+'"/>');
        })
      }).fail(function() {

      }).always(function() {

      })
    }
  })
})
