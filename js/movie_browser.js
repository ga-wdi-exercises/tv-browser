// API Docs at:
// http://www.omdbapi.com

$('#movie-select').hide()

$(search).children().eq(1).on('click', function(e) {
  e.preventDefault()
  $('#movie-select').show()
  let title = $('#movie-search').val()
  let apiUrl = `http://www.omdbapi.com/?s=${title}`
  $.getJSON(apiUrl, response => {
    populateMovieSelect(response.Search)
  })
})

var populateMovieSelect = function(arr) {
  for (i = 0; i < arr.length; i++) {
    $('#movie-select').append(`<option value="${arr[i].Title}">${arr[i].Title}</option>`)
  }
}

$('#movie-select').on('change', function() {
  let apiUrl = `http://www.omdbapi.com/?t=${$('#movie-select').val()}`
  $.getJSON(apiUrl, response => {
    populateMovieDetail(response)
  })
})

var populateMovieDetail = function(res) {
  console.log(res);
  $('#movie-detail').html(`<h1>${res.Title}</h1><img src="${res.Poster}" />`)
}
