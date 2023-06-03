//let autos = new Array('BMW','Audi','Ford');

const autos = ['BMW','Audi','Ford'];
//console.log(autos[0]);

for(let i =0; i < autos.length; i ++){

 console.log(i+ " " +autos[i]);

}

autos[1] = 'Mercho';
console.log(autos[1]);

autos.push('Audi');

console.log(autos);

autos[autos.length] = "Cadillac";

console.log(autos);

autos[6]="Porch";

console.log(autos);

console.log(Array.isArray(autos));

console.log(autos instanceof Array);

