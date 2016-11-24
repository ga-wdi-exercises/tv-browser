// API Docs at:
// http://www.omdbapi.com
$(document).ready(function(){
  console.log("im ready eddy");
  $("#submit").on("click", function(evt){
    evt.preventDefault()
    //RESETTING SEARCH TERM RESULTS IN DROPDOWN
    $('option').remove();
    //UN-HIDE MOVIE-SELECT OPTIONS
    $("#movie-select").css("visibility", "visible");
    //set variable search equal to user input search term
    var search = $("#movie-search").val();
    // console.log("clicked");
    $.ajax({
      type: "GET", //Get request
      dataType: "json", //get request will return json object
      url: "http://www.omdbapi.com/?s="+search+"" //attach user search term to search API
    }).done(function(res){
      // Dynamic default showing movies matching search
      value = $("#movie-search").val()
      $("#movie-select").append("<option value="" id="dynamic-option"></option>")
      $("#dynamic-option").innerHTML = 'Movies Matching "'+ value + '"');

      for(i =0;i<res.Search.length; i++)
      {
        //append search titles to movie-select-dropdown
        // console.log();
        $("#movie-select").append('<option value="">"'+ res.Search[i].Title +'"</option>');

        //append title and image to modie-details
        $("#movie-select").on("change", function(evt){
          evt.preventDefault()
          $("#movie-detail").append('<div><h2>"'+ res.Search[i].Title +'"</h2>');
          $("#movie-detail").append('<img url="'+res.Search[i].Poster+'"></div>')
        })
      }
    }).fail(function(res){
      console.log("well that didnt work very well");
    })
  })
})

//***********************TESTING*************************
  // $("#submit").on("click", function(evt){
  //   evt.preventDefault()
  //   // console.log($("#movie-search").val())
  //   value = $("#movie-search").val()
  //   document.querySelector('#dynamic-option').innerHTML = 'Movies Matching "'+ value + '"';
  // })
