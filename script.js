/* Mapeando os objetos da página. */

const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

/* Acessando algum objeto - Escrevendo no input nome */
//nome.value = 'Alexandre Dantas';

/*Adicionando listener no clique do botão */
calcular.addEventListener('click', imc);

function imc {
    alert ('Test click');
}