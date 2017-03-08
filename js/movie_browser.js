// API Docs at:
// http://www.omdbapi.com

$("#movie-select").hide()

$(".submit").on('click', (event) => {
  event.preventDefault()
  let query = $("#movie-search").val()
  url = `http://www.omdbapi.com/?s=${query}`;
  console.log(url)
  $.ajax ({
    url: url,
    type: "GET",
    dataType: "json"
  }).done((response) => {
    $("#movie-select").show();
    // console.log(response.Search[0].Title);
    // // $("#movie-select").append(
    //   // //loop thorugh array
    //   // for (let i = 0; i < response.search.length; i++) {
    //   //   `<option>${response.seach[i].title}</option>`
    //   // }
    //   $.each (response, function( i, item) {
    //     let newOption = "<option>" + item + "</option">
    //     $( "#movie-select"). append(newOption);
    //   });
    //   // )
    $("#movie-select").append(`<option>  Movies matching ${query}`)
    for (let i = 0; i < response.Search.length; i++) {
      let newOption = "<option>" + response.Search[i].Title ;
      console.log(response.Search[i].Title)

      $("#movie-select").append(newOption)
    }
  }).fail(() => {
    console.log('no response')
  })
})

$("#movie-select").on('change', () => {
  //populate div
  console.log(results)
  let detail = "1"
  $("#movie-detail").append(detail)
})
