


// Create an array called `colors` that contains three colors.
// Log the last item in the array to the console.
// Create a `for` loop that prints out "My favorite color is [insert color here]" for each item in `colors`.
// Create an `instructor` object that contains three key-value pairs.
// Add a `facial-hair` property to `instructor`.
// Log the value of the `facial-hair` property to the console.

$(document).ready(function() {
  console.log("Llama");
});
                // THIS WORKED IN REPL:
                // var arrColors = ['red', 'green', 'blue'];
                // var lastColor =  arrColors[arrColors.length - 1];
                // console.log('heres the last color in the array arrColors: ' +  lastColor);
                //             Native Browser JavaScript
                //                 heres the last color in the array arrColors: blue
                //                 => undefined
                //                    lastColor
                //                 => 'blue'

var arrColors = ['red', 'yellow', 'green'];
var lastColor =  arrColors[arrColors.length - 1];
    console.log('heres the last color in the array arrColors: ' +  lastColor);
  for (i=0; i < arrColors.length; i++){
    myFavoriteColor = arrColors[i];
    console.log('myFavoriteColor is: ' + myFavoriteColor);
  };

var instructor = {
  'facial-hair':  'yep',
  boils:        'yep to boils',
  pearls:       'yep, he\'s wearin\' pearls ... and heels'
};
console.log('instructor facial-hair is: ' + instructor['facial-hair']);
  //
  //
  btnInputMyFavoriteColor.on('click', function (event) {
    event.preventDefault();
                            console.log(textInputMyFavoriteColor.val());
                          });
  function stoplight() {                                //console.log('filling in Vanna');
    stoplightCssIdx = $("#stoplight");
    for (i=0; i < arrColors.length; i++){
      myFavoriteColor = arrColors[i];
      if ($.inArray(myFavoriteColor, arrColors) === true){
                            console.log('myFavoriteColor:' + myFavoriteColor + ' is in thisWord: ' + playerOnesWordInput);
                          }
                        }
                      }


  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
