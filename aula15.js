function div ( x , y){
    return x*y
}

function soma (a,b , callback){
    let result =callback(a , b)
    return a + b +result ;
}
let somaArrow = (a,b) => a + b

//console.log(somaArrow(10, 10, ));

console.log(soma(10,10,div))


let hora = () => {
    let data = new Date ();
    return data.getHours() + ":"+ data.getMinutes();
}
console.log(hora())

function print (){
    console.log('olá mundo')
}
 setTimeout( print,10000);
// setInterval(print,10000);

// let  print = ()=> console.log('olá mundo'(print))
// setTimeout( print,10000);

function fizzBuzz (a, b){
    for(let i = 0; i <= 100; i++){
        if (i % a === 0 && i % b === 0){
           console.log('FizzBuzz')
        }else if (i % b ===0){
            console.log('Fizz')
        }else if (i % b === 0 ){
            console.log('Buzz')

        }
    }
}

fizzBuzz(2,4)