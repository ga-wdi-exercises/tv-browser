// API Docs at:
// http://www.omdbapi.com
$(document).ready(() => {
   $("#movie-select").hide();

   $(".submit").on("click", () => {
     event.preventDefault()
     let search = $("#movie-search").val()
     let url = `http://www.omdbapi.com/?s=${search}`
     $("#movie-select").show();
     $("#movie-select").empty();

     $.ajax({
       url: url,
       type: "get",
       dataType: "json"
     }).done((response) => {
       $("#movie-select").append(`<option> Movies with the word: "${search}"</option>`)
       $.each(response.Search, (i,v) => {
         $("#movie-select").append(`<option value=${response.Search[i]}>${response.Search[i].Title}</option>`)
       })
     }).fail(() => {
       console.log("Search request fails!")
     })

   })

 })
