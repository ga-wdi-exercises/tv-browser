// API Docs at:
// http://www.omdbapi.com

$("#movie-select").hide()

$(".submit").on("click", () =>{
  let search = $("#movie-search").val()
  $("#movie-select").show()
  const movieApi = "http://www.omdbapi.com/?s=" + search
  $.ajax({
    url: movieApi,
    type: "GET",
    dataType: "json"
  }).done((response)=>{
    $(".option").html(`Movies matching "${search}""`)
    response.Search.forEach(function(object){
    console.log(object)
    $("#movie-select").append(`<option>${object.Title}</option>`)
 })

    console.log(response.Search)
  }).fail(() =>{
    console.log("FAILED")
  })
})
