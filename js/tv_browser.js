// API Docs at:
// http://www.tvmaze.com/api


// $(document).ready(()=> {



$('#show-select').hide();

$('#search').submit(function(event) {

  var input = $("#show-search").val()
  var url = "http://api.tvmaze.com/search/shows?q=" + input

  event.preventDefault()

  $('#show-select').show();

  $.getJSON(url).done((response) =>  {

    response.forEach(function(name) {
        $("show-select").append("<option>" + name.show.name+ "</option>");
      });

      // for (i = 0; i < response.length; i++) {
      //   $("show-select").append("<option>"+response[i].show.name+"</option>");
      // }
    })
});

// }
