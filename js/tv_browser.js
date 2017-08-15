// API Docs at:
// http://www.tvmaze.com/api

$(document).ready(() => {

  $('#show-select').hide()

  $('#search').on('submit', function (){
    let tvShow = $('#show-search').val()
    // let tvShow = 'doug'
    let url = `http://api.tvmaze.com/search/shows?q=${tvShow}`
    event.preventDefault()
    console.log(url)
    console.log(tvShow)
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    }).done((response) => {
      console.log(response)
      $('#show-select').show()
      $('select').append(`<option>Shows matching "${tvShow}"</option>`)
      for (i = 0; i < response.length; i++){
          $('select').append(`<option>${response[i].show.name}</option>`)
        }
    }).fail(() => {
      console.log('request failed')
    }).always(() => {
      console.log('request made')
    })
  })
})
