// API Docs at:
// http://www.omdbapi.com

$("#submit").on('click', () => {
  event.preventDefault()

  let keyword = $("input").val()
  let url = "http://www.omdbapi.com/?s=" + keyword;
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    $("#movie-select").css("display", "block")

    let results = response.Search

    $("#movie-select").empty()

    $("#movie-select").append(`<option>Movies that include "${keyword}"...</option>`)
    if (results === undefined){
      $("#movie-select").css("display", "none")
    } else {
      results.forEach((movie, i) => {
        $("#movie-select").append(`<option>${movie.Title}</option>`)
      })
    }
  $("#movie-select").change(() => {
    let movieDetails = $("#movie-select").find(':selected').html();
    $("#movie-detail").html(`<h2>${movieDetails}</h2>`)
  })

  }).fail(() => {
    console.log("Ajax request failed!")
  })
})
