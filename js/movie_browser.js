// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){

  $("#movie-select").hide();
  $("#movie-detail").append("<h3  id=\"movieTitle\"></h3><p  id=\"movieYear\"></p><p id=\"movieType\"></p><img id=\"movieImage\" src=\"\">");

  function searchIMDb(searchTerm){
    event.preventDefault();

    $("#movie-select").show();
    $("#searchingFor").text("Results for  \'"+searchTerm+"\'...");
    $("#movieTitle").text("");
    $("#movieYear").text("");
    $("#movieType").text("");
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
          $("#movieTitle").text("Title: "+searchResult.Title);
          $("#movieYear").text("Year: "+searchResult.Year);
          $("#movieType").text("Type: "+searchResult.Type);
        }
      });
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
