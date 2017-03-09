// API Docs at:
// http://www.omdbapi.com

$('#movie-select').hide().on('change', function() {
  show(this.value);
});

function myFunction() {
  // Make sure to add your API key to the URL!
  var search = $("#movie-search").val()
  var url = `http://www.omdbapi.com/?s=${search}`
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done(() => {
    console.log("Ajax request success!")
  }).fail(() => {
    console.log("Ajax request fails!")
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
}
