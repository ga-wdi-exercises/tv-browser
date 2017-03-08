// API Docs at:
// http://www.omdbapi.com

$(document).ready(()=> {
  $("#movie-select").hide();
})

$("#submit").on("click", () =>{
  event.preventDefault();
  $("#movie-select").show();
 let keyword = $("#movie-search").val();
 let url = `http://www.omdbapi.com/?s=${keyword}`
 $('#movie-select').empty();
 $.ajax({
   url: url,
   type: "GET",
   dataType: "json"
 }).done((response) => {
   $("#movie-select").append(`<option> "Movies matching "${keyword}"</option>`)

   for(var i = 0; i < response.Search.length; i++){

     $("#movie-select").append(`<option data-value=${response.Search[i].Poster}> ${response.Search[i].Title} </option>`)
   }

  $("#movie-select").change(function(){
    let title = $(this).find(":selected").html();
    $('#movie-detail > h2').html(title)

    let photo = $(this).find(":selected").data("value")
    $('img').attr("src", `${photo}`)
  })


}).fail(() => {
  console.log("Failed")
})
})
