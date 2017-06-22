// API Docs at:
// http://www.tvmaze.com/api
function search (keyword) {
  let searchWord = escape(keyword)
  let url = `http://api.tvmaze.com/search/shows?q=${searchWord}`
}

  $.getJSON(url)
    .done(function (response) {
      console.log(response)

      buildOptionsForSelect(keyword, response)
    })
    .fail(function (apiResonse, textStatus, errorMessage) {
      let failMessage = `unsupported request for:  ${keyword}`
      if (errorMessage) {
        failMessage += ` (${errorMessage})`
      }
      failMessage += '.  Please try again.'
      $('#show-detail').html(`<h2 class='fail'> ${failMessage} </h2>`)
    })
}

//the search itself
$('#search').on('submit', function (evt) {
  evt.preventDefault()
  let $search = $('#show-search')
  let keyword = $search.val()
  $search.val('')
  search(keyword)
})

//There's no way anyone just got this one, right?  We get an intro to API
//that doesn't really function, and then we have to do this? C'maaannnnnn
