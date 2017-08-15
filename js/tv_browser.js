// API Docs at:
// http://www.tvmaze.com/api

$(document).ready(() => {

  let tvShow = $('#search').val()
  let url = `http://api.tvmaze.com/search/shows?q=${tvShow}`

  $('#search').on('submit', function (){
    event.preventDefault()
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    }).done((response) => {
      console.log(response)
    }).fail(() => {
      console.log('request failed')
    }).always(() => {
      console.log('request made')
    })
  })
})
