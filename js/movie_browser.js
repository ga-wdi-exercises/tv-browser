// API Docs at:
// http://www.omdbapi.com

angular.module("movieBrowser", [])
    .config(["$stateProvider", RouterFunction])
    .controller('MovieIndexController', [MovieIndexControllerFunction])


function MovieIndexControllerFunction(){

};

$("#movie-select").hide();

  // console.log("jquery working")
  $("#search").on("submit", function(event){
    event.preventDefault()
    console.log("hellooo")
    $("#movie-select").show();


    let title = $('#movie-search').val()
    let url= `http://www.omdbapi.com/?s=${title}&y=&plot=short&r=json`
    $.ajax({
      url,
      type: "get", // making a get request
      dataType: "json"
    }).done((response) => {
      $("#movie-select").append(`<option>movies matching "${title}"</option>`)
      response.Search.forEach(function(movie){
      console.log(movie.Title)
      let option = $(`<option value="${movie.Title}">${movie.Title}</option>`)
      $("#movie-select").append(option)})
    }).fail(() => {
      console.log("ajx fails...")
    }).always(() => {
      console.log("this happens always") //these are "promises"
    })

  });


  function RouterFunction($stateProvider){
    $stateProvider
    .state("movieIndex", {
      url: "/",
      controller: "MovieIndexController",
      controllerAs: "vm"
    })
  }
