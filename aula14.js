let nomeDeUsuario = "ivanaldo";
 console.log(nomeDeUsuario);

nomeDeUsuario = "ivan";
 console.log (nomeDeUsuario);

if(true){
     let nomeDeUsuario = "josy";
     console.log(nomeDeUsuario)
 }

const carro ="idea";

 //carro ="fox";

console.log(carro)

FUNÇÃO

function darOi (){
    console.log("Olá tudo bem?")
}
darOi();
//FUNÇÃO EXPRESSA

let somar = function (numA , numB, numC){
    console.log(numA + numB + numC);
}
somar(4,5,5,)
somar(7,2,5)

// ESCOPO
 let resultado = 0;
 console.log("resultado fora da funçao = ", resultado);// fora da função

 function multiplicar(numA , numB){   // dentro da funão
     let resultado =  numA * numB;

    console.log("resultado dentro da funçao = ", resultado);
}
multiplicar(2 ,  2);
function bomDia(){
    return  "Ola , bomdia!";
    console.log(bomDia)
}
console.log(bomDia)

//if e else;

let dia = "domingo";

if(dia == " domingo"){
    console.log("vou passear");

     }else if(dia == " sexta "){ 
     console.log("vou para o cinema")
}
else{
    console.log ("fico em casa!")
}
let frutasAmarelas=['melão', 'mamao','limão'];
[fruta1, fruta2, fruta3]=frutasAmarelas


 console.log(fruta1);
 console.log(fruta2);
 console.log(fruta3);
 console.log(frutasAmarelas)


function soletra (texto){
    console.log(texto.replace('-',''))
    toLocaleUpperCase().split("").join
}
soletra("digital-hause")
soletra("ctd")
