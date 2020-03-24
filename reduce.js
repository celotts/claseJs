let personas = [
    {
        "nombre": "Carlos",
        "altura": 1.72
    },
    {
        "nombre": "Emilio",
        "altura": 1.22
    },
    {
        "nombre": "Floremy",
        "altura": 1.52
    },
]

reducer = (acumulador, { altura }) =>
    acumulador + altura

var totalAltura = personas.reduce(reducer, 0)

console.log(`Total de altura ${totalAltura} metros`);