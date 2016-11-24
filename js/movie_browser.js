// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){

  $("#movie-select").hide();

  $("#search").on('submit', function(evt){
    evt.preventDefault();
    var title = $("#movie-search").val()
    $("#movie-select").show()
    var url = "http://www.omdbapi.com/?s=" + title
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).done(function(response){
      for(i=0; i<response.Search.length; i++){
        $("#movie-select").append($('<option>',{
          value: response.Search[i].Poster,
          text: response.Search[i].Title
        }))
      }
    }).fail(function(response){
      console.log("Ajax fails!")
    }).always(function(response){
      console.log("This always happens.");
    })
    $("#movie-search").val("")
  })

})
