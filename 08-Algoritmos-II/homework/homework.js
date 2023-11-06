"use strict";
// No cambies los nombres de las funciones.

function quickSort(lista) {
	// Implementar el método conocido como quickSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	if (lista.length < 1) return lista;
	const pivot = Math.floor(lista.length / 2);
	const arrLeft = [];
	const arrRight = [];
	console.log(pivot);
	console.log(lista);
	for (let i = 1; i < lista.length; i++) {
		if (i !== pivot) {
			if (lista[i] >= lista[pivot]) {
				arrRight.push(lista[i]);
				console.log(arrRight);
			} else {
				arrLeft.push(lista[i]);
				console.log(arrLeft);
			}
		}
	}
	return quickSort(arrLeft).concat(lista[pivot]).concat(quickSort(arrRight));
}
console.log(quickSort([9, 5, 6, 4, 8, 3, 7, 10]));
function mergeSort(array) {
	// Implementar el método conocido como mergeSort para ordenar de menor a mayor
	// el array recibido como parámetro
	// Devolver el array ordenado resultante
	// Tu código:
	//okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	quickSort,
	mergeSort
};
