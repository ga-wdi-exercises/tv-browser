// API Docs at:
// http://www.omdbapi.com

$("#submit").on('click', () => {
  event.preventDefault()

  var input = $("input").val()
  var url = "http://www.omdbapi.com/?t=" + input;
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    $("#movie-select").css("display", "block")
    if (response.Response === "False"){
      $("#movie-select").css("display", "none")
    }
  }).fail(() => {
    console.log("Ajax request failed!")
  })
})
