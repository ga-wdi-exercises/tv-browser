// API Docs at:
// http://www.omdbapi.com


function search(keyword) {
  var url = 'http://www.omdbapi.com/?s='+escape(keyword);
  console.log url

  $.getJSON(url)
  .done(function(imdbResponse){
    // We want to use both the search keyword and the imdb response in imdbDone
    //   We use an anonymous function to pass both.
    imdbDone(keyword, imdbResponse);
  })
  .fail(function(imdbResonse, textStatus, errorMessage){
    var message = "Sorry, we had issues retrieving movie data for '" + keyword + "'";
    if (errorMessage){
      message += "(" + errorMessage + ")";
    }
    message += ".  Please try again.";
    $('#movie-detail').html("<h2 class='fail'>" + message + "</h2>");
  });
}

function imdbDone(searchKeyword, imdbSearchData) {
  var display = '<option value="">Movies matching "'+ searchKeyword +'"...</option>';

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
  });
}


// Search form:

$('#search').on('submit', function(evt) {
  evt.preventDefault();
  var $search = $('#movie-search');
  var keyword = $search.val();
  $search.val('');

  search(keyword);
});


// Movie selector:

$('#movie-select').hide().on('change', function() {
  show(this.value);
});
