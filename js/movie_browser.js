// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){

  $("#search").submit(function(evt){
    evt.preventDefault();
    var query = $("#movie-search").val();
    console.log(query);


  })

})
