function rightSideView(root) {
    let resultArray = []
    let queue = [root]
    while (queue.length>0) {
        let levelSize  = queue.length
        let rightmostnode
        for (let i = 0; i < levelSize; i++) {
            let node  = queue.shift()
            rightmostnode = node.val
            if (root.left) {
                queue.push(root.left)
            }
            
            if (root.right) {
                queue.push(root.right)
            }
        }
        resultArray.push(rightmostnode)
    }
    return resultArray

}