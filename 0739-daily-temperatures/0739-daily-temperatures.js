/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let outputt = [];
    for (let i = 0 ; i<temperatures.length ; i++){
        let count = 0;
        let found = false;
        for (let j = i+1 ; j < temperatures.length ; j++){
            count++;
            if(temperatures[i] < temperatures[j]){
               found=true;
                break;
            }
            
        }
        found ? outputt.push(count) :outputt.push(0);
    }
    return outputt;
};