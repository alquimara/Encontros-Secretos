
// import type { EncontrosPorCategoria } from "@/data/Encontros";
// import { useCallback, useEffect, useState } from "react";
// import { Encontros1, Encontros2, } from "../data/Encontros";

// export function useEncontros(Encontros: EncontrosPorCategoria) {
//   const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
//   const [encontrosCard,setEncontrosCard] = useState({...Encontros});
//   const todasAsFases = [Encontros,Encontros1,Encontros2]
 

//   const [cardRevelados, setCardRevelados] = useState(() => {
//     const stored = localStorage.getItem("cardsRevelados");
//     return stored ? JSON.parse(stored) : {};
//   });

//   const [cardRealizados, setCardRealizados] = useState(() => {
//     const stored = localStorage.getItem("cardsRealizados");
//     return stored ? JSON.parse(stored) : {};
//   });
//   const [modalInfo, setModalInfo] = useState<{ titulo: string, mensagem: string, tipo: string } | null>(null);


//   const categorias = Object.keys(Encontros);


  



//   useEffect(() => {
//     const faseAtual = Number(localStorage.getItem("faseAtual") || "0");
//     const encontrosDaFase = todasAsFases[faseAtual];
//     const categoriasDaFase = Object.keys(encontrosDaFase);
    
   
   
   
  
//     let todasCategoriasFeitas = true;

  
//     categoriasDaFase.forEach((categoria) => {
//       const cards = encontrosDaFase[categoria];
//       const total = cards.length;
//       const feitos = cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  
   
//       if (
//         feitos === total &&
//         total > 0 &&
//         !localStorage.getItem(`concluida-${categoria}-fase-${faseAtual}`)
//       ) {
//         setModalInfo({
//           titulo: "🎉 Categoria Concluída!",
//           mensagem: `Você concluiu todos os encontros da categoria ${categoria}.`,
//           tipo: "categoria",
//         });
//         localStorage.setItem(`concluida-${categoria}-fase-${faseAtual}`, "true");
      
//       }
  
//       if (feitos < total) {
//         todasCategoriasFeitas = false;
//       }
//     });
  
   
//     if (
//       todasCategoriasFeitas &&
//       categoriasDaFase.length > 0 &&
//       categoriasDaFase.every((cat) =>
        
//         localStorage.getItem(`concluida-${cat}-fase-${faseAtual}`
//         )
//       )
//     ) {
//       if (!localStorage.getItem(`fase-concluida-${faseAtual}`)) {
//         setModalInfo({
//           titulo: "🎉 Encontros Concluídos",
//           mensagem: "✨ Parabéns! Você completou todas as categorias dessa fase.",
//           tipo: "fase",
//         });
  
//         localStorage.setItem(`fase-concluida-${faseAtual}`, "true");
  
     
//         // if (faseAtual + 1 < todasAsFases.length) {
//         //   localStorage.setItem("faseAtual", String(faseAtual + 1));
//         //   console.log('estou na fase' + faseAtual)
        
//         // }
//       }
//     }

//     const todasFasesConcluidas = todasAsFases.every((fase, index) => {
//       const categorias = Object.keys(fase);
//       return categorias.every((cat) =>
//         localStorage.getItem(`concluida-${cat}-fase-${index}`)
//       );
//     });
  
//     if (todasFasesConcluidas && !localStorage.getItem("jogoConcluido")) {
//       localStorage.setItem("jogoConcluido", "true");
//     }

//   }, [cardRealizados]);
  



  
//   const revelarCard = useCallback((categoria: string, id: number) => {
//     const key = `${categoria}-${id}`;
//     setCardRevelados((prev: Record<string, boolean>) => {
//       if (prev[key]) return prev;
//       const updated = { ...prev, [key]: true };
//       localStorage.setItem("cardsRevelados", JSON.stringify(updated));
      
     
//       return updated;
//     });
//   }, []);
  
//   const toggleRealizado = useCallback((categoria: string, id: number) => {
//     const key = `${categoria}-${id}`;
//     setCardRealizados((prev: Record<string, boolean>) => {
//       const updated = { ...prev, [key]: !prev[key] };
//       localStorage.setItem("cardsRealizados", JSON.stringify(updated));
//       return updated;
//     });
//   }, []);
  


