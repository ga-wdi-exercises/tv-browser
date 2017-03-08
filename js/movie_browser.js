// API Docs at:
// http://www.omdbapi.com
$( document ).ready(function() {
    console.log( "ready!" );
});


function myFunction1(){
    myFunction();
    runFunction();
}
function myFunction(){

    $("#movie_select").css("display", "inline-block");
    $("#movie_detail").css("display", "inline-block");
}


function runFunction(){
  // Make sure to add your API key to the URL!
  var search = $("#movie_search").val()
  let url = `http://www.omdbapi.com/?s=${search}`
  console.log(url);
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done((response) => {
    console.log(response);
     movies = response.Search
    $("select").html('')
      $('#movie_select').append(`<option> Movies matching "${search}" </option>`)
    movies.forEach((movie)=> {

      $('#movie_select').append(` <option value="${movie}">${movie.Title}</option>`)
                        .append(` <option value="${movie.imdbID}">${movie.Title}</option>`);
    //  id = movie.id
      // $('#movie_detail').append(`<option>${movie.Title}</option>`);

    });

    // $('#movie_detail').append(`${movies[1].title}`);
  // });

    console.log("Ajax request success!")
    console.log(`this is the movie ${response.Search[0]}`);
  }).fail(() => {
    console.log("Ajax request fails!")


  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
}
$("#movie_select" ).hide().change(function() {


$.ajax({
  url: `http://www.omdbapi.com/?i=${this.value}`,
  type: 'get',
  dataType: 'json',
}).done(response =>{
console.log(response);
$('#movie_detail').empty()
                  .append(`<h1>${response.Title}</h1>`)
                  .append(`<h2>${response.Actors}</h2>`)
                  .append(`<img src="${response.Poster}" alt="image">`);
})
})
