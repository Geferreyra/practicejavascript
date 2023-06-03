let numero = 3;

let numeroTexto ="Valor desconocido";

switch (numero) {
    case 1:
        numeroTexto ="Numero uno";
        break;
    case 2:
        numeroTexto = "numero dos" ;
        break;
    case 3:
        numeroTexto = "Numero tres";
        break
    default:
        numeroTexto = "404 not found";        
}

console.log(numeroTexto);

//_______________________________________________________________________________

let mes = 4;

let estacion= 'Estacion desconocida';

switch(mes){
    case 1: case 2: case 12:
      estacion ='Verano';
      break;
    case 3: case 4: case 5:
      estacion='Otoño';
      break;
    case 6: case 7: case 8:
        estacion='Primavera';
        break;
    case 9: case 10: case 11:
        estacion="Primavera"    
        break;
     default:
        estacion="valor incorrecto"   

}

console.log(estacion)

