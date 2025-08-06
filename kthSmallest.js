function kthSmallest(root,k) {
    let count = 0
    let result 
    function bfs(node,k) {
        if (!node || result!== undefined) {
            return result
        }

        bfs(node.left)
        count++
        
        if (count===k) {
            return result = node.val
        }

        bfs(node.right) }

    bfs(root,k)
    return result
}