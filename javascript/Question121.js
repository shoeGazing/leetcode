/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPro = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice) minPrice = prices[i];
        else{
          if(prices[i] - minPrice > maxPro) maxPro = prices[i] - minPrice;
        }
    }
    return maxPro;
  };