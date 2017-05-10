// API Docs at:
// http://www.omdbapi.com
// <script type="text/javascript">


$("form").on("submit", (evt) => {
  let searchQuery = $("#movie-search").val()
  evt.preventDefault()
  // Make sure to add your API key to the URL!
  var url = `http://www.omdbapi.com/?s=${searchQuery}`
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done((response) => {
    response.Search.forEach((result) => {
      let option = `<option value="${result.imdbID}">${result.Title}</option>`
      $('#movie-select').append(option)
    })
  }).fail((response) => {
    console.log("Ajax request fails!")
  }).always((response) => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
})

// $(document).ready(function(){
//     $("a").click(function(event){
//         e.preventDefault();
//     });
// });

// $.ajax({
//   type: 'GET',
//   dataType: 'json',
//   url: "http://www.omdbapi.com/"
// }).done((response) =>  {
//   console.log(response);
// }).fail((response) => {
//   console.log("Ajax get request failed.");
// }).always((response) => {
//   console.log("This always happens regardless of successful ajax request or not.")
// })







// </script>
