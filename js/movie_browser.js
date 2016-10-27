// API Docs at:
// http://www.omdbapi.com

$(".submit").on("click", function(e){
  e.preventDefault()
  let search = $('#movie-search').val()
  $.ajax({
    url: `http://www.omdbapi.com/?s=${search}`,
    type: "get",
    dataType: "json"
  }).done(function(response){
    let movies = response.Search
    movies.forEach(function(movie){
      console.log(`${movie.Poster}`);
      $('#movie-select').show();
      $('#movie-select').append( $("<option>").val(`${movie.Title}`).html(`${movie.Title}`));
    })
    })
  })

  $("#movie-select").on("change", function(){
    let search = $("#movie-select").val()
    $("body").append(`<div>${search}</div>`)
    //my instinct here is to do a second ajax call...that doesn't seem right?
    $("body").append(`<img src="${movie.Poster}"> </img>`)

    console.log(search);
})
