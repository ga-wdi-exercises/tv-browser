// API Docs at:
// http://www.omdbapi.com
const submitButton = $("#search").children().eq(1)

submitButton.on("click", (event) => {

const criteria = $("#movie-search").val()

const apiURL = "http://www.omdbapi.com/?s=" + criteria
// const options = [];

console.log(apiURL)

$.ajax({
  url: apiURL,
  type: "GET",
  dataType: "json"

}).done((response) =>{
  console.log("success!", response.Search[0].Title)

  for (i = 0; i < response.Search.length; i++) {
      console.log(response.Search[i].Title)
      $("select").append(`<option>${response.Search[i].Title}</option>`)
  }

    $("#movie-select").change(function() {
      let selectedMovie = $("#movie-select").val()
      $("#movie-detail").text(`${selectedMovie}`)
    })

}).fail((response)=>{
  console.log("fail!", response)
})

event.preventDefault();

})






// console.log("success!",response.Search[0].Title)



//
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }
