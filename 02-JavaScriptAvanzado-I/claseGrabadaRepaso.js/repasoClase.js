/*
conceptos de javaScript:
    1°interpretado
    2°single threaded(es un unico hilo) y sincronico
    3°debilmente tipado
    4°prototypado

    5°orientado a objeto
    6°multiparadigma
*/

/*  
1° interpretado significa que js traduce el codigo y ejecuta al mismo tiempo.. y si hay un error en el proceso se detiene
a direfencia del "compilado" 1-traduce 2-si no encuentra ningun error -3 ejecuta
*/

/*
2° va leyendo el codigo fila por fila izquierda a derecha.. si encuentra una funcion que es "asincronica" que tarda en ejecutar.. 
la envia a otro lugar para que se ejecute mas tarde.. y sigue leyendo las demas lineas sin detenerse
*/

/*
3°  no es tan estrincto como otros lenguajes.. ej si queremos declarar una variable podemos hacer
suma = 3 (y reconoce que estamos declarando una variable, sin necesidad de poner "var" "let" "const")
otro ejemplo: al declarar una variable definimos su tipo de dato "var number = 234" decimos que su tipo de dato es tipo number
pero podemos hacer que "number = true" cambiamos el tipo de dato de "number" a "buleano"

por eso se dice que JS es "debilmente tipado"
 */

/*
   4° se maneja mediante "prototypos" osea nos referimos a que hereda(delega) metodos a otros obj
    ejemplo al crear un (var array = []) este array viene incluido con metodos de los array que se encuentran en el 
    array.prototype. y si no encontramos un metodo en ese lugar lo buscara en su siguiente prototype que es
    objeto.prototype({} no es el obj que conocemos.)(esta el objeto global. y el objeto{} que conocemos)
    si no lo encuentra en objeto.prototype ira a la siguiente cadena que sigue "null" y por defecto el lenguaje 
    traduce "null" como "undefined"  osea no esta definido
*/

/*
5° es orientado a objetos porque... ¿?
*/

/*
6° multiparadigma.. ¿?
*/
