// API Docs at:
// http://www.omdbapi.com
$("#submitButton").on("click", () => {
  console.log("IT WORKED");
event.preventDefault();
  $("#movie-select").css("display", "inline-block");

  let keyword = $("#movie-search").val();
  $("#movie-select").empty().append('<option>Movies that match "' + keyword + '"</option>');

  let url = "http://www.omdbapi.com/?s=" + keyword;

  $.ajax({
    dataType: 'json',
    type: 'get',
    url: url
  }).done ((response) => {
    response.Search.forEach(function(movie){
      $("#movie-select").append('<option>'+movie.Title+'</option>')
    })

    $("#movie-select").on("change", () => {
      let movieChoice = $("#movie-select").val()
      for (i=0; i < response.Search.length; i++) {
        if (response.Search[i]["Title"] == movieChoice) {
          $("#movie-detail").empty().append(
            '<h2>'+response.Search[i]["Title"]+'</h2><img src="'+response.Search[i]["Poster"]+'" />'
          );
        }
      }

    })
  })
})
