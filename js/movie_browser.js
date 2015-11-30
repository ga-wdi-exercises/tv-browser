// API Docs at:
// http://www.omdbapi.com

// create a function that searches the API for the keyword

function search(keyword){
    var url = "http://www.omdbapi.com/?s=" + keyword ;
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      console.log(response);
      imdbDone(keyword, response);
    }).fail(function(){
      console.log("Ajax request fails!");
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.");
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

function show(imdbId){
  var url = "http://www.omdbapi.com/?i="+imdbId;
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done(function(imdbMovieData){
    console.log(response);
    var detail = '<h2>' + imdbMovieData.Title + '</h2>';
    detail += '<img src="'+ imdbMovieData.Poster +'" alt="'+ imdbMovieData.Title +'">';
    $('#movie-detail').html(detail);
  }).fail(function(){
    console.log("Ajax request fails!");
  }).always(function(){
    console.log("This always happens regardless of successful ajax request or not.");
  });
}

$('#search').on('submit', function(evt) {
  evt.preventDefault();
  var $search = $('#movie-search');
  var keyword = $search.val();
  $search.val('');

  search(keyword);
});

$('#movie-select').hide().on('change', function() {
  show(this.value);
});
