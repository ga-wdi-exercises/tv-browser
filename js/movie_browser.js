// API Docs at:
// http://www.omdbapi.com

$("#movie-select").hide();

$("#submit").on("click", function(){
  event.preventDefault();
  var url="http://www.omdbapi.com/?s="
  var searchTerm = $("#movie-search").val()

  $.ajax({
    url: url + searchTerm,
    type: "get",
    dataType: "json"
  }).done(function(response){
    response.Search.forEach(function(movie){
      $("#movie-select").append('<option>' + movie.Title + '</option>')
    })

    $("#movie-select").on("change", () => {
      let movieChoice = $("#movie-select").val()

        for (i=0; i< response.Search.length; i++) {
          if (response.Search[i]["Title"] == movieChoice) {
            $("#movie-detail").empty().append('<h2>' + response.Search[i]["Title"]+'</h2><img src="'response.Search[i]["Poster"]+'" />')
          }
        }
    })
  })
})
