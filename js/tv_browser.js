// API Docs at:
// http://www.tvmaze.com/api
$(document).on('click', () => {
  $('.submit').on('click', (event) => {
    event.preventDefault()
    // Make sure to add your API key to the URL!

    var url = 'http://api.tvmaze.com/search/shows?q=girls'
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
      // $.ajax takes an object as an argument with at least three key-value pairs...
      // (1) The URL endpoint for the JSON object.
      // (2) Type of HTTP request.
      // (3) Datatype. Usually JSON.
    }).done(() => {
      $('#show-select').show()
      console.log('Ajax request success!')
    }).fail(() => {
      console.log('Ajax request fails!')
    }).always(() => {
      console.log('This always happens regardless of successful ajax request or not.')
    })
  })
})
