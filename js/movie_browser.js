angular
  .module("mb",[
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunc
  ])
  .controller("IndexController", [
    "Hollyw00d",
    IndexController
  ])
  .factory("Hollyw00d", [
    "$resource",
    Hollyw00dFactoryCallback
  ])

function IndexController(Hollyw00d){
  this.searchTerm = "up"
  this.search = function(){
    Hollyw00d.get({searchTerm:this.searchTerm}).$promise.then( (res) => this.movies = res.Search );
  }
}

function Hollyw00dFactoryCallback($resource){
  return $resource("http://www.omdbapi.com/?s=:searchTerm");
}

function RouterFunc($stateProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
  .state("index",{
    url: '/',
    controller:'IndexController',
    controllerAs:'vm',
    templateUrl: 'js/ng-views/index.html'
  })
}
