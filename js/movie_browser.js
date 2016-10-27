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
      var selectedOption = $("#movie-select").val()
      $.ajax({
        url: displayUrl + selectedOption,
        type: "GET",
        dataType: "json"
      }).done((response) => {
        $("#movie-detail").append(`<h2>${response.Title}</h2><img src="${response.Poster}">`)
        console.log(response);
      })
    })
  })
})

// $.getJSON(`http://www.omdbapi.com/?s=${this.userInput}`)
// is the same as using
// $.ajax
