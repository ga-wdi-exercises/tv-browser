// API Docs at:
// http://www.omdbapi.com
$(document).ready(function() {
  var $movieSelect = $("#movie-select");
  var $form = $("#search");

  // movie select hidden by default
  $movieSelect.hide();

    $form.on("submit", function(e) {
      e.preventDefault();
      // reveal movie select
       $movieSelect.show();
       var $keyword = $("#movie-search").val();
      $.ajax({
        type: "get",
        dataType: "json",
        url: "http://www.omdbapi.com/?s=" + $keyword
        }).done(function(res){
          for (i = 0; i < res.Search.length; i++) {
          console.log(res.Search[i]);
          var option = "<option value='" + res.Search[i] + "'>" + res.Search[i].Title + "</option>";
          $movieSelect.append(option)
        };
        $movieSelect.on("change", function() {
          console.log("changed!")
        })
        }).fail(function(res) {
            console.log("eeep, errors!");
        })
  })

});
