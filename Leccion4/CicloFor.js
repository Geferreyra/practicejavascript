
/*
for(let contador = 0; contador <= 10; contador++){
    if(contador%2 == 0){
    console.log(contador);
    break;  
}
}

*/

for(let contador = 3; contador <= 10; contador++){
    if(contador % 2 !== 0){
        continue;
    }
        console.log(contador)
    
}


console.log('Fin ciclo for');