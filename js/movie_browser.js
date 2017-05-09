var movieSearch = $("#movie-search");
var movieSelect = $("#movie-select");
var firstOption = $("#first-option");
var movieDetail = $("#movie-detail");
var searchresults = []
movieSelect.hide();

$(".submit").on("click", (event) => {
	event.preventDefault();
	movieSelect.show();
	var selection = movieSearch.val();
	var url = "http://www.omdbapi.com/?s=" + escape(selection)
	
	$.ajax ({
		url: url,
		type: "get", 
		dataType: "json"
	}).done((response) => {
		firstOption.text("Movies matching " + selection + ":")
		for(var i=0; i < response.Search.length; i++){
		searchresults.push([response.Search[i].Title, response.Search[i].Poster])	
		movieSelect.append("<option>" + response.Search[i].Title + "</option>")
		// movieDetail.append("<div>" + "<img src=" + response.Search[i].Poster + "/>" + "</div>")

		}
		console.log("search results are" + searchresults)
		console.log("the first result is" + searchresults[0])
		console.log("Ajax request success!")
	}).fail(() => {
		console.log("Ajax request fails!")
	}).always(() => {
		console.log("This always happens regardless of successful ajax request or not.")
	})



	movieSelect.change(function(){
  	let listSelection = movieSelect.val()
  	console.log("listSelection is" + listSelection)
  	
    movieDetail.text( searchresults[0][0] );
    movieDetail.append("<div>" + "<img src=" + searchresults[0][1]+ "/>" + "</div>");
  })
 

})



