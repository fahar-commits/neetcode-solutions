function coinChange(coins,amount) {
    if (amount<1 && coins) {
        return 0
    }
    if (amount<1 && !coins) {
        return -1
    }
    let resultArray = new Array(amount + 1).fill(Infinity)
    resultArray[0]=0
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j]>=0) {
                resultArray[i] = Math.min(resultArray[i],resultArray[i - coins[j]] + 1)
            }
            
        }
        
    }
    return resultArray[amount] === Infinity ? -1 : resultArray[amount]

}
console.log(coinChange([1],0))