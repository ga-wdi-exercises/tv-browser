// API Docs at:
// http://www.omdbapi.com
$("#submit").on("click", () => {
    var searchMovie = $("#movie-search").val()
    var url = "http://www.omdbapi.com/?s=" +escape(searchMovie);

  $.ajax({
      url: url,
      type: "get",
      dataType: "json"
  }).done(() => {
    console.log("Ajax request success!")
  }).fail(() => {
    console.log("Ajax request fails!")
  })
})

$("#movie-select").hide();
