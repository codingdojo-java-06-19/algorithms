
class BTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    add(leaf) {
        //this.value is the current nodes value
        //determine go right or left...right is >=
        if (leaf.value >= this.value) {
            //go to the right
            if (this.right == null) {
                this.right = leaf;
            }
            else {
                //recurse here
                this.right.add(leaf);
                }
        }
        else {
            //go to the left
            if (this.left == null) {
                this.left = leaf;
            }
            else {
                this.left.add(leaf);
            }
        }
    }

}
    
class BST {
    constructor() {
        this.root = null;

    }

    add(value) {
        //doing recursion...nodes responsible for placing new nodes
        const newLeaf = new BTNode(value)
        if (!this.root) {
            this.root = newLeaf
        }
        else {
            this.root.add(newLeaf);

        }
    }

}



const tree = new BST();

tree.add(10)
tree.add(7);
tree.add(12);
tree.add(15);
tree.add(11);
tree.add(15);
console.log(tree);