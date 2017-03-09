let arsData = [
  { name: 'Build an app with Rails', completed: true },
  { name: 'Project 2', completed: true },
  { name: 'Build an app with Angular', completed: false },
  { name: 'Project 3', completed: false },
  { name: 'Build an app with Express', completed: false },
  { name: 'Build an app with Mongo', completed: false },
  { name: 'Build an app with React', completed: false },
  { name: 'Project 4', completed: false },
  { name: 'Become a Rockstar', completed: true }
]


angular
.module("arApp", ["ui.router"])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("ArsControllerFunction", [ArsControllerFunction])

  function ArsControllerFunction($state, $stateParams){
    this.ars = arsData;
  }

function RouterFunction($stateProvider){
  $stateProvider
    .state("arsIndex", {
      url: "/",
      templateUrl: "ars-index.html",
      controller: "ArsController",
      controllerAs: "vm"
    })
}
