// API Docs at:
// http://www.omdbapi.com


/* constants for AJAX calls to IMDB */

const IMDBURL = "http://www.omdbapi.com"
const IMDBSEARCHPARM = "/?s="
const IMDBSEARCHBYIDPARM = "/?i="

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
}
