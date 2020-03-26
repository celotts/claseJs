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
Personas.prototype.soyAlto = function () {
    return this.altura > 1.8
}
var datos = new Personas('Carlos', 'Lott', 1.72);
var datos1 = new Personas('Emilio', 'Lott', 1.65);
var datos2 = new Personas('Alfredo', 'Lott', 1.81);

