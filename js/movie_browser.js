// API Docs at:
// http://www.omdbapi.com
$(document).ready(() => {
  $("#search").on('submit', () => {
    event.preventDefault()
    // console.log("clicked");
    let searchQuery = $("#movie-search").val()
    let url = `http://www.omdbapi.com/?s=${searchQuery}`;

    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    })
    .done((response) => {
      // console.log(response);
      $(".default").html(`<option class ="default" value="">Movies matching "${searchQuery}"...</option>`)
      // $("#movie-select").append(`<option value="">Movies matching ${searchQuery}...</option>`)
      $("#movie-select").show()
      response.Search.forEach((movie) => {
        $("#movie-select").append(`<option value="${movie.Title}">${movie.Title}</option>`)
      })
      // $(".browse").append($(`<div class='response'>Movies that match ${searchQuery}.</div>`))
    })
    .fail(() => {
      console.log("fail");
      $(".default").html(`<option class ="default" value="">Sorry, no movies found.</option>`)
()
    })
  })
})
