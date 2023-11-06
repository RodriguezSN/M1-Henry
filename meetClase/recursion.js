/*recorrer un array productos y ver si se encuentra (buscar por nombre)
por params se pasasn las listas */
//recursion es un funcion que se retorna a si misma
// const listaDeProducto{
//     {id:1,
//    nombre:Producto1,
//     }
// }

function searchProduct(list) {
	let product = list.pop();
	if (list.length === 0) return "Producto NO encontrado";
	if (nmae === product.nombre) {
		return "Producto encontrado " + product.id;
	}

	return searchProduct(list);
}
