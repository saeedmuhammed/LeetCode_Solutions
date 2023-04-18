/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
let data =s.match(/\w+/g);
 return data[data.length-1].length;   
};