

function miFuncion(a,b){
    return a+b;
}

let resultado = miFuncion(3,4);
console.log(resultado);

let resta = function(a,b){ return a - b};

resultado = resta(4,2);

console.log(resultado);

//Funciones self invovking

(function(a,b){
    console.log('Ejecuta persecuta '+ ( a+ b ));
})(3,4);
