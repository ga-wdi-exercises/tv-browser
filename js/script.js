$(document).ready(function() {
    $('#search').submit(function(event) {
        event.preventDefault();
        console.log('I Submitted')
        var search = $('#movie-search').val()
        var url = "http://www.omdbapi.com/?s=" + search
        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json'
        })
        .done(function(response) {
            console.log("success");
            $('#movie-select').empty()
            $('#movie-detail').empty()
            var searchTerms = new Search(response)
            var searchView = new SearchView(searchTerms)
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

    })
});
