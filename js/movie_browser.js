$(document).ready(function(){
  $("#movie-select").hide()

  $('#submit-search').on("click", (event) => {
    event.preventDefault()
    $("#movie-select").show()
    var search = $("#movie-search").val()
    var url = `http://www.omdbapi.com/?s=${search}`
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done((response) =>  {
      $("#initial_option").text(`Movies matching "${search}"`)
      for (var i=0; i<response.Search.length; i++) {
        $("#movie-select").append(`<option id=${i})>${response.Search[i].Title}</option>`)
      }
    }).fail((response) => {
      console.log("Ajax get request failed.");
    })
  })
})
