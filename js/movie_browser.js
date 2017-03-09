// API Docs at:
// http://www.omdbapi.com

$(document).read(() =>{
  // Hiding all of the movies in the API before giving users search capability
  $("#movie-selection").hide();
  $(".find").on("click",() => {
    $("#movie-selection").show();
    event.preventDefault();

    let keyword = $("#movie-search").val();
    let url = "http://www.omdbapi.com/?s=${keyword}"

    $("#movie-selection").empty();

    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done((response) => {
      console.log("All Of My Movies");
      $("#movie-selection").append("<option> Here are all of the movies that match your search "${keyword}"...</option>")

      var movieSearch = response.search

      for (var i=0; i < response.Search.length; i++)
        $("#movie-selection").append("<option data-value=${response.Search[i].Poster}>${response.Search[i].Title} </option>")
        console.log("Movies");
      }

      $("movie-selection").change(function() {

        let title = $(this).find(":selected").html();
          $(".movie").html(title)
        let photo-img = $(this).find(":selected").data("value")
          $("#poster").attr("src", "${photo-img}")
        })
      }).fail((respone)) => {
        console.log("Failure");
    })
  })
})
