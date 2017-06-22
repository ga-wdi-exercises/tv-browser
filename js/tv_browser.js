// API Docs at:
// // http://www.tvmaze.com/api


angular
.module("tv_show",[])
.controller("control",ControlFunction)

function ControlFunction (){
  console.log("Am the controller!")
  $("#show-select").hide()
}

// function serachButton(){
//   console.log("clicked");
// }

$("#button").on("click", () => {
  console.log("clicked");
  $("#show-select").show()
  // var keyword=$("show-select").val()
  var keyword=this.keyword
  console.log(keyword);

  var url = "http://www.tvmaze.com/search?q="+keyword+".json"
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    console.log("Ajax request success!")
    console.log(response);
  }).fail(() => {
    console.log("Ajax request fails!")
  })
})
