const pessoa = [
    {
        altura:1.82,
        sexo:"F"
    },
    {
        altura:1.75,
        sexo:"F"
    },
    {
        altura:1.55,
        sexo:"M"
    },
    {
        altura:1.35,
        sexo:"M"
    }
];

//console.log( pessoa[0].altura );

let menorAltura = 100;
let maiorAltura = 0;

pessoa.forEach(function (p) {
    //console.log(p.altura)
    if(p.altura < menorAltura){
        menorAltura = p.altura;
    }
});
//console.log(menorAltura);

let media = 0;
let qtdm  = 0;
for (let i = 0; i < pessoa.length; i++) {
    if(pessoa[i].sexo == "F"){
        qtdm++;
        media = pessoa[i].altura + media;
    }
}
console.log(qtdm)
media = media / qtdm;
console.log(media);

//exercicio 14/06

const espectador = [
    { idade: 15, opiniao: 3 },
    { idade: 25, opiniao: 1 },
    { idade: 41, opiniao: 3 },
    { idade: 33, opiniao: 2 },
    { idade: 28, opiniao: 1 },
    { idade: 19, opiniao: 1 },
    { idade: 21, opiniao: 2 },
    { idade: 38, opiniao: 3 },
    { idade: 20, opiniao: 2 },
    { idade: 50, opiniao: 3 },
    { idade: 34, opiniao: 1 },
    { idade: 31, opiniao: 3 },
    { idade: 23, opiniao: 2 },
    { idade: 46, opiniao: 3 },
    { idade: 29, opiniao: 3 }
];

// - a média das idades das pessoas que responderam ótimo;

let mediaIdadeOpiniao = (obj, opi) => {
    let arrayOpiniao = obj.filter(e => e.opiniao == opi);
    let arrayIdades = arrayOpiniao.map(e => e.idade);
    let somaIdades = 0;
    for (let i = 0; i < arrayIdades.length; i++) {
        somaIdades += arrayIdades[i] / arrayIdades.length;
    };
    if (opi == 1) {
        console.log(`A média de idade que responderam regular é ${somaIdades.toFixed(2)}.`);
    } else if (opi == 2) {
        console.log(`A média de idade que responderam bom é ${somaIdades.toFixed(2)}.`);
    } else if (opi == 3) {
        console.log(`A média de idade que responderam ótimo é ${somaIdades.toFixed(2)}.`);
    };
};

mediaIdadeOpiniao(espectador, 3);

// - a quantidade de pessoas que responderam regular;

let qtdPessoas = (obj, opi) => {
    let arrayOpiniao = obj.filter(e => e.opiniao == opi);
    if (opi == 1) {
        console.log(`A quantidade de pessoas que responderam regular é de ${arrayOpiniao.length}.`);
    } else if (opi == 2) {
        console.log(`A quantidade de pessoas que responderam bom é de ${arrayOpiniao.length}.`);
    } else if (opi == 3) {
        console.log(`A quantidade de pessoas que responderam ótimo é de ${arrayOpiniao.length}.`);
    };
};

qtdPessoas(espectador, 1);

// - a porcentagem de pessoas que responderam bom entre todos os espectadores avaliados;

let porcentagemRespostas = (obj, opi) => {
    let arrayOpiniao = obj.filter(e => e.opiniao == opi);
    let porcentagem = (arrayOpiniao.length / obj.length * 100).toFixed(2)
    if (opi == 1) {
        console.log(`A porcentagem de pessoas que responderam regular foi de ${porcentagem}.`);
    } else if (opi == 2) {
        console.log(`A porcentagem de pessoas que responderam bom foi de ${porcentagem}.`);
    } else if (opi == 3) {
        console.log(`A porcentagem de pessoas que responderam ótimo foi de ${porcentagem}.`);
    };
};

porcentagemRespostas(espectador, 2);