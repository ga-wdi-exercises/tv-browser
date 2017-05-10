// API Docs at:
// http://www.omdbapi.com

$("#movie-select").hide;

$("button").click(function (event) {
    console.log("working");
  event.preventDefault();



  var movieSearch = $("input#movie-search");
  var movie = movieSearch.val();


  var url = "http://www.omdbapi.com/?t=" + escape(movie);


  $.ajax ({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    console.log("this is great")

  }).fail(() => {
    console.log("Ajax request fails!")

  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")

  });


  function doneSearch(movie){
    var display = '<option value="">Movies matching "'+ movie +'"...</option>';
  }





})
