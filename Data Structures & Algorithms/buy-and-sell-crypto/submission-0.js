class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minprice=prices[0];
        let maxprofit=0;
        for (let price of prices){
            if(price<minprice){
                minprice=price;
            }
            let profit= price-minprice;
            if(profit>maxprofit){
                maxprofit=profit;
            }
        }
        return maxprofit;

    }
}
