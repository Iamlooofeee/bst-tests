function Node(key,value)) {
    this.key = key;
    this.value = value;
    
    //please don't rename left, right, key, value and root properties
    this._left = null;
    this._right = null;
}

function BinarySearchTree() {
    this._root = null;
}

// You can comment this block for testing in the browser but final solution MUST contains this module.exports code
module.exports = {
  BinarySearchTree,
  student: ''
};