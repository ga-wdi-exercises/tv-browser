// API Docs at:
// http://www.omdbapi.com

$(document).ready(()=>{
  let input = 0
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: "/movie_browser"
  }).done((response) =>  {
    input = response
  }).fail((response) => {
    console.log("Ajax get request failed.");
  })
  for (i=0;i<input.length;i++) {
    $(".browse").append("<div><p>" + input[i].title + " is the title of this movie </p> <img src='"+input[i].img_url+"'</div>")
  }

})
