// API Docs at:
// http://www.omdbapi.com
$(document).ready(() => {
    $("#movie-select").hide();

    $(".submit").on("click", () => {
        event.preventDefault()
        let search = $("#movie-search").val()
        let url = `http://www.omdbapi.com/?s=${search}`
        $("#movie-select").show();
        // removes all options from the select movie pull down bar
        $("#movie-select").empty();

        $.ajax({
            url: url,
            type: "get",
            dataType: "json"
        }).done((response) => {
          // shows what was searched
          $("#movie-select").append(`<option> Movies matching "${search}"...</option>`)
          // runs through every result from the api search
          for (var i=0; i < response.Search.length; i++) {
              $("#movie-select").append(`<option data-value=${response.Search[i].Poster}>${response.Search[i].Title}</option>`)
          }
          $("#movie-select").change(function(){
              // add title of selected movie
            let title = $(this).find(":selected").html()
            $("#movie-detail > h2").html(title)
            // add photo of selected movie
            let photoUrl = $(this).find(":selected").data("value")
            $("img").attr("src", `${photoUrl}`)
          })

        }).fail(() => {
          console.log("Search request failed!")
        })
    })


})
