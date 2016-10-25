// API Docs at:
// http://www.omdbapi.com
$("#movie-select").hide();

$("button").on("click",() => {
  const apiUrl = "http://www.omdbapi.com/?s="
  let title = $("#movie-search").val()
$.ajax({
  url: apiUrl + title,
  type: "GET",
  dataType: "json",
}).done((response) => {
  // $("body")
  console.log(response)
}).done((response) =>
{ 
  $("#movie-select").show()
    $("#movie-detail").append(`<div>${response.title}</div>`)
})

})
