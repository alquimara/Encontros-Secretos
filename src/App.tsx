


import './global.css';

import { HeaderEncontro } from './components/Header';

import { ButtonVoltar } from './components/ButtonVoltar';
import { EncontroCard } from './components/EncontroCard';
import { ModalParabens } from './components/modalSucess';
import FinalScreen from './components/FinalScreen';
import { useEncontros } from './hook/useEncontro';
import { Encontros } from './data/Encontros';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import {CategoriaCard } from './components/CategoriaCard';
import { Fases } from './components/Fases/Fases';



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
  const [faseSelecionada, setFaseSelecionada] = useState<number | null>(null);
  
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
    toggleAmei,
    cardsAmados,
    setFaseAtual,
    faseAtual,
    setNavegandoFaseConcluida,
    navegandoFaseConcluida

  } = useEncontros(Encontros,faseSelecionada);
  const [jogoConcluido,setJogoConcluido] = useState(false)



 
  


  useEffect(() => {  
   
    const faseParaCarregar = faseSelecionada !== null ? faseSelecionada : faseAtual;
  
   

    const concluida = localStorage.getItem(`fase-concluida-${faseParaCarregar}`);
    if (concluida && modalInfo?.tipo === 'fase' ) {
      setModalInfo(null); // Garante que não aparece novamente
    }
   

  setEncontrosCard(todasAsFases[faseParaCarregar]);

  const cardsReveladosPorFase = JSON.parse(localStorage.getItem("cardsReveladosPorFase") || "{}");
  setCardRevelados(cardsReveladosPorFase[`fase${faseParaCarregar}`] || {});
  const cardsRealizadosPorFase = JSON.parse(localStorage.getItem("cardsRealizadosPorFase") || "{}");
  setCardRealizados(cardsRealizadosPorFase[`fase${faseParaCarregar}`] || {});
  
 
 
 
  }, [faseSelecionada, faseAtual]);


  useEffect(() => {
    // if (faseSelecionada === null) return;
    // const fase = faseSelecionada ?? faseAtual;
    if (faseSelecionada === null) {
      // Não checa nada! Está na tela de fases!
      return;
    }
  
    // const concluida = localStorage.getItem(`fase-concluida-${faseSelecionada}`);
    const concluida = localStorage.getItem(`fase-concluida-${faseSelecionada}`);
   
  
  
  
    if (concluida === "true" && modalInfo?.tipo === "fase" && navegandoFaseConcluida) {

      setModalInfo(null);
      setNavegandoFaseConcluida(false);
    }
    if(modalInfo?.tipo ==='categoria' && navegandoFaseConcluida){
      setModalInfo(null);
      setNavegandoFaseConcluida(false);
    }
  }, [faseSelecionada, modalInfo, navegandoFaseConcluida]);

  


  const handleMudancaFase = () => {
    // const faseAtual = Number(localStorage.getItem('faseAtual') || '0');
  
    if (modalInfo?.tipo === 'fase') {
      const novaFase = faseAtual + 1;
  
      if (!todasAsFases[novaFase]) {
        localStorage.setItem('jogoConcluido', 'true');
        setJogoConcluido(true);
        return;
      }
  
  
      localStorage.setItem('faseAtual', novaFase.toString());
      // localStorage.removeItem('cardRealizados');
      // localStorage.removeItem('cardRevelados');
  
      // const categoriasAntigas = Object.keys(todasAsFases[faseAtual] || {});
      // categoriasAntigas.forEach((categoria) => {
      //   localStorage.removeItem(concluida-${categoria}-fase-${faseAtual});
      // });
      setFaseAtual(novaFase);
  
      setFaseSelecionada(novaFase);
  
      setEncontrosCard(todasAsFases[novaFase]);
      setCardRealizados({});
      setCardRevelados({});
      setCategoriaSelecionada(null);
      setFaseSelecionada(null)
    }
  
    setModalInfo(null);
   
    setCategoriaSelecionada('');
  };

 
 
