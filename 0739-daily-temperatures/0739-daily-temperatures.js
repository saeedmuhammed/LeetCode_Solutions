/**
 * @param {number[]} temperatures
 * @return {number[]}
 This solution with stack
 */
var dailyTemperatures = function(temperatures) {
    let output = new Array(temperatures.length).fill(0);
    let stack = [];
    for (let i = 0 ; i < temperatures.length ; i++){
        while (stack.length != 0  && temperatures[i] > temperatures[stack[stack.length-1]]){
            let temp = stack.pop();
            output[temp] = i - temp ;
        }
        stack.push(i);
    }
    return output;
};