// API Docs at:
// http://www.omdbapi.com


$("submit").on("click", (event) =>{

  event.preventDefault();

  var movieSearch = $("input#movie-search");
  var movie = movieSearch.val();


  var url = "http://www.omdbapi.com/?t="+escape(movie);


  $.ajax ({
    url: url,
    type: "get",
    dataType: "json"
  }).done((response) => {
    console.log("this is great")

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
