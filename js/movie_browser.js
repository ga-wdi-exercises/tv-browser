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
      $("#movie-select").change(function() {
      $("#movie-detail").empty()
      var value = $('#movie-select').val()
      for (var i=0; i<response.Search.length; i++) {
        if (response.Search[i].Title === value) {
          $("#movie-detail").append(`<h2>${response.Search[i].Title}</h2>`)
          $("#movie-detail").append(`<div><img src="${response.Search[i].Poster}"></div>`)
          }
        }
      }).change()
    }).fail((response) => {
      console.log("Ajax get request failed.");
    })
  })
})
