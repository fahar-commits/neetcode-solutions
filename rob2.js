// TC1 [2,3,2]

function rob(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    if (nums == []) {
        return 0
    }
    function rob1(nums1) {
        let maxLootresultArray =[]
        if (nums1.length == 0 || nums1 == [] ) {
            return 0
        }
        if (nums1.length == 1) {
            return nums1[0]
        }
        
        if (nums1.length == 2) {
            return Math.max(nums1[0],nums1[1])
        }
    
        
        maxLootresultArray.push(nums1[0])
        maxLootresultArray.push(Math.max(nums1[0],nums1[1]))
        for (let i = 2; i < nums1.length; i++) {
            maxLootresultArray.push(Math.max(maxLootresultArray[i-2]+nums1[i],maxLootresultArray[i-1]))
            
        }
        return maxLootresultArray[maxLootresultArray.length-1]
    }
    
    
    //core logic == skip  first and last house and math.max both of them that the answer
    let resultArray1 =[]
    let resultArray2 =[]
    for (let i = 0; i < nums.length; i++) {
        resultArray1.push(nums[i])
        
    }
    resultArray1.pop()
    for (let i = 1; i < nums.length; i++) {
        resultArray2.push(nums[i])
        
    }
    return Math.max(rob1(resultArray1),rob1(resultArray2))

}
console.log(rob([]))