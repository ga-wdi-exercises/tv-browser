// API Docs at:
// http://www.omdbapi.com
$(document).ready(() => {

  let movies = []


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
      console.log(response);
      movies = response.Search
      $(".default").html(`<option class ="default" value="">Movies matching "${searchQuery}"...</option>`)

      if(response.Search) {
        $("#movie-select").show()
        response.Search.forEach((movie, index) => {
          $("#movie-select").append(`<option value="${index}">${movie.Title}</option>`)
        })
      }
      $("#movie-search").empty()
  })

})

$('#movie-select').on("change", function() {
  $(".title", "img").remove()
  let currentMovie = movies[this.value]
  $("#movie-detail").append(`<div class="title">${currentMovie.Title}</div><img src="${currentMovie.Poster}">`)
  // console.log(currentMovie)
})


})
