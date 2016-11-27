// API Docs at:
// http://www.omdbapi.com

$("#submitbutton").on("click", () => {

  $("#movie-select").css("display", "inline-block");

  let keyword = $("#movie-search").val();
  $("#movie-select").empty().append('<option>Movies matching... "'+keyword+'"</option>');

  let ajaxUrl = "http://www.omdbapi.com/?s=" + keyword;
  $.ajax({
    dataType: 'json',
    type: 'get',
    url: ajaxUrl
  }).done((response) => {
    ///
    let movieSelections = [];
        ///
    response.Search.forEach(function(movie){
      $("#movie-select").append('<option>'+movie.Title+' ('+movie.Year+')</option>')
      movieSelections.push(movie.Title + " (" + movie.Year + ")")
    })
    ///
    $("#movie-select").on("change", () => {
      let selectedMovie = $("#movie-select").val()
      console.log(selectedMovie);
      for (i=0; i < movieSelections.length; i++) {
        if (movieSelections[i] == selectedMovie) {
          $("#movie-detail").empty().append(
            '<h2>'+movieSelections[i]+'</h2><img src="'+response.Search[i]["Poster"]+'" />'
          );
        }
      }
    ///
    })
  })

})
