// API Docs at: 
// http://www.omdbapi.com

$(document).ready(function () {
    console.log("JS Connected");

    $("#movie-select").css('visibility', 'hidden');


    $("#search input").on('click', function (event) {
        if (this.type == 'submit') {
            event.preventDefault();

            $("#movie-select").css('visibility', 'visible');

            var search_query = $("#movie-search").val();
            console.log(search_query);
            getMovies(search_query)
        }
    })
    
    
    function getMovies(titleQuery) {
        // Set up the request
        var url = "http://www.omdbapi.com/?s=" + titleQuery;
        var request = $.ajax({
            url: url,
            type: "get",
            dataType: "json"
        }).done(function(response){
            console.log(request);
            console.log(response);

            for (var i = 0; i < response.Search.length; i++) {
                addOption(response.Search[i]);
            }

        }).fail(function(){
            console.log("ajax request failed");
        }).always(function(){
            console.log("this always happen regardless of success of failure");
        })
    }

    function addOption(movieObject) {
        var movie_id = movieObject.imdbID;
        var title = movieObject.Title;
        var option = "<option value = '" + movie_id + "' >" + title + "</option>"

        $("#movie-select").append(option);
    }

    
})