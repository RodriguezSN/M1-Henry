"use strict";
// No cambies los nombres de las funciones.
//var array = [1,23,4,5,6]
//        desde,hasta
//array.slice(0,2)          el slice devuelve un nuevo array
//        donde,cuanto
//array.splice(1,2)         el splice modifica el original
function factorear(num) {
	// Factorear el número recibido como parámetro y devolver en un array
	// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
	// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
	// Tu código:
}

function bubbleSort(array) {
	// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	let swap = true;
	while (swap) {
		swap = false;
		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i + 1]) {
				let help = array[i];
				array[i] = array[i + 1];
				array[i + 1] = help;
				swap = true;
			}
		}
	}
	return array;
}

// console.log(bubbleSort([10, -2, -7, 4]));
//).toEqual([-7, -2, 4, 10]
function insertionSort(array) {
	// Implementar el método conocido como insertionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando arreglos
	// Devolver el array ordenado resultante
	// Tu código:
	//    i
	// j
	//[5, 1, 4, 2, 8]
	for (let i = 1; i < array.length; i++) {
		for (let j = i; j >= 1; j--) {
			if (array[j] < array[j - 1]) {
				let aux = array[j];
				array[j] = array[j - 1];
				array[j - 1] = aux;
			} else {
				j = 0;
			}
		}
	}
	return array;
}

console.log(insertionSort([5, 1, 4, 2, 8]));
//(insertionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8])
console.log(3 < 2);
function selectionSort(array) {
	// Implementar el método conocido como selectionSort para ordenar de menor a mayor
	// el array recibido como parámetro utilizando dos arreglos
	// Devolver el array ordenado resultante
	// Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	factorear,
	bubbleSort,
	insertionSort,
	selectionSort
};
