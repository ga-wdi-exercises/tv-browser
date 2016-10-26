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

// $('#search').on('submit', function(event) {
$('#search').on('submit', function(event) {
 console.log('submit')
  event.preventDefault();    /* prevent the screen from refreshing by default */

  var $search = $('#movie-search'); /* pull jquery values value out of page */
  var movieTitle = $search.val();
  findMovie(movieTitle);

}); /* on Submit */


/**************************************************************
* Function FindMovie
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
    var movie = results.Search[i];
    /* join all the pieces of the string together for this movie choice */
    option=[]
    option.push('<option value="')
    option.push(movie.imdbID)
    option.push('">' )
    option.push( movie.Title)
    option.push('</option>')
    optionsStr += option.join('');

  } /* i */

  $('#movie-select').show().html(optionsStr);
} /* function populateDropDown */



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

    /* pull out all the  results and format into HTML for Detail Jquery response
   {"Title":"Game of Thrones",
    "Year":"2011–",
   "Rated":"TV-MA",
   "Released":"17 Apr 2011",
   "Runtime":"56 min",
   "Genre":"Adventure, Drama, Fantasy",
   "Director":"N/A",
   "Writer":"David Benioff, D.B. Weiss",
   "Actors":"Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
   "Plot":"While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise to power.",
   "Language":"English",
   "Country":"USA, UK",
   "Awards":"Won 1 Golden Globe. Another 206 wins & 339 nominations.",
   "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"9.5",
   "imdbVotes":"1,064,264",
   "imdbID":"tt0944947",
   "Type":"series",
   "totalSeasons":"8",
   "Response":"True"} */

    /* for our repsonse we will take title, actors, Rating Plot and Poster */
    let detail=[]
    detail.push('<div>')
    detail.push('<p>')
    detail.push(response.Title)
    detail.push(' Rated:')
    detail.push(response.Rated)
    detail.push('</p>')
    detail.push('<p>')
    detail.push('Starring: ')
    detail.push(response.Actors)
    detail.push('</p>')
    detail.push('<p>')
    detail.push(response.Plot)
    detail.push('</p>')
    detail.push('<img src="')
    detail.push(response.Poster)
    detail.push('" alt="')
    detail.push(response.Title)
    detail.push('">')
    detail.push('</div>')

    /* set the value in Movie Detail */
    $('#movie-detail').html(detail.join(''));
  })
  .fail(function(){
    console.log("Ajax request fails!")
  });
} /* function showResults */
