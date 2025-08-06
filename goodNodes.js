function goodNodes (root) {
    let res = []
    if (!root) {
        return res.length
    }
    let maxValue
    function dfs(root,maxValue) {
        if (!root) {
            return res.length
        }
        if (root.val>=maxValue) {
            res.push(root.val)
            maxValue = root.val
        }
        
        dfs(root.right,maxValue)
        dfs(root.left,maxValue)
        
    }
    dfs(root,maxValue=root.val)
    return res.length
}