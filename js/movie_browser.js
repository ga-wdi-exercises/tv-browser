// API Docs at:
// http://www.omdbapi.com

$(document).ready(function(){
console.log("document working")
$("#movie-select").hide()
console.log("hidden")
$(".submit").on("click", function(evt){
  evt.preventDefault()
  var title = $("#movie-search").val()
  $("#movie-select").show()
  url = "http://www.omdbapi.com/?s=" + title
  $.ajax({
    url: url,
    dataType: 'json',
    type: 'GET'
  }).done(function(response){
    for(i=0; i<response.Search.length; i++){
      $("#movie-select").append($('<option>',{
        value: response.Search[i].Poster,
        text: res.Search[i].Title
      }))
    }
    $("movie-select").on("change", function(){
      $("movie-detail").empty()
      var optionSelected = $("option:selected", this);
      var valueSelected = this.value;
      $("#movie-detail").append("<img src=" + valueSelected + ">")
    })
  }).fail(function(response){
    console.log("failed")
  }).always(function(response){
    console.log("always happens")
  })
$("#movie-search").val("")
})
})
