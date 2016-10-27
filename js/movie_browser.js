// API Docs at:
// http://www.omdbapi.com
$("#movie-select").hide();

$(".submit").on("click", (e) => {
            e.preventDefault()
            $("#movie-select").show();
            var url = "http://www.omdbapi.com/?s="
            var search = $("#movie-search").val()
            $.ajax({
                url: url + search,
                type: "get",
                dataType: "json"
            }).done((response) => {
              $("#first_search").text(`Movies matching "${search}"`)
              console.log(response.Search[0].Title)

                    for (var i = 0; i < response.Search.length; i++) {
                        console.log(response.Search[i].Title)
                        results = response.Search[i].Title
                        $("#movie-select").append("<option>" + results + "</option>")
                    }
                    $("#movie-select").change(function(){
                    $("#movie-detail").empty()
                    var choice = $("movie-select").val()
                    for (var i = 0; i < response.Search.length; i++) {
                      var pick = response.Search[i].Title
                      if (pick === choice) {
                        $("#movie-detail").append(`<h2>"${pick}"</h2>`)
                        $("#movie-detail").append(`<div><img src="${response.Search[i].Poster}"</div>`)
                      }
                    }
                  }).change()
                })      
})
