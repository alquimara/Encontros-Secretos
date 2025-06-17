
// import './global.css'
// import { HeaderEncontro } from "./components/Header";
// import { CategoriaCard } from "./components/CategoriaCard";
// import { ButtonVoltar } from "./components/ButtonVoltar";
// import { EncontroCard } from "./components/EncontroCard";
// import { Encontros } from "./data/Encontros";
// import { useEncontros } from "./hook/useEncontro";
// import { ModalParabens } from './components/modalSucess';
// import FinalScreen from './components/FinalScreen';






// function App() {
//   const {
//     categoriaSelecionada,
//     setCategoriaSelecionada,
//     cardRevelados,
//     cardRealizados,
//     revelarCard,
//     toggleRealizado,
//     getQtdRealizados,
//     categorias,
//     encontrosCard,
//     modalInfo,
//     setModalInfo,
//     todasAsFases,
//     setEncontrosCard,
//     setCardRealizados,
//     setCardRevelados,
//     jogoConcluido,
  

//   } = useEncontros(Encontros);


 

//   const MudancaFase = () => {
//     const faseAtual = Number(localStorage.getItem("faseAtual") || "0");

//     // Se for o modal de nova fase, aí sim avança!
//     if (modalInfo?.tipo === "fase") {
//       const novaFase = faseAtual + 1;
//       if (!todasAsFases[novaFase]) {
//         // Se não existir, marca jogo como concluído
//         localStorage.setItem("jogoConcluido", "true");
//         return;
//       }
//       localStorage.setItem("faseAtual", novaFase.toString());
//       localStorage.removeItem("cardRealizados");
//       localStorage.removeItem("cardRevelados");

//       const categoriasAntigas = Object.keys(todasAsFases[faseAtual] || {});
//       categoriasAntigas.forEach((categoria) => {
//         localStorage.removeItem(`concluida-${categoria}-fase-${faseAtual}`);
//       });

//       setEncontrosCard(todasAsFases[novaFase]);
//       setCardRealizados({});
//       setCardRevelados({});
//       setCategoriaSelecionada(null);
//     }

//     // Fecha o modal normalmente
//     setModalInfo(null);
//     setCategoriaSelecionada('')
//   }



//   const iconePorCategoria: Record<string, React.ReactNode> = {
//     Romântico: <span>💞</span>,
//     Picantes: <span>🔥</span>,
//     Gastronómicos: <span>🍲</span>,
//     Aleatórios: <span>🎲</span>,
//     'Ar Livre': <span>🌟</span>,
//     Criativos: <span>🎨</span>,
//     Culturais: <span>🎭</span>,
//     Relaxantes: <span>🧘‍♀️</span>,
//     Esportivos: <span>🏃‍♂️</span>,
//     Surpresas: <span>🎁</span>,
//   };


//   return (
//     jogoConcluido ? (
//       <FinalScreen />
//     ) : (
//       <div className="p-6 max-w-6xl mx-auto">
 
//         {!categoriaSelecionada ? (
//           <>
//             <HeaderEncontro title="💘 Encontros Secretos" />
//             <p className="text-center text-neutral-700 mb-10 text-lg max-w-xl mx-auto"
//             >
//               Descubra encontros únicos e surpreendentes. Clique em uma categoria para começar.

//             </p>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//               {categorias.map((categoria) => {
//                 const total = encontrosCard[categoria]?.length || 0;
//                 const feitos = getQtdRealizados(categoria);
                

//                 return (
//                   <CategoriaCard
//                     key={categoria}
//                     nome={categoria}
//                     total={total}
//                     feitos={feitos}
//                     onClick={() => setCategoriaSelecionada(categoria)}
//                     icone={iconePorCategoria[categoria] || <span>❓</span>}
//                   />
//                 );
//               })}
//             </div>
//           </>
//         ) : (
//           <>

//             <div className="relative flex items-center mb-8 justify-center">
//               <div className="absolute left-0">
//                 <ButtonVoltar onClick={() => setCategoriaSelecionada(null)} />
//               </div>

//               <div className="mx-auto">
//                 <HeaderEncontro
//                   title={
//                     <span>
//                     {iconePorCategoria[categoriaSelecionada] || '❓'}
//                     {categoriaSelecionada}
//                   </span>
//                   }
//                 />
//               </div>
//             </div>


//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-15">
//               {encontrosCard[categoriaSelecionada]?.map((encontro, index) => {
//                 const key = `${categoriaSelecionada}-${encontro.id}`;
//                 const isFeito = cardRealizados[key];

//                 return (
//                   <EncontroCard
//                     key={index}
//                     encontro={encontro}
//                     revelado={cardRevelados[key]}
//                     realizado={isFeito}
//                     onRevelar={() => revelarCard(categoriaSelecionada, encontro.id)}
//                     onToggleRealizado={() => toggleRealizado(categoriaSelecionada, encontro.id)}               />
//                 );
//               })}
//             </div>
//           </>
//         )}

//         {modalInfo && (
//           <><ModalParabens
//               titulo={modalInfo.titulo}
//               mensagem={modalInfo.mensagem}
//               onClose={MudancaFase} /></>
//         )}

//       </div>
//     )
//   );


// }

// export default App


