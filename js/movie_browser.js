var movieSearch = $("#movie-search");

$(".submit").on("click", (event) => {
	event.preventDefault();
	var selection = movieSearch.val();
	console.log(selection)
	var url = "http://www.omdbapi.com/?s=" + escape(selection)
	console.log(url)

	$.ajax ({
		url: url,
		type: "get", 
		dataType: "json"
	}).done((response) => {
		var results = []
		for(var i=0; i < response.Search.length; i++){
		results.push(response.Search[i].Title)

		}
		console.log(results)
		console.log("Ajax request success!")
	}).fail(() => {
		console.log("Ajax request fails!")
	}).always(() => {
		console.log("This always happens regardless of successful ajax request or not.")
	})
})