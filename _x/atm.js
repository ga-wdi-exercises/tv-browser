// ## Specifications
//
// 1. Users can deposit money into one of the bank accounts
// - Users can withdraw money from one of the bank accounts
// - Make sure the balance in an account cant go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
  // - The color of a bank account should reflect its balance. (Theres a CSS class called `.zero` already written for this.)
// - You may edit the HTML file (but might not need to).

$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

var depositAmount = 0;
var withdrawAmount = 0;
var beginningAmountChecking = 0;
var beginningAmountSavings = 0;
var balanceChecking = 1111;
var balanceSavings = 1111;

                // THIS FROM JUSTIN SH. SOMETHING LIKE THIS
// function x(xxxxxx){$('#checking').find($('.deposit')).on('click', depositThisAmount);};

                // As the .click() method is just a shorthand for
                // .on( "click", handler ), detaching is possible using .off( "click" ).

                // var x = $( #checking .account ).find($input).click(function(){
                // $('#checking').find($('.input')).on('click', depositThisAmount)

            // DEPOSIT TO CHECKING
$('#checking').find($('.deposit')).on('click', depositThisAmountC)
  function depositThisAmountC() {
    var depositThisAmountVar =  parseInt($('#checking').find($('.input')).val());
  balanceChecking = balanceChecking + depositThisAmountVar;
  $( '#checking' ).find($('.balance')).html('$' + balanceChecking);
      console.log('balanceChecking: ' + balanceChecking);
      depositThisAmountVar = 0;
    };
          // WITHDRAW FROM CHECKING
$('#checking').find($('.withdraw')).on('click', withdrawThisAmountC)
  function withdrawThisAmountC() {
    var withdrawThisAmountCVar =  parseInt($('#checking').find($('.input')).val());
  balanceChecking = balanceChecking - withdrawThisAmountCVar;
  $( '#checking' ).find($('.balance')).html('$' + balanceChecking);
      console.log('balanceChecking: ' + balanceChecking);
      withdrawThisAmountCVar = 0;
    }
    ;

      // DEPOSIT TO SAVINGS
$('#savings').find($('.deposit')).on('click', depositThisAmountS)
function depositThisAmountS() {
var depositThisAmountSVar =  parseInt($('#savings').find($('.input')).val());
balanceSavings = balanceSavings + depositThisAmountSVar;
$( '#savings' ).find($('.balance')).html('$' + balanceSavings);
console.log('balanceSavings' + balanceSavings);
depositThisAmountSVar = 0;
};

      // WITHDRAW FROM SAVINGS
$('#savings').find($('.withdraw')).on('click', withdrawThisAmountS)
function withdrawThisAmountS() {
var withdrawThisAmountSVar =  parseInt($('#savings').find($('.input')).val());
balanceSavings = balanceSavings - withdrawThisAmountSVar;
$( '#savings' ).find($('.balance')).html('$' + balanceSavings);
console.log('balanceSavings: ' + balanceSavings);
withdrawThisAmountSVar = 0;
}
;
