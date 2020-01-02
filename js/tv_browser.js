function search (keyword) {
  let urlEncodedSearchTerm = escape(keyword)
  let url = `https://api.tvmaze.com/search/shows?q=${urlEncodedSearchTerm}`

  $.getJSON(url)
    .done(function (response) {
      console.log(response)
      // To build the options for the select element (the dropdown) we'll pass
      // in the TV Maze API's response along with the search term
      buildOptionsForSelect(keyword, response)
    })
    .fail(function (apiResonse, textStatus, errorMessage) {
      let failMessage = `Sorry, we had issues retrieving data for ${keyword}`
      if (errorMessage) {
        failMessage += ` (${errorMessage})`
      }
      failMessage += '.  Please try again.'
      $('#show-detail').html(`<h2 class='fail'> ${failMessage} </h2>`)
    })
}

function buildOptionsForSelect (searchTerm, responseData) {
  let display = `<option value="">Shows matching ${searchTerm}...</option>`
  responseData.forEach(resObj => {
    let show = resObj.show
    display += `<option value="${show.id}"> ${show.name} </option>`
    $('#show-select').show().html(display)
  })
}

function show (tvMazeId) {
  if (!tvMazeId) return

  let url = `https://api.tvmaze.com/shows/${tvMazeId}`

  $.getJSON(url).then(function (show) {
    let detail = `
      <h2> ${show.name} </h2>
      <img src="${show.image.medium}" alt="${show.name}">
      ${show.summary ? show.summary : '<p>(no summary)</p>'}`

    $('#show-detail').html(detail)
  })
}


// Search form:

$('#search').on('submit', function (evt) {
  evt.preventDefault()
  let $search = $('#show-search')
  let keyword = $search.val()
  $search.val('')
  search(keyword)
})


// show selector:

$('#show-select').hide().on('change', function () {
  show(this.value)
})
