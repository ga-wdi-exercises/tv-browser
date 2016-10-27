// API Docs at:
// http://www.omdbapi.com
$("#movie-select").hide()
$(".submit").on("click", function(event){
  event.preventDefault()
  let search = $('#movie-search').val()


  $.ajax({
    type: "get",
    dataType: "json",
    url: `http://www.omdbapi.com/?s=${search}`
  }).done((response) => {
    let movies = response.Search
    $('select').html('')
    movies.forEach((movie) => {
      $('select').append(`<option value=${movie.IMDbID}>${movie.Title}</option>`)
    })
});

    $('#movie-select').on('change', function() {
    let searchMe = $(this).val()
    $.ajax({
      url: `http://www.omdbapi.com/?i=${searchMe}`,
      type: "GET",
      dataType: "json"
    }).done((response) => {
      $('#movie-detail').html('')
      $('#movie-detail').append(
        `<h2>${response.Title}</h2><img src="${response.Poster}">`
      )
    }).fail((response) => {
      console.log(response)
    })
  })
})
