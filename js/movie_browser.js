// API Docs at:
// http://www.omdbapi.com

// Search and populate data
$('#search').on('submit', function(event){
  event.preventDefault();

  $search = $('#movie-search');
  var movie = $search.val();
  var url = 'http://www.omdbapi.com/?s='+escape(movie);

  $.getJSON(url)
  .done(function(data){
    console.log(data.Search);
    if (data.Search && data.Search.length > 0) {

      var display = '<option value="">Movies matching "'+ movie +'"...</option>';

      $.each(data.Search, function(i, response) {
        display += ['<option value="', response.imdbID, '">', response.Title, '</option>'].join('');
      })
      $('#movie-select').show().html(display);
    }
  })
})

//Get value of movie
$('#movie-select').on('change', function() {
  show(this.value);
});

//Show movie data
function show(imdbId) {

  var url = 'http://www.omdbapi.com/?i='+imdbId;

  $.getJSON(url).then(function(movieData) {
    var detail = '<h2>' + movieData.Title + '</h2>';
    detail += '<img src="'+ movieData.Poster +'" alt="'+ movieData.Title +'">';
    $('#movie-detail').html(detail);
  });
}
