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
  var vm = this
  vm.searchTerm = "up"
  vm.search = function(){
    this.$apply(function(){


    $.getJSON(`http://www.omdbapi.com/?s=${vm.searchTerm}`,function(response){
      console.log("finished searchin")
      vm.movies = response.Search
      console.log(vm)
    })
      })
  }
}

function Router($stateProvider){
  $stateProvider
  .state("index",{
    url: '/',
    controller:'IndexController',
    controllerAs:'vm',
    templateUrl: 'js/ng-views/index.html'
  })
}

// API Docs at:
// http://www.omdbapi.com

// bootstrap the app

// set up a router

// set up a controller

// some template html

// ng-submit on the form

// request list of movies from api
