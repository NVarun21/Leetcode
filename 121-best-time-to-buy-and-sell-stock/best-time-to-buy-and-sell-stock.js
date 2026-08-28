/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxprofit=0;
    let minprice=prices[0];
    for(let num of prices){
        if(num<minprice){
            minprice=num;
        }
        
        let profit=num-minprice;
        if(profit>maxprofit){
            maxprofit=profit;
        }
        
    }
    return maxprofit;
};