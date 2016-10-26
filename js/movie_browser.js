// API Docs at:
// http://www.omdbapi.com

  $(".submit").on("click", function(e){
    e.preventDefault()
    let search = $('#movie-search').val()
    $.ajax({
      url: `http://www.omdbapi.com/?s=${search}`,
      type: "get",
      dataType: "json"
    }).done(function(response){
      let movies = response.Search
      movies.forEach(function(movie){
        console.log(`${movie.Title}`);
        $('#movie-select').show();
        $('#movie-select').append( $("<option>").val("value").html(`${movie.Title}`));
      })
    })
  })
  $("#movie-select").on("change", function(){
    console.log("this is where i left off liza!");
  })
