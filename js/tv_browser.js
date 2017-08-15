// global var $
// API Docs at:
// http://www.tvmaze.com/api

$(document).ready(function () {
  // when a user clicks submit
  $('#submit').click(function () {
    event.preventDefault()
    $('.new').remove()
    // the #show-select field should be un-hidden
    $('#show-select').show()
    // search the TV Maze API for the show inputted
    var query = $('#show-search').val()
    var url = `http://api.tvmaze.com/search/shows?q=${query}`
    $.ajax({

      url: url,
      type: 'get',
      dataType: 'json'

    }).done((response) => {
      // the first option should read "Shows matching keyword..."
      $('#first-select-option').text(`Shows matching ${query}...`)
      for (let i = 0; i < response.length; i++) {
        // populate the show-select field with all results
        $('#show-select').append(`<option class="new">${response[i].show.name}</option>`)
      }
      // whenever the user selects a title from the #show-select field (HINT: listen for a "change" event)
      $('#show-select').change(function () {
        $('#show-detail').empty()
        // get the index of the item selected in the drop down list
        let index = $('#show-select').prop('selectedIndex') - 1
        // make sure we aren't grabbing the top item
        if (index >= 0) {
          // display the shows name
          $('#show-detail').append(`<h1>${response[index].show.name}</h1>`)
          // display the shows image (medium, not original size)
          let img = response[index].show.image ? response[index].show.image.medium : ''
          $('#show-detail').append(`<img src=${img}>`)
          // display the shows network
          $('#show-detail').append(`<p>Airs on ${response[index].show.network.name}</p>`)
          // display the shows summary
          $('#show-detail').append(`<p>${response[index].show.summary}</p>`)
        }
      })
    }).fail(() => {
      console.log('Ajax request fails!')
    })
  })
})
