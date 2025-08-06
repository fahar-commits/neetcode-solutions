function levelOrder(root) {
    let res =[]
    if (!root) {
        return res 
    }
    let queue = []
    queue = [root]
    while (queue.length>0) {
        let holder = []
        let lengthcount = queue.length
        for (let i = 0; i < lengthcount; i++) {
            let shifter = queue.shift()
            holder.push(shifter.val)
            if (shifter.left) {
                queue.push(shifter.left)
            
        }
            if (shifter.right) {
                queue.push(shifter.right)
            
        }
        
        
    
    }
    res.push(holder)
}
return res
}