let dados = [{
    nome: 'Rodrigo',
    idade: 38
},
{
    nome: "Rafael",
    idade: 27
},
{
    nome: "Maria",
    idade: 35
}
];

idades = [];

dados.forEach(function(item) {
    idades.push(item.idade);
});

idades2 = [];

for(i = 0; i < dados.length; i++) {
    idades2.push(dados[i].idade);
}

console.log(idades.sort());
console.log(idades2.sort());


const alicia = [23 , 69 ,32];
const bob = [12, 67, 43];
function encontraGanhador (a,b) {
    let pontoAlicia= 0;
    let pontoBob= 0;
}
for (let i = 0; i < a.length; i++){
    if(a[i] > b[i]){
        pontoAlicia++;

    }else {
        pontoBob++
    }
}
if(pontoAlicia > pontoBob){
    console.log( ' alicia ganhou com ' + pontoAlicia)
    console.log('não foi dessa vez,voçê perdeu' +pontoBob);
}else{
    console.log('Bob gabhou' + pontoBob);
    console.log('não foi dessa vez alicia, vc fez ' + pontoAlicia);
}
encontraGanhador(Alicia , Bob)