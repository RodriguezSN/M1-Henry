"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol

  - insert: agrega un nodo en el lugar correspondiente

  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol

  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
    según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún 
    parámetro, hará el recorrido "in-order" por defecto.

  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
	if (order === "post-order") {
		//* LRV left right value
		if (this.left) this.depthFirstForEach(cb, order);
		if (this.right) this.depthFirstForEach(cb, order);
		cb(this.data);
	}
	if (order === "pre-order") {
		//* VLR value left rigth
		cb(this.data);
		if (this.left) this.depthFirstForEach(cb, order);
		if (this.right) this.depthFirstForEach(cb, order);
	}
	if (order === "in-order") {
		//* LVR left value rigth
		if (this.left) this.depthFirstForEach(cb, order);
		cb(this.data);
		if (this.right) this.depthFirstForEach(cb, order);
	}
};

BinarySearchTree.prototype.contains = function (valor) {
	if (this.data === valor) return true;

	if (valor < this.data) {
		if (this.left) return this.left.contains(valor);
	} else {
		if (this.right) return this.right.contains(valor);
	}
	return false;
};

BinarySearchTree.prototype.insert = function (value) {
	const newBST = new BinarySearchTree(value);
	if (value > this.value) {
		if (this.left) {
			this.left.insert(value);
		} else {
			this.left = newBST;
		}
	} else {
		if (this.right) {
			this.right.insert(value);
		} else {
			this.right = newBST;
		}
	}
	return value;
};

BinarySearchTree.prototype.size = function () {
	if (!this.left && !this.right) return 1;

	if (!this.left) return 1 + this.right.size();
	if (!this.right) return 1 + this.left.size();
	if (this.left && this.right) return 1 + this.left.size() + this.right.size();
};
const rootBinary2 = new BinarySearchTree(15);
rootBinary2.insert(10);
rootBinary2.insert(8);
rootBinary2.insert(7);
rootBinary2.insert(6);
rootBinary2.insert(9);
rootBinary2.insert(11);
rootBinary2.insert(10);
rootBinary2.insert(10);

console.log(rootBinary2);
console.log(rootBinary2.size());
console.log(rootBinary2.contains(11));
console.log(rootBinary2.depthFirstForEach("pre-order"));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	BinarySearchTree
};

// BinarySearchTree.prototype.size = function () {
// 	if (!this.left && !this.right) {
// 		return 1;
// 	}

// 	if (!this.left) return 1 + this.right.size();
// 	if (!this.right) return 1 + this.left.size();
// 	if (this.right && this.left) return 1 + this.left.size() + this.right.size();
// };

// BinarySearchTree.prototype.insert = function (value) {
// 	if (value > this.data) {
// 		//value = this.right //> a la derecha y menor igual a la izquierda
// 		if (!this.right) this.right = new BinarySearchTree(value);
// 		else {
// 			this.right.insert(value);
// 		}
// 	} else {
// 		if (!this.left) this.left = new BinarySearchTree(value);
// 		else {
// 			this.left.insert(value);
// 		}
// 	}
// };

/*insert

if (!this.data) this.data = new BinarySearchTree(value);

	if (value > this.data) {
		if (!this.right) {
			this.right = new BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	} else {
		if (!this.left) {
			this.left = new BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	}*/
