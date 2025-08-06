function numDecodings(s) {
    let arr = String(s).split('').map(Number);
    arr
    let resultArray =[]
    resultArray.push(1)
    if (arr[0]!==0) {
        resultArray.push(1)
    }
    else{
        resultArray.push(0)
    }
    resultArray
    for (let i = 1; i < arr.length; i++) {
        let oneDigit = arr[i]
        let twoDigit = Number(`${arr[i - 1]}${arr[i]}`)

        resultArray[i + 1] = 0  // ← initialize to 0

        if (oneDigit > 0 && oneDigit < 10) {
            resultArray[i + 1] += resultArray[i]
        }

        if (twoDigit >= 10 && twoDigit <= 26) {
            resultArray[i + 1] += resultArray[i - 1]
        }
    }
    
return resultArray[resultArray.length-1]
}

console.log(numDecodings('226'))