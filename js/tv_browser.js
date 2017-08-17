// API Docs at:
// http://www.tvmaze.com/api

$(document).ready(() => {
  $('#submit').on('click', (evt) => {
    evt.preventDefault()

    //clears fields from previous
    $('#show-select').empty()
    $('#show-detail').children().remove()

    var query = $('#show-search').val()
    var url = `http://api.tvmaze.com/search/shows?q=${query}`
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    }).done((search_items) => {
      console.log(search_items)
      console.log('Ajax request success!')

      $('#show-select').show()
      $('#show-select').append(`<option>Shows matching '${query}'</option>`)
      // goes through json and appends title to show select menu
      search_items.forEach(function(search) {
        var title = search.show.name
        $('#show-select').append(`<option>${title}</option>`)
      })

      $('#show-select').change(function(){
        //clears show info on drop-down change
          $('#show-detail').children().remove()

          var selected = $(this).val();
          console.log(selected)
          //matches show object to search name and displays info
          for(i=0; i<search_items.length; i++) {
            if (search_items[i]["show"]["name"] === selected.toString()){
              var search_show = search_items[i].show
              console.log(search_show)
              $('#show-detail').append(
                `<div> <h2>${search_show.name}</h2>
                <img src="${search_show.image.medium}">
                <p>${search_show.summary}</p>
                </div>`
              )
            }
          }

      });


    }).fail(() => {
      console.log('Ajax request fails!')
    }).always(() => {
      console.log('This always happens regardless of successful ajax request or not.')
    })
  })
})
