
import './global.css'
import { HeaderEncontro } from "./components/Header";
import { CategoriaCard } from "./components/CategoriaCard";
import { ButtonVoltar } from "./components/ButtonVoltar";
import { EncontroCard } from "./components/EncontroCard";
import { Encontros } from "./data/Encontros";
import { useEncontros } from "./hook/useEncontro";
import { ModalParabens } from './components/modalSucess';
import FinalScreen from './components/FinalScreen';



function App() {
  const {
    categoriaSelecionada,
    setCategoriaSelecionada,
    cardRevelados,
    cardRealizados,
    revelarCard,
    toggleRealizado,
    getQtdRealizados,
    categorias,
    encontrosCard,
    modalInfo,
    setModalInfo,
    todasAsFases,
    setEncontrosCard,
    setCardRealizados,
    setCardRevelados,
    jogoConcluido
  } = useEncontros(Encontros);


 const MudancaFase =()=>{
  const faseAtual = Number(localStorage.getItem("faseAtual") || "0");

  // Se for o modal de nova fase, aí sim avança!
  if (modalInfo?.tipo === "fase") {
    const novaFase = faseAtual + 1;
    if (!todasAsFases[novaFase]) {
      // Se não existir, marca jogo como concluído
      localStorage.setItem("jogoConcluido", "true");
      return;
    }
    localStorage.setItem("faseAtual", novaFase.toString());
    localStorage.removeItem("cardRealizados");
    localStorage.removeItem("cardRevelados");

    const categoriasAntigas = Object.keys(todasAsFases[faseAtual] || {});
    categoriasAntigas.forEach((categoria) => {
      localStorage.removeItem(`concluida-${categoria}-fase-${faseAtual}`);
    });

    setEncontrosCard(todasAsFases[novaFase]);
    setCardRealizados({});
    setCardRevelados({});
    setCategoriaSelecionada(null);
  }

  // Fecha o modal normalmente
  setModalInfo(null);
  setCategoriaSelecionada('')
 }



  return (
    jogoConcluido ? (
      <FinalScreen />
    ) : (
      <div className="p-6 max-w-6xl mx-auto">
        <HeaderEncontro title="💘 Encontros Secretos" />
  
        {!categoriaSelecionada ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categorias.map((categoria) => {
              const total =  encontrosCard[categoria]?.length || 0;
              const feitos = getQtdRealizados(categoria);
  
              return (
                <CategoriaCard
                  key={categoria}
                  nome={categoria}
                  total={total}
                  feitos={feitos}
                  onClick={() => setCategoriaSelecionada(categoria)}
                />
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
              {encontrosCard[categoriaSelecionada]?.map((encontro, index) => {
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
  
        {modalInfo && (
          <ModalParabens
            titulo={modalInfo.titulo}
            mensagem={modalInfo.mensagem}
            onClose={MudancaFase}
          />
        )}
      </div>
    )

  )

}

export default App
