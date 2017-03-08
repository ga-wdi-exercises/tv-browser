$("#search").submit((event) => {
  event.preventDefault();
  let searchVal = $("#movie-search").val();
  let url = "http://www.omdbapi.com/?s=" + searchVal;


  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    $("#movie-select").empty();
    $("#movie-select").append($("<option>Movies matching keyword...</option>"));
    responses = response.Search;
    $.each(responses, (index, value) => {
      $("#movie-select").append($("<option></option>")
        .attr("value", index).text(value.Title))
    })
    console.log(responses);
    $("#movie-select").fadeIn("slow");
  }).fail(() => {
    console.log("API FAILED");
  })
})
