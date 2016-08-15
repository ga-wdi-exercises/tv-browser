// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){
  console.log("yisss minified...");
  $("#movie-select").hide()
  $("#search").on("submit", function(e){
    e.preventDefault();
    $("#movie-select").show();
    input = $("#movie-search").val();
    url = "http://www.omdbapi.com/?s=" + input.split(' ').join('+');
    $.ajax({
      url: url,
      type: "get",
      dataType: "json",
    }).done(function(response){
      console.log(response);
      $("#movie-select").empty().append("<option>Movies matching "+input+"</option>")
      for (i=0; i < response.Search.length; i++){
        var el = $("<option value='" + i + "'>"+response.Search[i].Title+"</option>");
        console.log(el);
        $("#movie-select").append(el)
      }
      $("#movie-select").change(function(){
        //$('#movie-select').find(":selected").text();
        console.log($(this).val());
        var selection = $(this).val();
        var selectionTitle = response.Search[selection].Title
        var posterUrl = response.Search[selection].Poster
        $("#movie-detail").html("<h2>" + selectionTitle + "</h2><img src=\"" + posterUrl + "\"></img>")
      });


    })


  })
})
