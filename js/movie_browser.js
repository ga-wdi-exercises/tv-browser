// API Docs at:
// http://www.omdbapi.com
let movieSelect = $("#movie-select")
movieSelect.hide();

$("#search").submit(function(e) {
  e.preventDefault();
  var title = $("#movie-search").val();
  var url = "http://www.omdbapi.com/?t=" + title;
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done(function(response) {
    console.log(response)
    movieSelect.show();

  }).fail(function() {
    console.log("We are currently experiencing technical difficulties. Please try again later.");
  }).always(function() {
    console.log("Thank you for using OMDb");
  })
})
