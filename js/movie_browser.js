function search(keyword) {
   var url = 'http://www.omdbapi.com/?s='+escape(keyword);

   $.getJSON(url)
   .done(function(imdbResponse){

     imdbDone(keyword, imdbResponse);
   })
   .fail(function(imdbResonse, textStatus, errorMessage){
     var message = "Sorry, can't find data for '" + keyword + "'";
     if (errorMessage){
       message += "(" + errorMessage + ")";
     }
     message += ".  Please try again.";
     $('#movie-detail').html("<h2 class='fail'>" + message + "</h2>");
   });
 }

 function imdbDone(searchKeyword, imdbSearchData) {
   var display = '<option value="">Movies matching "'+ searchKeyword +'"...</option>';

   for (var i=0; i < imdbSearchData.Search.length; i++) {
     var movie = imdbSearchData.Search[i];
     display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
   }

   $('#movie-select').show().html(display);
 }

 function show(imdbId) {
   if (!imdbId) return;

  var url = 'http://www.omdbapi.com/?i='+imdbId;

   $.getJSON(url).then(function(imdbMovieData) {
     var detail = '<h2>' + imdbMovieData.Title + '</h2>';
     detail += '<img src="'+ imdbMovieData.Poster +'" alt="'+ imdbMovieData.Title +'">';
     $('#movie-detail').html(detail);
   });
 }

 $('#search').on('submit', function(evt) {
   evt.preventDefault();
   var $search = $('#movie-search');
   var keyword = $search.val();
   $search.val('');

   search(keyword);
 });

 $('#movie-select').hide().on('change', function() {
   show(this.value);
 });



 // function movieDone(searchKeyword, searchData){
   // var display = '<option value="">Movies matching "'+ searchKeyword +'"...</option>';
   //
   // for (var i=0; i < searchData.Search.length; i++) {
   //   var movie = searchData.Search[i];
   //   display += ['<option value="', movie.imdbID, '">', movie.Title, '</option>'].join('');
   // }
   //
   // $('#movie-select').show().html(display);
   //
   //   var detail = '<h2>' + movie.Title + '</h2>';
   //   detail += '<img src="'+ movie.Poster +'" alt="'+ movie.Title +'">';
   //   $('#movie-detail').html(detail);
 });
 //
 // $('#search').on('submit', function(evt) {
 //   evt.preventDefault();
 //   var $search = $('#movie-search');
 //   var keyword = $search.val();
 //   $search.val('');
 //
 //   search(keyword);
 // });
 //
 // function show(imdbId) {
 //   if (!imdbId) return;
 //
 //   var url = 'http://www.omdbapi.com/?i='+imdbId;
 // }
