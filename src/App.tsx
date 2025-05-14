
import './global.css'
import { HeaderEncontro } from "./components/Header";
import { CategoriaCard } from "./components/CategoriaCard";
import { ButtonVoltar } from "./components/ButtonVoltar";
import { EncontroCard } from "./components/EncontroCard";
import { Encontros } from "./data/Encontros";
import { useEncontros } from "./hook/useEncontro";

const categorias = Object.keys(Encontros);

function App() {
  const {
    categoriaSelecionada,
    setCategoriaSelecionada,
    cardRevelados,
    cardRealizados,
    revelarCard,
    toggleRealizado,
    getQtdRealizados,
  } = useEncontros(Encontros);


  // const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  // const [cardRevelados, setCardRevelados] = useState<{ [key: string]: boolean }>(() => {
  //   const stored = localStorage.getItem("cardsRevelados");
  //   return stored ? JSON.parse(stored) : {};
  // });
  // const [cardRealizados, setCardRealizados] = useState<{ [key: string]: boolean }>(() => {
  //   const stored = localStorage.getItem("cardsRealizados");
  //   return stored ? JSON.parse(stored) : {};
  // });
  // const revelarCard = useCallback((categoria: string, id: number) => {
  //   const key = `${categoria}-${id}`;
  //   setCardRevelados((prev) => {
  //     if (prev[key]) return prev;
  //     const updated = { ...prev, [key]: true };
  //     localStorage.setItem("cardsRevelados", JSON.stringify(updated));
  //     return updated;
  //   });
  // }, []);
  // const toggleRealizado = useCallback((categoria: string, id: number) => {
  //   const key = `${categoria}-${id}`;
  //   setCardRealizados((prev) => {
  //     const updated = { ...prev, [key]: !prev[key] };
  //     localStorage.setItem("cardsRealizados", JSON.stringify(updated));
  //     return updated;
  //   });
  // }, []);

  // const getQtdRealizados = (categoria: string) => {
  //   return Encontros[categoria].filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  // };
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <HeaderEncontro title="💘 Encontros Secretos" />
      {!categoriaSelecionada ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categorias.map((categoria) => {
            const total = Encontros[categoria].length;
            const feitos = getQtdRealizados(categoria);
            return (
              <CategoriaCard
                key={categoria}
                nome={categoria}
                total={total}
                feitos={feitos}
                onClick={() => {
                  setCategoriaSelecionada(categoria);
                }} />
            );
          })}
        </div>
      ) : (
        <>
          <ButtonVoltar onClick={() => setCategoriaSelecionada(null)} />

          <h2 className="text-3xl font-bold text-center mb-8 capitalize text-pink-700">
            {categoriaSelecionada.replace(/([A-Z])/g, ' $1')}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {Encontros[categoriaSelecionada]?.map((encontro, index) => {
              const key = `${categoriaSelecionada}-${encontro.id}`;
              const isFeito = cardRealizados[key];
              return (

                <EncontroCard
                  key={index}
                  encontro={encontro}
                  revelado={cardRevelados[key]}
                  realizado={isFeito}
                  onRevelar={() => revelarCard(categoriaSelecionada, encontro.id)}
                  onToggleRealizado={() => toggleRealizado(categoriaSelecionada, encontro.id)}
                />
              );
            })}
          </div>
        </>
      )}
    </div>

  )
}

export default App
