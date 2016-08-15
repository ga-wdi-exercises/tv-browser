// API Docs at:
// http://www.omdbapi.com
$(document).ready(function() {
  var $movieSelect = $("#movie-select");
  var $form = $("#search");
  var $details = $("#movie-detail");

  // movie select hidden by default
  $movieSelect.hide();

    $form.on("submit", function(e) {
      e.preventDefault();
      $details.empty();
      // reveal movie select
       $movieSelect.show();
       var $keyword = $("#movie-search").val();
       $.ajax({
        type: "get",
        dataType: "json",
        url: "http://www.omdbapi.com/?s=" + $keyword
        }).done(function(res){
          $movieSelect.append("<option value='' disabled selected>Movies matching '" + $keyword +"'</option>")
          for (i = 0; i < res.Search.length; i++) {
          console.log(res.Search[i]);
          var option = "<option value='" + res.Search[i].Title + "'>" + res.Search[i].Title + "</option>";
          $movieSelect.append(option)
        };
        $movieSelect.on("change", function() {
          $details.empty();
          console.log(this);
          var movieSelected = this.value;

          $.ajax({
           type: "get",
           dataType: "json",
           url: "http://www.omdbapi.com/?t=" + movieSelected
           }).done(function(res){
             $details.append("<h1>" + res.Title + "</h1><img src='" + res.Poster + "'/>" + "<p>" + res.Actors + "</p>" + "<p>" + res.Plot + "</p>");
           });
        })

        }).fail(function(res) {
            console.log("eeep, errors!");
        })
        $("#movie-search").val("")
  })

});
