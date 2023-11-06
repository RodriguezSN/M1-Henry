/*
Ejemplo gráfico con teoría de los conjuntos
El conjunto de todas las cosas menos autos
 C.C1
 -----------------------
|   C.C1                |
|     ----------        |
|    |   C.C1   |       |
|    |    ---   |       |
|    |   | c.|  |       |
|    |    ---   |       |
|     ----------        |
 -----------------------
*/

const {
	LinkedList
} = require("../../05-EstructuraDeDatos-II/homework/homework");

/*
var o1 = {
    a:1,
    z: o1
}

* OBJETOS ANIDADOS - PROFUNDIDAD - MULTI-DIMENSIONAL

f(){f(){f(){}}}
o1 = {{{{{{{{{{{{{{}}}}}}}}}}}}}}
[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]


* OBJETOS ANIDADOS a SI MISMO - PROFUNDIDAD - MULTI-DIMENSIONAL
! RECURSION
f(){f(){f(){}}}
o1 = {{{{{{{{{{{{{{}}}}}}}}}}}}}}
[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]

*/
const objO = {
	a: 1,
	b: 2
};
objO.queLoco = objO;
console.log(objO);
// <ref *1> { a: 1, b: 2, queLoco: [Circular *1] }
//* 1 debe retornarse a si misma
//* 2 los argumentos que se pasan deben ser diferentes
//* 3 sentencia de cierre CORTE - CASO BASE (debe tener una condición que ayude a que corte)

// function firstFunctionRecursive(a){
//     return firstFunctionRecursive(a)
// }
// console.log(firstFunctionRecursive(1))
// firstFunctionRecursive(firstFunctionRecursive(firstFunctionRecursive(firstFunctionRecursive())))

//* La RECURSIÓN es un BUCLE
function countToZero(num) {
	if (num === 0) {
		return "he finalizado";
	} else {
		console.log(num);
		num--;
		return countToZero(num);
	}
}
console.log(countToZero(3));
/*
countToZero(3) -> return countToZero(2) -> return countToZero(1) -> return countToZero(0) -> "he finalizado"
*/
const testArray = [2, 3, 10, 6];

function sumArray(arr) {
	var result = 0;
	for (let i = 0; i < arr.length; i++) {
		// while  .map
		result += arr[i];
	}
	return result;
}
console.log(sumArray(testArray));

function sumRecursionArray(arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let sum = arr.pop();
		console.log(arr);
		return sum + sumRecursionArray(arr);
	}
}
console.log(sumRecursionArray([2, 3, 10, 6]));
/*
sumRecursionArray([2, 3, 10, 6])
arr.length -> 4
sum = 6

return -> 6  + sumRecursionArray([ 2, 3, 10 ])  <- STAND BY - PAUSE
                    arr.length -> 3  
                    sum = 10
                return 10   +   sumRecursionArray([ 2, 3 ])
                                    arr.length -> 2
                                    sum = 3
                                return  3  +   sumRecursionArray([ 2 ])
                                                    arr.length -> 1
                                                    sum = 2
                                                return  2  +  sumRecursionArray([])
                                                                  arr.length -> 0
                                                                  return 0
                                                return 2 + 0
                                                 2
                                return  3   +    2
                                  5
                return  10   +    5
                   15
          6    +   15   
          21          
*/
// function Queue() {
// 	this.arr = [];
// }
// Queue.prototype.enqueue = function (value) {
// 	this.arr.push(value);
// 	return this.arr;
// };

// Queue.prototype.dequeue = function () {
// 	if (this.arr.length === 0) return undefined;
// 	let elemenDead = this.arr.shift();
// 	return elemenDead;
// };

// Queue.prototype.size = function () {
// 	let Length = this.arr.length;
// 	return Length;
// };

// function henryParty(arr) {
// 	let newArr = new Queue();
// 	for (let prop in arr) {
// 		if (arr[prop].ticket === "VIP" && arr[prop].estado === "Conocido") {
// 			newArr.enqueue(arr[prop]);
// 		}
// 	}

// 	if (newArr.arr.length === 0) {
// 		console.log(false);
// 		return false;
// 	} else {
// 		console.log(newArr);
// 		return newArr;
// 	}
// }

// //input
// let invitados = [
// 	{ name: "carol", ticket: "false", estado: "Desconocido" },
// 	{ name: "Gonzalo", ticket: "false", estado: "Conocido" },
// 	{ name: "Micaias", ticket: "VIP", estado: "Desconocido" }
// ];

// //output
// henryParty(invitados);

//[ {name:"Gonzalo",ticket:"VIP",estado:"Conocido"},]

// function Queue() {
// 	this.arr = [];
// }
// Queue.prototype.enqueue = function (value) {
// 	this.arr.push(value);
// 	return this.arr;
// };

// Queue.prototype.dequeue = function () {
// 	if (this.arr.length === 0) return undefined;
// 	let elemenDead = this.arr.shift();
// 	return elemenDead;
// };

// Queue.prototype.size = function () {
// 	let Length = this.arr.length;
// 	return Length;
// };

// function ordenarPedidos(arr,prop) {
// 	let swap = true;
// 	console.log([arr][prop].precio)
// 	while (swap) {
// 		swap = false;
// 		// for (let i = 0; i < pedidos.length; i++) {
// 		// 	if ([arr][i][prop].precio > [arr][i + 1][prop].precio) {
// 		// 		let help = pedidos[i].pedidos.precio;
// 		// 		pedidos[i].pedidos.precio = pedidos[i + 1].pedidos.precio;
// 		// 		pedidos[i + 1].pedidos.precio = help;
// 		// 		swap = true;
// 		// 	}
// 		// }
// 	}
// 	return pedidos;
// }

// function ordenarPedidos(arr) {
// 	let swap;
// 	do {
// 	  swap = false;
// 	  for (let i = 0; i < arr.length - 1; i++) {
// 		if (arr[i].pedido.precio > arr[i + 1].pedido.precio) {
// 		  const temp = arr[i];
// 		  arr[i] = arr[i + 1];
// 		  arr[i + 1] = temp;
// 		  swap = true;
// 		}
// 	  }
// 	} while (swap);

// 	return arr;
// }

//   // Ordenar por precio ascendente

// //input
// let pedidos = [
// 	{nombre:"Franco", pedido:{nombre:"Fernet", precio: 260}},
// 	{nombre:"Juan", pedido:{nombre:"Gancia", precio: 220}},
// 	{nombre:"Nico", pedido:{nombre:"Vodka", precio: 285}},
// 	{nombre:"Fer", pedido:{nombre:"Martini", precio: 430}},

// ];

// //output
// // const ordenado = ordenarPedidos(pedidos,"pedido")

// const pedidosOrdenadosPorPrecio = ordenarPedidos(pedidos, "precio");
// console.log(pedidosOrdenadosPorPrecio);

LinkedList.prototype.entregarPedido = function () {};

let pedidos = [
	{ nombre: "franco", trago: "Fernet", precio: 260 },
	{ nombre: "Marcos", trago: "Gancia", precio: 220 },
	{ nombre: "Juan", trago: "Vodka", precio: 285 },
	{ nombre: "Nico", trago: "Martini", precio: 430 }
];
