let movieSelect = $('#movie-select')
let searchText = $('input#movie-search');
let button = $('#button');
let firstOption = $('#firstOption');
let showDetail = $('#movie-detail')

movieSelect.hide();

  button.on("click", (evt) => {
    evt.preventDefault();
    searchText = searchText.val();
    movieSelect.show()
      showDetail.empty();
      movieSelect.empty();
      movieSelect.append(`<option>Movies matching \'${searchText}\'</option>`)

    let url = `http://www.omdbapi.com/?s=${searchText}`

    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done((response) => {
      let movies = [];
      response.Search.map ((movie) => {
        movies.push(movie);
        movieSelect.append(`<option>${movie.Title}</option>`)
      })
      movieSelect.change(() => {
      showDetail.empty();
      let chosenMovie = movies.find((movie) => {
        return movieSelect.val() === movie.Title;
      })
      showDetail.append(`<h1>${chosenMovie.Title}</h1>`)
      showDetail.append(`<img src=${chosenMovie.Poster}>`)
      })
    }).fail((response) => {
      console.log("Ajax request fails!")
    }).always(() => {
      console.log("This always happens regardless of successful ajax request or not.")
    })
  })
