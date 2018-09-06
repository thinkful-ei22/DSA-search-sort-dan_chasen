class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  
  insert(key, value) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }

    //If the tree already exist, then start at the root, 
    //and compare it to the key you want to insert
    // If the new key is less than the node's key 
    //then the new node needs to live in the left-hand branch.
    else if (key < this.key) {
      //if the existing node does not have any left child, 
      //meaning that if the `left` pointer is empty 
      //then we can just instantiate and insert the new node 
      //as the left child of that node, passing `this` as the parent.  
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      //if the node has an existing left child, 
      //then we recursively call the `insert` method 
      //so the node is added further down the tree.
      else {
        this.left.insert(key, value);
      }
    }
    //Similarly, if the new key is greater than the node's key 
    //then you do the same thing, but on the right-hand side.
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    //if the item is found at the root then return that value
    if (this.key === key) {
      return this.value;
    }
    //if the item you are looking for is less than the root 
    //then follow the left child
    //if there is an existing left child, 
    //then recursively check its left and/or right child
    //until you find the item.
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    //if the item you are looking for is greater than the root 
    //then follow the right child
    //if there is an existing right child, 
    //then recursively check its left and/or right child
    //until you find the item.
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    //You have search the tree and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }

  findDepth(depth = 0){
    let leftDepth = 0;
    let rightDepth = 0;

    if(!this.left && !this.right){
      return depth;
    }

    if(this.left){
      leftDepth = this.left.findDepth(depth+1);
    }
    if(this.right){
      rightDepth = this.right.findDepth(depth+1);
    }

    return Math.max(leftDepth, rightDepth);
  }

  isBst(){
    if(!this.left && !this.right){
      return true;
    }
    if(this.left){
      if(this.key < this.left.key) {
        return false;
      }
      if(!this.left.isBst()){
        return false;
      }
    }
    if (this.right) {
      if(this.key > this.right.key) {
        return false;
      }
      if(!this.right.isBst()){
        return false;
      }
    }
    return true;  
  }

  inOrderTraversal() {
    if (this.left) {
      this.left.inOrderTraversal();
    }
    console.log(this.key);

    if(this.right) {
      this.right.inOrderTraversal();
    }
  }

  preOrderTraversal(){
    console.log(this.key);
    if(this.left){
      this.left.preOrderTraversal();
    }
    if(this.right){
      this.right.preOrderTraversal();
    }
  }

  postOrderTraversal(){
    if(this.left){
      this.left.postOrderTraversal();
    }
    if(this.right){
      this.right.postOrderTraversal();
    }
    console.log(this.key);
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //If the node only has a left child, 
      //then you replace the node with its left child.  
      else if (this.left) {
        this._replaceWith(this.left);
      }
      //And similarly if the node only has a right child 
      //then you replace it with its right child.
      else if (this.right) {
        this._replaceWith(this.right);
      }
      //If the node has no children then
      //simply remove it and any references to it 
      //by calling "this._replaceWith(null)".
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }
}

module.exports = BinarySearchTree;