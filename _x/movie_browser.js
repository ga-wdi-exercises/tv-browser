                      // API Docs at:
                      // http://www.omdbapi.com
                      // https://github.com/ga-wdi-lessons/js-ajax
                      // ===
                      // FROM NAYANA
                      // console.log('got inside nada')

$(document).ready(function(){
                          console.log('inside document).ready')
})
;
$("button").on("click", () => {
                      console.log('got inside button')
  let url = "http://www.omdbapi.com/?s=Rogue"
                      // console.log(url)
  $.ajax({
    url: url,
    type: "get",
    dataType:"json"
  }).done((response) =>
      {
        console.log(response)
        $("button").on("click", () => {
          let url = "http://www.omdbapi.com/?s=Rogue"

          $.ajax({
            url: url,
            type: "get",
            dataType: "json"
          }).done((response) => {
            console.log(response.current_observation.dewpoint_f)
                        // console.log(response.current_observation.dewpoint_f)
          }).fail(() => {
            console.log("AJAX not successful")
          }).always(() => {
            console.log("always will exectute")
          })
        })

      }).fail(() => {
        console.log("Ajax request fails")
      }).always(() => {
        console.log("This always happens regardless")
      })
                      // console.log('got inside bottom')
    })



// In order to do an AJAX get request to a 3rd party API...

// $.ajax({
//   url: url,
//   type: "get",
//   dataType: "json"
//   // $.ajax takes an object as an argument with at least three key-value pairs...
//   // (1) The URL endpoint for the JSON object.
//   // (2) Type of HTTP request.
//   // (3) Datatype. Usually JSON.
// }).done((response) => {
//   console.log(response)
//   // Here is where you place code for DOM manipulation or anything else you'd like to do with the response
// }).fail(() => {
//   console.log("Ajax request fails!")
// }).always(() => {
//   console.log("This always happens regardless of successful ajax request or not.")
// })
