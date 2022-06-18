const alice = [23, 69, 32];
const bob = [12, 67, 43];

function comparaNota(nome1, nome2){
    let pontosAlice=0,pontosBob=0;
    for(let aux=0;aux<=alice.length;aux++){
        if(nome1[aux]>nome2[aux]){
            pontosAlice++;
        
        }else if(nome1[aux]>nome2[aux]){
            pontosBob++;
    }
    if(pontosAlice>pontosBob){
        console.log("Alice ganhou")
    }else{
        console.log("Bob ganhou")

    }
}

}
comparaNota(alice, bob);