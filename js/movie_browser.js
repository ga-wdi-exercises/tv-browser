// API Docs at:
// http://www.omdbapi.com

$("#movie-select").hide();

$("#movie-search-button").on("click", (event) => {
  event.preventDefault();
  let keyword = $("#movie-search").val();
  let url = "http://www.omdbapi.com/?s=" + keyword
  $("#movie-select").show();
  $("#movie-select").empty();
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    $("#movie-select").append(`<option> Movies matching "${keyword}"...</option>`)
    searchAll(response)


  }).fail(() => {
   console.log("Ajax request fails!")
  }).always(() => {
    // console.log(url)
  })
})

function searchAll (response){
  for (i = 0; i < response.Search.length; i++) {
    let title = response.Search[i].Title;
    $("#movie-select").append(`<option> "${title}" </option>`);
  }
}

function showDetail (selected){

}
