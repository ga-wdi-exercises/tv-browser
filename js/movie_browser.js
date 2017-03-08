
$("input[type='submit']").on("click", function(keyword){
    event.preventDefault();
    $("#movie-select").css("display", "inline-block")

  var url = 'http://www.omdbapi.com/?s='+escape(keyword);
  $.ajax({
    url: url,
    type: "get",
    dataType: "json"
  }).done(() => {
    console.log("Ajax request sucessful")
  }).fail(() => {
    console.log("failed")
  })
})
