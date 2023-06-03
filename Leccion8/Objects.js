let persona ={
    nombre:"no name",
    apellido:"apel",
    email:"mailaman@gmil.com",
    edad:28,
    nombreCompleto: function(){
        return this.nombre + ' ' +this.apellido; 
    }
}
let persona2= new Object();

persona2.nomre= 'Carlo';
persona2.direccion='Alfa centauri';



console.log(persona.nombreCompleto());

console.log(persona2.direccion);

console.log(persona['apellido']);

// for in
for(nombrePropiedad  in persona){

    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]); 
}

//Agregar propieddades al objeto

persona.tel='0303456';

console.log(persona);

delete persona.tel;

console.log(persona);

let personaArray = Object.values(persona);

console.log(personaArray); 

let personaString =  JSON.stringify(persona);

console.log(personaString)