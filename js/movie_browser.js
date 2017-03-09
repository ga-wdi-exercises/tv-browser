// API Docs at:
// http://www.omdbapi.com
function search(word) {
var url = 'http://www.omdbapi.com/?s='+escape(word);

$.getJSON(url)
  .done(function(imdbResponse){
    imdbDone(word, imdbResponse);
  })
  .fail(function(imdbResonse, textStatus, errorMessage){
    var message = "Unfortunetly we were unable to look up your request '" + word + "'";
    if (errorMessage){
      message += "(" + errorMessage + ")";
    }
    message += ". Try again";
    $('#movie-detail').html("<h2 class='fail'>" + message + "</h2>");
  });
}

function imdbDone(searchword, imdbSearchData) {
  var display = '<option value="">Movie matches "'+ searchword +'"...</option>';

for (var i=0; i < imdbSearchData.Search.length; i++) {
  var movie = imdbSearchData.Search[i];
  display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
  }

$('#movie-select').show().html(display);
}

function show(imdbId) {
if (!imdbId) return;

 var url = 'http://www.omdbapi.com/?i='+imdbId;

$.getJSON(url).then(function(imdbMovieData) {
  var detail = '<h2>' + imdbMovieData.Title + '</h2>';
  detail += '<img src="'+ imdbMovieData.Poster +'" alt="'+ imdbMovieData.Title +'">';
    $('#movie-detail').html(detail);
  })
}

$('#search').on('submit', function(evt) {
  evt.preventDefault();
  var $search = $('#movie-search');
  var word = $search.val();
  $search.val('');

  search(word);
})

$('#movie-select').hide().on('change', function() {
  show(this.value);
})
