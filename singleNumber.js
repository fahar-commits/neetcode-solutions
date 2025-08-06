function singleNumber(nums) {
// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

let countArr =[]
let resultArray = []
for (let i = 0; i < nums.length; i++) {
    
    if (countArr.includes(nums[i])) {
        
        countArr.push(nums[i])
        resultArray.push(nums[i])
    }
    if (!countArr.includes(nums[i])) {
        countArr.push(nums[i])
    }
}
countArr
resultArray
for (let j = 0; j < nums.length; j++) {
    if (!resultArray.includes(nums[j])) {
        return  nums[j]
    }
    
}

}

console.log(singleNumber([1]))