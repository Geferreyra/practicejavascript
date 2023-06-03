let persona1 ={
    nombre:"no name",
    apellido:"apel",
    nombreCompleto: function(titulo,tel){
        return titulo+' '+ this.nombre + ' ' +this.apellido+' '+tel; 
    }
}

let persona2 ={
    nombre:"luna",
    apellido:"lara",
}

//Uso call

console.log(persona1.nombreCompleto('Lic','2233456'));

console.log(persona1.nombreCompleto.call(persona2,'Ing','666666'));




