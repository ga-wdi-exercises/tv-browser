angular
  .module('mb', [
    'ui.router'
  ])
  .config([
    '$stateProvider',
    Router
  ])
  .controller('IndexController', [
    "$timeout",
    "$sce",
    IndexControllerFunc
  ])

function IndexControllerFunc ($timeout, $sce) {
  var vm = this
  vm.hideBar = true
  vm.showDetails = false
  vm.searchTerm = 'up'

  console.log(vm.hideBar)

  vm.search = function () {
    $.getJSON(`http://api.tvmaze.com/search/shows?q=${vm.searchTerm}`, function (response) {
      $timeout(function () {
        console.log(response)
        vm.shows = response

        //set vm.hideBar to false
        vm.hideBar = false
      })
    })
  }
  vm.addDetails = function () {
    $timeout(function () {
      vm.show = vm.shows.find(showObj => showObj.show.name === vm.choice).show
      console.log(vm.choice, vm.show)
      // let imgUrl = vm.show.image.original
      vm.show.summaryHtml = $sce.trustAsHtml(vm.show.summary)
      vm.showDetails = true
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
