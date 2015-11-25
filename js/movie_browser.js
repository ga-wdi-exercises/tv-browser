// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){
    $('#movie-select').hide();
    $('#submit').on("click", function(event){
      event.preventDefault();
      var movieSearch = $("#movie-search").val();
      var url = "http://www.omdbapi.com/?t=" + movieSearch + "&y=&plot=short&r=json"
      $.ajax({
        url: url,
        type: "get",
        dataType: "json"
      }).done(function(response){
        $('#movie-select').append('<option value="' + response.Title + '">' + response.Title + ' </option>');
        $('#movie-select').show();
        console.log(response)
        $('#movie-select').on("change", function(){
          $('#movie-detail').append('<p>' + response.Title  + '</p>')
        })
      }).fail(function(){
        console.log("Ajax request fails!")
    })
  })
})
