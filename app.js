let estudiantes =[
    {
        "Nombre": "Juan",
        "Apellido": "Robles",
        "Edad": 23,
        "Carrera": "Sistemas"
    },
    {
        "Nombre": "Maria",
        "Apellido": "Perez",
        "Edad": 26,
        "Carrera": "Industrial"
    },
    {
        "Nombre": "Luis",
        "Apellido": "Angeles",
        "Edad": 20,
        "Carrera": "Gestion"
    }
];

let [alumno1, alumno2, alumno3] = estudiantes;

estudiantes.map((estudiante) => {
    let {Nombre, Apellido, Edad, Carrera} = estudiante;
    console.log(`
    Tu nombre es: ${Nombre}
    Tu apellido es: ${Apellido}
    Tu edad es: ${Edad}
    Tu carrera es: ${Carrera}
    `);
});