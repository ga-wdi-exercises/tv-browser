// API Docs at: 
// http://www.omdbapi.com

	$('#movie-select').hide()
let movieList = []

$("#movie-search-submit").click((e) => {
	e.preventDefault();
	let search = $('#movie-search').val()
	console.log(search)
	$('#movie-select').show()
	let url = `http://www.omdbapi.com/?s=${search}`
	$.ajax({
		url: url,
		type: "get",
		dataType: "json"
	}).done((response) => {
		movieList = response.Search
		console.log(movieList)
		response.Search.forEach((mov) => {
			$("#movie-select").append( `<option value="${mov.Title}">${mov.Title}</option`)
		})
	}).fail(() => {
		console.log("failure")
	})
})

$("#movie-select").change(() => {
	let movieSelected = $("#movie-select :selected").val()
	movieList.forEach((item) => {
		if (movieSelected === item.Title) {
			console.log(item.Title)
			$("#movie-detail").append(`
				<h3>${item.Title}</h3>
				<img src="${item.Poster}" />			
				`)
		}
	})
	
})
	
