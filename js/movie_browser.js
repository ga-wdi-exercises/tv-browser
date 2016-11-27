// API Docs at:
// http://www.omdbapi.com

$("#submitbutton").on("click", () => {

  $("#movie-select").css("display", "inline-block");

  let keyword = $("#movie-search").val();
  $("#movie-select").empty().append('<option>Movies matching "'+keyword+'"</option>');

  let url = "http://www.omdbapi.com/?s=" + keyword;
  $.ajax({
    dataType: 'json',
    type: 'get',
    url: url
  }).done((response) => {
        ///
    response.Search.forEach(function(movie){
      $("#movie-select").append('<option>'+movie.Title+'</option>')
    })
    ///
  
  })

})
