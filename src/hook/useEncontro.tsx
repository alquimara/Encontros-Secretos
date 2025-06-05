
import type { EncontrosPorCategoria } from "@/data/Encontros";
import { useCallback, useEffect, useState } from "react";
import { Encontros1, Encontros2, } from "../data/Encontros";

export function useEncontros(Encontros: EncontrosPorCategoria) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  const [encontrosCard,setEncontrosCard] = useState({...Encontros});
  const todasAsFases = [Encontros,Encontros1,Encontros2]

  const [cardRevelados, setCardRevelados] = useState(() => {
    const stored = localStorage.getItem("cardsRevelados");
    return stored ? JSON.parse(stored) : {};
  });

  const [cardRealizados, setCardRealizados] = useState(() => {
    const stored = localStorage.getItem("cardsRealizados");
    return stored ? JSON.parse(stored) : {};
  });
  const [modalInfo, setModalInfo] = useState<{ titulo: string, mensagem: string, tipo: string } | null>(null);
  const [jogoConcluido, setJogoConcluido] = useState(false);

  const categorias = Object.keys(Encontros);



  useEffect(() => {
    const faseAtual = Number(localStorage.getItem("faseAtual") || "0");
    const encontrosDaFase = todasAsFases[faseAtual];
    const categoriasDaFase = Object.keys(encontrosDaFase);
   
  
    let todasCategoriasFeitas = true;
  
    categoriasDaFase.forEach((categoria) => {
      const cards = encontrosDaFase[categoria];
      const total = cards.length;
      const feitos = cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  
      // Verifica se a categoria foi concluída
      if (
        feitos === total &&
        total > 0 &&
        !localStorage.getItem(`concluida-${categoria}-fase-${faseAtual}`)
      ) {
        setModalInfo({
          titulo: "🎉 Categoria Concluída!",
          mensagem: `Você concluiu todos os encontros da categoria "${categoria}".`,
          tipo: "categoria",
        });
        localStorage.setItem(`concluida-${categoria}-fase-${faseAtual}`, "true");
        const audio = new Audio("/Encontros-Secretos/playsucess.mp3");
        audio.play().catch((err) => {
          console.warn("Erro ao tocar som:", err);
        });
      }
  
      if (feitos < total) {
        todasCategoriasFeitas = false;
      }
    });
  
    // Se todas as categorias foram concluídas nesta fase
    if (
      todasCategoriasFeitas &&
      categoriasDaFase.length > 0 &&
      categoriasDaFase.every((cat) =>
        localStorage.getItem(`concluida-${cat}-fase-${faseAtual}`)
      )
    ) {
      if (!localStorage.getItem(`fase-concluida-${faseAtual}`)) {
        setModalInfo({
          titulo: "🎉 Encontros Concluídos",
          mensagem: "✨ Parabéns! Você completou todas as categorias dessa fase.",
          tipo: "fase",
        });
  
        localStorage.setItem(`fase-concluida-${faseAtual}`, "true");
  
        // Avança para próxima fase, se houver
        if (faseAtual + 1 < todasAsFases.length) {
          localStorage.setItem("faseAtual", String(faseAtual + 1));
        }
      }
    }
  
    // Verifica se todas as fases foram concluídas
    const todasFasesConcluidas = todasAsFases.every((fase, index) => {
      const categorias = Object.keys(fase);
      return categorias.every((cat) =>
        localStorage.getItem(`concluida-${cat}-fase-${index}`)
      );
    });
  
    if (todasFasesConcluidas && !localStorage.getItem("jogoConcluido")) {
      localStorage.setItem("jogoConcluido", "true");
      setJogoConcluido(true);
      // setModalInfo({
      //   titulo: "🏁 Jogo Concluído!",
      //   mensagem: "Você completou todas as fases e categorias. Parabéns!",
      //   tipo: "jogo",
      // });
    }

  }, [cardRealizados]);
  



  
  

  const revelarCard = useCallback((categoria: string, id: number) => {
    const key = `${categoria}-${id}`;
    setCardRevelados((prev: Record<string, boolean>) => {
      if (prev[key]) return prev;
      const updated = { ...prev, [key]: true };
      localStorage.setItem("cardsRevelados", JSON.stringify(updated));
      return updated;
    });
  }, []);

  // const verificarConclusaoCategoria =(
  //   categoria: string,
  //   cardRealizados: Record<string, boolean>,
  //   todasAsFases: EncontrosPorCategoria[],
  //   setModalInfo: React.Dispatch<React.SetStateAction<any>>
  // )=> {
  //   const faseAtual = Number(localStorage.getItem("faseAtual") || "0");
  //   const encontrosDaFase = todasAsFases[faseAtual];
  //   const cards = encontrosDaFase[categoria] || [];
  
  //   const total = cards.length;
  //   const feitos = cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  
  //   if (
  //     feitos === total &&
  //     total > 0 &&
  //     !localStorage.getItem(`concluida-${categoria}-fase-${faseAtual}`)
  //   ) {
  //     setModalInfo({
  //       titulo: "🎉 Categoria Concluída!",
  //       mensagem: `Você concluiu todos os encontros da categoria "${categoria}".`,
  //       tipo: "categoria",
  //     });
  //     localStorage.setItem(`concluida-${categoria}-fase-${faseAtual}`, "true");
  //   }
  // }
  


  const toggleRealizado = useCallback((categoria: string, id: number) => {
    const key = `${categoria}-${id}`;
    setCardRealizados((prev: Record<string, boolean>) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem("cardsRealizados", JSON.stringify(updated));
      // verificarConclusaoCategoria(categoria, updated, todasAsFases, setModalInfo);
      return updated;
    });
  }, []);
  


  const getQtdRealizados = (categoria: string) => {
    const faseAtual = Number(localStorage.getItem("faseAtual") || "0");
    const encontrosDaFase = todasAsFases[faseAtual];
    const cards = encontrosDaFase[categoria] || [];
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
    jogoConcluido
   };
}

