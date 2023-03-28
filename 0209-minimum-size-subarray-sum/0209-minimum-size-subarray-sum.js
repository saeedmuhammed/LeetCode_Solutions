/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let length = Infinity;     
    for(let i=0; i<nums.length; i++){
            let sum = 0;
            for(let j=i;j<nums.length;j++){
                sum+=nums[j];
                if(sum >= target){
                    length = Math.min(length, j-i+1);
                    break;
                }
            }
        }
    return length==Infinity ? 0 : length;
};