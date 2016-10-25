// API Docs at:
// http://www.omdbapi.com
const submitButton = $("#search").children().eq(1)

submitButton.on("click", (event) => {
$("#movie-select").css("visibility", "visible")
const criteria = $("#movie-search").val()

const apiURL = "http://www.omdbapi.com/?s=" + criteria


$("#movie-select").empty()
$("#movie-select").append("<option>Please select a movie</option>")


$.ajax({
  url: apiURL,
  type: "GET",
  dataType: "json"

}).done((response) =>{

  moviesArray = []

  for (i = 0; i < response.Search.length; i++) {
       var newObject = {
         title: response.Search[i].Title,
         photo_url : response.Search[i].Poster
       }
      moviesArray.push(newObject)
      $("select").append(`<option>${response.Search[i].Title}</option>`)
  }

$("#movie-select").change(function() {
      let selectedMovie = $("#movie-select").val()
      $("#movie-detail").text(`${selectedMovie}`)

      for (i = 0; i < moviesArray.length; i++){
        if (moviesArray[i].title == selectedMovie){
          let selectedPoster = moviesArray[i].photo_url
          $("#moviePoster").attr("src",`${selectedPoster}`);
        }
      }
    })
}).fail((response)=>{

})

event.preventDefault();

})
