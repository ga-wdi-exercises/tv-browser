// API Docs at:
// http://www.omdbapi.com

$('submit').on('click', () => {
  const url = "http://img.omdbapi.com/?i=tt2294629&apikey=286bb3d8";

  $.ajax({
    url: url,
    type: "get",
    dataType: "json"

}).done((response) => {
  console.log(response);
}).fail(() => {
  console.log("Sorry, we had issues retrieving movie data!")
})
