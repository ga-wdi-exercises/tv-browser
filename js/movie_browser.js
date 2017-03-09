// API Docs at:
// http://www.omdbapi.com

function search(searchQuery) {
  let url = `http://www.omdbapi.com/?s=${searchQuery}`
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
    })
  .done((response) => {
    $("#movie-select").show().html("").append(`<option value="">Movies matching "${searchQuery}"...</option>`)
    response.Search.forEach((movie,i) => {
      $("#movie-select").append(`<option value="${movie.imdbID}">${movie.Title}</option>`)
    })
  })
  .fail(() => {
  })
}
$('#search').on('submit', function(event) {
  event.preventDefault();
  $("#movie-search").val() ?
    search($("#movie-search").val())
    : ""
  $("#movie-search").val("")
});
$('#movie-select').hide().on('change', function() {
  let url = `http://www.omdbapi.com/?i=${this.value}`
  this.value ?
    ($.ajax({
      url: url,
      type: "get",
      dataType: "json"
    })
    .done((response) => {
      $("#movie-detail").html(`<h2>${response.Title}</h2><img src="${response.Poster}">`)
    })
  )
    : ""
});
