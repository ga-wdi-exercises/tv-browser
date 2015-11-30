// API Docs at:
// http://www.omdbapi.com
$("document").ready(function(){
  $("#search").on("submit", function(e){
    e.preventDefault();
    getAPI($("#movie-search").val());
  })
})

function getAPI(keyword){
  type: "get",
    dataType: "json"
  }).done(function(response){
    $("#movie-select").children().remove()

  $("<option value=''>Results for: "+keyword+"</option>").appendTo($("#movie-select"))
    for (var i=0; i<response.Search.length; i++){
      $("#movie-select").append($('<option id='+response.Search[i].imdbID+'>'+response.Search[i].Title+'</option>'))
    }
    addListener();
//show the dropdown menu
    $("#movie-select").show();
  })
}
function addListener(){
  $("#movie-select").change("submit", function(e){
    if ($('select option:selected').attr('id')) {
      $.ajax({
        url:"http://www.omdbapi.com/?i="+$('select option:selected'  ).attr('id')+"&y=&plot=short&r=json",
        type:"get",
        dataType: "json"
      }).done(function(response){
        $("#movie-detail").empty()
        $("#movie-detail").append($("<img src="+response.Poster+"/>"))
        $("#movie-detail").append($("<p>Title: "+response.Title+"</p>"+
        "<p>Director: "+response.Director+"</p>"+
        "<p>Actors: "+response.Actors+"</p>"+
        "<p>Country: "+response.Country+"</p>"))
      })
    }
  })
}
