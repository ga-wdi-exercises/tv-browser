// API Docs at:
// http://www.omdbapi.com
$(document).ready(function(){
  $("#search").on("submit", function(event){
    var movieTitle = $("#movie-search").val()
    $("#movie-select option").html(`Movies matching ${movieTitle}`);
    $("#movie-select").show();
    var url = `http://www.omdbapi.com/?s=${movieTitle}`
    $.ajax({
      url,
      type: "get",
      dataType: "json"
    }).done((response) => {
      var searchResults = response.Search
      console.log(searchResults)
      for (i = 0; i < searchResults.length; i++){
        $("#movie-select").append(`<option value="${i}">${searchResults[i].Title}</option>`);
      }
      $("select").change(function(){
        var valSelected = parseInt($("option:selected", this).val())
        console.log(searchResults[valSelected])
        $("#movie-detail").html(`<h2>${searchResults[valSelected].Title}</h2><img src="${searchResults[valSelected].Poster}">`)
      })
    }).fail(() => {
      console.log("Ajax request fails")
    });
    event.preventDefault();
  })
})
