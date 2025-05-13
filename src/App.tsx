import { useCallback, useState } from "react";
import { Button } from "./components/ui/button"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import './global.css'

type Encontro = {
  id: number;
  nome: string;
  icone: string;
};
type EncontrosPorCategoria = {
  [categoria: string]: Encontro[];
};
const encontros: EncontrosPorCategoria = {
  romanticos: [
    { id: 1, nome: "Jantar à luz de velas", icone: "🕯️" },
    { id: 2, nome: "Piquenique no parque", icone: "🧺" },
    { id: 3, nome: "Passeio de mãos dadas na praia", icone: "🏖️" },
    { id: 4, nome: "Noite de filmes românticos", icone: "🎬" },
    { id: 5, nome: "Ver o pôr do sol juntos", icone: "🌅" },
    { id: 6, nome: "Escrever cartas de amor", icone: "💌" },
    { id: 7, nome: "Massagem a dois", icone: "💆‍♂️" },
    { id: 8, nome: "Cozinhar juntos", icone: "🍝" },
    { id: 9, nome: "Banho de banheira com pétalas", icone: "🛁" },
    { id: 10, nome: "Dormir abraçadinhos", icone: "🛏️" },
  ],
  picantes: [
    { id: 1, nome: "Jogo de dados sensuais", icone: "🎲" },
    { id: 2, nome: "Banho juntos com espuma", icone: "🛁" },
    { id: 3, nome: "Desafio da lingerie", icone: "👙" },
    { id: 4, nome: "Noite com venda nos olhos", icone: "😏" },
    { id: 5, nome: "Brincadeira de perguntas picantes", icone: "🔥" },
    { id: 6, nome: "Massagem com óleo quente", icone: "🕯️" },
    { id: 7, nome: "Cama de pétalas de rosa", icone: "🌹" },
    { id: 8, nome: "Chá de fantasias", icone: "🎭" },
    { id: 9, nome: "Dança sensual particular", icone: "💃" },
    { id: 10, nome: "Beijos em lugares secretos", icone: "💋" },
  ],
  aleatorias: [
    { id: 1, nome: "Pintar juntos uma tela", icone: "🎨" },
    { id: 2, nome: "Noite de karaokê em casa", icone: "🎤" },
    { id: 3, nome: "Fazer um bolo juntos", icone: "🎂" },
    { id: 4, nome: "Acampamento na sala", icone: "⛺" },
    { id: 5, nome: "Desafio do TikTok a dois", icone: "📱" },
    { id: 6, nome: "Escrever um diário juntos", icone: "📓" },
    { id: 7, nome: "Caminhar sem rumo pela cidade", icone: "🚶‍♀️" },
    { id: 8, nome: "Sessão de fotos divertida", icone: "📸" },
    { id: 9, nome: "Montar um quebra-cabeça", icone: "🧩" },
    { id: 10, nome: "Criar playlist do casal", icone: "🎧" },
  ],
  aoArLivre: [
    { id: 1, nome: "Trilha na natureza", icone: "🌲" },
    { id: 2, nome: "Andar de bicicleta", icone: "🚴" },
    { id: 3, nome: "Ver estrelas", icone: "🌌" },
    { id: 4, nome: "Brincar com balões de água", icone: "🎈" },
    { id: 5, nome: "Passeio no zoológico", icone: "🦁" },
    { id: 6, nome: "Visitar feira de rua", icone: "🛍️" },
    { id: 7, nome: "Patinar juntos", icone: "⛸️" },
    { id: 8, nome: "Ler em uma praça", icone: "📖" },
    { id: 9, nome: "Alimentar pássaros", icone: "🐦" },
    { id: 10, nome: "Explorar lugar novo na cidade", icone: "🗺️" },
  ],
  criativos: [
    { id: 1, nome: "Montar álbum de recordações", icone: "📚" },
    { id: 2, nome: "Customizar camisetas", icone: "👕" },
    { id: 3, nome: "Criar um mural de fotos", icone: "🖼️" },
    { id: 4, nome: "Desenhar um ao outro", icone: "✏️" },
    { id: 5, nome: "Fazer origamis", icone: "🦢" },
    { id: 6, nome: "Montar um scrapbook", icone: "📔" },
    { id: 7, nome: "Criar uma história juntos", icone: "📖" },
    { id: 8, nome: "Fazer velas artesanais", icone: "🕯️" },
    { id: 9, nome: "Criar cartões personalizados", icone: "💌" },
    { id: 10, nome: "Pintar cerâmicas", icone: "🏺" },
  ],
  gastronomicos: [
    { id: 1, nome: "Degustação de vinhos", icone: "🍷" },
    { id: 2, nome: "Noite de queijos e vinhos", icone: "🧀" },
    { id: 3, nome: "Cozinhar prato internacional", icone: "🌍" },
    { id: 4, nome: "Fazer sushi juntos", icone: "🍣" },
    { id: 5, nome: "Criar sobremesas novas", icone: "🍨" },
    { id: 6, nome: "Café da manhã especial na cama", icone: "☕" },
    { id: 7, nome: "Visitar uma feira gastronômica", icone: "🛒" },
    { id: 8, nome: "Fazer pizza artesanal", icone: "🍕" },
    { id: 9, nome: "Jantar temático em casa", icone: "🎭" },
    { id: 10, nome: "Criar drinks juntos", icone: "🍹" },
  ],
  culturais: [
    { id: 1, nome: "Visitar um museu", icone: "🏛️" },
    { id: 2, nome: "Assistir a uma peça de teatro", icone: "🎭" },
    { id: 3, nome: "Ir a um show musical", icone: "🎶" },
    { id: 4, nome: "Participar de uma roda de leitura", icone: "📚" },
    { id: 5, nome: "Ir a um festival local", icone: "🎉" },
    { id: 6, nome: "Ver um filme estrangeiro", icone: "🎞️" },
    { id: 7, nome: "Fazer tour histórico na cidade", icone: "🏙️" },
    { id: 8, nome: "Assistir documentários", icone: "📺" },
    { id: 9, nome: "Visitar uma galeria de arte", icone: "🖼️" },
    { id: 10, nome: "Aprender dança típica", icone: "🕺" },
  ],
  relaxantes: [
    { id: 1, nome: "Spa em casa", icone: "🛁" },
    { id: 2, nome: "Sessão de meditação", icone: "🧘" },
    { id: 3, nome: "Escutar música calma juntos", icone: "🎵" },
    { id: 4, nome: "Alongamento a dois", icone: "🧘‍♂️" },
    { id: 5, nome: "Ver chuva pela janela", icone: "🌧️" },
    { id: 6, nome: "Tomar chá e conversar", icone: "🍵" },
    { id: 7, nome: "Dormir ao som de natureza", icone: "🌿" },
    { id: 8, nome: "Sessão de skincare juntos", icone: "💆‍♀️" },
    { id: 9, nome: "Noite sem celular", icone: "📴" },
    { id: 10, nome: "Leitura tranquila a dois", icone: "📖" },
  ],
  esportivos: [
    { id: 1, nome: "Jogar tênis ou beach tennis", icone: "🎾" },
    { id: 2, nome: "Corrida leve a dois", icone: "🏃" },
    { id: 3, nome: "Aula de dança fitness", icone: "💃" },
    { id: 4, nome: "Partida de vôlei", icone: "🏐" },
    { id: 5, nome: "Trilha com obstáculos", icone: "⛰️" },
    { id: 6, nome: "Fazer yoga juntos", icone: "🧘‍♂️" },
    { id: 7, nome: "Desafio de agachamentos", icone: "🏋️" },
    { id: 8, nome: "Andar de patins no parque", icone: "🛼" },
    { id: 9, nome: "Ir à academia juntos", icone: "🏋️‍♀️" },
    { id: 10, nome: "Jogar basquete ou futebol", icone: "🏀" },
  ],
  surpresas: [
    { id: 1, nome: "Deixar bilhetes românticos", icone: "✉️" },
    { id: 2, nome: "Organizar um café da manhã surpresa", icone: "🥐" },
    { id: 3, nome: "Fazer uma serenata", icone: "🎶" },
    { id: 4, nome: "Montar uma caixa de memórias", icone: "📦" },
    { id: 5, nome: "Escrever um poema inesperado", icone: "📝" },
    { id: 6, nome: "Surpresa com flores ou presente", icone: "💐" },
    { id: 7, nome: "Organizar um jantar surpresa", icone: "🍽️" },
    { id: 8, nome: "Planejar uma escapada rápida", icone: "🚗" },
    { id: 9, nome: "Encontro surpresa em um local especial", icone: "📍" },
    { id: 10, nome: "Presentear com algo feito à mão", icone: "🎁" },
  ],
};

