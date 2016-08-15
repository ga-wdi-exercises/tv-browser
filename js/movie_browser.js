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
      for(i=0; i<response.Search.length; i++){
        console.log(response.Search[i])
        var result =  $("<option value = \"" + i + "\">" + response.Search[i].Title + "</option>")
        $("#movie-select").append(result);
      }
      $("#movie-select").change(function(){
        // console.log($(this).val())
        var selection = $(this).val();
        var selectionTitle = response.Search[selection].Title;
        var posterUrl = response.Search[selection].Poster;
        $("#movie-detail").html("<h2>" + selectionTitle + "</h2><img src=\"" + posterUrl + "\"></img>");
      })
    }).fail(function(){
      console.log("bad request broh")
    }).always(function(){
      // console.log("still workin broh")
    });
  })

})
