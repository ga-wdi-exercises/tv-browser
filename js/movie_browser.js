// API Docs at:
// http://www.omdbapi.com

angular
  .module("movieBrowser", [])

  .controller("MoviesController", [
    MoviesControllerFunction
  ])

function MoviesControllerFunction () {

}
$('#movie-select').hide().on('change', function() {
  show(this.value);
});

$.ajax ({
  url: "http://www.omdbapi.com/?",
  type: "get",
  dataType: "json"
})
