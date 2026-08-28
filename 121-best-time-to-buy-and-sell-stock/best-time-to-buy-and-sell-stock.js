/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit=0;
    let minprice=prices[0];
    for(let num of prices){
        minprice=Math.min(num,minprice);
        let profit=num-minprice;
        maxprofit=Math.max(profit,maxprofit);
    }
    return maxprofit;
};