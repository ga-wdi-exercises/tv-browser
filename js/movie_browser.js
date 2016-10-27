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
