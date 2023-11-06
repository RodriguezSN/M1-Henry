"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList(listas enlazadas), definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un
    nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 

  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
	this.head = null;
	this.length = 0;
}
// class LinkedList{
//   constructor(valor){
//     this.head = valor
//     this.next = null
//   }
// }

function Node(value) {
	this.value = value;
	this.next = null;
}
// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }

LinkedList.prototype.add = function (value) {
	let newNode = new Node(value);
	let current = this.head;
	if (current === null) return (this.head = newNode), (this.length += 1);
	//LinkedList { head: Node { value: 'pepe', next: Node {Value:null, next:null } } }, length: 0 }
	while (current.next) {
		//corrent === null --> false se corta el while
		current = current.next;
	}
	this.length += 1;
	return (current.next = newNode);
};

LinkedList.prototype.remove = function () {
	let current = this.head;
	if (this.head === null) {
		return "ya no queda nada";
	}
	if (this.head.next === null) {
		this.head = null;
		this.length -= 1;
		return "se borro el ultimo nodo";
	}
	this.length - 1;
	// if (this.head === current) return "aun queda un nodo";

	while (current.next.next) {
		//corrent === null --> false se corta el while
		current = current.next;
	}
	this.length -= 1;
	const remove = current.next;
	current.next = null;
	return remove.value;
};

const testLinkedList = new LinkedList();
console.log(testLinkedList);
testLinkedList.add({ nombre: "luis", trago: "fernet" });
testLinkedList.add({ nombre: "pepe", trago: "dorlemon" });
testLinkedList.add({ nombre: "franco", trago: "cerveza" });
console.log(testLinkedList);

LinkedList.prototype.search = function () {};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
	Node,
	LinkedList,
	HashTable
};

/* class HashTable {
	constructor(numBuckets = 35) {
		this.numBuckets = numBuckets;
		this.buckets = new Array(numBuckets);
	}

	hash(key) {
		if (typeof key !== "string") {
			throw new Error("La clave debe ser una cadena de texto.");
		}

		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.numBuckets;
	}

	set(key, value) {
		if (typeof key !== "string") {
			throw new TypeError("La clave debe ser una cadena de texto.");
		}

		const index = this.hash(key);
		if (!this.buckets[index]) {
			this.buckets[index] = [];
		}

		for (let i = 0; i < this.buckets[index].length; i++) {
			if (this.buckets[index][i].key === key) {
				this.buckets[index][i].value = value;
				return;
			}
		}

		this.buckets[index].push({ key, value });
	}

	get(key) {
		if (typeof key !== "string") {
			throw new Error("La clave debe ser una cadena de texto.");
		}

		const index = this.hash(key);
		if (this.buckets[index]) {
			for (const pair of this.buckets[index]) {
				if (pair.key === key) {
					return pair.value;
				}
			}
		}
		return undefined;
	}

	hasKey(key) {
		if (typeof key !== "string") {
			throw new TypeError("La clave debe ser una cadena de texto.");
		}

		const index = this.hash(key);
		if (this.buckets[index]) {
			for (const pair of this.buckets[index]) {
				if (pair.key === key) {
					return true;
				}
			}
		}
		return false;
	}
 }*/
