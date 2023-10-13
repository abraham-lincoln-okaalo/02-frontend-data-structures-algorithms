function isBST(root){
    function isBSTHelper(node, min, max){
        if(!node){
            return true
        }
        if (node.val <= min || node.val >=max){
            return false
        }
        return isBSTHelper(node.left, min, node.val) && isBSTHelper(node.right, node.val, max)
    }
    return isBSTHelper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
}

class TreeNode {
    constructor(val, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

const root = new TreeNode(4)
root.left = new TreeNode(2)
root.right = new TreeNode(6)
root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)

console.log(isBST(root))