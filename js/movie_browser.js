// API Docs at:
// http://www.omdbapi.com
let url = "http://www.omdbapi.com/?s=" + escape(selection)
let selection = $("#movie-search").val();

$(".submit").on("click", (event) => {
 	event.preventDefault();
  console.log(selection)
 	console.log(url)
 	$.ajax ({
 		url: url,
 		type: "get", 
 		dataType: "json"
 	}).done((response) => {
 		console.log(response)
 		console.log("Ajax request success!")
 	}).fail(() => {
 		console.log("Ajax request fails!")
 	}).always(() => {
 		console.log("This always happens regardless of successful ajax request or not.")
 	})
 +})
