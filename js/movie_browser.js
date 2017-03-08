$(document).ready(function() {
    // API Docs at:
    //http://www.omdbapi.com/?
    function search(movieName) {
        var url = `http://www.omdbapi.com/?s=${movieName}`

        $.getJSON(url)
            .done((imdbResponse) => {
                imdbDone(movieName, imdbResponse)
            })
            .fail((imdbResponse, textStatus, errorMessage) => {
                let message = 'Sorry we could not find data for "' + movieName + '""'
                if (errorMessage) {
                    message += "(" + errorMessage + ")"
                }
                message += ". Please try again"
                $('#movie-detail').html("<h2 class='fail'>" + message + "</h2>")
            })
    }

    function imdbDone(searchMovieName, imdbSearchData) {
        let display = '<option value="">Movies matching"' + searchMovieName + '"...</option>'

        for (i = 0; i < imdbSearchData.Search.length; i++) {
            let movie = imdbSearchData.Search[i]
            display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('')
        }
        $('#movie-select').show().html(display)
    }

    function show(imdbId) {
        if (!imdbId) return
        let url = 'http://www.omdbapi.com/?i=' + imdbId

        $.getJSON(url).then((imdbMovieData) => {
            let detail = '<h2>' + imdbMovieData.Title + '</h2>'
            detail += '<img src="' + imdbMovieData.Poster + '" alt="' + imdbMovieData.Title + '">'
            $('#movie-detail').html(detail)
        })
    }

    $('#search').on('submit',(evt) => {
        evt.preventDefault()
        let $search = $('#movie-search')
        let movieName = $search.val()
        $search.val('')

        search(movieName)
    })

    $('#movie-select').hide().on('change', function() {
        show(this.value);
    });
});
