// API Docs at:
// http://www.tvmaze.com/api

angular
  .module("tv", []);

var url = "https://api.wunderground.com/api/your_key/geolookup/conditions/q/va/midlothian.json"





$(document).ready(function()
{
 $("#show-select").change(function()
 {

  if($(this).val() == "")
  {
   $("#show-select").hide();
  }
  else
  {
   $("#show-select").show();
   $.getJSON("http://api.tvmaze.com/schedule")
  }
 });
  $("#show-select").show();

$("#search").submit(function(event){
  alert("Submit Works");
});

});



// $(document).ready(function(){
//   $("#show-select").change(function){
//     if ($(this).val() == " "){
//       $("#show-select").hide();
//     }
//     else{
//       $("#show-select").show();
//     }
//   })
// });
