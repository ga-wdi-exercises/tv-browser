// API Docs at:
// http://www.omdbapi.com
// On the homepage, you are able to enter a movie title into a search box and click a button to search.
//Put search results in drop down
var dropdown = $('#movie-select')
dropdown.hide()
// On submit of the form,
$('#search').on('submit', function(event) {
  event.preventDefault();
  console.log('Form was submited');
//   Get the input from the search field
var movieSearch = $('#movie-search');
var query = movieSearch.val();
  // console.log(query);
//   Results are populated into a drop down.
//     Search the api for matching input
$.getJSON("http://www.omdbapi.com/?s="+query).done(function(response){
  // console.log(response.Search);
for (var i = 0; i < response.Search.length; i++){
//       iterate to
  var movie = response.Search[i];
  console.log(movie.imdbID);
  // console.log(movie);
//         Create option with text matching iteratee
var $option = $('<option value="'+ movie.imdbID +'">' + movie.Title + '</option>')
  // console.log($option)
//         Put the option in the dropdown
dropdown.append($option);
//     Like results are displayed from the api
//     Drop down menu displays
dropdown.show();
  };

  $('#movie-select').on("change", function(){
    var detail = '<h2>' + movie.Title + '</h2>';
    detail += '<img src="'+ movie.Poster +'">';
    $('#movie-detail').html(detail);
    })
  })
})
//Search results are able to be selected on click

//get the json from the api URL? .getjson(apiURL?)
//dropdown = whatever $.search.val is?

///.append()<-insert content by parameter to the end of each element
///.appendTo()<-insert element in set of same elements to end of target
//.change()<-bind event handler to the JS change function
//.html()<-get or set HTML element[s]
//.show()<-Display element
//$.each()<-Iterate over a jQuery object and execute a function
//.on()<- attach event handler function to selected element[s]
//3$.getJSON()<-
//1$search.val(); <-search values
//$('#movie-detail').html(detail); <-show movie details
//$('#movie-select').show().html(display); <-unhide movie select drop down





// ***********Original*************
// // API Docs at:
// // http://www.omdbapi.com
// $("document").ready(function(){
//   $("#search").on("submit", function(e){
//     e.preventDefault();
//     getAPI($("#movie-search").val());
//   })
// })
//
// function getAPI(keyword){
//   type: "get",
//     dataType: "json"
//   }).done(function(response){
//     $("#movie-select").children().remove()
//
//   $("<option value=''>Results for: "+keyword+"</option>").appendTo($("#movie-select"))
//     for (var i=0; i<response.Search.length; i++){
//       $("#movie-select").append($('<option id='+response.Search[i].imdbID+'>'+response.Search[i].Title+'</option>'))
//     }
//     addListener();
// //show the dropdown menu GRAH!
//     $("#movie-select").show();
//   })
// }
// function addListener(){
//   $("#movie-select").change("submit", function(e){
//     if ($('select option:selected').attr('id')) {
//       $.ajax({
//         url:"http://www.omdbapi.com/?i="+$('select option:selected'  ).attr('id')+"&y=&plot=short&r=json",
//         type:"get",
//         dataType: "json"
//       }).done(function(response){
//         $("#movie-detail").empty()
//         $("#movie-detail").append($("<img src="+response.Poster+"/>"))
//         $("#movie-detail").append($("<p>Title: "+response.Title+"</p>"+
//         "<p>Director: "+response.Director+"</p>"+
//         "<p>Actors: "+response.Actors+"</p>"+
//         "<p>Country: "+response.Country+"</p>"))
//       })
//     }
//   })
// }
