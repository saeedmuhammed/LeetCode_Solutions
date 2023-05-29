/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let right = 0;
  let left = s.length - 1;

  while (right <= left) {
    let temp = s[right];
    s[right] = s[left];
    s[left] = temp;
    right++;
    left--;
  }
  return s;
};

