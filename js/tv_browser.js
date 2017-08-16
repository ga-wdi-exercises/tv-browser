// API Docs at:
// http://www.tvmaze.com/api

/* global $ */

var showSelect = $('#show-select')
var showSearch = $('#show-search')
var showDetail = $('#show-detail')

// show-select should be hidden by default
showSelect.hide()

var populateSearchResults = function (query, results) {
  showSelect.children().remove()
  // the first select option should read "Shows matching keyword…".
  var html = `<option value="">Shows matching ${query}</option>`
  // it should be populated with all search results.
  results.map((tvShow) => {
    html += `<option id="${tvShow.show.id}">${tvShow.show.name}</option>`
  })
  showSelect.append(html)
  // the "#show-select" field should be un-hidden.
  showSelect.show()
}

// populate the "#show-detail" div with that show's
// name and image.
var displayDetails = function (show) {
  showDetail.children().remove()
  var name = `<h2>${show.name}</h2>`
  var image = `<img src="${show.image.medium}"/>`
  showDetail.append(name)
  showDetail.append(image)
}

var queryShows = function (e) {
  e.preventDefault()

  var query = showSearch.val()
  var url = 'http://api.tvmaze.com/search/shows?q=' + query

  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json'
  }).done((response) => {
    populateSearchResults(query, response)
  }).fail((response) => {
    console.log('GET show search failed')
  })
}

var queryShow = function (e) {
  var idSelected = $('option:selected', this).attr('id')
  var showUrl = 'http://api.tvmaze.com/shows/' + idSelected

  $.ajax({
    url: showUrl,
    type: 'get',
    dataType: 'json'
  }).done((response) => {
    displayDetails(response)
  }).fail(() => {
    console.log('Get Show Request Failed')
  })
}

// submit listener
$('input[type="submit"]').on('click', queryShows)
// textbox change on input listener
showSearch.on('input', queryShows)
// select show listener
showSelect.on('change', queryShow)
