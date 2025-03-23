/*5. Encontrar o Fatorial de um Número
Implemente uma função fatorial(n) que calcule o fatorial de um número
inteiro positivo.
Exemplo: fatorial(5) deve retornar 120*/

let n = 4;
function fatorial(n){
    let fat = 1;
    for(let i=n; i>=1; i--){
        fat *= i;
    }
    console.log(fat);
}

fatorial(n);