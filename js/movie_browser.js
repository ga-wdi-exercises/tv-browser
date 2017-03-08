// API Docs at:
// http://www.omdbapi.com




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

$("#movie-select").change(() => {

  let val = $("#movie-select option:selected").val();
  let title = `<h2>${responses[val].Title}</h2>`;
  let year = `<h4>${responses[val].Year}</h4>`;
  let posterUrl = `<img src="${responses[val].Poster}">`;

  $("#movie-detail").html(title + year + posterUrl);
})
