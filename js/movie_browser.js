// API Docs at:
// http://www.omdbapi.com
angular
  .module("movieBrowser",  [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$locationProvider",
    "$stateProvider",
    RouterFunction
  ])
  .factory( "MovieBrowserFactory", [
    "$resource",
    MovieBrowserFactoryFunction
  ])
  .controller("MovieBrowserIndexController", [
    "MovieBrowserFactory",
    MovieBrowserIndexControllerFunction
  ])

function RouterFunction($locationProvider, $stateProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
  .state("movieIndex",  {
    url: "/",
    templateUrl: "js/ng-views/index.html",
    controller: "MovieBrowserIndexController",
    controllerAs: "vm"
  })
}

function MovieBrowserFactoryFunction($resource){
  return $resource( "http://www.omdbapi.com/?s=:searchTerm" );
}

function MovieBrowserIndexControllerFunction( MovieBrowserFactory){
  this.movies = MovieBrowserFactory.query();
}
