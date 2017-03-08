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
    movies.forEach((movie)=> {

      $('#movie_select').append(` ${search} <option>${movie.Title}</option>`);
      // $('#movie_detail').append(`<option>${movie.Title}</option>`);

    });

    $( "#movie_select" ).change(function() {
    $('#movie_detail').append(this.value);

    // $('#movie_detail').append(`${movies[1].title}`);
  });

    console.log("Ajax request success!")
    console.log(`this is the movie ${response.Search[0]}`);
  }).fail(() => {
    console.log("Ajax request fails!")
    $('#movie_detail').append()

  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
}
