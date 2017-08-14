/* global $ */
// API Docs at:
// http://www.tvmaze.com/api
$(document).ready(function () {
  $('#submit').click(function () {
    event.preventDefault()
    $('.new').remove()
    $('#show-select').show()
    var search = $('#show-search').val()
    var url = `http://api.tvmaze.com/search/shows?q=${search}`

    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'

    }).done((response) => {
      $('#top-option').text(`shows matching ${search}...`)
      for (let i = 0; i < response.length; i++) {
        $('#show-select').append(`<option class="new">${response[i].show.name}</option>`)
      }

      $('#show-select').change(function () {
        let selection = $('#show-select').prop('selectedIndex')
        if (selection >= 0) {
          var index = selection - 1
        }
        $('#show-detail').empty()
        $('#show-detail').append(`<h2>${response[index].show.name}</h2>`)
        $('#show-detail').append(`<img src=${response[index].show.image.medium}>`)
        $('#show-detail').append(`<p>${response[index].show.summary}</p>`)
      })
    }).fail(() => {
      console.log('Ajax request fails!')
    })
  })
})
