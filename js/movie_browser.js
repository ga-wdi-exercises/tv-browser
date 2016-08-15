// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){

  $("#movie-select").hide();

  $("#search").submit(function(evt){
    evt.preventDefault();
    var query = $("#movie-search").val();
    var url = "http://www.omdbapi.com/?type=movie&s=" + query.split(" ").join("+");
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(response){
      $("#movie-select").show().empty().append($("<option>Movies matching " + query + "...</option>"));
      // console.log(response.Search.length)
      for(i=0; i<response.Search.length; i++){
        // console.log(response.Search[i].Title)
        var result =  $("<option value = \"" + response.Search[i].Title + "\">" + response.Search[i].Title + "</option>")
        $("#movie-select").append(result);
      }
    }).fail(function(){
      console.log("bad request broh")
    }).always(function(){
      // console.log("still workin broh")
    });
  })

})
