// BST: Height

// Build a height() method on the BST object that returns the total height of the tree – the longest sequence of nodes from root node to leaf node.

// BST: Contains

// Create a contains(val) method on BST that returns whether the tree contains a given value.

// Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

// BST: Max

// Create a max() BST method that returns the largest value contained in the binary search tree.

// BST: Is Empty

// Create an isEmpty() method to return whether the BST is empty (whether it contains no values).


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

    max() {
        return this.right == null ?  this.value : this.right.max() //
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

    height() {
        const left = this.left ? this.left.height() : 0;
        // let leftDepth = 0;
        // let rightDepth = 0;

        // if (this.left != null) {
        //     leftDepth = this.left.height();
        //     console.log("leftDepth is:  " + leftDepth);
        // }

        const right = this.right ? this.right.height() : 0;
        // if (this.right != null) {
        //     rightDepth = this.right.height();
        //     console.log("rightDepth:  " + rightDepth);
        // }
        // boolean ? true : false;
        return (left > right ? left : right) + 1;






    }




    contains(num) {
        
        console.log(this.value + " is this.value bottom")
        if (num === this.value) {
            console.log("should get to true" + " for "+ this.value);
            return true;
        }
        if (num<this.value) {
            if (this.left != null) {
             return   this.left.contains(num);

            }

        }
        //this node only knows itself and neighbor...so need to delegate to another node
        else  { // this means num is bigger, so go to right
            //then the value of the node we are on on should be returned as the answer
            if (this.right != null) {
                return this.right.contains(num);
            }

        }
        return false;
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

    
    height() {
        if (!this.root) {
            return 0;
        }
         // delegate to node
        return this.root.height();
    }





    contains(num) {
        if (!this.root) {
            return false;
        }
         // delegate to node
        return this.root.contains(num);
    }



    isEmpty() {
        return this.root===null;
    }



//left is smaller than right
    min() {
        if (!this.root) {
            return null;
        }
         // delegate to node
        return this.root.min();
    }

//left is smaller than right
max() {
    if (!this.root) {
        return null;
    }
     // delegate to node
    return this.root.max();
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
tree.add(150);
tree.add(148);
tree.add(146);
tree.add(142);
tree.add(140);
tree.add(151);
tree.add(139);
tree.add(8);
console.log(tree.max());
console.log(tree.isEmpty());
console.log(tree.contains(150));
//console.log(tree.size());
console.log("tree height:  " + tree.height());















