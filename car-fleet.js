// LEETCODE (carfleet)  target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]

function carfleet(target,position,speed) {
    let emptyArr =[]
    for (let i = 0; i < position.length; i++) {
        let time = (target-position[i])/speed[i]
        emptyArr.push([position[i],time])
        
    }
    console.log(emptyArr)
    emptyArr = emptyArr.sort((a,b) => b[0]-a[0])
    console.log(emptyArr)

    let stack = []
    for (let i = 0; i < emptyArr.length; i++) {
        if (stack.length == 0 || emptyArr[i][1] > stack[stack.length-1]) {
            stack.push(emptyArr[i][1])
        }
        
    }
    console.log(stack)
    return stack.length
}

console.log(carfleet(12,[10,8,0,5,3],[2,4,1,1,3]))