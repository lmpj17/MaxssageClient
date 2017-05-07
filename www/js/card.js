function validateCard()         
{			

var error = false;
var errors; 
 
// Get the values:
var ccName = document.getElementById('cardholdername').value,
    ccNum = document.getElementById('cardnumber').value,
    cvcNum = document.getElementById('cvv').value,
    expMonth = document.getElementById('exp-month').value,
    expYear = document.getElementById('exp-year').value;

// Validate the number:
if (!Stripe.card.validateCardNumber(ccNum)) {
    error = true;
    errors = 'The credit card number appears to be invalid.<br>';
}
 
// Validate the CVC:
if (!Stripe.card.validateCVC(cvcNum)) {
    error = true;
    errors = errors + 'The CVC number appears to be invalid.<br>';
}
 
// Validate the expiration:
if (!Stripe.card.validateExpiry(expMonth, expYear)) {
    error = true;
    errors = errors + 'The expiration date appears to be invalid.';
}

if (error){
	
	$("#message-card").html('<center><b>'+errors+'</center>');
    return false;
}
else
  {  	$("#message-card").html('<center><b>Processing Payment...</center>');
      return true;}
	

}