// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
// $(document).ready(()=>{
//   $(".get").on("click", () => {
// //     console.log("clicked!");
// //   })
// // })
//     $.ajax({
//       type: 'GET',
//       dataType: 'json',
//       url: "/artists"
//     }).done((response) =>  {
//       console.log(response);
//     }).fail((response) => {
//       console.log("Ajax get request failed.");
//     })
//   })
// })
// ==
$(document).ready(()=>{
  $(".post").on("click", () => {

    let name = $(".name").val()
    let photo_url = $(".photo_url").val()
    let nationality = $(".nationality").val()

    $.ajax({
      type: 'POST',
      data: {
        artist: {
          name: name,
          nationality: nationality,
          photo_url: photo_url
        }
      },
      dataType: 'json',
      url: "/artists"
    }).done((response) => {
      console.log(response);
    }).fail(() => {
      console.log("Failed to create.");
    })
  })
  $(".put").on("click", () => {

    let name = $(".name").val()
    let photo_url = $(".photo_url").val()
    let nationality = $(".nationality").val()

    $.ajax({
      type: 'PUT',
      data: {
        artist: {
          name: name,
          nationality: nationality,
          photo_url: photo_url
        }
      },
      dataType: 'json',
      url: "/artists/1"
    }).done((response) => {
      console.log(response);
    }).fail(() => {
      console.log("Failed to create.");
    })
  })
})
