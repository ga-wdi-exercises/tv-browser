// API Docs at:
// http://www.omdbapi.com
$(document).ready(() => {

  $("#movie-select").hide().on('change', function(){

  });



  $(".submit").on("click", () => {
    event.preventDefault();

    let search = $("#movie-search").val();
    let url = `http://www.omdbapi.com/?s=${search}`

    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done((response) => {
      let movies = response.Search
      $("select").html('')
      movies.forEach((movie) => {
        $("#movie-select").append(`<option data-value=${movie.Poster}>${movie.Title}</option>`)
      })
         $("#movie-select").change(function(){

          let title = $(this).find(":selected").html()
         $("#movie-detail > h2").html(title)

           let photoUrl = $(this).find(":selected").data("value")
            $("img").attr("src", `${photoUrl}`)
          })

      }).fail((response) => {
      console.log("Ajax failed");
    })
  $("#movie-select").show().html()
  })
})
