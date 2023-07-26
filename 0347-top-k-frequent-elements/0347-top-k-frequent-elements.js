/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let myMap = new Map();
    for(let i = 0 ; i<nums.length ; i++){
        if(myMap.has(nums[i])){
            myMap.set(nums[i],myMap.get(nums[i])+1);
        }
        else{
            myMap.set(nums[i],1);
        }
    }
    const mapSorted = new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]));
    
    return [...mapSorted.keys()].slice(0,k);
};