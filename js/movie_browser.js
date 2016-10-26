// API Docs at:
// http://www.omdbapi.com

$('#movie-select').hide()

$(search).children().eq(1).on('click', function(e) {
  e.preventDefault()
  $('#movie-select').show()

})

$('#movie-select')
