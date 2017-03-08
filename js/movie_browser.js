// API Docs at:
// http://www.omdbapi.com

$(document).ready(() => {

  $("#movie-select").hide(); // Hide all movies in API before Search

  $(".find").on("click", () => {

    $("#movie-select").show();
    event.preventDefault();

    let keyword = $("#movie-search").val();
    let url = `http://www.omdbapi.com/?s=${keyword}`

    $("#movie-select").empty();

    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done((response) => {
      console.log("Movies Listed after Search");
      $("#movie-select").append(`<option> Movies that match your Search "${keyword}"... </option> `)

      var movieSearch = response.Search

      for (var i = 0; i < response.Search.length; i++) {
        $("#movie-select").append(`<option data-value=${response.Search[i].Poster}>${response.Search[i].Title} </option>`)
        console.log("Movies Found");
      }

      $("movie-select").change(function() {

          let title = $(this).find(":selected").html();
            $(".movie").html(title)
          let photo_img = $(this).find(":selected").data("value")
            $("#poster").attr("src", `${photo_img}`)
      })
    }).fail((response) => {
      console.log("Failure");
    })
  })
})