//   const getQtdRealizados = (categoria: string) => {
//     const faseAtual = Number(localStorage.getItem("faseAtual") || "0");
//     const encontrosDaFase = todasAsFases[faseAtual];
//     const cards = encontrosDaFase[categoria] || [];
//     return cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
//   };

//   return {
//     categoriaSelecionada,
//     setCategoriaSelecionada,
//     cardRevelados,
//     cardRealizados,
//     setCardRealizados,
//     setCardRevelados,
//     revelarCard,
//     toggleRealizado,
//     getQtdRealizados,
//     categorias,
//     encontrosCard,
//     modalInfo,
//     setModalInfo,
//     todasAsFases,
//     setEncontrosCard,
 
//    };
// }










// import type { EncontrosPorCategoria } from "@/data/Encontros";
// import { useCallback, useEffect, useState, type ReactNode } from "react";
// import { Encontros1, Encontros2 } from "../data/Encontros";

// export function useEncontros(Encontros: EncontrosPorCategoria) {
//   const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
//   const [encontrosCard, setEncontrosCard] = useState({ ...Encontros });
//   const todasAsFases = [Encontros, Encontros1, Encontros2];

//   const faseAtual = Number(localStorage.getItem("faseAtual") || "0");
//   const faseKey = `fase${faseAtual}`;

//   // ✅ Carregar cardsRevelados por fase
//   const [cardRevelados, setCardRevelados] = useState(() => {
//     const data = JSON.parse(localStorage.getItem("cardsReveladosPorFase") || "{}");
//     return data[faseKey] || {};
//   });

//   // ✅ Carregar cardsRealizados por fase
//   const [cardRealizados, setCardRealizados] = useState(() => {
//     const data = JSON.parse(localStorage.getItem("cardsRealizadosPorFase") || "{}");
//     return data[faseKey] || {};
//   });

//   const [modalInfo, setModalInfo] = useState<{ titulo: string, mensagem: string | ReactNode, tipo: string } | null>(null);

//   const categorias = Object.keys(Encontros);

//   // ✅ Verificações de conclusão
//   useEffect(() => {
//     const encontrosDaFase = todasAsFases[faseAtual];
//     const categoriasDaFase = Object.keys(encontrosDaFase);
//     let todasCategoriasFeitas = true;

//     categoriasDaFase.forEach((categoria) => {
//       const cards = encontrosDaFase[categoria];
//       const total = cards.length;
//       const feitos = cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;

//       if (
//         feitos === total &&
//         total > 0 &&
//         !localStorage.getItem(`concluida-${categoria}-fase-${faseAtual}`)
//       ) {
//         setModalInfo({
//           titulo: "🎉 Categoria Concluída!",
//           mensagem:  <>
//           Você concluiu todos os encontros da categoria{" "}
//           <span className="text-pink-600 text-bold">{categoria}</span>.
//         </>,
//           tipo: "categoria",
//         });
//         localStorage.setItem(`concluida-${categoria}-fase-${faseAtual}`, "true");
//       }

//       if (feitos < total) {
//         todasCategoriasFeitas = false;
//       }
//     });

//     if (
//       todasCategoriasFeitas &&
//       categoriasDaFase.length > 0 &&
//       categoriasDaFase.every((cat) =>
//         localStorage.getItem(`concluida-${cat}-fase-${faseAtual}`)
//       )
//     ) {
//       if (!localStorage.getItem(`fase-concluida-${faseAtual}`)) {
//         setModalInfo({
//           titulo: "🎉 Encontros Concluídos",
//           mensagem: "✨ Parabéns! Você completou todas as categorias dessa fase.",
//           tipo: "fase",
//         });
//         localStorage.setItem(`fase-concluida-${faseAtual}`, "true");
//       }
//     }

//     const todasFasesConcluidas = todasAsFases.every((fase, index) => {
//       const categorias = Object.keys(fase);
//       return categorias.every((cat) =>
//         localStorage.getItem(`concluida-${cat}-fase-${index}`)
//       );
//     });

//     if (todasFasesConcluidas && !localStorage.getItem("jogoConcluido")) {
//       localStorage.setItem("jogoConcluido", "true");
//     }
//   }, [cardRealizados]);

