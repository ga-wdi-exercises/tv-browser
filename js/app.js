var app = angular
    .module('tvBrowser', [])
    .controller('TvController', [
      'showSearch',
      TvController
    ])
    .factory('showSearch', ['$http', showSearch])

function showSearch ($http) {
  return function (searchString) {
    return $http({
      method: 'GET',
      url: `http://api.tvmaze.com/search/shows?q=${searchString}`
    })
  }
}

function TvController (showSearch) {
  showSearch('girls').then((response) => {
    this.results = response.data
  })
}
