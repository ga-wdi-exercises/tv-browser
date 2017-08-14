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
        $('#show-detail').empty()

        let index = $('#show-select').prop('selectedIndex') - 1
        if (index >= 0) {
          console.log(response, index)
          $('#show-detail').append(`<h2>${response[index].show.name}</h2>`)
          let img = response[index].show.image ? response[index].show.image.medium : ""
          $('#show-detail').append(`<img src=${img}>`)
          $('#show-detail').append(`<p>${response[index].show.summary}</p>`)
        }
      })

    }).fail(() => {
      console.log('Ajax request fails!')
    })
  })
})
