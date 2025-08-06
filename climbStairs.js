function climbStairs(n) {
    if (n == 1 || n == 2 || n==3) {
        return n
    }
    let resultArray = []
    resultArray.push(0)
    resultArray.push(1)
    resultArray.push(2)
    console.log(resultArray)
    //ways[n] = ways[n-1] + ways[n-2]

    for (let i = 3; i <= n; i++) {
        resultArray.push(resultArray[i-1]+resultArray[i-2])
        
    }
    console.log(resultArray)
    return resultArray[resultArray.length-1]
}

console.log(climbStairs(7))