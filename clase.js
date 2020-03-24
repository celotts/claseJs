function Personas(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Personas.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Personas.prototype.soyAlto = function () {
    return this.altura > 1.8
}
var datos = new Personas('Carlos', 'Lott', 1.72);
var datos1 = new Personas('Emilio', 'Lott', 1.65);
var datos2 = new Personas('Alfredo', 'Lott', 1.81);

