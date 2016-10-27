// 1) bootstrap app
//
// 2) set up the router
//
// 3) create controller
//
// 4) create some template html
//
//5)  ng-submit the form
//
//6)  request a list of movies from the api


angular
  .module("mb", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    Router
  ])

  function Router ($stateProvider){ // router depends on stateProvider
    $stateProvider
    .state({
      url: "/",
      controller: "IndexController",
      controllerAs: "vm",
      templateUrl: "js/ng-views/index.html"
    })
  }
