/*2. Verificar se um Número é Primo
Crie uma função numeroPrimo(num) que receba um número inteiro e
retorne true se ele for primo, ou false caso contrário.
Exemplo: numeroPrimo(7) deve retornar true.*/

function numeroPrimo(num) {
    if (num < 2) 
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) 
            return false;
    }
    return true;
}

console.log(numeroPrimo(10)); 
console.log(numeroPrimo(11));
console.log(numeroPrimo(2));
console.log(numeroPrimo(6));   
