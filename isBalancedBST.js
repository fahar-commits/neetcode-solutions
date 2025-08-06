// function isBalanced(root) {
//     function checkNode(node) {
//         if (!node) {
//             return {
//                 balanced:true,
//                 height: 0
//             }
//         }
//     let leftNodeChar = checkNode(node.left)
//     let rightNodeChar = checkNode(node.right)
//     let height = 1 + Math.max(leftNodeChar.height,rightNodeChar.height)
//     let balanced 
//     if (Math.abs((leftNodeChar.height-rightNodeChar.height))<1 && leftNodeChar.balanced === true && rightNodeChar.balanced === true) {
//         balanced = true
//     } 
//     else{
//         balanced = false
//     }
//     return {balanced,height}
    
//     }
//     return checkNode(root).balanced
// }

