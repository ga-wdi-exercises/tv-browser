// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){

  $(":submit").on("click", function(){
    event.preventDefault();
    var searchTerm = $("#movie-search").val();
    $("h1").text(searchTerm);
    // var url = "http://www.omdbapi.com/?";
    // $.ajax({
    //   url: url,
    //   type: "get",
    //   dataType: "json"
    // }).done(function( response ){
    //   var windPower = response.current_observation.wind_mph;
    //   $("h1").text("WIND MPH: "+windPower+"!");sa
    // }).fail(function(){
    //   console.log("Ajax request fails!");
    // }).always(function(){
    //   console.log("This always happens regardless of successful ajax request or not.");
    // });
  });
  
});
