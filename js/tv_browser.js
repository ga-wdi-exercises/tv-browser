// API Docs at:
// http://www.tvmaze.com/api
$('.submit').on('click', () => {
  event.preventDefault()
  var search = $(".search").val()
  var url = "http://api.tvmaze.com/search/shows?q=" + search
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json'
  })
  .done((response) => {
    $('.results').remove()
    $('option').remove()
    console.log(response)
    response.forEach((item) => {
      $(`<option value="${item.show.id}">${item.show.name}</option>`).appendTo('#show-select')
    })

    var option = $("#show-select").val()
    console.log(option)
    $('#show-select').show()
    $(`<img class ='results' src=${response[1].show.image.original}>`).appendTo('main')
    $('<div class ="results" ></div>').appendTo('main').html(`${response[1].show.summary}`)

  }).fail(() => {
    $('<div class="results"></div>').appendTo('main').text()
  }).always(() => {
    $('').appendTo('main').text()
    })
  })
