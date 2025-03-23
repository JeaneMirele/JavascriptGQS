/*7. Verificar Palíndromo
Desenvolva uma função palindromo(str) que receba uma string e retorne
true se a string for um palíndromo (lê-se da mesma forma de frente para
trás), ou false caso contrário.
Exemplo: palindromo('radar') deve retornar true.*/

let str = "radar";

function palindromo(str){
    tamanho = str.length;

    for(let i=0;i<tamanho/2; i++){
        if(str[i] !== str[tamanho - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(palindromo(str));