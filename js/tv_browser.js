// API Docs at:
// http://www.tvmaze.com/api
$(document).on('click', () => {
  $('.submit').on('click', (event) => {
    event.preventDefault()
    // Make sure to add your API key to the URL!
    var text = $('#show-search').val()
    // var option = `<option>${text}</option>`
    var url = `http://api.tvmaze.com/search/shows?q=${text}`
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
      // $.ajax takes an object as an argument with at least three key-value pairs...
      // (1) The URL endpoint for the JSON object.
      // (2) Type of HTTP request.
      // (3) Datatype. Usually JSON.
    }).done((response) => {
      console.log(response)
      var titles = response.map(function(obj){return obj.show.name})
      console.log(titles)
      // .order.orderDetails.map(function(obj){ return obj.a1 })
      $('#show-select').show()
      $('#show-select').children().remove()
      $('#show-select').append(`<option>Shows matching ${text} ...</option>`)
      titles.forEach(function(x) {
        $('#show-select').append(`<option>${x}</option>`)  
      })
      console.log('Ajax request success!')
      console.log(text)
    }).fail(() => {
      console.log('Ajax request fails!')
    }).always(() => {
      console.log('This always happens regardless of successful ajax request or not.')
    })
  })
})
