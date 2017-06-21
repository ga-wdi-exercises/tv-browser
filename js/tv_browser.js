// API Docs at:

// $(".btn").on("click", () => {
$(".btn").on("click", function(){
  str = $("#show-search").val()
  options = document.getElementById("show-select")
  listShows = []
  console.log(str)
  url = "http://api.tvmaze.com/search/shows?q=" + str

  $.ajax({

    url: url,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done((response) => {
    console.log("sucess")
    // console.log(response[0].show.name)
    for (var i = 0; i < response.length; i++) {
      listShows.push(response[i])

      var option = document.createElement("option")
      console.log(response[i])
      option.text = option.value = response[i].show.name
      console.log(option.text)
      options.add(option)

    }
    console.log(listShows.length)
    // Here is where you place code for DOM manipulation or anything else you'd like to do with the response
  }).fail(() => {
    console.log("Ajax request fails!")
    console.log(url)
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
// })
})

$("#show-select").on("change",function() {
  console.log("change")
  showName = this.value

  newUrl = "http://api.tvmaze.com/singlesearch/shows?q=" + showName

  $.ajax({
    url: newUrl,
    type: "get",
    dataType: "json"
    // $.ajax takes an object as an argument with at least three key-value pairs...
    // (1) The URL endpoint for the JSON object.
    // (2) Type of HTTP request.
    // (3) Datatype. Usually JSON.
  }).done((response) => {
    console.log(response.name)
    $("#showName").text(response.name)
    $("#img").attr("src",response.image.medium)
    $("#description").html(response.summary)
    // Here is where you place code for DOM manipulation or anything else you'd like to do with the response
  }).fail(() => {
    console.log("Ajax request fails!")
  }).always(() => {
    console.log("This always happens regardless of successful ajax request or not.")
  })
})
