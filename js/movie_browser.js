// API Docs at:
//http://www.omdbapi.com/?

//http://img.omdbapi.com/?apikey=2efbebb6&

// http://www.omdbapi.com

// $(document).ready(function(){
//   $('#movie-select').hide(),on('change', ()=>{});
//
//
//
//
//
// });



$(document).ready(function() {

    $('#movie-select').hide().on('change', () => {});

    $('#btn').on('click', () => {
        event.preventDefault()

        var search = $('#movie-search').val();
        var url = `http://www.omdbapi.com/?s=${search}`

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: url
        }).done((response) => {
            console.log(response);
            // console.log(response);
            var movies = response.Search
            $('select').html('')
            movies.forEach((movie) => {
                selected = $('#movie-select').append(`<option value="${movie.imdbID}">${movie.Title}</option>`)
                $('#movie-detail').text(selected.text())
            })
        }).fail((response) => {
            console.log("Ajax failed");
        })
        $('#movie-select').show().html()



    });
});
