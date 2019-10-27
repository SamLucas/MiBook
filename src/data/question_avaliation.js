const Nutricional = [
  {
    id: 1,
    title: 'A alimentação do rebanho é fornecida:',
    answers: [
      {
        id: 0,
        correct: false,
        title: 'À vontade',
      },
      {
        id: 1,
        correct: false,
        title: '1 vez ao dia',
      },
      {
        id: 2,
        correct: false,
        title: '2 vezes ao dia',
      },
      {
        id: 3,
        correct: false,
        title: '3 vezes ao dia',
      },
    ],
  },
  {
    id: 2,
    title: 'A quantidade de alimento fornecida é:',
    answers: [
      {
        id: 0,
        correct: false,
        title: 'Suficiente com muitas sobras;',
      },
      {
        id: 1,
        correct: false,
        title: 'Suficiente com poucas sobras;',
      },
      {
        id: 2,
        correct: false,
        title: 'Não há sobras, animais satisfeitos',
      },
      {
        id: 3,
        correct: false,
        title: 'Regrada, animais não ficam saciados',
      },
    ],
  },
  {
    id: 3,
    title: 'A área disponível para a alimentação permite:',
    answers: [
      {
        id: 0,
        correct: false,
        title: 'O acesso de todos os animais simultaneamente;',
      },
      {
        id: 1,
        correct: false,
        title: 'O acesso a um número pequeno de animais;',
      },
      {
        id: 2,
        correct: false,
        title: 'O acesso individual dos animais;',
      },
    ],
  },
  {
    id: 4,
    title: 'A alimentação do rebanho é formulada:',
    answers: [
      {
        id: 0,
        correct: false,
        title: 'De acordo com a necessidade de cada lote;',
      },
      {
        id: 1,
        correct: false,
        title: 'Uma mesma formulação para todo o rebanho;',
      },
      {
        id: 2,
        correct: false,
        title: 'De acordo com a necessidade de cada animal;',
      },
    ],
  },
];

const Conforto = [
  {
    id: 1,
    title: 'Os seus animais se encontram: ',
    answers: [
      {id: 1, correct: false, title: 'A pasto'},
      {id: 1, correct: false, title: 'Confinados'},
      {id: 1, correct: false, title: 'Sistema semi-intensivo '},
    ],
  },
  {
    id: 1,
    title: 'A disponibilidade de sombreamento do rebanho é: ',
    answers: [
      {id: 1, correct: false, title: 'Artificial (galpões, sombrites)'},
      {id: 1, correct: false, title: 'Natural (árvores)'},
      {id: 1, correct: false, title: 'Ausente'},
    ],
  },
  {
    id: 1,
    title: 'Como seus animais respondem ao clima da região:',
    answers: [
      {id: 1, correct: false, title: 'São bem adaptados; '},
      {
        id: 1,
        correct: false,
        title:
          'São pouco adaptados, sofrem um pouco com temperaturas mais elevadas',
      },
      {
        id: 1,
        correct: false,
        title:
          'Não são adaptados, sofrem muito com pequenas alterações de temperatura;',
      },
    ],
  },
];

const Sanidade = [
  {
    id: 1,
    title: 'O manejo dos cascos dos animais é realizado:',
    answers: [
      {id: 1, correct: false, title: 'Periodicamente (a cada 3 meses); '},
      {id: 1, correct: false, title: 'Raramente (2 ou menos vezes por ano);'},
      {id: 1, correct: false, title: 'Apenas quando ocorre alguma afecção;'},
      {id: 1, correct: false, title: 'Não realiza;'},
    ],
  },
  {
    id: 1,
    title: 'Aplicação e utilização de pé-de-lúvio:',
    answers: [
      {id: 1, correct: false, title: 'A cada 15 dias;'},
      {id: 1, correct: false, title: 'Associado ao manejo dos cascos;'},
      {id: 1, correct: false, title: 'Apenas quando ocorre alguma afecção'},
      {id: 1, correct: false, title: 'Não realiza;'},
    ],
  },
  {
    id: 1,
    title: 'O manejo de ectoparasitas e endoparasitas é realizado:',
    answers: [
      {
        id: 1,
        correct: false,
        title:
          'Sempre que necessário, após realização de exames que comprovem a',
      },
      {id: 1, correct: false, title: 'necessidade;'},
      {id: 1, correct: false, title: 'A cada 3 meses'},
      {id: 1, correct: false, title: 'Raramente;'},
      {id: 1, correct: false, title: 'Não realiza;'},
    ],
  },
];

module.exports = {Sanidade, Conforto, Nutricional};
