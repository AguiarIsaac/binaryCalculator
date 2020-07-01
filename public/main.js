// Criação de variaveis

var binario;
var decimal;
var campo;
function conversor() {
    // Entrada de dados

    binario = document.conversao.binario.value;
    
    // Processamento de dados

    campo = true;

    if (binario === ''){
        window.alert('Campo em branco, informe um número binário!');
        campo = false;
    } else if(binario.match(/^[0-1]+$/g) === null){
        window.alert('Digite apenas 0 ou 1!');
        campo = false;
    }
    decimal = parseInt(binario,2);

    // Saida de dados

    if (campo === true) {
    document.conversao.output.value = decimal;
    }
}