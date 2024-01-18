/*estos son metodos que tienen la propiedad this, lo scuales nos permitiran modificar su valor o a "donde esta apuntando". 
tambien nos permite pasarle argumentos 

METODOS PARA MANIPULAR UN CONTEXTO*/

//todo:  BIND   bindear es como unir

/*este metodo crea una funcion con el mismmo "cuerpo de la original", pero con la propiedad THIS "vinculado a un objeto"
en particular

//!la funcion no se ejecuta de forma inmediata
*/

const objParaBindear = {
	//tenemos el objeto por un lado
	nombre: "mauro",
	apellido: "luis",
	edad: 31
};

const objParaBindear2 = {
	//tenemos el objeto por un lado
	nombre: "mauro",
	apellido: "luis",
	edad: 38
};

const objParaBindear3 = {
	//tenemos el objeto por un lado
	nombre: "pepe",
	apellido: "luis",
	edad: 35
};
const objParaBindear4 = {
	//tenemos el objeto por un lado
	nombre: "jordan",
	apellido: "luis",
	edad: 36
};
function decirNombre(saludo) {
	//tenemos una funcion por otro lado
	return saludo + "!! soy " + this.nombre; //la creamos con una manera generica para que cuando la enlacemos a un obj pueda comunicarse(this)
}

/*formas de enlazar una funcion a un objeto para que sea un metodo de ese objeto */

objParaBindear.añadiendoMetodo = decirNombre; //* dot-notation
// console.log(objParaBindear.añadiendoMetodo("hola"));

//                                     funcion.bind(objABindear)
const instanciaDeObjYFuncionBind = decirNombre.bind(objParaBindear2);
// console.log(instanciaDeObjYFuncionBind("Hello"));
// console.log(objParaBindear2);
// console.log(instanciaDeObjYFuncionBind);

//* CALL
//                                     funcion.call(objABindear, param1,param2...)
const instanciaDeObjYFuncionCall = decirNombre.call(objParaBindear2, "Hi"); //el call, bindea y ejecuta
// console.log(instanciaDeObjYFuncionCall);

//* APPLY
//                                                   el APPLY recibe todos los parametros dentro de un mismo array
//                                     funcion.apply(objABindear, [param1,param2...])
const instanciaDeObjYFuncionApply = decirNombre.apply(objParaBindear3, ["Hi"]); //el call, bindea y ejecuta
// console.log(instanciaDeObjYFuncionCall);

//*extra bind   la funcionalidad de esto es que una funcion se binde(enlace) a un objeto.. de esa forma es un metodo

function sumando(a, b) {
	return a + b;
}
//NO enlazo la funcion a un objeto
//pero uso el BIND para pasar params en partes(etapas)
const bindeando = sumando.bind(null, 3);
// console.log(bindeando(2));
// console.log(bindeando(8));

const entradasVendidas = [
	{ nombre: "Harry potter", horario: 23 },
	{ nombre: "300", horario: 6 },
	{ nombre: "El hobbit", horario: 7 }
];
