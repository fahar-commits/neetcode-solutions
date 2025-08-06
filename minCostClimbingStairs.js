function minCostClimbingStairs(cost) {                                                              //Example 1:

// Input: cost = [10,15,20]
// Output: 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

let minCost =[]
minCost.push(0)
minCost.push(0)
for (let i = 2; i <= cost.length; i++) {
    minCost.push(Math.min(cost[i-1]+minCost[i-1],cost[i-2]+minCost[i-2]))
    
}
return minCost[minCost.length-1]

    
}

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))