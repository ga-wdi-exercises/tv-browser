// API Docs at:
// http://www.tvmaze.com/api
//Adrian: Help review code, Help format terminal bash commands

$(document).ready(()=> {
  $('#show-select').hide()
  $('#search').submit((event)=>{

    let query = $('#show-search').val()
    let url = 'http://api.tvmaze.com/search/shows?q=' + query
    // console.log(url);
    $('#show-select').show();
    event.preventDefault();

    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: url
    }).done((response)=> {
      $('#show-select').empty();
      $('#show-select').append(`<option>Shows matching ${query}...</option>`);
        response.forEach((show)=>{
          $('#show-select').append('<option value="'+show.show.name+'">'+show.show.name+'</option>')
      })
    })
  })
  $('#show-select').change(()=>{
    $('#show-detail').empty();
    let option = $('#show-select option:selected').text();
    let show = 'http://api.tvmaze.com/singlesearch/shows?q=:' + option

    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: show
    }).done((response)=>{
      console.log(response);
      $('#show-detail').append(`<div><h1>Show Details</h1><p><a href="${response.url}">${response.name}</a></p></div>`)
    })
  })
  //add event listner that'll populate show details in show-detail

})
