//crear una memoria que me de la posibilidad de guardar o editar datos de direfentes usuarios pudiendo
//almacenarlos con un identificador unico
/*
Para guardar vas a recibir por parametro el usuario - Para editarlo recibe el identificador del usuario  */
function memoDrive() {
	//creamos la memoria que a interactuar con la cloursure y el id que es para identificar a cada usuario
	let memo = {};
	let id = 1;

	/* 
    creamos un objeto de clousure que cada uno realiza su respectiva tarea Guardar y Editar
    */
	const saveEdit = {
		save: function (obj) {
			let nameKey = "user_" + id;
			id++;
			memo[nameKey] = obj;
			return memo;
		},
		edit: function (userId, name) {
			console.log(memo[userId]);
			memo[userId] = name;
			// return "Se edito el nombre con exito a " + userId;
			return memo;
		}
	};

	return saveEdit;
}

const testMemoDrive = memoDrive();

// console.log(testMemoDrive);
// console.log(testMemoDrive.save({ save: "mauro" }));
// console.log(testMemoDrive.save({ save: "martin" }));
// console.log(testMemoDrive);
// console.log(testMemoDrive.edit("user_1"));
// console.log(testMemoDrive);
// console.log(testMemoDrive.edit());

//el objetivo de la consgina es guardar en una memoria las letras que me pasan por parametro con su
//valor equivalente en code ASCII

//string de letra

// console.log("a".charCodeAt());

function memoDrive2(data = {}) {
	function createCodeAscii(str) {
		if (data.hasOwnProperty(str)) {
			return "ya esta agregado";
		}
		let value = str.charCodeAt();
		data[str] = value;
		return data;
	}
	return createCodeAscii;
}

const res = memoDrive2();
// console.log(res("a"));
// console.log(res("b"));
// console.log(res("a"));
// console.log(res("f"));

//! **********************************************************************************************************************************
/*
CLOSURE es una funcion anidada que tambien pueden acceder al contexto de la funcion padre
podemos decir que las closures son como PLANTILLAS

formas de declarar una closure
*/

function myFirstMemo() {
	return function () {};
}

function myFirstMemoTwo() {
	const testMemo = function () {};
	return testMemo;
}

function myFirstMemoOne() {
	function testMemoTwo() {}
	return testMemoTwo;
}
/*una funcion que retorna otra funcion en su interior


ahora esa funcion debe acceder al contexto de la funcion padre
*/

function myFirstMemo() {
	// |  se declara la funcion padre
	const data = []; // |  se declara una variable dentro de la funcion padre
	return function (user) {
		// |  se declara una funcion anidad
		data.push(user); // |  la funcion anidad interactua con la variable de la funcion padre
		return data; // |  retorna la variable de la funcion padre
	}; // |
}
// const memoTest = myFirstMemo()	// | al crear una instancia de "myFirsMemo" en "memoTest" se esta creando la clourse
// | es como que creamos un molde y la podemos instanciar cuanto queramos (eso es una closure)
function myFirstMemoTwo() {
	const data = [];
	const testMemo = function (user) {
		data.push(user);
		return data;
	};
	return testMemo;
}

function myFirstMemoOne() {
	const data = [];
	function testMemoTwo(user) {
		data.push(user);
		return data;
	}
	return testMemoTwo;
}
// const test = myFirstMemoOne();
// const test2 = myFirstMemoOne();
// console.log(test("mauro"));
// console.log(test("leo"));
// console.log(test());
// console.log(test2("pepe"));

/*basicamente las closure(cumpliendo los requisitos mencionados arriba(funcion anidada, interactuar con la funcion padre etc)) son para hacer plantillas y despues las reutilizamos  */

//************************************************************************************************************************************************************************************** */

function saludar(saludo) {
	return function (nombr) {
		return saludo + " " + nombr;
	};
}

const sas = saludar("hi");
// console.log(sas("robert"))

var crearFuncion = function () {
	var arreglo = [];

	for (let i = 0; i < 3; i++) {
		arreglo.push(function () {
			console.log(i);
			return i;
		});
	}
	return arreglo;
};

var arr = crearFuncion();
// console.log(arr[0]());
// console.log(arr[1]());
// console.log(arr[2]());
// console.log(arr[3]());
/*al utilizar el let en el for i se guarda en cada bloque(let a eso lo toma como contexto) en cambio var no toma las iteraciones como un
contexto. por esa razon hace el ciclo completo por cada push*/

//************************************************************************************************************************************************************************************** */

function pushObjeto(obj = {}) {
	return function (prop, value) {
		obj[prop] = value;
		return obj;
	};
}

const primerObj = pushObjeto();
console.log(primerObj("nombre", "lucas"));
console.log(primerObj("apellido", "rafael"));
console.log(primerObj("id", 2314));

//! **********************************************************************************************************************************
