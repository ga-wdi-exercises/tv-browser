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
    "Movie",
    IndexController
  ])
  .factory("Movie", [
    "$resource",
    MovieFactoryCallback
  ])

function IndexController(Movie){
  this.searchTerm = "up"
  this.search = function(){
    Movie.get({searchTerm:this.searchTerm}).$promise.then( (res) => this.movies = res.Search );
  }
}

function MovieFactoryCallback($resource){
  return $resource("http://www.omdbapi.com/?s=:searchTerm");
}

function RouterFunc($stateProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
  .state("index", {
    url: '/',
    templateUrl: 'js/ng-views/index.html'
    controller: 'IndexController',
    controllerAs: 'vm',
  })
}
