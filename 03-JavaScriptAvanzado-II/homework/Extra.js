// Set
const dataGeneral = [2, 3, 1, 4, 54, 2, 1, 2, "hola", "bye", "hola"];
console.log(dataGeneral.length);

const dataSinDuplicados = new Set(dataGeneral);

console.log(dataSinDuplicados);
console.log(dataSinDuplicados.size);

dataSinDuplicados.add(2);
console.log(dataSinDuplicados);

for (const elemento of dataSinDuplicados) {
	console.log(elemento);
}

// Convertir el Set de nuevo a un array
const arraySinDuplicados = Array.from(dataSinDuplicados);

// Closure
// Lista de carros

function myNewAddCars() {
	var listCars = [];
	return function (car) {
		for (let i = 0; i < listCars.length; i++) {
			if (car.toLocaleLowerCase() === listCars[i].toLocaleLowerCase()) {
				return "this car exists";
			}
		}
		listCars.push(car);
		return listCars;
	};
}

const listCarsA = myNewAddCars();
console.log(listCarsA("bmw"));
console.log(listCarsA("foRd"));
console.log(listCarsA("fiat"));
console.log(listCarsA("FORD"));

// This
// user pass
const users = {
	listUser: [
		{
			name: "mau",
			pass: 1234
		},
		{
			name: "jimy",
			pass: 12
		},
		{
			name: "seba",
			pass: 77
		}
	]
};
function addUser(user) {
	this.listUser.push(user);
	return this.listUser;
}
// Biendeo natural
users.addUser = addUser;
console.log(users.addUser({ name: "juan", pass: 1 }));

// Bind (sin necesidad de params)
const instanceBINDaddUser = addUser.bind(users);
console.log(instanceBINDaddUser({ name: "susu", pass: 98 }));

// Apply (con utilidad de params)
const instanceAPPLYaddUser = addUser.apply(users, [
	{ name: "applyuuu", pass: 344 }
]);
console.log(instanceAPPLYaddUser);

/*Consigna: Crea una función llamada calculadora que tome un valor inicial y devuelva dos funciones, sumar y restar, 
que permitan agregar o restar valores al valor inicial, manteniendo un seguimiento del valor actual. Por ejemplo:

const operaciones = calculadora(10);
operaciones.sumar(5); // Debería devolver 15
operaciones.restar(3); // Debería devolver 12
Crea la función calculadora de manera que las funciones sumar y restar sean closures que accedan y actualicen el valor inicial.
*/

function calculadora() {
	const obj = { valor: 0, sumar: null, restar: null };

	obj.sumar = function (num) {
		obj.valor += num;
		return obj.valor;
	};
	obj.restar = function (num) {
		obj.valor -= num;
		return obj.valor;
	};
	return obj;
}

const cuenta = calculadora();
console.log(cuenta);
console.log(cuenta.sumar(5));
console.log(cuenta.sumar(5));

function cuentaRegresiva() {
	let contador = 10;

	return function () {
		if (contador === 0) {
			return "Llegaste a tu limite!";
		}
		return contador--;
	};
}

// const cuentaRegresivaInDead = cuentaRegresiva();
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());
// console.log(cuentaRegresivaInDead());

// function calculadoraAvanzada() {
// 	const valor = 0;

// 	return function () {
// 			{
// 			sumar: function (num) {
// 				this.valor += num;
// 				return this.valor;
// 			},
// 			multiplicar: function (num) {
// 				this.valor *= num;
// 				return this.valor;
// 			},
// 			restar: function (num) {
// 				this.valor -= num;
// 				return this.valor;
// 			},
// 			dividir: function (num) {
// 				this.valor /= num;
// 				return Math.round(this.valor);
// 			},
// 			result: function () {
// 				return valor;
// 			}
// 		};
// 	};
// }

// const calcula = calculadoraAvanzada();
// console.log(calcula.sumar(10));
let bolsas = 100;
let casas = 9;
console.log(bolsas / casas);
function construccionCasas(bolsas) {
	//bolsas 10 = 1 casa
	//bolsas 20 = 2 casa
	return function (casas) {
		if (casas <= 0) return "Por favor ingresar cuantas casas quieres construir";
		if (Math.floor(bolsas / casas === 10)) {
			return "No se puede construir casas con esa cantidad de bolsas";
		}
	};
}

const proyec = construccionCasas(100);
console.log(proyec(10));
