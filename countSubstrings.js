function countSubstrings(s) {
    function isPalindrome(string,left,right) {
        let count = 0
        while (left>= 0 && right<string.length && s[left] === s[right]) {
            
                count += 1
                left--
                right++
            
            
        }
        return count
    }
    let count = 0
    for (let i = 0; i < s.length; i++) {
        count += isPalindrome(s,i,i)
        count += isPalindrome(s,i,i+1)
    }
    return count

    
}

console.log(countSubstrings('aaa'))
