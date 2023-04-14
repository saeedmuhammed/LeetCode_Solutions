/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let start = 0 ;
    let end = nums.length-1;
    
    while (start <= end){
        let mid = Math.floor(start + (end - start)/2);
        if(nums[mid] === target){return mid;}
        //check if the left part of the mid is sorted or not
        if (nums[start] <= nums[mid]){
            if(nums[start] <= target && target < nums[mid]){ //if the taget in the raange of the left part
                end = mid-1;
            }
            else {
                start = mid+1;
            }
        }
        else {
            if (nums[mid] < target && target <= nums[end]){
                start = mid+1;
            }
            else {
                end = mid-1;
            }    
        }
        
        
    }
    
    return -1;
    
    
};