// API Docs at:
// http://www.omdbapi.com
$( document ).ready(function() {
  console.log( "ready!" );
});

//on form submit this function runs two other functions
function myFunction1(){
  myFunction();
  runFunction();
}

//changes the div display
function myFunction(){

  $("#movie_select").css("display", "inline-block");
  $("#movie_detail").css("display", "inline-block");
}


function runFunction(){
  // assign a variable to the search val and use that for the url
  var search = $("#movie_search").val()
  let url = `http://www.omdbapi.com/?s=${search}`
  // console.log(url);
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"

  }).done((response) => {
    console.log(response);
    movies = response.Search
    $("select").html('')
    $('#movie_select').append(`<option> Movies matching "${search}" </option>`)

    //for each movie get the IMDbid as title and append it to the div
    movies.forEach((movie)=> {

      $('#movie_select').append(` <option value="${movie.imdbID}">${movie.Title}</option>`);
      // .append(` <option value="${movie}">${movie.Title}</option>`).hide();
      //  id = movie.id
      // $('#movie_detail').append(`<option>${movie.Title}</option>`);

    });

    // $('#movie_detail').append(`${movies[1].title}`);
    // });

    console.log("Ajax request success!")
    // console.log(`this is the movie ${response.Search[0]}`);
  }).fail(() => {
    console.log("Ajax request fails!")


  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
}
$("#movie_select").change(function() {

  $.ajax({
    //on click use that IMDb value to look for a json data
    url: `http://www.omdbapi.com/?i=${this.value}`,
    type: 'get',
    dataType: 'json',
  }).done(response =>{
    console.log(response);
    $('#movie_detail').empty()
    .append(`<h1>${response.Title}</h1>`)
    .append(`Actors:<h2>${response.Actors}</h2>`)
    .append(`<img src="${response.Poster}" alt="poster image">`);
  })
})
