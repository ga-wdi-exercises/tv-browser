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
    MovieBrowserFactoryCallback
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

function MovieBrowserIndexControllerFunction(MovieBrowserFactory){
  this.search = function(){
    MovieBrowserFactory.get({searchTerm:this.searchTerm}).$promise.then( (resource) => this.movies = resource.Search );
  }
}

function MovieBrowserFactoryCallback($resource){
  return $resource("http://www.omdbapi.com/?s=:searchTerm");
}
