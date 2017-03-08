// API Docs at:
// http://www.omdbapi.com

$(document).ready(()=>{

  $('#movie-select').hide().on('change', function() {
    show(this.value);
  });

})
