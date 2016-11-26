// API Docs at:
// http://www.omdbapi.com

$( document ).ready(function() {
    $("#movie-select").hide();

    $("#search").submit(function functionName(event) {
      $("#movie-select").show();
      event.preventDefault();

      var submitTitle = $("#movie-search").val();
      showMovie(submitTitle)
    });

    $("#movie-select").change(function (event) {
      event.preventDefault();
      selectTitle = $("#movie-select").val();
      showMovie(selectTitle)
    });

    function showMovie(title) {
      var url = `http://www.omdbapi.com/?t=${title}&y=&plot=full&r=json`

      $.ajax({
        url: url,
        type: "get",
        dataType: "json"
      }).done((response) => {
        console.log(response)
        $("#movie-detail").html
        (
          `<h1>${response.Title}</h1>
          <p><img src='${response.Poster}' alt='' /></p>
          <p>${response.Plot}</p>`
        )
        $("#movie-select").append
        (
          `<option value="${response.Title}">${response.Title}</option>`
        )

      }).fail((response) => {
        console.log("fail")
      }).always((response) => {
        console.log("always")
      })
    }

});
