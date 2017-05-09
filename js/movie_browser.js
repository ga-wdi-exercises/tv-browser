console.log('connected')
let movieSelect = $('#movie-select')
let searchText = $('input#movie-search');
let button = $('#button');

  button.on("click", (evt) => {
    evt.preventDefault();
    console.log(searchText.val());

    let url = `http://www.omdbapi.com/?s=${searchText.val()}`
    console.log(url);
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done((response) => {
      response.Search.map ((movie) => {
          console.log(movie.title)
      });
    }).fail((response) => {
      console.log("Ajax request fails!")
    }).always(() => {
      console.log("This always happens regardless of successful ajax request or not.")
    })
  })
