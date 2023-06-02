var maxProfit = function (prices) {
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        const prePrice = prices[i-1];
        const curPrice = prices[i];

        if(curPrice > prePrice) {
            profit += curPrice - prePrice; 
        }
    }

    return profit;
};
