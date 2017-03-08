$(document).ready(() => {
  $('#movie-select').hide();

  $('.submit').on('click', () => {
    event.preventDefault()
    let search = $("#movie-search").val()
    let url = `http://www.omdbapi.com/?s=${search}`
    $('#movie-select').show()
    $('#movie-select').empty()

    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json'
    }).done(response) => {
      // $('#movie-select').empty()

      console.log("Search success");
    }.fail() {
      console.log("Search failed");
    }
  }
})
