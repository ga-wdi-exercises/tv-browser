// API Docs at:
// http://www.tvmaze.com/api
$(document).ready(function () {
  // hide show show-select
  $('#show-select').hide()

  // pull data based on user input
  $('#search').on('submit', function () {
    let userInput = $('#show-search').val()
    var url = `http://api.tvmaze.com/search/shows?q=${userInput}`
    event.preventDefault()
    // console.log(url)
    // console.log(userInput)
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    //
    }).done((response) => {
      // console.log(response)
      // show it
      $('#show-select').show()
      // empty it
      $('#show-select').empty()
      // put user input into dropdown
      $('#show-select').append(`<option>Shows matching ${userInput}</option>`)
      // loop through and somehow display any shows that match userInput
      for (i = 0; i < response.length; i++) {
        $('#show-select').append(`<option value=${i}>${response[i].show.name}</option>`)
      }

      //wrap in function because it works
      $('#show-select').change(function () {
      // empty show detail div
        $('#show-detail').empty()
      // display information for selection
        let index = $('#show-select').val()
        let tvShow = response[index].show
        // console.log(tvShow.image.medium)
        $('#show-detail').append(`<div><p>${tvShow.name}</p><img src="${tvShow.image.medium}"/><p>Imdb: ${tvShow.rating.average}</p><p>${tvShow.summary}</p></div>`)
      })
    }).fail(() => {
      console.log('Ajax request fails!')
    }).always(() => {
      console.log('This always happens regardless of successful ajax request or not.')
    })
  })
})
