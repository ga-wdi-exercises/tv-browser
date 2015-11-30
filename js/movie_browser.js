// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){
    $('#movie-select').hide();
    $('#submit').on("click", function(event){
      event.preventDefault();
      var movieSearch = $("#movie-search").val();
      var url = "http://www.omdbapi.com/?s=" + movieSearch + "&type=movie&r=json"
      $.ajax({
        url: url,
        type: "get",
        dataType: "json"
      }).done(function(response){
        for (var i = 0; i < response.Search.length; i++){
          movie = response.Search[i];
          $('#movie-select').append('<option value="' + movie.imdbID + '">' + movie.Title + ' </option>')
        }

        $('#movie-select').show();
        $('#movie-select').on("change", function(){
          var secondUrl = "http://www.omdbapi.com/?i=" + this.value + "&type=movie&r=json"
          $.ajax({
            url: secondUrl,
            type: "get",
            dataType: "json"
          }).done(function(response){
            $('#movie-detail').append('<h1>' + response.Title + '</h1>')
          })
        })

      }).fail(function(){
        console.log("Ajax request fails!")
    })
  })
})
