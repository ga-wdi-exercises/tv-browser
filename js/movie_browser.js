
$(document).ready(() => {
   $("#movie-select").hide();

   $(".find").on("click", () => {
     $("#movie-select").show();
      event.preventDefault()

      let search = $("#movie-search").val()
      let url = `http://www.omdbapi.com/?s=${search}`

      $("#movie-select").empty();

      $.ajax({
         url: url,
         type: "get",
         dataType: "json"
       }).done((response) => {
         console.log("After search movies")
      $("#movie-select").append(`<option> Movies that matches with the keyword: "${search}"...</option>`)

         //had to look at the solution!!!
      $.each(response.Search, (i,v) => {
         $("#movie-select").append(`<option value=${response.Search[i]}>${response.Search[i].Title}</option>`)
       })
     }).fail(() => {
       console.log("Request failed!")
     })

   })

 })
