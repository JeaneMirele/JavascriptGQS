/*6. Encontrar o Maior Número em um Array
Crie uma função maiorNumero(arr) que receba um array de números e
retorne o maior valor presente nesse array.
Exemplo: maiorNumero([10, 5, 8, 20, 3]) deve retornar 20.*/

let arr = [10, 5, 8, 30, 3];

function maiorNumero(arr){
let maior = arr.reduce((max, num) => {
    return num > max ? num : max; 
}, arr[0]);  

console.log(maior); 

}

maiorNumero(arr);
