// API Docs at:
// http://www.omdbapi.com

$("#movie-select").hide()

$(".submit").on("click", () =>{
  let search = $("#movie-search").val()
  $("#movie-select").show()
  const movieApi = "http://www.omdbapi.com/?s=" + search //taking the input and setting it to search.
  $.ajax({
    url: movieApi,
    type: "GET",
    dataType: "json"
  }).done((response)=>{
    $(".option").html(`Movies matching "${search}"`)
    response.Search.forEach(function(object){
    console.log(object)
    $("#movie-select").append(`<option class="option">${object.Title}</option>`)
 })
 $("#movie-select").change(function(){
   console.log(response.Search)
   
  //  let response.Search = selection
  //  selection.each // storing the object list, stopped here..
 });
  //  $("#movie-detail").append(`<div>${this.Poster}</div>`)
  //  $("#movie-detail").show()

  }).fail(() =>{
    console.log("FAILED")
  })
})
