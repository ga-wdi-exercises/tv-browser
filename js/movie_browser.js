// API Docs at:
// http://www.omdbapi.com

// angular.module("movieBrowser", [])
//     .config(["$stateProvider", RouterFunction])
//     .controller('MovieIndexController', [MovieIndexControllerFunction])
//
// function MovieIndexControllerFunction(){
//
// };

$("#movie-select").hide();

  // console.log("jquery working")
  $("#search").on("submit", function(event){
    event.preventDefault()
    console.log("hellooo")
    $("#movie-select").show();


    let query = $('#movie-search').val()
    let url= `http://www.omdbapi.com/?s=${query}&y=&plot=short&r=json`
    $.ajax({
      url,
      type: "get", // making a get request
      dataType: "json"
    }).done((response) => {
      let movies = [];
      $("#movie-select").append(`<option>movies matching "${query}"</option>`)
      response.Search.forEach(function(movie){
      let option = $(`<option value="${movie}">${movie.Title}</option>`)
      $("#movie-select").append(option)
      movies.push(movie)})
      console.log(movies)
      $("#movie-select").on("change", function(){
        let selected = $("#movie-select").val()
          console.log(selected.Title)
      })
    }).fail(() => {
      console.log("ajx fails...")
    }).always(() => {
      console.log("this happens always") //these are "promises"
    })

  });



  // function RouterFunction($stateProvider){
  //   $stateProvider
  //   .state("movieIndex", {
  //     url: "/",
  //     controller: "MovieIndexController",
  //     controllerAs: "vm"
  //   })
  // }
