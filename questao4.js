/*4. Inverter uma String
Escreva uma função inverterString(str) que receba uma string e retorne
essa string invertida.
Exemplo: inverterString('hello') deve retornar 'olleh'.*/

let str = "Gestão";
function inverterString(str){
        return str.split("").reverse().join("");
    }
    
    console.log(inverterString(str)); 
    
