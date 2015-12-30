// API Docs at:
// http://www.omdbapi.com


function search (keyworkd) {
  var url = 'http://www.omdbapi.com/?s='+escape(keyword);

$.getJSON(url)
.done(function(imdbResponse){

  imdbDone(keyword, imdbResponse);
});

.fail(function(imdbResponse, textStatus, errorMessage){
  
})
}
