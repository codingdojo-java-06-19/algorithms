// BST: Min

// Create a min() method on the BST class that returns the smallest value found in the BST .

// BST: Size

// Write a size() method that returns the number of nodes (values) contained in the tree.



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
    } // end add

    min() {
        if (this.left == null) {
            //then the value of the node we are on on should be returned as the answer
            return this.value;
        }
        //this node only knows itself and neighbor...so need to delegate to another node
        return this.left.min();
    }

    size() {
        let leftCount = 0;
        let rightCount = 0;

        if (this.left != null) {
            //then the value of the node we are on on should be returned as the answer
            leftCount = this.left.size();
            console.log("leftCount under leftCount = ", leftCount);

        }
        //this node only knows itself and neighbor...so need to delegate to another node

        if (this.right != null) {
            //then the value of the node we are on on should be returned as the answer
            rightCount = this.right.size();
            console.log("leftRight under leftCount = ", rightCount);
        }
        //this node only knows itself and neighbor...so need to delegate to another node
        return rightCount + leftCount + 1
    }


}
    
class BST { // this is the list or the tree
    constructor() {
        this.root = null;
    }

    size() {
        if (!this.root) {
            return 0;
        }
         // delegate to node
        return this.root.size();

    }

//left is smaller than right
    min() {
        if (!this.root) {
            return null;
        }
         // delegate to node
        return this.root.min();

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
//console.log(tree.min());
console.log(tree.size());


