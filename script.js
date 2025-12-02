[
  {
    "enunciado": "Após uma longa temporada de batalhas, você e seu clã finalmente subiram para uma nova liga. Para comemorar, o líder do clã decide organizar um debate sobre as melhores estratégias para se manter na nova liga. A principal questão levantada é: como as cartas lendárias afetam o jogo? Nesse debate, qual a sua posição?",
    "alternativas": [
      {
        "texto": "Defende que as cartas lendárias, apesar de raras, criam um novo meta e desafiam os jogadores a criarem novas estratégias e combos.",
        "afirmacao": "Vem impulsionando a inovação de decks e pode abrir novos caminhos estratégicos, mesmo com as cartas mais raras."
      },
      {
        "texto": "Se preocupa com o desequilíbrio do jogo, pois as cartas lendárias podem ser muito poderosas para iniciantes e free-to-play, e defende a importância de um balanceamento justo.",
        "afirmacao": "Sua preocupação com o equilíbrio do jogo motivou a criar um grupo de estudos entre os membros do clã para discutir nerfs e buffs de cartas."
      }
    ]
  },
  {
    "enunciado": "Ao final da discussão, você precisou criar um banner no computador para o clã que representasse o espírito de equipe. E agora?",
    "alternativas": [
      {
        "texto": "Criar um banner utilizando uma plataforma de design como o Canva.",
        "afirmacao": "Notou também que muitos jogadores não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
      },
      {
        "texto": "Criar um banner utilizando um gerador de imagem de IA.",
        "afirmacao": "Acelera o processo de criação de artes para o clã utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar a tecnologia."
      }
    ]
  },
  {
    "enunciado": "Você tem uma guerra de clãs para entregar na semana seguinte, o andamento das batalhas está um pouco atrasado e uma pessoa do seu clã decidiu usar um deck copiado da internet, o problema é que ele está totalmente igual ao do youtuber. O que você faz?",
    "alternativas": [
      {
        "texto": "Acredita que copiar decks famosos é uma forma de contribuir com as vitórias, por isso não é um problema utilizar o deck inteiro.",
        "afirmacao": "Infelizmente, passou a copiar todos os decks do meta e agora se sente dependente de vídeos de youtubers para vencer as partidas."
      },
      {
        "texto": "Considera que copiar decks pode ser uma estratégia, mas é preciso manter a atenção pois o meta muda, por isso revisar o deck e contribuir com as cartas que funcionam melhor para você é essencial.",
        "afirmacao": "Percebeu que nem todo deck famoso funciona para seu estilo de jogo e por isso sabe que os decks devem servir como base e não como resultado final."
      }
    ]
  }
]
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que você entra no Clash Royale, se depara com um novo modo de jogo, onde você pode usar cartas que ainda não foram lançadas. Qual o seu primeiro pensamento?",
    alternativas: [
      {
        "texto": "Isso é assustador! Essas novas cartas vão mudar todo o meta de forma brusca.",
        "afirmacao": "No início, ficou com medo do que as novas cartas podem fazer com o jogo."
      },
      {
        "texto": "Isso é maravilhoso! Mal posso esperar para testar novas estratégias.",
        "afirmacao": "Quis saber como usar as novas cartas para subir de troféus."
      }
    ]
  },
  {
    enunciado: "Com a descoberta deste novo modo de jogo, o líder do seu clã decide fazer uma sequência de treinos para todos os membros. No fim do treino ele pede que você escreva um relatório sobre o uso das novas cartas. Qual atitude você toma?",
    alternativas: [
      {
        "texto": "Utiliza um software para simular batalhas e analisar os dados de vitória e derrota, para assim encontrar a melhor estratégia e escrever o relatório.",
        "afirmacao": "Conseguiu utilizar a tecnologia para analisar dados e criar estratégias de forma eficiente."
      },
      {
        "texto": "Escreve o relatório com base nas conversas que teve com os colegas do clã, nas batalhas que jogou e nos seus próprios conhecimentos sobre o jogo.",
        "afirmacao": "Sentiu mais facilidade em utilizar seus próprios recursos para escrever o relatório."
      }
    ]
  },
  {
    "enunciado": "Você tem uma guerra de clãs para entregar na semana seguinte, o andamento das batalhas está um pouco atrasado e uma pessoa do seu clã decidiu usar um deck copiado da internet, o problema é que ele está totalmente igual ao do youtuber. O que você faz?",
    "alternativas": [
      {
        "texto": "Acredita que copiar decks famosos é uma forma de contribuir com as vitórias, por isso não é um problema utilizar o deck inteiro.",
        "afirmacao": "Infelizmente, passou a copiar todos os decks do meta e agora se sente dependente de vídeos de youtubers para vencer as partidas."
      },
      {
        "texto": "Considera que copiar decks pode ser uma estratégia, mas é preciso manter a atenção pois o meta muda, por isso revisar o deck e contribuir com as cartas que funcionam melhor para você é essencial.",
        "afirmacao": "Percebeu que nem todo deck famoso funciona para seu estilo de jogo e por isso sabe que os decks devem servir como base e não como resultado final."
      }
    ]
  }
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

function mostraAlternativas() {
  perguntaAtual.alternativas.forEach((alternativa) => {
    let botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.addEventListener("click", () => {
      historiaFinal += alternativa.afirmacao;
      atual++;
      mostraPergunta();
    });
    caixaAlternativas.appendChild(botao);
  });
}

function mostraResultado() {
  caixaResultado.innerHTML = "<p>História final: </p>" + historiaFinal;
  caixaResultado.classList.add("texto-resultado");
}

mostraPergunta();
