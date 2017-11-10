//
var masValue = [];
var masKey = [];
function Node(key, value) { 
  this.key = key; 
  this.value = value; 
  this.left = null; 
  this.right = null; 
} 

function BinarySearchTree() { 
  return this._root = null; 
} 
BinarySearchTree.prototype.root = function() {
	if (this._root) {
		return this._root.value;
	} else {
		return null;
	}
}
BinarySearchTree.prototype.insert = function(key,value) {
	var n = new Node(key,value);
	if( this._root === null ) {
		this._root = n;
	} else {
		this._root.addChild(n);
	}
}
BinarySearchTree.prototype.search = function(key) {
	return this._root.search(key);
}
Node.prototype.search = function(key) {
		if(this.key === key) {
			return this.value;
		}
		else if (key < this.key && this.left !== null) {
			return this.left.search(key);
		} else if (key > this.key && this.right !== null) {
			return this.right.search(key);
		}
}
BinarySearchTree.prototype.contains = function(value) {
	if (this._root === null) {
		return false;
	} else {
		this._root.traverse();
		for (let i = 0; i < masValue.length; i++) {
			if (masValue[i] == value) {
				masValue = [];
				return true;
			}
		}
		return false;
	}
}
BinarySearchTree.prototype.traverse = function(bool) {
	var masValueCopy = [];
	this._root.traverse();
	masValueCopy = masValue;
	masValue = [];
	if (bool === false) {
		masValueCopy.reverse();
	}
	return masValueCopy;
}
BinarySearchTree.prototype.verify = function() {
	var masKeyCopy = [];
	this._root.verify();
	masKeyCopy = masKey;
	masKey = [];
	for (var i = 0; i < masKeyCopy.length; i++) {
		for (var j = i; j < masKeyCopy.length; j++) {
			if (masKeyCopy[i] > masKeyCopy[j]) {
				return false;
			}
		}
	}
	return true;
}
BinarySearchTree.prototype.delete = function(val) {
	this._root.deletecChild(val);
}
Node.prototype.deletecChild = function() {

}
Node.prototype.verify = function() {
	if(this.left !== null) {
			this.left.verify();
		}
		masKey.push(this.key);
		if(this.right !== null){
			this.right.verify();
		} 
}
Node.prototype.traverse = function() {
		if(this.left !== null) {
			this.left.traverse();
		}
		masValue.push(this.value);
		if(this.right !== null){
			this.right.traverse();
		} 
}
Node.prototype.addChild = function(n) {
	if(n.key < this.key) {
		if(this.left === null) { 
			this.left = n;
		} else {
			this.left.addChild(n);
		}	
	} else if(n.key > this.key) {
		if(this.right === null) { 
			this.right = n;
		} else {
			this.right.addChild(n);
		}
	}
}


module.exports = { 
BinarySearchTree, 

//WARNING!!! 
//PROVIDE BST STRUCTURE FOR TESTS {STRING} 
root: '_root', 
left: 'left', 
right: 'right', 
//NAME FOR REPORTS 
student: 'STUDENT NAME' 
}; 
