/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let count = 0;

  for(let i = 0 ; i<s.length; i++){
      let set = new Set([s[i]]);
      for ( let j = i+1 ; j<s.length ; j++){
          if(set.has(s[j])){
              break;
          }
          else {
              set.add(s[j]);
          }
          count = Math.max(count , set.size);
      }
      count = Math.max(count , set.size);
  }
    return count;
};