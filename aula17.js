const valores = [1,2,3,4,5,6,7,8,9];

// console.log( valores[0]);

// for (let i = 0; i < valores.length; i++) {
//     console.log (valores[i]*2);
    
// }
let tabuada = valores.map (function(x){
    // console.log(element *2);
    return x+'- presente';
});

console.log (tabuada);
console.log ( valores );

//filter ==> define a condição que queremos aplicar com filtro para a criação .

let novoValores = valores.filter (function(y){
    return y % 2 == 0 ;
});
console.log (novoValores );

// reduce==> percorre uma array  e retorta uma arrray ,ele recebe uma callback,
// para ser executada em cada elemento da array. 
let soma = novoValores.reduce(function(acumulador, valor){
    console.log( acumulador ,valor);
    return acumulador + valor;

});
console.log(soma);

//forEach ==> objetivo é 
valores.forEach( function(elemento ){
    console.log( elemento + " * 3 = " +elemento*3)
});
//obj literal ..
let objCarro = {
    rodas : 4 ,
    andar : function (){
      return'carro andando';
    }
}
console.log (objCarro.andar)