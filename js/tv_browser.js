// API Docs at:
// http://www.tvmaze.com/api
$('#search-button').on('click', function () {
event.preventDefault()

var search = $("#show-search").val()
var url = `http://api.tvmaze.com/search/shows?q=${search}`

$('#show-select').css('display', 'block')
// show dropdown
$('#show-select').empty()
// clear dropdown items each time there's a search
$('#show-select').append(`<option>Shows matching "${search}"</option>`)
// set first item as search item
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json'
    }).done((response) => {
      for (var i = 0; i < response.length; i++ ) {
        $(`<option value="${i}">${response[i].show.name}</option>`).appendTo('#show-select')
      }
      //iterate through json elements and set option value to item index
      $('#show-select').change(() => {
        $('#show-detail').empty()
      // on select in dropdown, store item index
        let showIndex = $('#show-select').val()
        let responseShow = response[showIndex]
        $('#show-detail').append(`<div>
          <h2>${responseShow.show.name}</h2>
          <img src="${responseShow.show.image.medium}" />
          ${responseShow.show.summary}
          </div>`)
      //using stored response item at the index variable, insert values for that item into dom
      })
    console.log('Ajax request success!')
  }).fail(() => {
    console.log('Ajax request fails!')
  }).always(() => {
    console.log('This always happens regardless of successful ajax request or not.')
  })

})
