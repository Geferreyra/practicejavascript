let a = 12;

if(a % 2===0){

    console.log("numero par");
}else{
    console.log("impar");
}

let val = 10;
//Ejemplo operador AND
let valMin = 0, valMax = 10;

if(val >= valMin && val<= valMax ){
    console.log("in range");
}else{
    console.log("out of range");
}

//Example OR operator

let examen=10;
let promociona ="promociona", desaprueba="desaprueba",afinal="a final"; 

if(examen<=0 || examen <= 3){
console.log(desaprueba)
}else if(examen==4 || examen==5|| examen==6){
console.log(afinal); 
}else {
    console.log(promociona);
}