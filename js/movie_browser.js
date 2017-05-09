// API Docs at:
// http://www.omdbapi.com

$("#movie-select").hide();

$("#movie-search-button").on("click", (event) => {
  event.preventDefault();
  let keyword = $("#movie-search").val();
  let url = "http://www.omdbapi.com/?s=" + keyword
  $("#movie-select").show();
  $("#movie-select").empty();
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {

    $("#movie-select").append(`<option> Movies matching "${keyword}"...</option>`)
    response.Search.forEach(function(movie){
      $("#movie-select").append(`<option>${movie.Title}</option>`);
    })

    $("#movie-select").on("change", () => {
      let selected = $("#movie-select").val()
      for (i = 0; i < response.Search.length; i++) {
        if (selected == response.Search[i].Title) {
          $("#movie-detail").empty().append(`<h2> "${response.Search[i].Title}"</h2><img src="${response.Search[i].Poster}" />`)
          return console.log("got it")
        }
      }

    })


  }).fail(() => {
   console.log("Ajax request fails!")
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
})
