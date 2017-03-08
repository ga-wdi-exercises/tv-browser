$('#search').submit(e => {
  e.preventDefault()
  let input = $('#movie-search')
  let search = input.val()
  request(search)
  input.val('')
})

function request(search) {
  $.ajax({
    url: `http://www.omdbapi.com/?s=${search}`,
    type: 'get',
    dataType: 'json',
  }).done(response => {
    selectorize(response)
  }).fail(() => {
    console.log("Ajax request fails!")
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
}

function selectorize(response) {
  let movieArray = response.Search;
  movieArray.forEach(movie => {
    console.log(movie.Title)
  })
}
