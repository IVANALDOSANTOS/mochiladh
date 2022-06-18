let objCarro = {
    rodas : 4 ,
    andar : function (){
      return'carro andando com ' +this.rodas+' rodas';
    }
}
let dadoUser ={
    "nome" : "ivan",
    "idade" : "31",
    "profissão" : "programador",
}
console.log(dadoUser);
console.log(objCarro.andar());
