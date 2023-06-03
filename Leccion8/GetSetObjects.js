let persona ={
    nombre:"no name",
    apellido:"apel",
    email:"mailaman@gmil.com",
    edad:28,
    idioma: 'es',

     set lang(lang){
        this.idioma = lang.toUpperCase();
     },

    get lang(){
          return this.idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' +this.apellido; 
    }
}


console.log(persona.lang);

persona.lang = 'us';


console.log(persona.lang);

let persona2 ={
    nombre:"no name",
    apellido:"apel",
    email:"mailaman@gmil.com",
    edad:28,
    idioma: ['es'],
     agregarIdioma: function(idioma){
        this.idioma.push(idioma);
    }
}

persona2.agregarIdioma('us');

console.log(persona2)

function Persona(nombre,apellido,email){
      this.nombre = nombre;
      this.apellido= apellido;
      this.email = email;
      this.nombreCompleto =  function(){
         return this.nombre +' '+this.apellido;
      }
}

let padre = new Persona('Steph','Curry','triple@gmail.com');
let madre = new Persona('andpersan','&&','andpersan&&@gamil.com');

console.log(padre.nombreCompleto());


