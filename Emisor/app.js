var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
    //Manda a llamar el Somewhere.. 
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
    //Manda a llamar el greeting occurred
});
//Manda a llamar el Hello de la consola
console.log('Hello!');
emtr.emit('greet');

emtr.on('jump', () => {
    console.log('someone jumped!');
});
console.log(emtr)
emtr.emit('jump');