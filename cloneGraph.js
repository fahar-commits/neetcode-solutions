function cloneGraph(node) {
    if (!node) {
        return
    }
    const map = new Map();
    function dfs(node1) {
        if (map.has(node1)) {
            return map.get(node1)
        }
        let copy  = new Node(node1.val);
        map.set(node1,copy)
        for (let i of node1.neighors) {
            copy.neighbors.push(dfs(i))
            
        }
        return copy

    }

    return dfs(node)

}