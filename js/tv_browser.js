// API Docs at:
// http://www.tvmaze.com/api
$('.submit').on('click', () => {
  event.preventDefault()
  // var search store the value of the search text area.
  var search = $(".search").val()
  var url = "http://api.tvmaze.com/search/shows?q=" + search
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json'
  })
  .done((response) => {
    $('option').remove()
    console.log(response)
    response.forEach((item) => {
      $(`<option value="${item.show.id}">${item.show.name}</option>`).appendTo('#show-select')
    })
    // $('#show-select').show() will show the option menu when press enter or click submit
    $('#show-select').show()
    $('#show-select').change(function () {
      // $('.results').remove() will clean the results when click in another option
    $('.results').remove()
    var index = $('#show-select').prop('selectedIndex') 
    // name & summary requested before show.image
    $('#show-detail').append(`<div class='results'>${response[index].show.name}</div>`)
    $('#show-detail').append(`<div class='results'>${response[index].show.summary}</div>`)
    //show.image requested last, if the show has not image could cause a conflict and stop loading whatever come after
    $('#image').append(`<img class ='results' src=${response[index].show.image.original}>`)
  })
  }).fail(() => {
    $('<div class="results"></div>').appendTo('main').text('Fail')
  }).always(() => {
    $('').appendTo('main').text()
    })
  })
