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
    $('#movie-select').append(`<option>Movies matching "${keyword}"</option>`)
response.Search.forEach(movie => {
  console.log(movie)
  $('#movie-select').append(`<option value="${movie.imdbID}">${movie.Title}</option>`)

})
})
$('#movie-select').show()

$('#movie-select').on('change',function(){
  var selected = $('#movie-select').find(":selected")
  // $('#movie-detail').append(selected.val())
  var id = selected.val()
  var idurl = "http://www.omdbapi.com/?i=" + id
  $.ajax({
    url: idurl,
    type: "GET",
    dataType: "json",
  }).done((response) =>{
    $('#movie-detail').append(response.Title);
    var x = response.Poster
    console.log(x)
    $('#movie-detail').append('<img src="${response.Poster}">');


  }).fail(() => {
    console.log("Failed")
  })
})

// var iurl ="http://www.omdbapi.com/?i="
// var id = seleced.val()
// $.ajax({
//   finalurl: iurl + id
//   console.log(finalurl)
// })
})
