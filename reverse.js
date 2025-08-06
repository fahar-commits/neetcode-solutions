function reverse(x) {
    let resultArray = 0 
    y = Math.abs(x)
    
    while (y>0) {
        
        let lastDigit = y%10
        resultArray = resultArray*10 + lastDigit
        y = Math.floor(y/10)
        
    }
    if (resultArray>2147483649) {
        return 0 
    }
    if (resultArray<-2147483648) {
        return 0 
    }
    if (x<0) {
        return -resultArray   
    }
    return resultArray
}

console.log(reverse(120))