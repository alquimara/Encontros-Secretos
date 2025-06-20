
export type EncontroProps = {
    id: number;
    nome: string;
    icone: string;
  };
   export type EncontrosPorCategoria = {
    [categoria: string]: EncontroProps[];
  };
export const Encontros : EncontrosPorCategoria={
  Romântico: [
    { id: 1, nome: "Jantar à luz de velas", icone: "🕯️" },
    { id: 2, nome: "Piquenique no parque", icone: "🧺" },
    // { id: 3, nome: "Passeio de mãos dadas na praia", icone: "🏖️" },
    // { id: 4, nome: "Noite de filmes românticos", icone: "🎬" },
    // { id: 5, nome: "Ver o pôr do sol juntos", icone: "🌅" },
    // { id: 6, nome: "Escrever cartas de amor", icone: "💌" },
    // { id: 7, nome: "Massagem a dois", icone: "💆‍♂️" },
    // { id: 8, nome: "Cozinhar juntos", icone: "🍝" },
    // { id: 9, nome: "Banho de banheira com pétalas", icone: "🛁" },
    // { id: 10, nome: "Dormir abraçadinhos", icone: "🛏️" },
  ],
  Picantes:[
    { id: 1, nome: "Jogo de dados sensuais", icone: "🎲" },
    { id: 2, nome: "Banho juntos com espuma", icone: "🛁" },
    // { id: 3, nome: "Desafio da lingerie", icone: "👙" },
    // { id: 4, nome: "Noite com venda nos olhos", icone: "😏" },
    // { id: 5, nome: "Brincadeira de perguntas picantes", icone: "🔥" },
    // { id: 6, nome: "Massagem com óleo quente", icone: "🕯️" },
    // { id: 7, nome: "Cama de pétalas de rosa", icone: "🌹" },
    // { id: 8, nome: "Chá de fantasias", icone: "🎭" },
    // { id: 9, nome: "Dança sensual particular", icone: "💃" },
    // { id: 10, nome: "Beijos em lugares secretos", icone: "💋" },
  ],
  Aleatórios:[
    { id: 1, nome: "Pintar juntos uma tela", icone: "🎨" },
    { id: 2, nome: "Noite de karaokê em casa", icone: "🎤" },
    // { id: 3, nome: "Fazer um bolo juntos", icone: "🎂" },
    // { id: 4, nome: "Acampamento na sala", icone: "⛺" },
    // { id: 5, nome: "Desafio do TikTok a dois", icone: "📱" },
    // { id: 6, nome: "Escrever um diário juntos", icone: "📓" },
    // { id: 7, nome: "Caminhar sem rumo pela cidade", icone: "🚶‍♀️" },
    // { id: 8, nome: "Sessão de fotos divertida", icone: "📸" },
    // { id: 9, nome: "Montar um quebra-cabeça", icone: "🧩" },
    // { id: 10, nome: "Criar playlist do casal", icone: "🎧" },
  ],
  "Ar Livre":[
    { id: 1, nome: "Trilha na natureza", icone: "🌲" },
    { id: 2, nome: "Andar de bicicleta", icone: "🚴" },
    // { id: 3, nome: "Ver estrelas", icone: "🌌" },
    // { id: 4, nome: "Brincar com balões de água", icone: "🎈" },
    // { id: 5, nome: "Passeio no zoológico", icone: "🦁" },
    // { id: 6, nome: "Visitar feira de rua", icone: "🛍️" },
    // { id: 7, nome: "Patinar juntos", icone: "⛸️" },
    // { id: 8, nome: "Ler em uma praça", icone: "📖" },
    // { id: 9, nome: "Alimentar pássaros", icone: "🐦" },
    // { id: 10, nome: "Explorar lugar novo na cidade", icone: "🗺️" },
  ],
  Criativos: [
    { id: 1, nome: "Montar álbum de recordações", icone: "📚" },
    { id: 2, nome: "Customizar camisetas", icone: "👕" },
    // { id: 3, nome: "Criar um mural de fotos", icone: "🖼️" },
    // { id: 4, nome: "Desenhar um ao outro", icone: "✏️" },
    // { id: 5, nome: "Fazer origamis", icone: "🦢" },
    // { id: 6, nome: "Montar um scrapbook", icone: "📔" },
    // { id: 7, nome: "Criar uma história juntos", icone: "📖" },
    // { id: 8, nome: "Fazer velas artesanais", icone: "🕯️" },
    // { id: 9, nome: "Criar cartões personalizados", icone: "💌" },
    // { id: 10, nome: "Pintar cerâmicas", icone: "🏺" },
  ],
  Gastronómicos: [
    { id: 1, nome: "Degustação de vinhos", icone: "🍷" },
    { id: 2, nome: "Noite de queijos e vinhos", icone: "🧀" },
    // { id: 3, nome: "Cozinhar prato internacional", icone: "🌍" },
    // { id: 4, nome: "Fazer sushi juntos", icone: "🍣" },
    // { id: 5, nome: "Criar sobremesas novas", icone: "🍨" },
    // { id: 6, nome: "Café da manhã especial na cama", icone: "☕" },
    // { id: 7, nome: "Visitar uma feira gastronômica", icone: "🛒" },
    // { id: 8, nome: "Fazer pizza artesanal", icone: "🍕" },
    // { id: 9, nome: "Jantar temático em casa", icone: "🎭" },
    // { id: 10, nome: "Criar drinks juntos", icone: "🍹" },
  ],
  Culturais: [
    { id: 1, nome: "Visitar um museu", icone: "🏛️" },
    { id: 2, nome: "Assistir a uma peça de teatro", icone: "🎭" },
    // { id: 3, nome: "Ir a um show musical", icone: "🎶" },
    // { id: 4, nome: "Participar de uma roda de leitura", icone: "📚" },
    // { id: 5, nome: "Ir a um festival local", icone: "🎉" },
    // { id: 6, nome: "Ver um filme estrangeiro", icone: "🎞️" },
    // { id: 7, nome: "Fazer tour histórico na cidade", icone: "🏙️" },
    // { id: 8, nome: "Assistir documentários", icone: "📺" },
    // { id: 9, nome: "Visitar uma galeria de arte", icone: "🖼️" },
    // { id: 10, nome: "Aprender dança típica", icone: "🕺" },
  ],
  Relaxantes: [
    { id: 1, nome: "Spa em casa", icone: "🛁" },
    { id: 2, nome: "Sessão de meditação", icone: "🧘" },
    // { id: 3, nome: "Escutar música calma juntos", icone: "🎵" },
    // { id: 4, nome: "Alongamento a dois", icone: "🧘‍♂️" },
    // { id: 5, nome: "Ver chuva pela janela", icone: "🌧️" },
    // { id: 6, nome: "Tomar chá e conversar", icone: "🍵" },
    // { id: 7, nome: "Dormir ao som de natureza", icone: "🌿" },
    // { id: 8, nome: "Sessão de skincare juntos", icone: "💆‍♀️" },
    // { id: 9, nome: "Noite sem celular", icone: "📴" },
    // { id: 10, nome: "Leitura tranquila a dois", icone: "📖" },
  ],
  Esportivos: [
    { id: 1, nome: "Jogar tênis ou beach tennis", icone: "🎾" },
    { id: 2, nome: "Corrida leve a dois", icone: "🏃" },
    // { id: 3, nome: "Aula de dança fitness", icone: "💃" },
    // { id: 4, nome: "Partida de vôlei", icone: "🏐" },
    // { id: 5, nome: "Trilha com obstáculos", icone: "⛰️" },
    // { id: 6, nome: "Fazer yoga juntos", icone: "🧘‍♂️" },
    // { id: 7, nome: "Desafio de agachamentos", icone: "🏋️" },
    // { id: 8, nome: "Andar de patins no parque", icone: "🛼" },
    // { id: 9, nome: "Ir à academia juntos", icone: "🏋️‍♀️" },
    // { id: 10, nome: "Jogar basquete ou futebol", icone: "🏀" },
  ],
  Surpresas: [
    { id: 1, nome: "Deixar bilhetes românticos", icone: "✉️" },
    { id: 2, nome: "Organizar um café da manhã surpresa", icone: "🥐" },
    // { id: 3, nome: "Fazer uma serenata", icone: "🎶" },
    // { id: 4, nome: "Montar uma caixa de memórias", icone: "📦" },
    // { id: 5, nome: "Escrever um poema inesperado", icone: "📝" },
    // { id: 6, nome: "Surpresa com flores ou presente", icone: "💐" },
    // { id: 7, nome: "Organizar um jantar surpresa", icone: "🍽️" },
    // { id: 8, nome: "Planejar uma escapada rápida", icone: "🚗" },
    // { id: 9, nome: "Encontro surpresa em um local especial", icone: "📍" },
    // { id: 10, nome: "Presentear com algo feito à mão", icone: "🎁" },
  ],
};
export const Encontros1: EncontrosPorCategoria = {
  Romântico: [
      { id: 11, nome: "Noite sob as estrelas no quintal", icone: "✨" },
      { id: 12, nome: "Trocar presentes feitos à mão", icone: "🎁" },
      // { id: 13, nome: "Ouvir músicas do relacionamento", icone: "🎼" },
      // { id: 14, nome: "Criar um mapa dos sonhos juntos", icone: "🗺️" },
      // { id: 15, nome: "Gravar um vídeo de amor", icone: "📹" },
      // { id: 16, nome: "Dormir em uma barraca juntos", icone: "⛺" },
      // { id: 17, nome: "Montar uma cápsula do tempo", icone: "🕰️" },
      // { id: 18, nome: "Listar 100 motivos para se amar", icone: "💖" },
      // { id: 19, nome: "Ver álbum de fotos antigas", icone: "📷" },
      // { id: 20, nome: "Compor uma música juntos", icone: "🎹" },
    ],
    Picantes: [
      { id: 11, nome: "Criar um código secreto a dois", icone: "🔐" },
      { id: 12, nome: "Jogo de tabuleiro sensual", icone: "🎲" },
      // { id: 13, nome: "Strip quiz", icone: "❓" },
      // { id: 14, nome: "Desenhar um ao outro sensual", icone: "🎨" },
      // { id: 15, nome: "Trocar mensagens quentes o dia todo", icone: "📱" },
      // { id: 16, nome: "Fazer um mini desfile íntimo", icone: "💃" },
      // { id: 17, nome: "Banho à luz de velas", icone: "🕯️" },
      // { id: 18, nome: "Desafio do espelho", icone: "🪞" },
      // { id: 19, nome: "Beijo em câmera lenta", icone: "😘" },
      // { id: 20, nome: "Jogo da roleta picante", icone: "🎡" },
    ],
    Aleatórios: [
      { id: 11, nome: "Fazer slime juntos", icone: "🧼" },
      { id: 12, nome: "Jogo de adivinhação com mímicas", icone: "🎭" },
      // { id: 13, nome: "Dia de ser criança", icone: "🧸" },
      // { id: 14, nome: "Cuidar de plantas juntos", icone: "🪴" },
      // { id: 15, nome: "Fazer uma coreografia", icone: "🕺" },
      // { id: 16, nome: "Montar LEGO juntos", icone: "🧱" },
      // { id: 17, nome: "Criar personagens com massinha", icone: "🫓" },
      // { id: 18, nome: "Jogar jogos de tabuleiro retrô", icone: "♟️" },
      // { id: 19, nome: "Sessão de ASMR a dois", icone: "🎧" },
      // { id: 20, nome: "Inventar uma receita maluca", icone: "🍳" },
    ],
    'Ar Livre': [
      { id: 11, nome: "Passear de pedalinho", icone: "🚣" },
      { id: 12, nome: "Caça ao tesouro romântica", icone: "🧭" },
      // { id: 13, nome: "Praticar slackline juntos", icone: "🤸" },
      // { id: 14, nome: "Passeio com animal de estimação", icone: "🐕" },
      // { id: 15, nome: "Observar nuvens", icone: "☁️" },
      // { id: 16, nome: "Explorar uma cachoeira", icone: "💦" },
      // { id: 17, nome: "Fotografar a natureza", icone: "📷" },
      // { id: 18, nome: "Levar café para o nascer do sol", icone: "☕" },
      // { id: 19, nome: "Jogar frescobol na areia", icone: "🏖️" },
      // { id: 20, nome: "Fazer ginástica funcional ao ar livre", icone: "🏋️" },
    ],
    Criativos: [
      { id: 11, nome: "Fazer colagem artística", icone: "✂️" },
      { id: 12, nome: "Gravar um podcast juntos", icone: "🎙️" },
      // { id: 13, nome: "Customizar canecas", icone: "☕" },
      // { id: 14, nome: "Construir uma maquete", icone: "🏗️" },
      // { id: 15, nome: "Escrever um roteiro de filme", icone: "📜" },
      // { id: 16, nome: "Criar uma HQ juntos", icone: "📘" },
      // { id: 17, nome: "Gravar vídeos curtos engraçados", icone: "📸" },
      // { id: 18, nome: "Desenhar olhos vendados", icone: "🙈" },
      // { id: 19, nome: "Fazer brinquedos recicláveis", icone: "♻️" },
      // { id: 20, nome: "Criar pulseiras personalizadas", icone: "📿" },
    ],
    Gastronómicos: [
      { id: 11, nome: "Montar tábua de frios", icone: "🧀" },
      { id: 12, nome: "Fazer panquecas decoradas", icone: "🥞" },
      // { id: 13, nome: "Jantar às cegas", icone: "😋" },
      // { id: 14, nome: "Degustar chocolates diferentes", icone: "🍫" },
      // { id: 15, nome: "Criar lanche personalizado", icone: "🥪" },
      // { id: 16, nome: "Concurso de quem decora melhor o prato", icone: "🥗" },
      // { id: 17, nome: "Comer só com as mãos", icone: "👐" },
      // { id: 18, nome: "Fazer pão juntos", icone: "🍞" },
      // { id: 19, nome: "Criar um prato com ingredientes aleatórios", icone: "🥘" },
      // { id: 20, nome: "Desenhar com calda de chocolate", icone: "🖌️" },
    ],
    Culturais: [
      { id: 11, nome: "Fazer quiz de cultura geral", icone: "❓" },
      { id: 12, nome: "Assistir documentário diferente", icone: "📺" },
      // { id: 13, nome: "Estudar um país novo juntos", icone: "🌍" },
      // { id: 14, nome: "Montar playlist de músicas clássicas", icone: "🎻" },
      // { id: 15, nome: "Fazer tour virtual em museu", icone: "🖼️" },
      // { id: 16, nome: "Escrever um artigo ou crônica", icone: "📝" },
      // { id: 17, nome: "Ler sobre filosofia juntos", icone: "📖" },
      // { id: 18, nome: "Aprender nova língua juntos", icone: "🈴" },
      // { id: 19, nome: "Ouvir rádio de outro país", icone: "📻" },
      // { id: 20, nome: "Fazer um clube do livro a dois", icone: "📚" },
    ],
    Relaxantes: [
      { id: 11, nome: "Colorir mandalas juntos", icone: "🌀" },
      { id: 12, nome: "Respiração guiada a dois", icone: "😮‍💨" },
      // { id: 13, nome: "Tomar banho de pés juntos", icone: "🦶" },
      // { id: 14, nome: "Usar pedras quentes relaxantes", icone: "🪨" },
      // { id: 15, nome: "Ouvir sons da natureza", icone: "🌲" },
      // { id: 16, nome: "Ler um livro de poesia", icone: "📜" },
      // { id: 17, nome: "Fazer um detox digital", icone: "📵" },
      // { id: 18, nome: "Ficar abraçados em silêncio", icone: "🤗" },
      // { id: 19, nome: "Alongamento ao ar livre", icone: "🧘‍♀️" },
      // { id: 20, nome: "Usar máscara facial juntos", icone: "😌" },
    ],
    Esportivos: [
      { id: 11, nome: "Jogar badminton", icone: "🏸" },
      { id: 12, nome: "Competição de abdominais", icone: "💪" },
      // { id: 13, nome: "Aula de defesa pessoal", icone: "🥋" },
      // { id: 14, nome: "Jogar frisbee no parque", icone: "🥏" },
      // { id: 15, nome: "Competição de corrida de saco", icone: "🦘" },
      // { id: 16, nome: "Dança aeróbica a dois", icone: "🕺" },
      // { id: 17, nome: "Pular corda juntos", icone: "🤾" },
      // { id: 18, nome: "Praticar escalada indoor", icone: "🧗" },
      // { id: 19, nome: "Aula de boxe leve", icone: "🥊" },
      // { id: 20, nome: "Futmesa ou ping pong", icone: "🏓" },
    ],
    Surpresas: [
      { id: 11, nome: "Enviar um mimo anônimo", icone: "📦" },
      { id: 12, nome: "Mudar o plano de forma inesperada", icone: "🔄" },
      // { id: 13, nome: "Levar flores no meio do dia", icone: "🌸" },
      // { id: 14, nome: "Esconder um presente pela casa", icone: "🧭" },
      // { id: 15, nome: "Fingir que são desconhecidos e se reencontrar", icone: "🎭" },
      // { id: 16, nome: "Receber com pétalas no chão", icone: "🌺" },
      // { id: 17, nome: "Mudar o ambiente com decoração surpresa", icone: "🪄" },
      // { id: 18, nome: "Gravar declaração surpresa em vídeo", icone: "📹" },
      // { id: 19, nome: "Encontro improvisado na chuva", icone: "🌧️" },
      // { id: 20, nome: "Recriar o primeiro encontro", icone: "💞" },
    ],
  };
