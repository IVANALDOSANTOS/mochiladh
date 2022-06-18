let peliculas = ["star wars", "totoro", "rocky", "pulp fiction" ," la  vida e bella"];
function converterAmaiuscula(array){
    for (let  i =0; i < peliculas.length; i++){
        array[i] = array[i].toUpperCase();
    }
    return array
}
console.log(converterAmaiuscula())


