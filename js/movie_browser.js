$(document).ready(function() {
	$("#search").on("submit", function(e) {
		e.preventDefault();
		var request = $.ajax("http://www.omdbapi.com/?s=" + $("#movie-search").val().split(" ").join("+"));
		request.done(function(data) {
			$("#movie-select").html("<option value=''>Select a movie...</option>").css("visibility", "hidden");
			if (!data.Error) {
				$("#movie-select").html("<option value=''>Movies matching '" + $("#movie-search").val() + "'…</option>").css("visibility", "visible");
				for (var i = 0; i < data.Search.length; i++) {
					$("#movie-select").append("<option value='" + data.Search[i].imdbID + "'>" + data.Search[i].Title + "</option>");
				}
			}
		})
	})
	$("#movie-select").on("change", function() {
		var request = $.ajax("http://www.omdbapi.com/?i=" + $("#movie-select").val());
		$("#movie-detail").html("Loading...")
		request.done(function(data) {
			console.log(data)
			$("#movie-detail").html("<h1>" + data.Title + "</h1>" + "<img src='" + data.Poster + "'/>");
		})
	})
})