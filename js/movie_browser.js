// API Docs at:
// http://www.omdbapi.com



function func1(){


    var search = $("#movie-search").val()

    var url = `http://www.omdbapi.com/?s=${search}`
    console.log(url)

    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done((response) =>  {

      let movies = response.Search
      $("select").html('')
      $("#movie-select").append(`<option>Movies Matching "${search}"</option>`)

      movies.forEach((movie) => {
        $("#movie-select").append(`<option value="${movie.imdbID}">${movie.Title}</option>`)
      })



    }).fail((response) => {
      console.log("Ajax get request failed.");
    })

    }

$("#movie-select").change(function(){
  var url = `http://www.omdbapi.com/?i=${this.value}`
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) =>  {

    $("#movie-detail").empty()
      .append(`<h3>${response.Title}</h3>
                <h5>${response.Actors}</h5>
                <img src= ${response.Poster}>`)


  }).fail((response) => {
    console.log("Ajax get request failed.");
  })

})
