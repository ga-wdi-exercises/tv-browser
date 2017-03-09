// API Docs at:
// http://www.omdbapi.com

$('#search').submit(e =>{
  e.preventDefault();
  let input = $('#movie-search').val()
  //clear here?
  searchForMovie(input)
});

function searchForMovie(input){
  $.ajax({
    url: `http://www.omdbapi.com/?s=${input}`,
    type: 'GET',
    dataType: 'json',
  }).done(response => {
    select(input, response)
  })
}

function select(input, response){
  let results = response.Search

  let movie = $('#movie-select')
  movie.empty()
  movie.append(`<option value="">Movies that match "${input}"</option>`)
  results.forEach(movieN => {
    movie.append(`<option value = "${movieN.imdbID}">${movieN.Title}</option>`)
  })
  movie.show()
}

$('#movie-select').hide().change(function() {
  $.ajax({
    url: `http://www.omdbapi.com/?i=${this.value}`,
    type: 'GET',
    dataType: 'json',
  }).done(response => {
    $('#movie-detail').empty()
      .append(`<h2>${response.Title}</h2>`)
      .append(`<img src="${response.Poster}">`)
  })

})
