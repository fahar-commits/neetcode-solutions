function isSameTree(p,q) {
if ((!p || !q) ) {
        return false
    }
if ((!p && !q)) {
    return true
}
if (p.val !== q.val) {
    return false
}
let leftconfirm = isSameTree(p.left,q.left)
let rightconfirm = isSameTree(p.right,q.right)

return leftconfirm,rightconfirm
}