/*Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸*/


// Array con 6 objetos:

const pizzas = [
    {id: 1, nombre: "muzzarella", ingredientes: ["Salsa de tomate", "muzzarella", "aceitunas", "orégano"], precio: 500},
    {id: 2, nombre: "jomón", ingredientes: ["Salsa de tomate", "muzzarella", "jamón", "aceitunas y orégano"], precio: 550},
    {id: 3, nombre: "napolitana", ingredientes: ["Salsa de tomate", "muzzarella", "tomate", "ajo", "aceite de oliva", "aceitunas", "orégano"], precio: 600},
    {id: 4, nombre: "fugazza", ingredientes: ["Cebolla", "aceite de oliva", "aceitunas negras"], precio: 500},
    {id: 5, nombre: "calabresa", ingredientes: ["Salsa de tomate", "muzzarella", "longaniza", "aceitunas", "orégano"], precio: 650},
    {id: 6, nombre: "roquefort", ingredientes: ["Salsa de tomate", "muzzarella", "queso roquefort", "aceitunas negras", "orégano"], precio: 700},
];

// a) de una forma
pizzas.forEach((pizza) => {
    if(pizza.id % 2 == 0) {
        console.log(pizza);
    }   
})
pizzas;

// a) de otra forma
const arrayPar = pizzas.filter(pizza => pizza.id % 2 == 0);
console.log(arrayPar);

// b)
const bool = (pizza) => pizza.precio < 600;
let pizzaToraba = (pizzas.some(bool));
if (pizzaToraba) {
    console.log ("Tenemos pizzas de menos de 600 mangos")
}

// c) de una forma
pizzas.forEach((pizza) => {
    console.log(`Te recomendamos la pizza: ${pizza.nombre}`)
});

// c) de otra forma
const nombrePizzas = pizzas.map (pizza => pizza.nombre).join(" - ");
console.log(`Te recomendamos nuestras pizzas: ${nombrePizzas}`);

// d) de una forma
pizzas.forEach((pizza) => {
    console.log(`Te cuento los precios de nuestras pizzas: $${pizza.precio}`)
});

// d) otra forma
const precioPizzas = pizzas.map (pizza => pizza.precio).join(" - $");
console.log(`Te paso los precios de nuestras pizzas: $${precioPizzas}`);

// e)
pizzas.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} tiene un valor de $${pizza.precio}`)
});

