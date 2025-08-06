function rob(nums) {
    if (!nums || nums == [] ) {
        return 0
    }
    if (nums.length == 1 || nums.length == 2) {
        return maxLootresultArray[0]
    }
    let maxLootresultArray =[]
    maxLootresultArray.push(nums[0])
    maxLootresultArray.push(Math.max(nums[0],nums[1]))
    for (let i = 2; i < nums.length; i++) {
        maxLootresultArray.push(Math.max(maxLootresultArray[i-2]+nums[i],maxLootresultArray[i-1]))
        
    }
    return maxLootresultArray[maxLootresultArray.length-1]
}

console.log(rob([2,7,9,3,1]))