// API Docs at:
// http://www.omdbapi.com
$("button").on("click", (event) => {
  // Make sure to add your API key to the URL!
  $("#movie-select").css('display','block')
  event.preventDefault();
  var search = $('#movie-search').val()
  var url = "http://www.omdbapi.com/?s=" +escape(search)

  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done((response) => {
    var titles = []
    data = response.Search
    $("#movie-select").empty()
    $("#movie-select").append("<option>" + "Movies matching" + " " + search + "</option>")

    function getTitle() {
      for(var i = 0; i < data.length; i++) {
        var newTitle = data[i].Title
        titles.push(newTitle)
        $("#movie-select").append("<option>" + newTitle + "</option>")
      }
      console.log(titles)

    }
    getTitle()

  }).fail(() => {
    console.log("Ajax request fails!")
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })

})
