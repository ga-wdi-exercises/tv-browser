// API Docs at: 
// http://www.omdbapi.com
$(document).ready(function(){
  console.log("running");
  function movieSearch(url){
    console.log("searching")
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
  $('.submit').on("click", function(e){
    console.log("submit");
    e.preventDefault();
    var movie = $('#movie-search').val();
    var url = "http://www.omdbapi.com/?s="+movie
    movieSearch(url);
  })
  $('#movie-select').change(function(){
    var selected = $('#movie-select').find(":selected").text();
    console.log(selected);
  });

})

