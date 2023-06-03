let persona1 ={
    nombre:"no name",
    apellido:"apel",
    nombreCompleto: function(titulo, tel){
        return titulo+' '+this.nombre + ' ' +this.apellido+' '+tel; 
    }
}

let persona2 ={
    nombre:"luna",
    apellido:"lara",
}

let arreglo=['Ing','2222']

console.log(persona1.nombreCompleto('Lic','1233'));

console.log(persona1.nombreCompleto.apply(persona2,arreglo));