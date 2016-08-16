// API Docs at:
// http://www.omdbapi.com

function search(keyword) {
  var url = 'http://www.omdbapi.com/?s=' + keyword;
  $.getJSON({
     url: url,
     type: "GET",
     dataType: "json"
  }).done(function(response){
    console.log(response);
    imdbDone(keyword, response);
  }).fail(function(){
    console.log("request FAILEDDD");
  }).always(function(){
    console.log("this always logs, no matter what.");
  });
}

function imdbDone(searchWord, imdbData){
  var display = '<option value="">Movies matching "'+ searchWord +'"...</option>';

  for (var i=0; 1 < imdbData.Search.length; i++){
    var movie = imdbData.Search[i];
    display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
  }
  $('#movie-select').show().html(display);
}

function show(imdbId){
  if (!imdbId) return;

  var url = 'http://omdbapi.com/?i='+imdbId;

  $.getJSON(url).then(function(ImdbData){
    var detail = '<h2>' + imdbData.Title + '</h2>';
    detail += '<img src="'+ imdbData.Poster +'" alt="'+imdbData.Title +'">';
    $('#movie-detail').html(detail);
  });
}

$('#search').on('submit', function(evt) {
  evt.preventDefault();
  var $search = $('#movie-search');
  var keyword = $search.val();
  $search.val('');

  search(keyword);
});

$('#movie-select').hide().on('change', function(){
  show(this.value);
});
