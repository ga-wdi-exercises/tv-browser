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
    $.ajax({
      type: "get",
      dataType: "json",
      url: "http://www.omdbapi.com/?s=Ground&r=json"
      }).done(function(res){
        console.log(res)
      }).fail(function(res) {
          console.log("eeep, errors!");
      })
  })

});
