const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Banco de perguntas
const perguntas = [
    {
        enunciado: "Qual é a linguagem usada para este jogo?",
        alternativas: ["Python", "JavaScript", "C++", "PHP"],
        correta: "B"
    },
    {
        enunciado: "Qual comando usamos para executar um arquivo JavaScript no Node.js?",
        alternativas: ["run", "start", "node", "execute"],
        correta: "C"
    },
    {
        enunciado: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        alternativas: ["var", "let", "const", "Todas as anteriores"],
        correta: "D"
    },
    {
        enunciado: "O que significa DOM em JavaScript?",
        alternativas: ["Document Object Model", "Data Object Management", "Digital Ordinance Module", "Document Oriented Memory"],
        correta: "A"
    },
    {
        enunciado: "Qual método adiciona um elemento no final de um array?",
        alternativas: ["push()", "pop()", "shift()", "unshift()"],
        correta: "A"
    },
    {
        enunciado: "Qual operador é usado para comparação ESTRITA de valor e tipo?",
        alternativas: ["==", "===", "=", "!="],
        correta: "B"
    },
    {
        enunciado: "Como se escreve um comentário de uma linha em JavaScript?",
        alternativas: ["// comentário", "<!-- comentário -->", "/* comentário */", "# comentário"],
        correta: "A"
    }
];

let pontuacao = 0;
let perguntaAtual = 0;

// Tela inicial
console.log("==============================");
console.log("    SHOW DO JAVÃO");
console.log("  O Desafio dos Mil Bytes");
console.log("==============================\n");

console.log("Bem-vindo ao Show do Javão!");
console.log("Você está prestes a enfrentar");
console.log("o desafio dos Mil Bytes!\n");

function iniciarJogo() {
    rl.question("Deseja iniciar o jogo? (S/N): ", (resposta) => {
        if (resposta.toUpperCase() === 'S') {
            console.log("\nÓtimo! Vamos começar!\n");
            perguntaAtual = 0;
            pontuacao = 0;
            fazerPergunta();
        } else if (resposta.toUpperCase() === 'N') {
            console.log("Até a próxima!");
            rl.close();
        } else {
            console.log("Resposta inválida. Digite S ou N.");
            iniciarJogo();
        }
    });
}

function fazerPergunta() {
    if (perguntaAtual >= perguntas.length) {
        finalizarJogo(true);
        return;
    }

    const pergunta = perguntas[perguntaAtual];
    
    console.log(`\nPergunta ${perguntaAtual + 1} de ${perguntas.length}:`);
    console.log(pergunta.enunciado);
    console.log(`A) ${pergunta.alternativas[0]}`);
    console.log(`B) ${pergunta.alternativas[1]}`);
    console.log(`C) ${pergunta.alternativas[2]}`);
    console.log(`D) ${pergunta.alternativas[3]}`);
    
    rl.question("\nSua resposta: ", (resposta) => {
        const respostaUpper = resposta.toUpperCase();
        
        if (!['A', 'B', 'C', 'D'].includes(respostaUpper)) {
            console.log("Resposta inválida! Digite A, B, C ou D.");
            fazerPergunta();
            return;
        }
        
        if (respostaUpper === pergunta.correta) {
            pontuacao += 10;
            console.log(`\n✅ Correto! +10 pontos!`);
            perguntaAtual++;
            fazerPergunta();
        } else {
            const indexCorreta = pergunta.correta.charCodeAt(0) - 65;
            const alternativaCorreta = pergunta.alternativas[indexCorreta];
            console.log(`\n❌ Errado! A resposta correta era: ${pergunta.correta}) ${alternativaCorreta}`);
            finalizarJogo(false);
        }
    });
}

function finalizarJogo(completou) {
    console.log("\n==============================");
    console.log("         FIM DE JOGO!");
    console.log("==============================\n");
    
    console.log(`Total de perguntas: ${perguntaAtual}`);
    console.log(`Pontuação final: ${pontuacao} pontos\n`);
    
    // Mensagem personalizada
    if (pontuacao === perguntas.length * 10) {
        console.log("🌟 PARABÉNS! Você acertou todas!");
        console.log("Você é um verdadeiro Mestre dos Bytes!");
    } else if (pontuacao >= (perguntas.length * 10) / 2) {
        console.log("👍 Bom trabalho! Continue praticando!");
    } else if (pontuacao > 0) {
        console.log("👨‍💻 Você pode melhorar! Estude mais JavaScript!");
    } else {
        console.log("😢 Que pena! Tente novamente!");
    }
    
    console.log("\n==============================\n");
    
    rl.question("Deseja jogar novamente? (S/N): ", (resposta) => {
        if (resposta.toUpperCase() === 'S') {
            console.log("\n==============================");
            console.log("    SHOW DO JAVÃO");
            console.log("  O Desafio dos Mil Bytes");
            console.log("==============================\n");
            perguntaAtual = 0;
            pontuacao = 0;
            fazerPergunta();
        } else {
            console.log("\nObrigado por jogar! Até a próxima!");
            rl.close();
        }
    });
}


iniciarJogo();