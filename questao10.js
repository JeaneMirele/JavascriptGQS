/*10.Encontrar a Média de um Array
Escreva uma função mediaArray(arr) que receba um array de números e
retorne a média dos valores.
Exemplo: mediaArray([1, 2, 3, 4, 5]) deve retornar 3.*/

let arr = [1,4,3,5,2];
function mediaArray(arr){
    let soma = 0;
    let tamanho = arr.length;
    for(let i=0; i<tamanho; i++){
        soma += arr[i];
    }
    return soma/tamanho;
   
}

console.log(mediaArray(arr));