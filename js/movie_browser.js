// API Docs at:
// http://www.omdbapi.com

$("#search").on("submit", function(){
  event.preventDefault()
  var title = $('#movie-search').val()

  $.ajax({
    url: `http://www.omdbapi.com/?s=${title}`,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done((response) => {
    console.log(response);
    $(#movie-select).append(`<option> Movies that match your search "${keyword}"... </option>`)

  var movieSearch = response.Search

  for (var i = 0 ; i < response.Search.length; i++) {
    $("#movie-select").append(`<option data-value=${response.Search[i].Poster}>${response.Search[i].Title} </option>`);
  }

  $("movie-select").change(function() {

    let title = $(this).find(":selected").html();
    $(".movie").html(title)
    let photo_img = $(this).find(":selected").data("value")
    $("#poster").attr("src", `${photo_img}`)
  })
})
