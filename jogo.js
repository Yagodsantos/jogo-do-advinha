
const perguntas = [...]; // array de objetos
let pontuacao = 0;
let perguntaAtual = 0;

function fazerPergunta() {
    // mostra pergunta[perguntaAtual]
    if (resposta === pergunta.correta) {
        pontuacao += 10; // acumula pontos
    }
}