function lengthOfLIS(nums) {
    const dp = new Array(nums.length).fill(1);
    dp
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j]<nums[i]) {
                if (dp[j]<=dp[i]) {
                    dp[i] = Math.max(dp[j] + 1,dp[i])
                }
            }
            
        }
        
    }
    dp
    return dp[dp.length-1]
}
 console.log(lengthOfLIS([0,1,0,3,2,3]))