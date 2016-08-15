// API Docs at:
// http://www.omdbapi.com

$(document).ready(function() {
  var input;

  //get the right dropdown info
  function movSearch(url){
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(response) {
      console.log("success")
      for (i=0; i<response.Search.length; i++){
        var display = $("<option value ='" + i + "'>" + response.Search[i].Title + "</option>")
        console.log(display)
        $("#first").html("Titles including:")
        $("#movie-select").show().append(display)
      }
      //get the entry they selected
      $("#movie-select").change(function(){
        var selection = $(this).val()
        console.log(response.Search[selection]);
        var selectionTitle = response.Search[selection].Title
        var posterUrl = response.Search[selection].Poster
        $("#movie-detail").html("<h2>" + selectionTitle + "</h2><img src='" + posterUrl + "'>")
      })
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  }


  //initial click event
  $("#submit").on("click", function(e){
    e.preventDefault()
    var input = $("#movie-search").val()
    console.log("clicked")
    console.log(input)
    // $("#movie-select").show()
    var url = "http://www.omdbapi.com/?s=" + input
    movSearch(url)
  })





});
