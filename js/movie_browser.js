// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){

  $("#movie-select").hide();
  $("#movie-detail").remove();
  $("#movie-select").after("<div id=\"movie-detail\"><h3  id=\"movieTitle\"></h3><p  id=\"movieYear\"></p><p id=\"movieType\"></p><img id=\"movieImage\" src=\"\"></div>");
  $("#search").append("<div id=\"searchingFor\"></div>");

  function movieDeets(thatMovie){
    if (thatMovie === "clear"){
      $("#movieTitle").text("");
      $("#movieYear").text("");
      $("#movieType").text("");
      $("#movieImage").attr("src","");
      $("#movieImage").attr("alt","");
    }
    else{
      $("#movieTitle").text(thatMovie.Title);
      $("#movieYear").text(thatMovie.Year);
      $("#movieType").text(thatMovie.Type);
      $("#movieImage").attr("src", thatMovie.Poster);
      $("#movieImage").attr("alt", thatMovie.Title+" - Poster");
    }
  }

  function searchIMDb(searchTerm){
    var url = "http://www.omdbapi.com/?s="+escape(searchTerm);

    $.ajax({
      url: url,
      dataType: "json",
    }).done(function(data){
      console.log(data);
      $("option").remove();

      $("#movie-select").append("<option  value=\"\"  id=\""+searchTerm+"\" > Movies matching \'"+searchTerm+"\'...</option> ");

      for (i=0; i< data.Search.length; i++){
        var searchResult = data.Search[i];
        $("#movie-select").append("<option  value=\""+i+"\"  id=\""+searchTerm+"\" >"+searchResult.Title+"</option> ");
      }

      $("#movie-select").change( function(){
        if (this.value !== ""){
          var searchResult = data.Search[this.value];
          movieDeets(searchResult);
        }
      });
    }).fail(function(){
      console.log("Ajax request fails!");
    });
  }


  $(":submit").on("click", function(){
    event.preventDefault();
    movieDeets("clear");
    $("#movie-select").show();

    searchTerm = $("#movie-search").val();

    $("#searchingFor").text("Results for  \'"+searchTerm+"\'...");

    searchIMDb(searchTerm);
  });

});
