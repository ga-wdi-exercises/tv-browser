// API Docs at:
// http://www.omdbapi.com
$("#submit").on('click', () => {
    event.preventDefault()

    var input = $("movie-search").val()
    var url = 'http://www.omdbapi.com/?' + input;
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json'
    }).done(() =>{
        
        }
    }).fail(()=>{

    })
})
