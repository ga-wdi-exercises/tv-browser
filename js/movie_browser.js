// API Docs at:
// http://www.omdbapi.com
$('#movie-select').hide()
// $('.submit').on('click', function(){
//   $('#movie-select').show()
// })
$('.submit').on('click', () => {
  $('#movie-select').empty()
  var url = "http://www.omdbapi.com/?s="
  var keyword = $('#movie-search').val()
  $.ajax({
    url: url + keyword,
    type: "GET",
    dataType: "json",
  }).done(response =>{
response.Search.forEach(movie => {
  $('#movie-select').append(`<option>Movies matching "${keyword}"</option>`)
  $('#movie-select').append(`<option>${movie.Title}</option>`)
})
})
$('#movie-select').show()



})
