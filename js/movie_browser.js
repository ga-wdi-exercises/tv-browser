// API Docs at:
// http://www.omdbapi.com

$("#movie-select").hide();

$("button").on("click", () => {
  var apiUrl = "http://www.omdbapi.com/?s="
  var userInput = $("#movie-search").val()
  $.ajax({
    url: apiUrl + userInput,
    type: "GET",
    dataType: "json"

  }).done((response) => {
    console.log(response)
    $("#movie-select").show();
    response.Search.forEach(popcorn => {
      $("#movie-select").append(`<option>${popcorn.Title}</option>`);
    })
    $("#movie-match").append(`Movie Matching...${userInput}`);


  }).fail(() => {
    console.log("ajax fail");
  })
})
