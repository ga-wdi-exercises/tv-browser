// API Docs at:
// http://www.omdbapi.com
$("#submit").on('click', (event) => {
    event.preventDefault()

    let keycode = $("#movie-search").val()
    let url = 'http://www.omdbapi.com/?s=' + keycode;
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json'
    }).done((response) =>{
        $("#movie-select").css("display", "block")

        let results = response.Search

        $("#movie-select").empty()

        $("#movie-select").append(`<option>Movies that include "${keycode}"...</option>`)
        if (results === undefined ){
            $("#movie-select").css("display", "none")
    }   else {
            results.forEach((movie, i) => {
                $("#movie-select").append(`<option>${movie.Title}</option>`)
            })
        }


    $("#movie-select").change(() => {
        let movieInfo = $("#movie-select").find(':selected').html();
        $("#movie-detail").html(`<h2>${movieInfo}</h2><br><img src=${results[0].Poster}>`)
    })


    }) .fail(()=> {
        console.log("Ajax request failed!")
    })
})
