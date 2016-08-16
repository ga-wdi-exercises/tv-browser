// API Docs at: 
// http://www.omdbapi.com
$(document).ready(function(){
  console.log("running");
  $("#movie-select").hide();
  function movieSearch(url){
    $.ajax({
      url: url,
      type: "get",
      dataType: "json"
    }).done(function(res){
      console.log(res);
      for(i=0; i < res.Search.length; i++){
        var el = "<option class=title>"+res.Search[i].Title+"</option>";
        $('#movie-select').append(el);
      }
    })
  }
  function movieSearchTitle(url){
    console.log("searching")
      $.ajax({
        url: url,
        type: "get",
        dataType: "json"
      }).done(function(res){
        console.log("appending");
        var title = "<h1>"+res.Title+"</h1>";
        var poster = "<img src="+res.Poster+">";
        console.log(poster);
        console.log("test");
        $('#movie-detail').append(title, poster);
      })
  }

  $('.submit').on("click", function(e){
    $('#movie-select').show();
    console.log("submit");
    e.preventDefault();
    var movie = $('#movie-search').val();
    var url = "http://www.omdbapi.com/?s="+movie
      movieSearch(url);
    $('#movie-select').first().attr("value", "Movies Matching "+movie); 
  })
  $('#movie-select').change(function(){
    var selected = $('#movie-select').find(":selected").text();
    console.log(selected);
    var url = "http://www.omdbapi.com/?t="+selected;
    movieSearchTitle(url)
  });

})

