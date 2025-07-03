//LEETCODE (dailyTemperatures)

function dailyTemperatures(temp) {
    let output = []
    for (let i = 0; i < temp.length; i++) {
        let count = 0
        for (let j = i+1; j < temp.length; j++) {
            if (temp[j] > temp[i]) {
                output.push(count+1)
                break
            }
            else{
                count++
            }
            
            if(j===temp.length-1){
                output.push(0)
            }
            
        }
        if( i === temp.length-1){
            output.push( 0)
        }
    }
    return output
    console.log(output)
}