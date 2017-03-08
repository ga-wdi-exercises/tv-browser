// 201701310918L   EL MARTES   GIRO
//SETFOCUS TO THE FIRST FIELD SO I DONT HAVE TO CLICK IN IT

$(document).ready(function() {
    var btnWord = $("#btnWord");
    var inputWord = $("#inputWord");
    var theWord = 'adf';
    var arrTheWord;
    var btnGuess = $("#btnGuess");
    var inputGuess = $("#inputGuess");
    var hasWon = false;
    var playAgain = false;
    var guessRight = 0;

    btnWord.on('click', function(event) {event.preventDefault(); theWord = inputWord.val(); arrTheWord = theWord.split(/(?!$)/); fillVannaWhite(); })
    ;
    function fillVannaWhite() {
        theWordCss          = $("#theWord");
        for (i = 0; i < arrTheWord.length; i++) {
            var thisLetter  = arrTheWord[i];
            var div         = $('<div id="div' + i + '"  class="thisGuess" > ' + thisLetter + ' </div>');
            theWordCss.append(div);
        }
    }
    btnGuess.on('click', function(event) {
        event.preventDefault();
        thisGuess = inputGuess.val();
                                                                            // WORKING W JS & BS
        $('#inputGuess').val('');                                          // THE JQUERY MTD, THIS WORKS
        // var inputID = document.getElementById('inputGuess').value=''   // THE VANILLA MTD, THIS WORKS

        comparo(thisGuess);
    });
    function comparo(thisGuess) {                                       //THIS IS CASE-SENSITIVE
        if ($.inArray(thisGuess, arrTheWord)   !==   -1) {
            for (i = 0; i < arrTheWord.length; i++) {
                if (arrTheWord[i] === thisGuess) {
                    guessRight = guessRight  + 1;
                                          console.log('thisGuess: '         + thisGuess);
                                          console.log('guessRight after: '  + guessRight);
                                 id = "#div" + i;
                    matchDiv = $(id);
                    matchDiv.css({ 'background-color': '#ff0000', 'color': '#ffffff' });
                }
                if (guessRight == arrTheWord.length) {
                   hasWon = true;
                }
            }
            if (hasWon == true) {
                                          console.log('hasWon: '      + hasWon    );
                                          console.log('Oh Happy Day'              );
               hasWon = false;
                                          console.log('hasWon: '      + hasWon    );
               guessRight = 0;
                                          console.log('guessRight: '  + guessRight);
               var playAgain = prompt('wanna play it again, sam?');
            }
        } else {
            alert("Oops try again!");
        }
    }
})