//   // ✅ Revelar card (por fase)
//   const revelarCard = useCallback((categoria: string, id: number) => {
//     const key = `${categoria}-${id}`;
//     setCardRevelados((prev:Record<string, boolean>) => {
//       if (prev[key]) return prev;

//       const updated = { ...prev, [key]: true };
//       const progresso = JSON.parse(localStorage.getItem("cardsReveladosPorFase") || "{}");
//       progresso[faseKey] = { ...(progresso[faseKey] || {}), [key]: true };
//       localStorage.setItem("cardsReveladosPorFase", JSON.stringify(progresso));

//       return updated;
//     });
//   }, [faseKey]);

//   // ✅ Marcar/desmarcar como realizado (por fase)
//   const toggleRealizado = useCallback((categoria: string, id: number) => {
//     const key = `${categoria}-${id}`;
//     setCardRealizados((prev:Record<string, boolean>) => {
//       const updated = { ...prev, [key]: !prev[key] };
//       const progresso = JSON.parse(localStorage.getItem("cardsRealizadosPorFase") || "{}");
//       progresso[faseKey] = { ...(progresso[faseKey] || {}), [key]: updated[key] };
//       localStorage.setItem("cardsRealizadosPorFase", JSON.stringify(progresso));
//       return updated;
//     });
//   }, [faseKey]);

//   const getQtdRealizados = (categoria: string) => {
//     const encontrosDaFase = todasAsFases[faseAtual];
//     const cards = encontrosDaFase[categoria] || [];
//     return cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
//   };

//   return {
//     categoriaSelecionada,
//     setCategoriaSelecionada,
//     cardRevelados,
//     cardRealizados,
//     setCardRealizados,
//     setCardRevelados,
//     revelarCard,
//     toggleRealizado,
//     getQtdRealizados,
//     categorias,
//     encontrosCard,
//     modalInfo,
//     setModalInfo,
//     todasAsFases,
//     setEncontrosCard,
//   };
// }



import type { EncontrosPorCategoria } from "@/data/Encontros";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Encontros1, Encontros2 } from "../data/Encontros";

