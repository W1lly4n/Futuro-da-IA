const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "De que forma a leitura pode contribuir para o desenvolvimento dos jovens?",
        alternativas: [
            {
                texto: "A leitura pode ampliar o conhecimento, desenvolver o senso crítico e melhorar a capacidade de comunicação.",
                afirmacao: "O hábito da leitura contribui para a formação dos jovens, pois estimula o pensamento crítico, amplia o conhecimento e ajuda no desenvolvimento da comunicação."
            },
            {
                texto: "A leitura contribui pouco para o desenvolvimento dos jovens, pois existem outras formas de adquirir conhecimento atualmente.",
                afirmacao: "Embora existam diversas formas de obter informações atualmente, a leitura continua sendo uma importante ferramenta para desenvolver conhecimentos e habilidades."
            }
        ]
    },
    {
        enunciado: "Qual é uma boa estratégia para uma pessoa que deseja criar o hábito da leitura?",
        alternativas: [
            {
                texto: "Começar por livros curtos e escolher temas que despertem o interesse do leitor.",
                afirmacao: "Escolher livros de acordo com os interesses pessoais e começar com leituras mais curtas pode tornar o processo mais agradável e facilitar a criação do hábito."
            },
            {
                texto: "Começar diretamente por livros longos e complexos para desenvolver rapidamente o hábito da leitura.",
                afirmacao: "Começar por obras muito extensas ou complexas pode tornar a experiência cansativa, especialmente para quem ainda não possui o hábito de ler."
            }
        ]
    },
    {
        enunciado: "Com o crescimento dos livros digitais, quais vantagens esse formato pode oferecer aos leitores?",
        alternativas: [
            {
                texto: "Os livros digitais podem ser mais acessíveis, ocupar pouco espaço e permitir que várias obras sejam armazenadas em um único dispositivo.",
                afirmacao: "A leitura digital pode facilitar o acesso aos livros, principalmente por sua praticidade, facilidade de armazenamento e, em alguns casos, preços mais acessíveis."
            },
            {
                texto: "Os livros digitais não apresentam vantagens relevantes, pois oferecem praticamente a mesma experiência dos livros físicos.",
                afirmacao: "Apesar de os livros físicos continuarem sendo muito apreciados, o formato digital apresenta vantagens próprias, como praticidade, portabilidade e facilidade de acesso."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
