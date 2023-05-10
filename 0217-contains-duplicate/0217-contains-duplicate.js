/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  
    
    
    for (let index = 0; index < nums.length; index++) {
        if(nums.indexOf(nums[index]) !== index){
            return true;
        }
        
    } 
    return false;
    
};