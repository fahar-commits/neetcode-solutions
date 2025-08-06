function lowestCommonAncestor(root,p,q) {
    let current = root.val

    if (p.val > current && q.val > current) {
        return lowestCommonAncestor(root.right,p,q)
    }
    if (p.val < current && q.val < current) {
        return lowestCommonAncestor(root.left,p,q)
    }
    if (p.val == current || q.val == current) {
        return root
    }
    else{
        return root
    }
}