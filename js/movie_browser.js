// API Docs at:
// http://www.omdbapi.com
var movieSearch = $("#movie-search");

$("submit").on("click", (event) =>{

  event.preventDefault();

  var title = movieSearch.val();


  var url = "http://www.omdbapi.com/?s=" + escape(title)


  $.ajax ({
    url: url,
    type: "get",
    dataType: "json"
  }).done(() => {
    console.log("Ajax request success!")

  }).fail(() => {
    console.log("Ajax request fails!")

  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")

  });


  function doneSearch(){
    var display = '<option value="">"Movies matching" + title + "..."</option>';
  }

  $("#movie-select").show().html(display);
})
