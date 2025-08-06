function isSubtree(mainTree,subtree) {
    function isSameTree(p,q) {
        if (!p && !q) {
            return true
        }
        if (!p || !q) {
            return false
        }
        if (p.val !== q.val) {
            return false
        }

        let rightconfirm = isSameTree(p.right,q.right)
        let leftconfirm = isSameTree(p.left,q.left)

        return rightconfirm && leftconfirm
    }

    if (!mainTree && !subtree) {
        return true
    }
    if (mainTree && !subtree) {
        return true
    }
    if (!mainTree && subtree) {
        return false
    }
    let sametree = isSameTree(mainTree,subtree)
    if (sametree) {
        return true
    }

    let subTreeleftConfirm = isSubtree(mainTree.left,subtree)
    let subTreeRightConfirm = isSubtree(mainTree.right,subtree)

    return subTreeRightConfirm || subTreeleftConfirm
}