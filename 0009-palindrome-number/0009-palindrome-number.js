/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x_str = x.toString();
    x_str_rev=x_str.split('').reverse().join('');
    if(x_str == x_str_rev){
        return true;
    }
    else {
        return false;
    }
    
};