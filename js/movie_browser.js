// API Docs at: 
// http://www.omdbapi.com

$(document).ready(function () {
    console.log("JS Connected");

    $("#movie-select").css('visibility', 'hidden');


    $("#search input").on('click', function (event) {
        if (this.type == 'submit') {
            event.preventDefault();

            var search_query = $("#movie-search").val();
            console.log(search_query);

            $("#movie-select").empty();
            $("#movie-select").append("<option value=''>Movies matching " + search_query + "...</option>")
            $("#movie-select").css('visibility', 'visible');

            getMovies(search_query);


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

    $('#movie-select').on('change', function() {
        // alert( this.value ); // or $(this).val()
        getMovie(this.value)
    });

    function getMovie(imdbID) {
        // Set up the request
        var url = "http://www.omdbapi.com/?i=" + imdbID;
        var request = $.ajax({
            url: url,
            type: "get",
            dataType: "json"
        }).done(function(response){
            console.log(request);
            console.log(response);
            displayMovie(response)

        }).fail(function(){
            console.log("ajax request failed");
        }).always(function(){
            console.log("this always happen regardless of success of failure");
        })
    }
})

    function displayMovie(movieObject) {
        $("#movie-title").html(movieObject.Title);
        $("#movie-img").attr('src', movieObject.Poster);
        $("#movie-description").html(movieObject.Plot);
    }