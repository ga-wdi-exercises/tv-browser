// API Docs at:
// http://www.omdbapi.com

$("button").click( () => {
  let url = "http://www.omdbapi.com/?s='+escape(keyword)"

  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done( (response) => {
    $("body").append($(`<div>Current wind gust is up to ${response.current_observation.wind_gust_mph} mph.</div>`))

  })
})