const categorias = Object.keys(encontros);



function App() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  // const [cardRevelados, setCardRevelados] = useState<{ [key: string]: boolean }>({});
  // const [cardRealizados, setCardRealizados] = useState<{ [key: string]: boolean }>({});
  const [cardRevelados, setCardRevelados] = useState<{ [key: string]: boolean }>(() => {
    const stored = localStorage.getItem("cardsRevelados");
    return stored ? JSON.parse(stored) : {};
  });

  const [cardRealizados, setCardRealizados] = useState<{ [key: string]: boolean }>(() => {
    const stored = localStorage.getItem("cardsRealizados");
    return stored ? JSON.parse(stored) : {};
  });

  const revelarCard = useCallback((categoria: string, id: number) => {
    const key = `${categoria}-${id}`;
    setCardRevelados((prev) => {
      if (prev[key]) return prev;
      const updated = { ...prev, [key]: true };
      localStorage.setItem("cardsRevelados", JSON.stringify(updated));
      return updated;
    });
  }, []);
  const toggleRealizado = useCallback((categoria: string, id: number) => {
    const key = `${categoria}-${id}`;
    setCardRealizados((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem("cardsRealizados", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const getQtdRealizados = (categoria: string) => {
    return encontros[categoria].filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  };




  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-pink-700">
        💘 Encontros Secretos
      </h1>

      {!categoriaSelecionada ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categorias.map((categoria) => {
            const total = encontros[categoria].length;
            const feitos = getQtdRealizados(categoria);
            return (
              <Card
                key={categoria}
                className="cursor-pointer hover:shadow-xl hover:bg-pink-50 transition border-pink-300"
                onClick={() => {
                  setCategoriaSelecionada(categoria);
                }}
              >
                <CardContent className="p-6 text-center font-semibold text-lg capitalize text-pink-800">
                  <div>{categoria.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="text-sm text-pink-500 mt-1">{feitos}/{total} feitos</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <>
          <Button
            className="mb-6 text-sm text-pink-600 hover:text-pink-800 mt-2 cursor-pointer"
            variant="outline"
            onClick={() => setCategoriaSelecionada(null)}
          >
            ← Voltar às Categorias
          </Button>

          <h2 className="text-3xl font-bold text-center mb-8 capitalize text-pink-700">
            {categoriaSelecionada.replace(/([A-Z])/g, ' $1')}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {encontros[categoriaSelecionada].map((encontro, index) => {
              const key = `${categoriaSelecionada}-${encontro.id}`;
              const isFeito = cardRealizados[key];
              return (
                <motion.div
                  key={index}
                  className="relative perspective cursor-pointer"
                  onClick={() => revelarCard(categoriaSelecionada, encontro.id)}
                >
                  <div className="relative w-full h-46" style={{ transformStyle: 'preserve-3d' }}>
                    <motion.div
                      initial={false}
                      animate={{ rotateY: cardRevelados[key] ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="absolute w-full h-full"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div
                        className="absolute w-full h-full flex items-center justify-center rounded-xl bg-pink-200 border text-4xl font-bold shadow-inner"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        ?
                      </div>

                      <div
                        className={`absolute w-full h-full flex flex-col items-center justify-center bg-white rounded-xl border p-2 text-center shadow-lg }`}
                        style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
                      >

                        {cardRevelados[key] && (

                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                          >
                            <div className={isFeito ? 'opacity-50' : ''}>
                              <div className="text-4xl mb-2">{encontro.icone}</div>
                              <div className="text-base font-semibold mb-2 min-h-[48px]">{encontro.nome}</div>
                            </div>


                            <Button
                              className="mt-2 cursor-pointer"
                              size="sm"
                              variant={isFeito ? 'link' : 'default'}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleRealizado(categoriaSelecionada, encontro.id);
                              }}
                            >
                              {isFeito ? 'Desfazer' : 'Marcar como feito'}
                            </Button>

                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </div>

  )
}

export default App
