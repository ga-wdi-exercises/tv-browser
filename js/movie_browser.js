// API Docs at:
// http://www.omdbapi.com
$(document).ready(function() {
  var $movieSelect = $("#movie-select");
  var $form = $("#search");
  var $details = $("#movie-detail");

  // movie select hidden by default
  $movieSelect.hide();
  // clear search box on click
  $("#movie-search").click(function() {
    $(this).val('')
  })

  $form.on("submit", function(e) {
    e.preventDefault();
    $details.empty();
    // reveal movie select
     $movieSelect.empty().show();
     var $keyword = $("#movie-search").val();
     $.ajax({
      type: "get",
      dataType: "json",
      url: "http://www.omdbapi.com/?s=" + $keyword
      }).done(function(res){
        $movieSelect.append("<option value='' disabled selected>Movies matching '" + $keyword +"'</option>")
        for (i = 0; i < res.Search.length; i++) {;
        var option = $("<option value='" + i + "'>" + res.Search[i].Title + "</option>");
        $movieSelect.append(option)
      };
      $movieSelect.change(function() {
        $details.empty();
        var $selectedIndex = $(this).val();
        var selectedMovie = res.Search[$selectedIndex];
        var poster = selectedMovie.Poster
        if (poster === 'N/A') {
          poster = ''
        } else {
          poster = "<img src='" + poster + "'/>"
        }
        var showDetails = "<h1>" + selectedMovie.Title + "</h1>" + poster + "<p>" + selectedMovie.Year + "</p>";
        $details.append(showDetails);
      })

      }).fail(function(res) {
          console.log("eeep, errors!");
      })
  })

});
