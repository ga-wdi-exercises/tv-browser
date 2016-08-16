// API Docs at:
// http://www.omdbapi.com
$(document).on("ready", function(){
  console.log("Jquery ready!");
  $("#movie-select").hide()

  $("#search").submit(function(e){
    e.preventDefault();
    var search = $("#movie-search").val()
    $("#movie-select").show()
    url = "http://www.omdbapi.com/?s=" + search
    console.log(url);
    $.ajax({
      url: url,
      dataType: "JSON",
      type: "GET"
    }).done(function(response){
      for(i=0; i<response.Search.length; i++){
        $("#movie-select").append($('<option>', {
          value: response.Search[i].Poster,
          title: response.Search[i].Title
        }))
      }
      $("#movie-select").on("selected", function(){
        $("#movie-detail").empty()
        var optionSelected = $("option:selected", this);
        console.log(optionSelected);
        var valueSelected = this.value;
        console.log(valueSelected);
        ("div#movie-detail").append("<img src=" + valueSelected + ">")
      })
    }).fail(function(response){
      console.log("fail");
    }).always(function(reponse){
      console.log("Always print to console!");
    })
  })
});
