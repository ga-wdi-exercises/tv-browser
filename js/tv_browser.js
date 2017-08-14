
/* global $ */
/* global event */
// API Docs at:
// http://www.tvmaze.com/api
$(document).ready(() => {
  $('#submit').click(function () {
    event.preventDefault()
    $('.new').remove()
    var search = $('#show-search').val()
    var url = `http://api.tvmaze.com/search/shows?q=${search}`
    $('.select').text(`shows matching ${search.toLowerCase()}...`)
    $('#show-select').show()
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    }).done((response) => {
      for (var i = 0; i < response.length; i++) {
        $('#show-select').append(`<option class='new'>${response[i].show.name}</option>`)
      }
      $('#show-select').change(function () {
        if ($('#show-select').val() !== `shows matching ${search.toLowerCase()}...`) {
          console.log(`${search.toLowerCase()}`)
          $('#show-detail').empty()
          var index = $('#show-select').prop('selectedIndex') - 1
          $('#show-detail').append(`<h2 class='info'>${response[index].show.name}<h2>`)
          var imageUrl = response[index].show.image ? response[index].show.image.medium : ''
          $('#show-detail').append(`<img src="${imageUrl}" alt="No image for ${response[index].show.name}">`)
          $('#show-detail').append(`<p class='info'>${response[index].show.summary}</p>`)
        }
      })
    }).fail(() => {
      console.log('BOO')
    }).always(() => {
      console.log('EVERYTIME')
    })
  })
})
