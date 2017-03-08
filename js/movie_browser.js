
$("input[type='submit']").on("click", function(keyword){
    event.preventDefault();
    $("#movie-select").css("display", "inline-block")
    var $search = $('#movie-search');
    var keyword = $search.val();
    $search.val('');

  var url = 'http://www.omdbapi.com/?s='+escape(keyword);
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    movieDone(keyword, response);
  }).fail(() => {
    console.log("Ajax failed")
  })
});

function movieDone(searchKeyword, searchData){
  var display = '<option value="">Movies matching "'+ searchKeyword +'"...</option>';

  for (var i=0; i < searchData.Search.length; i++) {
    var movie = searchData.Search[i];
    display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
  }

  $('#movie-select').show().html(display);
}

$('#search').on('submit', function(evt) {
  evt.preventDefault();
  var $search = $('#movie-search');
  var keyword = $search.val();
  $search.val('');

  search(keyword);
});
