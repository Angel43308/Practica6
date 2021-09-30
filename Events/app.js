let obj = {
    nombre: 'Angel',
    edad: 19,
    apellido: 'Rojas',
    Keypress: function () {
        console.log('Se ha presionado una tecla');
    },
    mouse0ver: function () {
        console.log('El puntero esta arriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre'
console.log(obj[myKey]);
// Manda a llamar de distintas formas el nombre

myKey = 'nombre'
console.log(obj[myKey]);
myKey = 'mouse0ver';
console.log(obj[myKey]);
//Manda a llamar el nombre de nuevo mas el mous0ver del mykey

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function (){
    console.log("Hola desde el array");
})
console.log(myArray);
//Manda a llamar los datos mostrados en pantalla 

let funcArray = [];

funcArray.push(() => {
    console.log('Function 1');
});

funcArray.push(() => {
    console.log('Function 2');
});

funcArray.push(() => {
    console.log('Function 3');
});

funcArray.forEach((item) => {
    item();
});
//Manda a llamar function 1, 2 y 3 para mostrarlos