// API Docs at:
//

 $("#movie-select").hide()

 $('.submit').on("click", (e) => {
   e.preventDefault()
   let movieSelect =  $('#movie-select')
   let sUrl = "http://www.omdbapi.com/\?s="
   let url = sUrl + ($("#movie-search").val())
   $.ajax({
     url: url,
     type: "GET",
     dataType: "json"
   }).done((response) => {
     console.log("success", response);
     movieSelect.show()
     $('option').text('Movies Matching' + $('#movie-search').val())
     for (let i=0; i<response.Search.length; i++){
       $('select').append("<option>" + response.Search[i].Title + "</option")
     }
   }).fail(() => {
     console.log("fail");
   })
 })
