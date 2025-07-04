//LEETCODE (maxDepth)

function maxDepth(root) {
    if (root === null) {
        return null
    }
    let depth = 0
    let queue = [root]

    while (queue.length>0) {
        let level = queue.length

        for (let i = 0; i < level; i++) {
            let node = queue.shift()
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        depth++
    }
    return depth
}