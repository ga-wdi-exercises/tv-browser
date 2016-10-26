// API Docs at:
// http://www.omdbapi.com
//this event hides the movie-select
 document.getElementById("movie-select").style.visibility = "hidden";

// need to create event handler that makes movie select reppear after submit it clicke


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.omdbapi.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
