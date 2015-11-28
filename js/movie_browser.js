// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){

  $("#movie-select").hide();

  function searchIMDb(searchTerm){
    event.preventDefault();

    $("#searchingFor").text("Results for  \'"+searchTerm+"\'...");

    $("#movie-select").show();

    var url = "http://www.omdbapi.com/?s="+escape(searchTerm);

    $.ajax({
      url: url,
      dataType: "json",
      // success: function(data) {
      //   console.log(data);
      //   for (i=0; i< data.Search.length; i++){
      //     var searchResult = data.Search[i];
      //     $("#movie-detail").append("<p> Movie "+i+", Title: "+searchResult.Title+"</p>");
      //   }
      //   }
    }).done(function(data){
      console.log(data);
      $("#searchResults").remove();
      $("#movie-detail").after("<div id=\"searchResults\"></div>");
      for (i=0; i< data.Search.length; i++){
        var searchResult = data.Search[i];
        $("#searchResults").append("<p> Movie "+(i+1)+", Title: "+searchResult.Title+"</p>");
      }

      // for (var i=0; i< url.Search.length(); i++ ){
      //   var searchResult = url.Search[i];
      //   $("movie-detail").append("<p>"+searchResult.Title+"</p>");
      //
      //
      //  var display = '<option value="">Movies matching "'+ searchTerm +'"...</option>';
      // display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
      // }
    }).fail(function(){
      console.log("Ajax request fails!");
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.");
    });
  }

  $("#search").append("<div id=\"searchingFor\"></div>");
  $(":submit").on("click", function(){
    searchTerm = $("#movie-search").val();
    searchIMDb(searchTerm);
  });

});
