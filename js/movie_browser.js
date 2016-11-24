// API Docs at:
// http://www.omdbapi.com

$(document).ready(function() {
  // var offset = 0;
  $("#submit").on('click',function(event) {
    event.preventDefault();
    var input = $("#movie-search").val()

    var url = "http://www.omdbapi.com/?s=" + input;
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(res) {
      for (i = 0; i < res.Search.length; i++) {
        var movieTitle = $("<option>" + res.Search[i].Title + "</option>")
        $("#target").html("Titles Including:")
        $("#movie-select").show().append(movieTitle);
      }
      $("#movie-select").change(function() {
        var selected = $("#movie-select").find(":selected").text();


        $("#movie-detail").append("<h2>"+ selected +"</h2>")
        // $("#movie-detail").append("<img src="+ res.Search[selected].Poster +">")

      })

    })

  })
});
