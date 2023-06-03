let horaDia = 25;
let mensaje;

if(horaDia >= 6 && horaDia <= 11 ){
 mensaje="Buenos dias";
 console.log(mensaje);

} else if(horaDia >= 12 && horaDia <= 18){
 mensaje ="Buenas tardes";
console.log(mensaje);
}

else if(horaDia >= 19 && horaDia<=24){
mensaje="Good night";
console.log(mensaje);
}

else if(horaDia >= 0 && horaDia <=6 ){
mensaje="Only Sleeping";

console.log(mensaje);

}else{
    mensaje="Valor incorrect";
    console.log(mensaje);
}