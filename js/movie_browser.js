$("#movie-select").hide()


// This calls an anonymous function when submit button is clicked. The API is search using a keyword entered by the user. The responses are itirated and displayed in dropdown. Values are cleared in dropdown for future searches.
$("#submit").on("click", function(){
  event.preventDefault()

  let url1 = "http://www.omdbapi.com/?s="
  let keyword1 = $("#movie-search").val()

  $.ajax({
    url: url1 + keyword1,
    type: "get",
    dataType: "json"
  }).done(function(response){
    // console.log(response)
    $("#movie-select").show()
    $("#movie-select").html("")

    response.Search.forEach(function(movie){
      // console.log(movie)
      $("#movie-select").append(`<option value="${movie.imdbID}">${movie.Title}</option>`)
    })
  })

// This uses the search using the APIs ID function. When an item is selected in the drop down the information populates in the body of the webpage.
  $("#movie-select").on("change", function(){
    event.preventDefault()

    let url2 = "http://www.omdbapi.com/?i="
    let keyword2 = $(this).val()

    $.ajax({
      url: url2 + keyword2,
      type: "get",
      dataType: "json"
    }).done(function(movie){
      // console.log(response)
      $("#movie-detail").html("")

      $("#movie-detail").append(`<h1>${movie.Title}</h1><img src="${movie.Poster}">`)
    })
  })
})
