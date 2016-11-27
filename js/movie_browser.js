/*jshint esversion: 6 */

$(document).ready(function() {
    //console.log( "ready!" );

    $('#search').on('submit', function(pd) {
        pd.preventDefault();
        // console.log(this);
        var keyword = $('#movie-search').val();
        findAll(keyword);
    });


    function findAll(keyword) {
        var url = 'http://www.omdbapi.com/?s=' + keyword;
        $.ajax({
            url: url,
            type: "get",
            dataType: "json"
                // $.ajax takes an object as an argument with at least three key-value pairs...
                // (1) The URL endpoint for the JSON object.
                // (2) Type of HTTP request.
                // (3) Datatype. Usually JSON.
        }).done(() => {
            console.log("Ajax request success!");
        }).fail(() => {
            console.log("Ajax request fails!");
        }).always(() => {
            console.log("This always happens regardless of successful ajax request or not.");
        });
    }


});
