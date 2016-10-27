// API Docs at
// http://www.omdbapi.com
angular
.module("mb",[
  "ui.router"
])
.config([
  "$stateProvider",
  Router
])
.controller("IndexController",[
  IndexController
])

function IndexController(){
  this.search = function(){
    $.getJSON(`http://www.omdbapi.com/?s=${this.searchTerm}`, response => {
      this.movies = response.Search
    })
  }
}

function Router($stateProvider){
  $stateProvider
  .state("Index")({
    url:'/',
    controller:'IndexController',
    controllerAs:'vm',
    templateUrl:'js/ng-views/index.html'
  })
}

// bootstrap the app

// set up a router

// set up a controller

// some template HTML

// ng-submit on the form

// make an API request for list of movies



// $("#movie-search").on("click", () => {
//   const url = "http://www.omdbapi.com/"
//   $.ajax({
//     _______: movie,
//       type: "GET",
//       url: url,
//       dataType: "json",
//   })
// })
