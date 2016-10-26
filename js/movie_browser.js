// API Docs at:
// http://www.omdbapi.com



$(".submit").on("click", () => {
  $("#movie-select").css("visibility", "visible")
  const searchTerm = $("#movie-search").val()
  const apiUrl = "http://www.omdbapi.com/?s=" + searchTerm
  $("#movie-select").empty().append(`<option>Movies matching... ${searchTerm}</option>`)

  $.ajax({
    type: "GET",
    url: apiUrl,
    dataType: "json"
  }).done((response) => {
    console.log("success")

    const optionArr = []
    const movieArr = []

    for (var i=0; i<response.Search.length; i++){
      const movieTitle = response.Search[i].Title
      optionArr.push(movieTitle)
      let person = {
        title: response.Search[i].Title,
        poster:response.Search[i].Poster,
        year:response.Search[i].Year,
        imdbID:response.Search[i].imdbID
      }
      movieArr.push(person)
    }

    for (var i=0; i <optionArr.length;i++){
      $("select").append(`<option>${optionArr[i]}</option>`)
    }

    $("#movie-select").change(function() {
      let selectedMovie = $("#movie-select").val()
      $("h2").text(selectedMovie)

        for (i=0;i<movieArr.length;i++){
          if (selectedMovie === movieArr[i].title){
            let moviePoster = movieArr[i].poster
            $("#poster").attr("src", `${moviePoster}`)
          }
        }

    })

  }).fail((response) => {
    console.log("fail")
  })
})
