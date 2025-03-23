/*9. Contar Ocorrências de um Caractere em uma String
Crie uma função contarOcorrencias(str, char) que conte quantas vezes um
caractere específico aparece em uma string.
Exemplo: contarOcorrencias('javascript', 'a') deve retornar 2.*/


function contarOcorrencias(str, char){
    let cont=0;
    for(let i=0; i<str.length; i++){
        if(str[i]==char){
            cont += 1;
        }
    }
    return cont;
}

console.log(contarOcorrencias("javascript", 'a'));
console.log(contarOcorrencias("elefante", 'e'));