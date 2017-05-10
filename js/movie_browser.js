// API Docs at:
// http://www.omdbapi.com<head>
$("button").on("click",function(){
var url ="http://www.omdbapi.com/"
$.ajax({
  url:"/movie",
  type:"GET",
  dataType:"json"
}).done(() => {
    console.log("Ajax request success!")
  }).fail(() => {
    console.log("Ajax request fails!")
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
})
