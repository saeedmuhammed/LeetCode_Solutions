/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
       let i = digits.length-1;
    while(i >= 0) {
       
        if (digits[i] !== 9 ){
            digits[i]++;
            break;
        }
        else if (digits[i] === 9 & i !==0 )  {
            digits[i] = 0;
        }
        else if (digits[i] === 9 & i === 0) {
            digits[i] = 0;
            digits.unshift(1);

        }
       
        i--;
    }

return digits;
    
};