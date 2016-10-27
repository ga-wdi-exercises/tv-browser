// API Docs at:
// http://www.omdbapi.com
const queryUrl = $(``)

$.ajax({
  url: queryUrl,
  type: "GET",
  dataType: "json"
}).done((response) => {
  console.log("Success", response)
}).fail((response) => {
  console.log("Failed", response)
})
