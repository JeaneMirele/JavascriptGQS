/*1. Somar Elementos de um Array
Escreva uma função somarArray(arr) que receba um array de números e
retorne a soma de todos os elementos.
Exemplo: somarArray([1, 2, 3, 4, 5]) deve retornar 15.*/

let arr = [10,2,4,6];

function somarArray(arr){
    let soma = 0;

    for(let i=0; i<arr.length-1; i++){
        if(i==0){
            soma = arr[i]+ arr[i + 1];
        }else{
            soma = soma + arr[i+1];
        }
       
    }
    console.log(soma);
}
   
somarArray(arr);

