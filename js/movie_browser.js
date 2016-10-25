// API Docs at:
// http://www.omdbapi.com

$('button').on('click', () => {
  let search = $('#movie-search').val()
  $.ajax({
    url: `http://www.omdbapi.com/?s=${search}`,
    type: "GET",
    dataType: "json"
  }).done((response) => {
    let movies = response.Search
    $('select').html('')
    movies.forEach((movie) => {
      $('select').append(`<option value=${movie.imdbID}>${movie.Title}</option>`)
    })
  }).fail((response) => {
    console.log(response)
  })
  $('select').show()
})

$('#movie-select').on('change', function() {
  let search = $(this).val()
  $.ajax({
    url: `http://www.omdbapi.com/?i=${search}`,
    type: "GET",
    dataType: "json"
  }).done((response) => {
    $('#movie-detail').html('')
    $('#movie-detail').append(
      `<h2>${response.Title}</h2><img src="${response.Poster}">`
    )
  }).fail((response) => {
    console.log(response)
  })
})
