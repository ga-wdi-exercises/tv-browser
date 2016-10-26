// API Docs at:
// http://www.omdbapi.com

$('#movie-select').hide()

$(search).children().eq(1).on('click', function(e) {
  e.preventDefault()
  $('#movie-select').show()
  let title = $('#movie-search').val()
  let apiUrl = `http://www.omdbapi.com/?s=${title}`
  getMovies(apiUrl)
})

// $('#movie-select')

var getMovies = function(apiUrl) {
  $.getJSON(apiUrl, response => {
    populateMovieSelect(response.Search)
  })

}

var populateMovieSelect = function(arr) {
  for (i = 0; i < arr.length; i++) {
    $('#movie-select').append(`<option>${arr[i].Title}</option>`)
  }
}
