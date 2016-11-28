// API Docs at:
// http://www.omdbapi.com

$(document).ready( () => {
  $("#search").on("submit", () => {
    event.preventDefault();
    $("#movie-select").html('')

    var movieTitle = $("#movie-search").val();

    $("#movie-select").css("display", "block");
    var url = `http://www.omdbapi.com/?s=${movieTitle}`

    $.ajax({
      url,
      type: "get",
      dataType: "json"
    }).done((response) => {
      console.log(response);

      $("#movie-select").append(`<option selected="selected">Movies matching '${movieTitle}'</option>`)

      var searchResults = response.Search


      searchResults.forEach((result, i) => {
        $("#movie-select").append(`<option value="${i}">${result.Title}</option>`)
        })

      $("#movie-select").change(() =>{
        var selectedOption = $("#movie-select").val()

        $("#movie-detail").html(`${searchResults[selectedOption].Title}<br><img src="${searchResults[selectedOption].Poster}">`)
      })

      console.log(searchResults);

    }).fail(() => {
      console.log("ajax request failed");
    })

  })
})
;
