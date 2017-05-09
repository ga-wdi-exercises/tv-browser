// API Docs at:
// http://www.omdbapi.com

angular
  .module(moviebrowser, [
    "ui.router"
  ])
  .config([
    "stateProvider", Router
  ])

function Router($stateProvider) {
  $stateProvider
  .state("index", {
    url: "/",
    controller: "IndexController",
    controllerAs: "vm",
    templateUrl: "js/ng-views/index.html"
  })
}
