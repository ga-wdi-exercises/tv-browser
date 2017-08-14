/* global $ */
// API Docs at:
// http://www.tvmaze.com/api
$(document).ready(function () {
  $('#submit').click(function () {
    event.preventDefault()
    $('#show-select').toggle()
    var search = $('#show-search').val()
    var url = `http://api.tvmaze.com/search/shows?q=${search}`
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    }).done((response) => {
      $('#top-option').text(`shows matching ${search}`)
      for (let i = 0; i < response.length; i++) {
        $('#show-select').append(`<option>${response[i].show.name}</option>`)
      }
    }).fail(() => {
      console.log('Ajax request fails!')
    })
  })
})
