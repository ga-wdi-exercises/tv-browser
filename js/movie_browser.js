// API Docs at:
// http://www.omdbapi.com
$("#movie-select").hide()
$(".submit").on("click", function(event){
  event.preventDefault()
  let search = $("#movie-search").val()
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `http://www.omdbapi.com/?s=${search}`
  }).done((response) => {
    console.log(response)
    let movies = response.Search
    $('select').html('')
    movies.forEach((movie) => {
      $('select').append(`<option value=${movie.imdbID}>${movie.Title}</option>`)
    })
  }).fail((response) => {
    console.log(response)
    })
    $('select').show()
  });

$("#movie-select").on("change", function () {
  let search = $("select").val()
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: `http://www.omdbapi.com/?i=${search}`
  }).done((response) => {
    $('#movie-detail').html('')
    $('#movie-detail').append(
      `<h3>${response.Title}</h3><img src="${response.Poster}">`
    )
  }).fail((response) => {
    console.log(response)
  })
})
