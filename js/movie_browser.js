$("#movie-select").hide()

$("#submit").on("click", function(){
  event.preventDefault()
  let url = "http://www.omdbapi.com/?s="
  let keyword = $("#movie-search").val()

  $.ajax({
    url: url + keyword,
    type: "get",
    dataType: "json"

  }).done(function(response){
    // console.log(response)
    response.Search.forEach(function(movies, i){
      // console.log(movies)
      $("#movie-select").append(`<option value='${i}'>${movies.Title}</div>`)
      $("#movie-select").show()
      $("#movie-select").change("click", function(){
        event.preventDefault()
        // console.log(movies.Title + i)
        $("#movie-detail").append(`<h1>${movies.Title}</h1><img src="${movies.Poster}">`)
      })
    })
  })
})