export function useEncontros(Encontros: EncontrosPorCategoria) {
  const todasAsFases = [Encontros, Encontros1, Encontros2];

  // Estado da fase atual inicializado do localStorage ou 0
  const [faseAtual, setFaseAtual] = useState<number>(() => {
    const saved = localStorage.getItem("faseAtual");
    return saved ? Number(saved) : 0;
  });
  const [cardsAmados, setCardsAmados] = useState<Record<string, boolean>>(() => {
    const data = localStorage.getItem("cardsAmados");
    return data ? JSON.parse(data) : {};
  });

  // Atualiza localStorage quando faseAtual mudar
  useEffect(() => {
    localStorage.setItem("faseAtual", String(faseAtual));
  }, [faseAtual]);

  // Estado dos encontros da fase atual
  const [encontrosCard, setEncontrosCard] = useState<EncontrosPorCategoria>(todasAsFases[faseAtual]);

  // Atualiza encontrosCard sempre que a faseAtual mudar
  useEffect(() => {
    setEncontrosCard(todasAsFases[faseAtual]);
  }, [faseAtual]);

  const faseKey = `fase${faseAtual}`;

  // Estado cardRevelados, inicializa lendo do localStorage na fase atual
  const [cardRevelados, setCardRevelados] = useState<Record<string, boolean>>(() => {
    const data = JSON.parse(localStorage.getItem("cardsReveladosPorFase") || "{}");
    return data[faseKey] || {};
  });

  // Estado cardRealizados, inicializa lendo do localStorage na fase atual
  const [cardRealizados, setCardRealizados] = useState<Record<string, boolean>>(() => {
    const data = JSON.parse(localStorage.getItem("cardsRealizadosPorFase") || "{}");
    return data[faseKey] || {};
  });

  // Sincroniza cardRevelados no localStorage sempre que mudar
  useEffect(() => {
    const progresso = JSON.parse(localStorage.getItem("cardsReveladosPorFase") || "{}");
    progresso[faseKey] = cardRevelados;
    localStorage.setItem("cardsReveladosPorFase", JSON.stringify(progresso));
  }, [cardRevelados, faseKey]);

  // Sincroniza cardRealizados no localStorage sempre que mudar
  useEffect(() => {
    const progresso = JSON.parse(localStorage.getItem("cardsRealizadosPorFase") || "{}");
    progresso[faseKey] = cardRealizados;
    localStorage.setItem("cardsRealizadosPorFase", JSON.stringify(progresso));
  }, [cardRealizados, faseKey]);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  const [modalInfo, setModalInfo] = useState<{ titulo: string; mensagem: string | ReactNode; tipo: string } | null>(null);
  const categorias = Object.keys(encontrosCard || {});

  // Efeito que verifica conclusão das categorias e fase
  useEffect(() => {
    if (!encontrosCard) return;

    const categoriasDaFase = Object.keys(encontrosCard);
    let todasCategoriasFeitas = true;

    categoriasDaFase.forEach((categoria) => {
      const cards = encontrosCard[categoria];
      const total = cards.length;
      const feitos = cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;

      if (
        feitos === total &&
        total > 0 &&
        !localStorage.getItem(`concluida-${categoria}-fase-${faseAtual}`)
      ) {
        setModalInfo({
          titulo: "🎉 Categoria Concluída!",
          mensagem: (
            <>
              Parabéns! Você completou todos os encontros da categoria{" "}
              <span className="text-pink-600 font-extrabold">{categoria}</span>.
              <br />
            </>
          ),
          tipo: "categoria",
        });
        localStorage.setItem(`concluida-${categoria}-fase-${faseAtual}`, "true");
      }

      if (feitos < total) {
        todasCategoriasFeitas = false;
      }
    });

    if (
      todasCategoriasFeitas &&
      categoriasDaFase.length > 0 &&
      categoriasDaFase.every((cat) =>
        localStorage.getItem(`concluida-${cat}-fase-${faseAtual}`)
      )
    ) {
      if (!localStorage.getItem(`fase-concluida-${faseAtual}`)) {
        setModalInfo({
          titulo: "🎉 você conclui todos os Encontros!",
          mensagem: ` 💌 Prepare-se para novos encontros.
        `,
          tipo: "fase",
        });
        localStorage.setItem(`fase-concluida-${faseAtual}`, "true");
      }
    }

    // Verifica se todas as fases foram concluídas
    const todasFasesConcluidas = todasAsFases.every((fase, index) => {
      const cats = Object.keys(fase);
      return cats.every((cat) => localStorage.getItem(`concluida-${cat}-fase-${index}`));
    });

    if (todasFasesConcluidas && !localStorage.getItem("jogoConcluido")) {
      localStorage.setItem("jogoConcluido", "true");
    }
  }, [cardRealizados, encontrosCard, faseAtual, todasAsFases]);

  // Função para revelar card
  const revelarCard = useCallback(
    (categoria: string, id: number) => {
      const key = `${categoria}-${id}`;
      setCardRevelados((prev) => {
        if (prev[key]) return prev;
        return { ...prev, [key]: true };
      });
    },
    []
  );

  // Função para marcar/desmarcar realizado
  const toggleRealizado = useCallback(
    (categoria: string, id: number) => {
      const key = `${categoria}-${id}`;
      setCardRealizados((prev) => {
        return { ...prev, [key]: !prev[key] };
      });
    },
    []
  );
  const toggleAmei = useCallback((categoria: string, id: number) => {
    const key = `${categoria}-${id}`;
    setCardsAmados((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      return updated;
    });
  }, []);

  const getQtdRealizados = (categoria: string) => {
    if (!encontrosCard) return 0;
    const cards = encontrosCard[categoria] || [];
    return cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  };

  return {
    categoriaSelecionada,
    setCategoriaSelecionada,
    cardRevelados,
    cardRealizados,
    setCardRealizados,
    setCardRevelados,
    revelarCard,
    toggleRealizado,
    getQtdRealizados,
    categorias,
    encontrosCard,
    modalInfo,
    setModalInfo,
    todasAsFases,
    setEncontrosCard,
    faseAtual,
    setFaseAtual,
    cardsAmados,toggleAmei
  };
}




