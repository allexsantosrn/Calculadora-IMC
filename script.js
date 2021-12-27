/* Mapeando os objetos da página. */

const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

/* Acessando algum objeto - Escrevendo no input nome. */
// nome.value = 'Alexandre Dantas';

/* Adicionando listener no clique do botão. */
calcular.addEventListener('click', imc);

/* Criando função que calcula o IMD. */
function imc() {
    /* Teste de Clique. */
    // alert ('Test click');

    if (nome.value !== '' && peso.value !== '' && altura.value !== '') {
        //alert('valor preenchido!');

        /* Criando variável para cálculo do resultado. Função toFixed(2) realiza o arredondamento para duas casas decimais */
        const valorImc = (peso.value / (altura.value * altura.value)).toFixed(2);

        /* Criando variável da classificação. */
        let classificacao = "";

        /* Testando valores do IMC. */
        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso.';
        }

        else if (valorImc < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }

        else if (valorImc < 30) {
            classificacao = 'levemente acima do peso.';
        }

        else if (valorImc < 35) {
            classificacao = 'com obesidade grau I.';
        }

        else if (valorImc < 40) {
            classificacao = 'com obesidade grau II.';
        }

        else {
            classificacao = 'com obesidade grau III. Cuidado!!!';
        }

        /* Escrevendo o resultado na saída. */
        //resultado.textContent = valorImc;

        /* Escrevendo o resultado com tremplateString. */
        resultado.textContent = `${nome.value}, seu IMC é de ${valorImc} e você está ${classificacao}`;
    }

    else {
        /* Escrevendo exceção caso os campos estejam vazios. */
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}