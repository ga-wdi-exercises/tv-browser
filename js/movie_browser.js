// API Docs at:
// http://www.omdbapi.com

$("#submit").on('click', () => {
  event.preventDefault()

  var input = $("input").val()
  var url = "http://www.omdbapi.com/?s=" + input;
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    $("#movie-select").css("display", "block")

    let results = response.Search

    $("#movie-select").empty()

    if (results === undefined){
      $("#movie-select").css("display", "none")
    } else {
      results.forEach((movie) => {
        $("#movie-select").append(`<option>${movie.Title}</option>`)
      })
    }

  }).fail(() => {
    console.log("Ajax request failed!")
  })
})
