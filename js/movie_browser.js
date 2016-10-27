angular
.module("mb", [
  "ui.router"
])
.config([
  "$stateProvider",
  Router
])

.controller("IndexController",{
  IndexController
})

function IndexController() {
  this.search = function(){
    $.getJSON(`http://www.omdbapi.com/?=${this.searchTerm}`, response => {
      console.log(response)
      this.movies = response.Search
    })
  }
}
function Router($stateProvider){
  $stateProvider
  .state('index',{
    url: '/',
    controller: 'IndexController',
    controllerAs: 'vm',
    templateUrl: 'js/ng-views/index.html'
  })
}
