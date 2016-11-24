// API Docs at:
// http://www.omdbapi.com

$(document).ready(function() {
  $("#movie-select").hide()

  $(".submit").on("click", function(e){
    e.preventDefault()
    var title = $("#movie-search").val()
    $("#movie-select").show()
      url = "http://www.omdbapi.com/?s=" + title
      $.ajax({
        url: url,
        dataType: "json",
        type: "GET"
      }).done(function(res){
          for(i=0; i<res.Search.length; i++) {
            $("#movie-select").append($('<option>', {
                value: res.Search[i].Poster,
                text: res.Search[i].Title
            }))
          }
          $("#movie-select").on("change", function(){
            $("#movie-detail").empty()
            var optionSelected = $("option:selected", this);
            var valueSelected = this.value;
            $("#movie-detail").append("<img src=" + valueSelected + ">")
          })
      }).fail(function(res){
        console.log("failed")
      }).always(function(res){
        console.log("always happened")
      })

      $("#movie-search").val("")
  })


})
