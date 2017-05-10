// API Docs at:
// http://www.omdbapi.com
+$("submit").on("click",function(){
 +var url ="http://www.omdbapi.com/"
 +$.ajax({
 +  url:"/movie",
 +  type:"GET",
 +  dataType:"json"
 +}).done(() => {
 +    console.log("Request Successful")
 +  }).fail(() => {
 +    console.log("Request Failed")
 +  }).always(() => {
 +    console.log("This message occurs for every request")
 +  })
 +})
