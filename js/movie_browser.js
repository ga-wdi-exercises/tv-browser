$(document).ready(() => {

  $('#search').on('submit', function(pd) {
    pd.preventDefault();
    var keyword = $('#movie-search').val();
    findAll(keyword);
  });

  function findAll(keyword) {
    var url = 'http://www.omdbapi.com/?s='+keyword;
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done((matches) => {
      found(keyword, matches)
    }).fail(() => {
      console.log("Ajax request fails!")
    })
  }

  function found(keyword, matches) {
    var options = '<option value="">Movies matching '+ keyword +'...</option>';
    for (var i=0; i < matches.Search.length; i++) {
      var movie = matches.Search[i];
      options += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
    }
    $('#movie-select').show().html(options);
  }

  function showMovie(imdbId) {
    if (!imdbId) return;
    var url = 'http://www.omdbapi.com/?i='+imdbId;
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done((movie) => {
      var detail = '<h2>' + movie.Title + '</h2>';
      detail += '<img src="'+ movie.Poster +'">';
      $('#movie-detail').html(detail);
    }).fail(() => {
      console.log("Ajax request fails!")
    })
  }

  $('#movie-select').hide().on('change', function() {
    showMovie(this.value);
  });
});
