function hammingWeight(n) {
    // Input: n = 11
    // Output: 3
    // Input: n = 128
    // Output: 1
    // Input: n = 2147483645
    // Output: 30
    
    n = n.toString(2)
    n
    let count = 0
    for (let i = 0; i < n.length; i++) {
        if (n[i]==1) {
            count+=1
        }
        
    }
    return count

}
console.log(hammingWeight(5))