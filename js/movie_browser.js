// API Docs at:
// http://www.omdbapi.com
$("#movie-select").hide();

$(".submit").on("click", () => {
            $("#movie-select").show();
            var url = "http://www.omdbapi.com/?s="
            var search = $("#movie-search").val()
            $.ajax({
                url: url + search,
                type: "get",
                dataType: "json"
            }).done(response => {
              console.log(response.Search[0].Title)


                    for (var i = 0; i < response.Search.length; i++) {
                        console.log(response.Search[i].Title)
                        results = response.Search[i].Title
                        $("#movie-select").append("<option>" + results + "</option>")
                    }
                })
})
