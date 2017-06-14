angular
  .module('mb', [
    'ui.router'
  ])
  .config([
    '$stateProvider',
    Router
  ])
  .controller('IndexController', [
    IndexController
  ])

function IndexController () {
  var vm = this
  vm.searchTerm = 'up'
  vm.search = function () {
    this.$apply(function () {
      $.getJSON(`http://www.omdbapi.com/?s=${vm.searchTerm}`, function (response) {
        console.log('finished searchin')
        vm.movies = response.Search
        console.log(vm)
      })
    })
  }
}

function Router ($stateProvider) {
  $stateProvider
  .state('index', {
    url: '/',
    controller: 'IndexController',
    controllerAs: 'vm',
    templateUrl: 'js/ng-views/index.html'
  })
}
