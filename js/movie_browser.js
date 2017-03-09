// API Docs at:
// http://www.omdbapi.com
$("button").on("click", () => {
  var url = "http://www.omdbapi.com/?s=" + $('#movie-search').val()
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done((result) => {
    result.Search.forEach(function(movie){
      $('#movie-select').append(`
      <option
        data-poster="${movie.Poster}"
        data-title="${movie.Title}"
        data-type="${movie.Type}"
        data-year="${movie.Year}"
        data-imdb="${movie.imdbID}">
          ${movie.Title}
      </option>`);
    })
    $('#movie-select').show()
    console.log(result)
  }).fail((e) => {
    console.log("Ajax request fails!", e)
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
})





$('#movie-select')
  .hide()
  .on('change', function() {
    var self = this;
    var detailsHtml = `
    <div id="movie-details-div">
      <h1>${getMovieProp('title')}(${getMovieProp('year')})</h1>
      <img src=${getMovieProp('poster')}/>
    </div>
    `;
    $('#movie-details-div').remove();
    $('#movie-detail').append(detailsHtml);
    function getMovieProp(prop){
      return $(self).find(":selected").data(prop);
    }
  });
