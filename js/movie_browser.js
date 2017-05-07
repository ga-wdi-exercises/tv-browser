// API Docs at:
// http://www.omdbapi.com

$("#search input[type='submit']").on('click', () => {
  var url = 'http://www.omdbapi.com/?'
  $.ajax({
    url: url,
    type: 'get',
    dataType: 'json'
  }).done(() => {
    console.log("Ajax request success!")
  })
})