export const Encontros2: EncontrosPorCategoria = {
  Romântico: [
      { id: 21, nome: "Escrever cartas de amor", icone: "💌" },
      { id: 22, nome: "Contar estrelas juntos", icone: "🌌" },
      // { id: 23, nome: "Relembrar a história do casal", icone: "🕰️" },
      // { id: 24, nome: "Ver o pôr do sol abraçados", icone: "🌇" },
      // { id: 25, nome: "Fazer uma serenata", icone: "🎤" },
      // { id: 26, nome: "Massagem a dois", icone: "💆" },
      // { id: 27, nome: "Ouvir a música do casal em looping", icone: "🎶" },
      // { id: 28, nome: "Caminhada de mãos dadas", icone: "👫" },
      // { id: 29, nome: "Piquenique noturno", icone: "🌙" },
      // { id: 30, nome: "Montar um quebra-cabeça com foto do casal", icone: "🧩" },
    ],
    Picantes: [
      { id: 21, nome: "Cozinhar só de avental", icone: "🍳" },
      { id: 22, nome: "Tomar banho juntos com música", icone: "🛁" },
      // { id: 23, nome: "Explorar pontos de prazer", icone: "🔥" },
      // { id: 24, nome: "Sessão de elogios provocantes", icone: "😏" },
      // { id: 25, nome: "Beijar de olhos vendados", icone: "🙈" },
      // { id: 26, nome: "Recriar cena de filme quente", icone: "🎬" },
      // { id: 27, nome: "Desafio: 1 minuto de beijo sem parar", icone: "💋" },
      // { id: 28, nome: "Dança lenta íntima", icone: "🕺" },
      // { id: 29, nome: "Rola ou beija?", icone: "🎲" },
      // { id: 30, nome: "Jantar à luz vermelha", icone: "🔴" },
    ],
    Aleatórios: [
      { id: 21, nome: "Montar playlist dos anos 2000", icone: "📻" },
      { id: 22, nome: "Fazer penteados um no outro", icone: "💇" },
      // { id: 23, nome: "Testar apps de casal", icone: "📱" },
      // { id: 24, nome: "Desafio de fotos engraçadas", icone: "🤳" },
      // { id: 25, nome: "Inventar nomes para filhos", icone: "👶" },
      // { id: 26, nome: "Ficar em silêncio por 10 minutos e depois contar o que sentiu", icone: "🤐" },
      // { id: 27, nome: "Gravar um TikTok de casal", icone: "🎥" },
      // { id: 28, nome: "Se vestir combinando", icone: "👕👗" },
      // { id: 29, nome: "Comer algo que nunca comeram", icone: "🍜" },
      // { id: 30, nome: "Jogar jogo de celular a dois", icone: "🎮" },
    ],
    'Ar Livre': [
      { id: 21, nome: "Andar de bicicleta em dupla", icone: "🚲" },
      { id: 22, nome: "Subir uma trilha leve", icone: "🥾" },
      // { id: 23, nome: "Ver o nascer do sol em um mirante", icone: "🌄" },
      // { id: 24, nome: "Brincar de pipa", icone: "🪁" },
      // { id: 25, nome: "Brincar de roda no parque", icone: "🔄" },
      // { id: 26, nome: "Ir a uma feira livre", icone: "🧺" },
      // { id: 27, nome: "Ver peixinhos em um lago", icone: "🐟" },
      // { id: 28, nome: "Desenhar na areia", icone: "✍️" },
      // { id: 29, nome: "Caçar conchas na praia", icone: "🐚" },
      // { id: 30, nome: "Passear à noite sem destino", icone: "🚶‍♂️🌃" },
    ],
    Criativos: [
      { id: 21, nome: "Criar um mural de fotos", icone: "🖼️" },
      { id: 22, nome: "Montar um scrapbook do relacionamento", icone: "📓" },
      // { id: 23, nome: "Desenhar seus sonhos", icone: "🌠" },
      // { id: 24, nome: "Gravar uma dublagem engraçada", icone: "🎙️" },
      // { id: 25, nome: "Inventar uma coreografia boba", icone: "💃" },
      // { id: 26, nome: "Fazer um stop motion com objetos da casa", icone: "🎞️" },
      // { id: 27, nome: "Pintar camisetas", icone: "👕" },
      // { id: 28, nome: "Construir castelo de papel", icone: "🏰" },
      // { id: 29, nome: "Fazer emojis com massinha", icone: "😀" },
      // { id: 30, nome: "Criar um jogo de tabuleiro do casal", icone: "🎲" },
    ],
    Gastronómicos: [
      { id: 11, nome: "Montar tábua de frios", icone: "🧀" },
      { id: 12, nome: "Fazer panquecas decoradas", icone: "🥞" },
      // { id: 13, nome: "Jantar às cegas", icone: "😋" },
      // { id: 14, nome: "Degustar chocolates diferentes", icone: "🍫" },
      // { id: 15, nome: "Criar lanche personalizado", icone: "🥪" },
      // { id: 16, nome: "Concurso de quem decora melhor o prato", icone: "🥗" },
      // { id: 17, nome: "Comer só com as mãos", icone: "👐" },
      // { id: 18, nome: "Fazer pão juntos", icone: "🍞" },
      // { id: 19, nome: "Criar um prato com ingredientes aleatórios", icone: "🥘" },
      // { id: 20, nome: "Desenhar com calda de chocolate", icone: "🖌️" },
    ],
    Culturais: [
      { id: 11, nome: "Fazer quiz de cultura geral", icone: "❓" },
      { id: 12, nome: "Assistir documentário diferente", icone: "📺" },
      // { id: 13, nome: "Estudar um país novo juntos", icone: "🌍" },
      // { id: 14, nome: "Montar playlist de músicas clássicas", icone: "🎻" },
      // { id: 15, nome: "Fazer tour virtual em museu", icone: "🖼️" },
      // { id: 16, nome: "Escrever um artigo ou crônica", icone: "📝" },
      // { id: 17, nome: "Ler sobre filosofia juntos", icone: "📖" },
      // { id: 18, nome: "Aprender nova língua juntos", icone: "🈴" },
      // { id: 19, nome: "Ouvir rádio de outro país", icone: "📻" },
      // { id: 20, nome: "Fazer um clube do livro a dois", icone: "📚" },
    ],
    Relaxantes: [
      { id: 11, nome: "Colorir mandalas juntos", icone: "🌀" },
      { id: 12, nome: "Respiração guiada a dois", icone: "😮‍💨" },
      // { id: 13, nome: "Tomar banho de pés juntos", icone: "🦶" },
      // { id: 14, nome: "Usar pedras quentes relaxantes", icone: "🪨" },
      // { id: 15, nome: "Ouvir sons da natureza", icone: "🌲" },
      // { id: 16, nome: "Ler um livro de poesia", icone: "📜" },
      // { id: 17, nome: "Fazer um detox digital", icone: "📵" },
      // { id: 18, nome: "Ficar abraçados em silêncio", icone: "🤗" },
      // { id: 19, nome: "Alongamento ao ar livre", icone: "🧘‍♀️" },
      // { id: 20, nome: "Usar máscara facial juntos", icone: "😌" },
    ],
    Esportivos: [
      { id: 11, nome: "Jogar badminton", icone: "🏸" },
      { id: 12, nome: "Competição de abdominais", icone: "💪" },
      // { id: 13, nome: "Aula de defesa pessoal", icone: "🥋" },
      // { id: 14, nome: "Jogar frisbee no parque", icone: "🥏" },
      // { id: 15, nome: "Competição de corrida de saco", icone: "🦘" },
      // { id: 16, nome: "Dança aeróbica a dois", icone: "🕺" },
      // { id: 17, nome: "Pular corda juntos", icone: "🤾" },
      // { id: 18, nome: "Praticar escalada indoor", icone: "🧗" },
      // { id: 19, nome: "Aula de boxe leve", icone: "🥊" },
      // { id: 20, nome: "Futmesa ou ping pong", icone: "🏓" },
    ],
    Surpresas: [
      { id: 11, nome: "Enviar um mimo anônimo", icone: "📦" },
      { id: 12, nome: "Mudar o plano de forma inesperada", icone: "🔄" },
      // { id: 13, nome: "Levar flores no meio do dia", icone: "🌸" },
      // { id: 14, nome: "Esconder um presente pela casa", icone: "🧭" },
      // { id: 15, nome: "Fingir que são desconhecidos e se reencontrar", icone: "🎭" },
      // { id: 16, nome: "Receber com pétalas no chão", icone: "🌺" },
      // { id: 17, nome: "Mudar o ambiente com decoração surpresa", icone: "🪄" },
      // { id: 18, nome: "Gravar declaração surpresa em vídeo", icone: "📹" },
      // { id: 19, nome: "Encontro improvisado na chuva", icone: "🌧️" },
      // { id: 20, nome: "Recriar o primeiro encontro", icone: "💞" },
    ]
  };
  
