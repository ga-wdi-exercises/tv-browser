$( document ).ready(function() {

  $("#submitButton").click(function(e) {
      e.preventDefault()
      $("#show-select").show();
    });

  $("#submitButton").click(function() {
    var requestData = $("#show-select").val();


    $.ajax({
      url: "http://api.tvmaze.com/search/shows?q=" + requestData, function showData(){
        for (let i = 0; i < data.length; i++) {
          $('#show-select').append(`<option value="${i}">${[i]show.name}</option>`)
        }
      }
      method: "get",
      dataType: "json",
      done: function() {
        $("#show-select").html(dataDetail());
      }
    })
  })
});
