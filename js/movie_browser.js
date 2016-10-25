// Is there a better way to save the query data for later?
var results = {}

$('#search').on('submit', (e) => {
  e.preventDefault()
  let searchText = $('#movie-search').val();
  let url = `http://www.omdbapi.com/?s=${searchText}`
  console.log(url);
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((data) => {
    console.log("Ajax request success!")
    populatePicker(data, searchText);
  }).fail(() => {
    console.log("Ajax request fails!")
  })
})

let $movieSelect = $('#movie-select')

$movieSelect.on('change', (e) => {
  let i = $movieSelect.val();
  let movie = results[i]
  let heading = `<h1>${movie.Title}</h1>`
  let poster = `<img src='${movie.Poster}' alt='${movie.Title}' poster>`
  let movieDetails = $(heading + poster)
  $('#movie-detail').html(movieDetails)
})

function populatePicker(data, search){
  results = data.Search;
  console.log(results);
  let $picker = $movieSelect
  $picker.children().remove()
  $picker.append($(`<option value=''>Movies matching ${search}</option>`))
  $movieSelect.show()
  results.forEach((movie, i) => {
    let title = movie.Title;
    let index = i;
    let option = $(`<option value='${index}'>${title}</option>`)
    $picker.append(option)
  })
}
