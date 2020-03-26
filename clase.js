function Personas(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Personas.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

let name = 'Carlos';
let age = 47;

const xy = [1, 2, 5, 9, 3, 7, 6]

if (xy.includes(90)) {
    console.log('Existe 9');
} else {
    console.log('No existe 9');
}

obj = { name, age };
console.log(obj);

const data = {
    frontend: 'Carlos',
    backEnd: 'Nestor',
    design: 'Julio'
}

// Convierte en objeto en array
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Convierte un objeto en un arreglo string
const data1 = {
    frontend: 'Carlos',
    backEnd: 'Nestor',
    design: 'Julio'
}

const values = Object.values(data1);
console.log(values);
console.log(values.length);

const objx = {
    name1: 'Carlos',
    age1: 47,
    country1: 'VEN'
};

// Muestra los objeto age1 and country
let { name1, ...all } = objx;
console.log(name1, all);

// Expresion regular para manejar fecha
const regxData = /([0-9]{2})-([0-9]{2})-([0-9]{4})/
const match = regxData.exec('26-03-2020');

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);

// Cre array con  subniveles
let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

console.log(array.flat());

// aplanar segundo nivel
console.log(array.flat(2));


//FlapMap 
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));


//FlapMap solo resultado
let array21 = [1, 2, 3, 4, 5];
console.log(array21.flatMap(value => [value * 2]));

Personas.prototype.soyAlto = function () {
    return this.altura > 1.8
}
var datos = new Personas('Carlos', 'Lott', 1.72);
var datos1 = new Personas('Emilio', 'Lott', 1.65);
var datos2 = new Personas('Alfredo', 'Lott', 1.81);

