// API Docs at:
// http://www.omdbapi.com
$(document).ready(() => {

  $("#movie-select").hide().on('change', function(){

  });



  $(".submit").on("click", () => {
    event.preventDefault();

    let search = $("#movie-search").val();
    let url = `http://www.omdbapi.com/?s=${search}`

    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done((response) => {
      let movies = response.Search
      $("select").html('')
      movies.forEach((movie) => {
        $("#movie-select").append(`<option value="${movie.imdbID}">${movie.Title}</option>`)
        // $("#movie-detail").change(() => {
        //   let optionSelected = $("option:selected", this);
        // }).html(`<h2>${optionSelected.Title}</h2>`)
      })
    }).fail((response) => {
      console.log("Ajax failed");
    })
  $("#movie-select").show().html()
  })
})
