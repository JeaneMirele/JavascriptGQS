/*3. Contar Vogais em uma String
Desenvolva uma função contarVogais(str) que conte e retorne o número de
vogais (a, e, i, o, u) em uma string fornecida.
Exemplo: contarVogais('javascript') deve retornar 3*/

    let str = "Abracadabra";
    function contarVogais(str) {
        let contador = 0;
        let vogais = "aeiouAEIOU";
    
        for (let char of str) {
            if (vogais.includes(char)) {
                contador++;
            }
        }
        return contador;
    }
    
    console.log(contarVogais(str)); 

    
