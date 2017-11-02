function Node(key, value) { 
  this.key = key; 
  this.value = value; 
  this.left = null; 
  this.right = null; 
} 

function BinarySearchTree() { 
  this._root = null; 
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

BinarySearchTree.prototype.root = function() { 
	return this._root || null; 
}

BinarySearchTree.prototype.insert = function(key, value) { 
	var node = new Node(key, value); 
	var key = node.key; 

	if(!this._root) { 
		this._root = node; 
	} else { 
		var start = this._root;
	}
} 

BinarySearchTree.prototype.search = function(key){ 
	var currentNode = this._root; 
	while (currentNode !== null){ 
		if (currentNode.key > key) {
			currentNode = currentNode._left;
	}

	else if (currentNode.key < key) {
		currentNode = currentNode._right;
	}

	else if (currentNode.key === key ){
		return currentNode; 
	}
	return null; 
} 
}

BinarySearchTree.prototype.contains = function(value) { 
	var node = this._root; 
	if(!node) { 
		return false; 
	} 
	else { 
		while (node) { 
			if (value === node.value) { 
				return true; 
			} else if (value > node.value) { 
				node = node.right; 
			} else if (value < node.value) { 
				node = node.left; 
			} else {
				return false;
			}

		}; 
	};
 
};

