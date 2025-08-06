//LEETCODE (diameterOfBinaryTree)

function diameterOfBinaryTree(root) {
    let diameter = 0
    function checkNode(node) {
        if (!node) {
            return 0
        }
        let left = checkNode(node.left)
        let right = checkNode(node.right)
        diameter = Math.max(diameter,left+right)
        return 1 + Math.max(left,right)
    }
    return diameter
}