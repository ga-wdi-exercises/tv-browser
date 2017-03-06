// API Docs at:
// http://www.omdbapi.com

$("#movie-select").hide();

$("#submit").on("click", () =>{
 let url = "http://www.omdbapi.com/";

 $.ajax({
   url: url,
   type: "get",
   dataType: "json"
 }).done((response) => {
   $("#movie-select").show();
   $("#movie-search").val();
 })
});
