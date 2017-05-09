// API Docs at:
// http://www.omdbapi.com


$("submit").on("click", () =>{

  $.ajax ({
    url: "http://www.omdbapi.com/?",
    type: "get",
    dataType: "json"
  })


})
