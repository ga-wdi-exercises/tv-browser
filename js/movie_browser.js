// API Docs at:
// http://www.omdbapi.com
"http://www.omdbapi.com/?"

$("#submit").on("click", (event) => {
   event.preventDefault();
  // Make sure to add your API key to the URL!
  $("#movie-select").css('display', 'block')
  var search = $("#user-input").val()
  var url = "http://www.omdbapi.com/?s=" + escape(search)

  console.log(url)

  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    console.log(response)

  }).fail((message) => {
    console.log("Ajax request fails!")
    console.log(message)
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
})
