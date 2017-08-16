// API Docs at:
// http://www.tvmaze.com/api

// search feature
// http://api.tvmaze.com/search/shows?q=:query

/* global $ */

// show-select should be hidden by default
$('#show-select').hide()

// submit listener
$('input[type="submit"]').on('click', (e) => {
  var url = 'http://api.tvmaze.com/search/shows?q='

  e.preventDefault()
  // the "#show-select" field should be un-hidden.
  $('#show-select').show()

  var input = $('#show-search').val()

  $.ajax({
    url: url + input,
    type: 'get',
    dataType: 'json'
  }).done((response) => {
    //
    $('#show-select').children().remove()

    // the first select option should read "Shows matching keyword…".
    var html = `<option value="">Shows matching ${input}</option>`
    // it should be populated with all search results.
    response.map((tvShow) => {
      html += `<option id="${tvShow.show.id}">${tvShow.show.name}</option>`
    })

    $('#show-select').append(html)

    console.log(response)
  }).fail((response) => {
    console.log(response)
  })
})
// input listener
$('show-search').on('type', () => {

})

// Whenever the user selects a title from the #show-select field
// (HINT: listen for a "change" event), the app should populate the
// "#show-detail" div with that show's name and image.

$('#show-select').on('change', function (e) {
  var optionSelected = $('option:selected', this)
  var idSelected = optionSelected.attr('id')
  var showUrl = 'http://api.tvmaze.com/shows/' + idSelected

  $.ajax({
    url: showUrl,
    type: 'get',
    dataType: 'json'
  }).done((response) => {
    var name = `<h2>${response.name}</h2>`
    image = `<img src="${response.image.medium}"/>`
    $('#show-detail').children().remove()
    $('#show-detail').append(name)
    $('#show-detail').append(image)
  }).fail(() => {
    console.log('Get Show Request Failed')
  })
})
