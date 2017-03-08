let select = $('#movie-select')

select.hide()

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
  select.append(`<option value="">Movies matching "${search}" ...</option>`)
  movies.forEach(movie => {
    select.append(`<option value="${movie}">${movie.Title}</option>`)
  })
  select.show()
}

// .fail(() => {
//   console.log("Ajax request fails!")
// }).always(() => {
//   console.log("This always happens regardless of successful ajax request or not.")
// })
