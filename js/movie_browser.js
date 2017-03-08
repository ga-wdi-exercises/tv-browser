                      // ##############################################
                      // 201703081616L   EL MIERCOLES   JAY
                          // API Docs at:
                          // http://www.omdbapi.com
                          // http://www.omdbapi.com/?s=Rogue
                          // http://api.jquery.com/jquery.getjson/
                          // http://stackoverflow.com/questions/16607557/javascript-perform-join-on-value-in-object-array
                          // file:///Users/justingiron/Dropbox/3/x/wdi/homework/201703090900L_angular/movie-browser/index.html?

                          // I HAD TO REALLY WORK TO GET MY HEAD AROUND THIS ONE.
                          // MIKE N AND I EXAMINED THE SOLUTION CODE AND THEN BUILT
                          // OUR OWNS, BORROWING HEAVILY FROM THE SOLUTION CODE.
                          // ONE THING SEEMED ODD, THAT WAS THE CODE TO HIDE THE results
                          // FIELD WAS AT THE END OF THE SCRIPT.  I MOVED IT TO THE BEGINNING
                          // SO IT WOULD WORK IMMED YOU OPENED THE PAGE.
                          // ONE THING I DONT UNDERSTAND IS WHERE THE VALUE FOR field
                          // imdbSearchData
                          // COMES FROM.  I SEE IT BEING CALLED BUT NOT BEING POPULATED.
                          // SAME WITH field
                          // imdbMovieData
                          // I APPEAR TO HAVE MADE ZERO USE OF MY file
                          // style.css

                  // SEARCH RESULTS BOX IS INVISIBLE AT OPEN FORM
                  console.log('cant see the search results box yet')
$('#movie-select').hide().on('change', function() {
  show(this.value);
});
                  console.log('youll see a url like this: http://www.omdbapi.com/?s=x')

                  // LISTENER FOR WHEN USR CLICKS ON submit button
                  // WITH preventDefault SET TO NOT DO HARD REFRESH
                  // POPULATES THE SEARCH TERMS
$('#search').on('submit', function(evt) {
                                   evt.preventDefault();
                                   var $search = $('#movie-search');
                                   var keyword = $search.val();
                                   $search.val('');
                                   search(keyword);
});
                  // ##############################################
                  // ASSEMBLE THE URL WITH THE SEARCH TERMS ABOVE
function search(keyword) {
  var url = 'http://www.omdbapi.com/?s=' + escape(keyword);
                  console.log('show me the url:' +  url)

                  // RUN THE QUERY TO GET BACK THE IMDB RESPONSE
                  // HANDLE ERRORS
  $.getJSON(url)
  .done(function(imdbResponse){
    imdbDone(keyword, imdbResponse);
  })
}
                    // ##############################################
                    // SHOW ME THE MOVIES THAT MATCHED MY SEARCH TERM
                      // AND THE SEARCH TERM ITSELF
function imdbDone(searchKeyword, imdbSearchData) {
        var display = '<option value="">Movies matching "'+ searchKeyword +'"...</option>';
                            // imdbSearchData IS LIKE THE JSON THAT MY SEARCH RETURNED WHEN WORKING W ADRIAN
                            // WITH THIS SEARCH URL: http://www.omdbapi.com/?s=Rogue
                            // {"Search":[{"Title":"Rogue One","Year":"2016","imdbID":"tt3748528","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"},{"Title"
          for (var i=0; i < imdbSearchData.Search.length; i++) {
               var movie  = imdbSearchData.Search[i];
                            // ASSEMBLE THE LIST OF MOVIE MATCHES
                            // THAT IMDB RETURNED
                            // TO POPULATE THE PULLDOWN LIST
                            // use the .join() method to get a single string, with each element separated by
          display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
      }
                    // MAKE THE SEARCH RESULTS BOX VISIBLE NOW THAT WE HAVE RESULTS
        $('#movie-select').show().html(display);
}
                   // ##############################################
function show(imdbId) {
  if (!imdbId) return;
  var url = 'http://www.omdbapi.com/?i=' + imdbId;
  $.getJSON(url).then(function(imdbMovieData) {
    var detail =  ' <h2>'         + imdbMovieData.Title   + '</h2>';
        detail += ' <img src= " ' + imdbMovieData.Poster  + '   " alt="   '  + imdbMovieData.Title   +  ' "> ';
    $('#movie-detail').html(detail);
  }
)
;
}