;

  if (jogoConcluido) {
    return <FinalScreen />;
  }

  return (
    // <>
    // <Toaster richColors /><div className="p-6 max-w-6xl mx-auto">
    //   {!categoriaSelecionada ? (
    //     <>
    //       <HeaderEncontro title="💘 Encontros Secretos" />
    //       <p className="text-center text-neutral-700 mb-10 text-lg max-w-xl mx-auto">
    //         Descubra encontros únicos e surpreendentes. Clique em uma categoria para começar.
    //       </p>

    //       <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    //         <Fases/>
    //         {categorias.map((categoria) => (
    //           <CategoriaCard
    //             key={categoria}
    //             tipo='categoria'
    //             nome={categoria}
    //             total={encontrosCard[categoria]?.length || 0}
    //             feitos={getQtdRealizados(categoria)}
    //             onClick={() => setCategoriaSelecionada(categoria)}
    //             icone={iconePorCategoria[categoria] || <span>❓</span>} 
    //             isCompleto = {getQtdRealizados(categoria) === encontrosCard[categoria]?.length}
    //             />
    //         ))}
    //       </div>
    //     </>
    //   ) : (
    //     <>
    //       <div className="relative flex items-center mb-8 justify-center">
    //         <div className="absolute left-0">
    //           <ButtonVoltar onClick={() => setCategoriaSelecionada(null)} />
    //         </div>

    //         <div className="mx-auto">
    //           <HeaderEncontro
    //             title={<span>
    //               {iconePorCategoria[categoriaSelecionada] || '❓'} {categoriaSelecionada}
    //             </span>} />
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-15">
    //         {encontrosCard[categoriaSelecionada]?.map((encontro, index) => {
    //           const key = `${categoriaSelecionada}-${encontro.id}`;
    //           const isFeito = cardRealizados[key];

    //           return (
    //             <EncontroCard
    //             categoria={categoriaSelecionada} 
    //               key={index}
    //               encontro={encontro}
    //               revelado={cardRevelados[key]}
    //               realizado={isFeito}
    //               onRevelar={() => revelarCard(categoriaSelecionada, encontro.id)}
    //               onToggleRealizado={() => toggleRealizado(categoriaSelecionada, encontro.id)}
    //               toggleAmei={() => toggleAmei(categoriaSelecionada, encontro.id)} cardsAmados={cardsAmados} />
    //           );
    //         })}
    //       </div>
    //     </>
    //   )}

    //   {modalInfo && (
    //     <ModalParabens
    //       titulo={modalInfo.titulo}
    //       mensagem={modalInfo.mensagem}
    //       onClose={handleMudancaFase} />
    //   )}


    // </div>
    
  
     
     
    
    
    // </>
    <>
    <Toaster richColors />
    <div className="p-6 max-w-6xl mx-auto">
      {jogoConcluido ? (
        <FinalScreen />
      ) : faseSelecionada === null ? (
        <>
          <HeaderEncontro title="💘 Encontros Secretos" />
          <p className="text-center text-neutral-700 mb-10 text-lg max-w-xl mx-auto">
            Escolha uma fase para começar seus encontros!
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <Fases
              faseSelecionada={faseSelecionada}
              setFaseSelecionada={setFaseSelecionada}
              setNavegandoFaseConcluida={setNavegandoFaseConcluida}
            />
          </div>
        </>
      ) : !categoriaSelecionada ? (
        <>
        <div className="relative flex items-center mb-8 justify-center">
  <div className="absolute left-0">
    <ButtonVoltar 


    onClick={() => {
      setFaseSelecionada(null);
      setModalInfo(null);
    }}
     name="Voltar às Fases" />
  </div>

  <HeaderEncontro title={`📂 Fase ${faseSelecionada + 1} - Categorias`} />
</div>

<p className="text-center text-neutral-700 mb-10 text-lg max-w-xl mx-auto">
  Escolha uma categoria para explorar.
</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categorias.map((categoria) => (
              <CategoriaCard
                key={categoria}
                tipo="categoria"
                nome={categoria}
                total={encontrosCard[categoria]?.length || 0}
                feitos={getQtdRealizados(categoria)}
                onClick={() => setCategoriaSelecionada(categoria)}
                icone={iconePorCategoria[categoria] || <span>❓</span>}
                isCompleto={
                  getQtdRealizados(categoria) === encontrosCard[categoria]?.length
                }
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="relative flex items-center mb-8 justify-center">
            <div className="absolute left-0">
              <ButtonVoltar onClick={() => setCategoriaSelecionada(null)} name={'Voltar às Categorias'} />
            </div>

            <HeaderEncontro
              title={
                <>
                  {iconePorCategoria[categoriaSelecionada] || '❓'}{' '}
                  {categoriaSelecionada}
                </>
              }
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {encontrosCard[categoriaSelecionada]?.map((encontro) => {
              const key = `${categoriaSelecionada}-${encontro.id}`;
              return (
                <EncontroCard
                  key={key}
                  categoria={categoriaSelecionada}
                  encontro={encontro}
                  revelado={cardRevelados[key]}
                  realizado={cardRealizados[key]}
                  onRevelar={() => revelarCard(categoriaSelecionada, encontro.id)}
                  onToggleRealizado={() =>
                    toggleRealizado(categoriaSelecionada, encontro.id)
                  }
                  toggleAmei={() => toggleAmei(categoriaSelecionada, encontro.id)}
                  cardsAmados={cardsAmados}
                />
              );
            })}
          </div>
        </>
      )}

      {modalInfo!=null && (
        <ModalParabens
          titulo={modalInfo.titulo}
          mensagem={modalInfo.mensagem}
          onClose={handleMudancaFase}
        />
      )}
    </div>
    </>
  );
}

export default App;













// import './global.css';
// import { HeaderEncontro } from './components/Header';
// import { ButtonVoltar } from './components/ButtonVoltar';
// import { EncontroCard } from './components/EncontroCard';
// import { ModalParabens } from './components/modalSucess';
// import FinalScreen from './components/FinalScreen';
// import { useEncontros } from './hook/useEncontro';
// import { Encontros } from './data/Encontros';
// import { useEffect, useState } from 'react';
// import { Toaster } from 'sonner';
// import { CategoriaCard } from './components/CategoriaCard';
// import { Fases } from './components/Fases/Fases';

// const iconePorCategoria: Record<string, React.ReactNode> = {
//   Romântico: <span>💞</span>,
//   Picantes: <span>🔥</span>,
//   Gastronómicos: <span>🍲</span>,
//   Aleatórios: <span>🎲</span>,
//   'Ar Livre': <span>🌟</span>,
//   Criativos: <span>🎨</span>,
//   Culturais: <span>🎭</span>,
//   Relaxantes: <span>🧘‍♂️</span>,
//   Esportivos: <span>🏃‍♂️</span>,
//   Surpresas: <span>🎁</span>,
// };

// function App() {
//   const [faseSelecionada, setFaseSelecionada] = useState<number | null>(null);
//   const [jogoConcluido, setJogoConcluido] = useState(false);

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
//     toggleAmei,
//     cardsAmados,
//     setFaseAtual,
//     faseAtual,
//     setNavegandoFaseConcluida,
//     navegandoFaseConcluida
//   } = useEncontros(Encontros, faseSelecionada);

//   // ✅ Carregar fase e progresso
//   useEffect(() => {
//     if (faseSelecionada === null && faseAtual === null) return;

//     const fase = faseSelecionada ?? faseAtual;

//     setEncontrosCard(todasAsFases[fase]);

//     const cardsReveladosPorFase = JSON.parse(localStorage.getItem("cardsReveladosPorFase") || "{}");
//     setCardRevelados(cardsReveladosPorFase[`fase${fase}`] || {});

//     const cardsRealizadosPorFase = JSON.parse(localStorage.getItem("cardsRealizadosPorFase") || "{}");
//     setCardRealizados(cardsRealizadosPorFase[`fase${fase}`] || {});

//     // ✅ Fecha modal se voltar para fase/categoria concluída
//     const concluida = localStorage.getItem(`fase-concluida-${fase}`);
//     if (concluida === "true" && modalInfo?.tipo === "fase" && navegandoFaseConcluida) {
//       console.log("🔒 Fechando modal de fase concluída");
//       setModalInfo(null);
//       setNavegandoFaseConcluida(false);
//     }
//     if (concluida === "true" && modalInfo?.tipo === "categoria" && navegandoFaseConcluida) {
//       console.log("🔒 Fechando modal de categoria concluída");
//       setModalInfo(null);
//       setNavegandoFaseConcluida(false);
//     }
//   }, [faseSelecionada, faseAtual, modalInfo?.tipo, navegandoFaseConcluida]);

//   // ✅ Avançar fase
//   const handleMudancaFase = () => {
   



//     if (modalInfo?.tipo === 'fase') {
//       const novaFase = faseAtual + 1;

//       if (!todasAsFases[novaFase]) {
//         localStorage.setItem('jogoConcluido', 'true');
//         setJogoConcluido(true);
//         return;
//       }

//       localStorage.setItem('faseAtual', novaFase.toString());
//       setFaseAtual(novaFase);
//       setFaseSelecionada(novaFase);
//       setCardRealizados({});
//       setCardRevelados({});
//       setCategoriaSelecionada(null);

//     }
//     if (modalInfo?.tipo === 'categoria') {
//       setCategoriaSelecionada(null);
//     }
//     setModalInfo(null);
//   };

//   if (jogoConcluido) {
//     return <FinalScreen />;
//   }

//   return (
//     <>
//       <Toaster richColors />
//       <div className="p-6 max-w-6xl mx-auto">
//         {faseSelecionada === null ? (
//           <>
//             <HeaderEncontro title="💘 Encontros Secretos" />
//             <p className="text-center text-neutral-700 mb-10 text-lg max-w-xl mx-auto">
//               Escolha uma fase para começar seus encontros!
//             </p>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//               <Fases
//                 faseSelecionada={faseSelecionada}
//                 setFaseSelecionada={setFaseSelecionada}
//                 setNavegandoFaseConcluida={setNavegandoFaseConcluida}
//               />
//             </div>
//           </>
//         ) : !categoriaSelecionada ? (
//           <>
//             <div className="relative flex items-center mb-8 justify-center">
//               <div className="absolute left-0">
//                 <ButtonVoltar
//                   onClick={() => {
//                     setFaseSelecionada(null); // Voltar para fases
//                     setCategoriaSelecionada(null);
//                     setModalInfo(null);
//                     setNavegandoFaseConcluida(false);
//                   }}
//                   name="Voltar às Fases"
//                 />
//               </div>
//               <HeaderEncontro title={`📂 Fase ${faseSelecionada + 1} - Categorias`} />
//             </div>

//             <p className="text-center text-neutral-700 mb-10 text-lg max-w-xl mx-auto">
//               Escolha uma categoria para explorar.
//             </p>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//               {categorias.map((categoria) => (
//                 <CategoriaCard
//                   key={categoria}
//                   tipo="categoria"
//                   nome={categoria}
//                   total={encontrosCard[categoria]?.length || 0}
//                   feitos={getQtdRealizados(categoria)}
//                   onClick={() => setCategoriaSelecionada(categoria)}
//                   icone={iconePorCategoria[categoria] || <span>❓</span>}
//                   isCompleto={getQtdRealizados(categoria) === encontrosCard[categoria]?.length}
//                 />
//               ))}
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="relative flex items-center mb-8 justify-center">
//               <div className="absolute left-0">
//                 <ButtonVoltar
//                   onClick={() => setCategoriaSelecionada(null)}
//                   name="Voltar às Categorias"
//                 />
//               </div>

//               <HeaderEncontro
//                 title={
//                   <>
//                     {iconePorCategoria[categoriaSelecionada] || '❓'} {categoriaSelecionada}
//                   </>
//                 }
//               />
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//               {encontrosCard[categoriaSelecionada]?.map((encontro) => {
//                 const key = `${categoriaSelecionada}-${encontro.id}`;
//                 return (
//                   <EncontroCard
//                     key={key}
//                     categoria={categoriaSelecionada}
//                     encontro={encontro}
//                     revelado={cardRevelados[key]}
//                     realizado={cardRealizados[key]}
//                     onRevelar={() => revelarCard(categoriaSelecionada, encontro.id)}
//                     onToggleRealizado={() => toggleRealizado(categoriaSelecionada, encontro.id)}
//                     toggleAmei={() => toggleAmei(categoriaSelecionada, encontro.id)}
//                     cardsAmados={cardsAmados}
//                   />
//                 );
//               })}
//             </div>
//           </>
//         )}

//         {modalInfo && (
//           <ModalParabens
//             titulo={modalInfo.titulo}
//             mensagem={modalInfo.mensagem}
//             onClose={handleMudancaFase}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// export default App;









