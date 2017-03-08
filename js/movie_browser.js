// API Docs at:
// http://www.omdbapi.com
$(document).ready(() => {

  $("#movie-select").hide();

  $(".submit").on("click", () => {
    event.preventDefault();

    let search = $("#movie-search").val();
    let url = `http://www.omdbapi.com/?s=${search}`

    $("#movie-select").show();
    $("#movie-select").empty();

    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done((response) => {

        $("#movie-select").append(`<option> Movies Matching "${search}" ... </option>`)

        var movie = response.Search

        for(var i = 0; i < movie.length; i++){
          $("#movie-select").append(`<option data-value=${movie[i].Poster}>${movie[i].Title}</option>`)
        }
         $("#movie-select").change(function(){

          let title = $(this).find(":selected").html()
         $(".movieTitle").html(title)

           let photoUrl = $(this).find(":selected").data("value")
            $("img").attr("src", `${photoUrl}`)
          })

      }).fail((response) => {
      console.log("Ajax failed");
    })
  })
})
