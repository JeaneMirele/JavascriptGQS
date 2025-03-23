/*8. Ordenar um Array em Ordem Crescente
Escreva uma função ordenarArray(arr) que receba um array de números e
o retorne ordenado em ordem crescente.
Exemplo: ordenarArray([3, 1, 4, 2, 5]) deve retornar [1, 2, 3, 4, 5]*/

let arr= [6,8,10,3,4,5]
function ordenarArray(arr){
        return arr.sort((a, b) => a - b);
    }
    
console.log(ordenarArray(arr));