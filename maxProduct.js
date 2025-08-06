function maxProduct(nums) {
    let leftproduct =1
    let rightproduct =1
    let maxproduct = -Infinity
    let i = 0
    let j = nums.length-1
    if (nums.length===1) {
        return nums[0]
    }
    // if (nums.length===2  || nums.includes(0)) {
    //     return Math.max(nums[0],nums[1])
    // }
    // if (nums.length===2) {
    //     return (nums[0]*nums[1])
    // }
    while ((i<=nums.length-1) && (j>=0)) {
        // if (nums[i]==0) {
        //     leftproduct = leftproduct*1
        // }
        if (nums[i] == 0) {
            leftproduct = 1
            i++
            maxproduct = Math.max(maxproduct, 0)
            continue
        }
        if (nums[j] == 0) {
            rightproduct = 1
            j--
            maxproduct = Math.max(maxproduct, 0)
            continue
        }

        leftproduct = leftproduct*nums[i]
        i++
        // if (nums[j]==0) {
        //     rightproduct = rightproduct*1
        // }
        rightproduct = rightproduct*nums[j]
        j--
        let maxproductbefore = Math.max(leftproduct,rightproduct)
        maxproductbefore
        maxproduct  = Math.max(maxproduct,maxproductbefore)
        maxproduct
    }
    return maxproduct
    


}

console.log(maxProduct([-4,-3]))