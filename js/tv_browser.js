// API Docs at:
// http://www.tvmaze.com/api
let apiResults = []
let userInput = $("#show-search")

$("#show-select").hide()


$("#search").submit(function (event) {
  event.preventDefault();
  $("#show-select").show()
  $("#option-show").remove()
  $("#show-select").append(`<option>Shows Matching: ${userInput.val()}</option>`)
  $.getJSON("http://api.tvmaze.com/search/shows?q=" + userInput.val(), function(returnData){
    for(let i=0; i<returnData.length; i++) {
      $("#show-select").append("<option>" + returnData[i].show.name + "</option>")
    }
  apiResults.push(returnData)
  })

  $("#show-select").change(function() {
    console.log($(this.selectedIndex))
    var indexNumber = this.selectedIndex
      $("#show-detail").append(`<div> ${apiResults.indexNumber} </div>`)
  })
})



// apiResults.forEach(function(result) {
//   let newDiv = $(`<div>${result.number}</div>`)
