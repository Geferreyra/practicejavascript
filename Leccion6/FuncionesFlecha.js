
function miFuncion(a,b){
    return a+b;
}

let resultado = miFuncion(3,4);
console.log(resultado);

const sumarFuncionTipoFlecha = (a,b) => a + b 

resultado=sumarFuncionTipoFlecha(4,5);

console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length;i++){
        suma += arguments[i];
    }
    return suma;
}

resultado= sumarTodo(2,2,2,2,2);

console.log(resultado);

const persona = {
    nombre:'',
    apellido:''
}

function agregarValoralObj(p){
    p.nombre = 'Any';
    p.apellido = 'Way';

}

agregarValoralObj(persona)

console.log(persona);


