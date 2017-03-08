
$("input[type='submit']").on("click", function(){
  event.preventDefault();
  var keyword = $("#movie-search").val()
  var url = `http://www.omdbapi.com/?s=${keyword}`
  console.log(url)
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    console.log(response)
    for (var i =0; i < response.Search.length; i++){
      var movie = response.Search[i]
      $("#movie-select").append(`<option value = "${movie.Title}">${movie.Title}</option>`)
    }
    $("#movie-select").css("display", "inline-block")
    movieOption = $("#movie-select").find(":selected").val()
    console.log(movieOption)
  })

  



// function movieDone(searchKeyword, searchData){
  // var display = '<option value="">Movies matching "'+ searchKeyword +'"...</option>';
  //
  // for (var i=0; i < searchData.Search.length; i++) {
  //   var movie = searchData.Search[i];
  //   display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
  // }
  //
  // $('#movie-select').show().html(display);
  //
  //   var detail = '<h2>' + movie.Title + '</h2>';
  //   detail += '<img src="'+ movie.Poster +'" alt="'+ movie.Title +'">';
  //   $('#movie-detail').html(detail);
});
//
// $('#search').on('submit', function(evt) {
//   evt.preventDefault();
//   var $search = $('#movie-search');
//   var keyword = $search.val();
//   $search.val('');
//
//   search(keyword);
// });
//
// function show(imdbId) {
//   if (!imdbId) return;
//
//   var url = 'http://www.omdbapi.com/?i='+imdbId;
// }
