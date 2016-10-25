// API Docs at:
// http://www.omdbapi.com


/* constants for AJAX calls to IMDB */

const IMDBURL = "http://www.omdbapi.com"
const IMDBSEARCHPARM = "/?s="
const IMDBSEARCHBYIDPARM = "/?i="


/**************************************************************
*  LISTENER EVENTS
*  Whenever the user selects a title from the #movie-select
*  the app should populate the "#movie-detail" div with that movie's
*  title and poster image.
*
*************************************************************/


$('#movie-select').hide().on('change', function() {
  showResults(this.value);
});
/************************************************************************
*  search Box form to look for movies
*************************************************************************/

$('#search').on('submit', function(event) {

  event.preventDefault();    /* prevent the screen from refreshing by default */

  var $search = $('#movie-search');
  var movieTitle = $search.val();
  findMovie(movieTitle);

}); /* on Submit */


/**************************************************************
*
* Search for the movie in Search Gox unhide the drop down box
*
*************************************************************/
function findMovie(movieTitle) {

  $.getJSON(IMDBURL+IMDBSEARCHPARM+ movieTitle)
  .done(function(response){
    // We want to use both the search keyword and the imdb response in imdbDone
    //   We use an anonymous function to pass both.
    populateDropDown(movieTitle,response);
  })
  .fail(function(){
    console.log("Ajax request fails!")
  });

} /* Function findMovie */

/**************************************************************
* Function populateDropDown
* format results from movie search into <option Value Elements
*
*************************************************************/

function populateDropDown(title, results) {
  var optionsStr = '<option value="">Found "'+ title +'"...</option>';

  for (var i=0; i < results.Search.length; i++) {

    /* build option value strings */

    console.log(results.Search.length)
    var movie = results.Search[i];
    console.log ("movie= ",movie.Title,movie.imdbID,"index=", i);
    var option=['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('')
    console.log(option)
    optionsStr += option;

  } /* i */

  $('#movie-select').show().html(optionsStr);
} /* populateDropDown */



/******************************************************************
* Function showResults
* format detail results from movie search into title and picture
*
********************************************************************/

function showResults(movieId) {

  /* check if movie exists */
  if (!movieId) return;

  let resultlsUrl=IMDBURL+IMDBSEARCHBYIDPARM +movieId;

  $.getJSON(resultlsUrl)
  .done (function(response) {
    let detail = '<p>' + response.Title + '</p>';
    detail += '<img src="'+ response.Poster +'" alt="'+ response.Title +'">';
    /* set the value in Movie Detail */
    $('#movie-detail').html(detail);
  })
  .fail(function(){
    console.log("Ajax request fails!")
  });
}
