// API Docs at:
// http://www.tvmaze.com/api
$(document).ready(function () {
  //hide show show-select
  $('#show-select').hide()

  // pull data based on user input
  $('#search').on('submit', function () {
    let userInput = $('#show-search').val()
    var url = `http://api.tvmaze.com/search/shows?q=${userInput}`
    event.preventDefault()
    console.log(url)
    console.log(userInput)
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    //
    }).done((response) => {
      console.log(response)
      $('#show-select').show()
      $('#show-select').empty()
    }).fail(() => {
      console.log('Ajax request fails!')
    }).always(() => {
      console.log('This always happens regardless of successful ajax request or not.')
    })
  })
})
