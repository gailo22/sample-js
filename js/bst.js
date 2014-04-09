function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert(data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	}
	else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			}
			else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		putstr(node.show() + " ");
		inOrder(node.right);
	}
}

function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		putstr(node.show() + " ");
	}
}

function getMin() {
	var current = this.root;
	while (!(current.left == null)) {
		current = current.left;
	}
	return current.data;
}

function getMax() {
	var current = this.root;
	while (!(current.right == null)) {
		current = current.right;
	}
	return current.data;
}

function find(data) {
	var current = this.root;
	while (current.data != data) {
		if (data < current.data) {
			current = current.left;
		}
		else {
			current = current.right;
		}
		if (current == null) {
			return null;
		}
	}
	return current;
}

function remove(data) {
	root = removeNode(this.root, data);
}

function removeNode(node, data) {
	if (node == null) {
		return null;
	}
	if (data == node.data) {
		// node has no children
		if (node.left == null && node.right == null) {
			return null;
		}
		// node has no left child
		if (node.left == null) {
		return node.right;
		}
		// node has no right child
		if (node.right == null) {
		return node.left;
		}
		// node has two children
		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	}
	else if (data < node.data) {
		node.left = removeNode(node.left, data);
		return node;
	}
	else {
		node.right = removeNode(node.right, data);
		return node;
	}
}