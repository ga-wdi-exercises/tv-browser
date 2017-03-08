let select = $('#movie-select')

$('#search').submit(e => {
  e.preventDefault()
  let input = $('#movie-search')
  let keyword = input.val()
  search(keyword)
  input.val('')
})

function search(keyword) {
  $.ajax({
    url: `http://www.omdbapi.com/?s=${keyword}`,
    type: 'get',
    dataType: 'json',
  }).done(response => {
    selectorize(keyword, response)
  })
}

function selectorize(keyword, response) {
  let movies = response.Search
  select.empty()
  select.append(`<option value="">Movies matching "${keyword}" ...</option>`)
  movies.forEach(movie => {
    select.append(`<option value="${movie.imdbID}">${movie.Title}</option>`)
  })
  select.show()
}

select.hide().change(function() {
  $.ajax({
    url: `http://www.omdbapi.com/?i=${this.value}`,
    type: 'get',
    dataType: 'json',
  }).done(response => {
    $('#movie-detail').empty()
      .append(`<h2>${response.Title}</h2>`)
      .append(`<img src="${response.Poster}" alt="'${response.Title}' poster">`)
  })
})
