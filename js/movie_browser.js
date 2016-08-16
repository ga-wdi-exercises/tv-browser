function searchMovie(search){
  $.ajax({
    url: "http://www.omdbapi.com/?s="+search,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    $("#first-option").html('<option> Movies matching: '+ search + '</option>')
    for (var i=0; i < response.Search.length; i++){
      $("#movie-select").show().append('<option value="'+response.Search[i].Title+'">' + response.Search[i].Title + '</option>')
    }
    console.log(response)
  }).fail(function(){
    console.log("this failed")
  }).always(function(){
    console.log("this always passes");
  })
}

$(document).ready(function(){
  $('#movie-select').hide()
  $("#search").on("click", function(evt){
    evt.preventDefault();
    var movieSearch =  $("#movie-search").val()
    searchMovie(movieSearch)
  })
})
