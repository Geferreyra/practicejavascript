function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido= apellido;
    this.email = email;
    this.nombreCompleto =  function(){
       return this.nombre +' '+this.apellido;
    }
}

Persona.prototype.tel = ''

let padre = new Persona('Steph','Curry','triple@gmail.com');
let madre = new Persona('andpersan','&&','andpersan&&@gamil.com');

padre.tel='1111';
console.log(padre.tel);
console.log(madre.tel);