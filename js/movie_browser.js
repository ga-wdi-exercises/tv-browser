// API Docs at:
// http://www.omdbapi.com
$("#movie-select").hide();

$("button").on("click",() => {
  const apiUrl = "http://www.omdbapi.com/?s="
  let title = $("#movie-search").val()
$.ajax({
  url: apiUrl + title,
  type: "GET",
  dataType: "json",
}).done((response) => {
  // $("body")
  response.Search.forEach(movie => {
  $("#movie-select").append(`<option value="${movie.imdbID}">${movie.Title}</option>`)
})
  $("#movie-select").show()

  $("#movie-select").change("click", (movie) => {
      debugger;
    $("#movie-detail").append(`<div "${movie.imdbID}">${movie.Title}</div>`)
  })
})
})
