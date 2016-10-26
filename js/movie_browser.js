// API Docs at:
// http://www.omdbapi.com

$(search).children().eq(1).on('click', function(e) {
  e.preventDefault()
  $('#movie-select').removeClass("hidden")
})
