var plusOne = function(digits) {
    if(digits[digits.length-1] > 10){
         digits[digits.length-1] +=1 
     return digits
      }
  else{
    let value = BigInt(digits.join('')) + 1n;

return value.toString().split('');

      
  }
};