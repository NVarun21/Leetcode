/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit=0;
    let minprice=prices[0];
    let profit=0;
    for(let i=0;i<prices.length;i++){
        minprice=Math.min(minprice,prices[i]);
        profit=prices[i]-minprice;
        maxprofit=Math.max(maxprofit,profit);
    }
    return maxprofit;
};