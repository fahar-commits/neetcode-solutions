function wordBreak(s,wordDict) {
    const dp = new Array(s.length+1).fill(false);
    dp
    dp[0] = true;
    dp
    for (let i = 1; i < s.length+1; i++) {
        for (let j = 0; j < i; j++) {
            let word = s.slice(j,i)
             if (dp[j] && wordDict.includes(word)) {
                dp[i]  = true
                break
             }
            
        }
        
    }
    dp
    return dp[dp.length-1]
}

console.log(wordBreak(s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]))