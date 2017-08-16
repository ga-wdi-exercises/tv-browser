// API Docs at:
// http://www.tvmaze.com/api
  var url = 'http://api.tvmaze.com/'
  $http({
    url: url,
    method: 'GET',
    dataType: 'json'
  }).then(() => {
    console.log('success')
  })
