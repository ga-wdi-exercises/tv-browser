
$(".submit").on("click", () => {
	let url = 'http://www.omdbapi.com/?s='+escape(keyword);

	$.ajax({
		url: url,
		type: "get",
		dataType: "json"
	}).done((response) => {
		var plot = console.log(response.plot)
	}).fail(() => {
		console.log("AJAX not succesful")
	}).always(() => {
		console.log("AJAX always will execute")
	})
})