import './global.css';
import { HeaderEncontro } from './components/Header';
import { CategoriaCard } from './components/CategoriaCard';
import { ButtonVoltar } from './components/ButtonVoltar';
import { EncontroCard } from './components/EncontroCard';
import { ModalParabens } from './components/modalSucess';
import FinalScreen from './components/FinalScreen';
import { useEncontros } from './hook/useEncontro';
import { Encontros } from './data/Encontros';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';

const iconePorCategoria:Record<string, React.ReactNode> = {
  Romântico: <span>💞</span>,
  Picantes: <span>🔥</span>,
  Gastronómicos: <span>🍲</span>,
  Aleatórios: <span>🎲</span>,
  'Ar Livre': <span>🌟</span>,
  Criativos: <span>🎨</span>,
  Culturais: <span>🎭</span>,
  Relaxantes: <span>🧘‍♂️</span>,
  Esportivos: <span>🏃‍♂️</span>,
  Surpresas: <span>🎁</span>,
};

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
  } = useEncontros(Encontros);
  const [jogoConcluido,setJogoConcluido] = useState(false)
  useEffect(() => {
    const jogoFinalizado = localStorage.getItem('jogoConcluido') === 'true';
    if (jogoFinalizado) {
      setJogoConcluido(true);
    }
  }, []);
  
  const handleMudancaFase = () => {
    const faseAtual = Number(localStorage.getItem('faseAtual') || '0');
  
    if (modalInfo?.tipo === 'fase') {
      const novaFase = faseAtual + 1;
  
      if (!todasAsFases[novaFase]) {
        localStorage.setItem('jogoConcluido', 'true');
        setJogoConcluido(true);
        return;
      }
  
      localStorage.setItem('faseAtual', novaFase.toString());
      localStorage.removeItem('cardRealizados');
      localStorage.removeItem('cardRevelados');
  
      const categoriasAntigas = Object.keys(todasAsFases[faseAtual] || {});
      categoriasAntigas.forEach((categoria) => {
        localStorage.removeItem(`concluida-${categoria}-fase-${faseAtual}`);
      });
  
      setEncontrosCard(todasAsFases[novaFase]);
      setCardRealizados({});
      setCardRevelados({});
      setCategoriaSelecionada(null);
    }
  
    setModalInfo(null);
    setCategoriaSelecionada('');
  };

  // const handleMudancaFase = () => {
  //   const faseAtual = Number(localStorage.getItem('faseAtual') || '0');

  //   if (modalInfo?.tipo === 'fase') {
  //     const novaFase = faseAtual + 1;
  //     if (!todasAsFases[novaFase]) {
  //       localStorage.setItem('jogoConcluido', 'true');
  //       return;
  //     }
  //     console.log(novaFase)

  //     localStorage.setItem('faseAtual', novaFase.toString());
  //     localStorage.removeItem('cardRealizados');
  //     localStorage.removeItem('cardRevelados');

  //     // Object.keys(todasAsFases[faseAtual] || {}).forEach((categoria) => {
  //     //   localStorage.removeItem(`concluida-${categoria}-fase-${faseAtual}`);
  //     // });
  //     const categoriasAntigas = Object.keys(todasAsFases[faseAtual] || {});
  //     categoriasAntigas.forEach((categoria) => {
  //       localStorage.removeItem(`concluida-${categoria}-fase-${faseAtual}`);
  //     });
  //     if(localStorage.getItem('jogoConcluido') === 'true'){
  //       console.log('jogo concluido')
  //       setJogoConcluido(true)
        
  //     }

  //     setEncontrosCard(todasAsFases[novaFase]);
  //     setCardRealizados({});
  //     setCardRevelados({});
  //     setCategoriaSelecionada(null);
  //   }

  //   setModalInfo(null);
  //   setCategoriaSelecionada('');
  // };

  if (jogoConcluido) {
    return <FinalScreen />;
  }

  return (
    <><Toaster richColors /><div className="p-6 max-w-6xl mx-auto">
      {!categoriaSelecionada ? (
        <>
          <HeaderEncontro title="💘 Encontros Secretos" />
          <p className="text-center text-neutral-700 mb-10 text-lg max-w-xl mx-auto">
            Descubra encontros únicos e surpreendentes. Clique em uma categoria para começar.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categorias.map((categoria) => (
              <CategoriaCard
                key={categoria}
                nome={categoria}
                total={encontrosCard[categoria]?.length || 0}
                feitos={getQtdRealizados(categoria)}
                onClick={() => setCategoriaSelecionada(categoria)}
                icone={iconePorCategoria[categoria] || <span>❓</span>} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="relative flex items-center mb-8 justify-center">
            <div className="absolute left-0">
              <ButtonVoltar onClick={() => setCategoriaSelecionada(null)} />
            </div>

            <div className="mx-auto">
              <HeaderEncontro
                title={<span>
                  {iconePorCategoria[categoriaSelecionada] || '❓'} {categoriaSelecionada}
                </span>} />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-15">
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
                  onToggleRealizado={() => toggleRealizado(categoriaSelecionada, encontro.id)} />
              );
            })}
          </div>
        </>
      )}

      {modalInfo && (
        <ModalParabens
          titulo={modalInfo.titulo}
          mensagem={modalInfo.mensagem}
          onClose={handleMudancaFase} />
      )}
    </div></>
  );
}

export default App;