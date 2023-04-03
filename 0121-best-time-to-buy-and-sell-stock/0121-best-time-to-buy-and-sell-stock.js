/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let left = 0 ;
    let right = 1 ;
    let Max = 0 ;
    while (right < prices.length) {
        if ( prices[left] < prices [right]){
            let profit = prices [right] - prices [left] ;
            Max = Math.max(Max , profit);
        }
        else {
           left  = right;
        }
        right ++;
    }
    return Max;
    
};