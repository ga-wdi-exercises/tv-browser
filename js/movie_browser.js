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
    $("#movie-select").append(`<option value="${popcorn.imdbID}">${popcorn.Title}</option>`);
    })

    $("#movie-match").append(`Movies Matching... "${userInput}"`);

    $("#movie-select").change("click", (popcorn) => {
    var displayUrl = "http://www.omdbapi.com/?i="
    $.ajax({
      url: displayUrl,
      type: "GET",
      dataType: "json"
    }).done((response) => {
      $("#movie-detail").append(displayUrl + popcorn.imdbID)
    })
  })
})
})
