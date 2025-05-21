
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

  const categorias = Object.keys(Encontros);
  

 
 


  useEffect(() => {
    const faseAtual = Number(localStorage.getItem("faseAtual") || "0");
    const encontrosDaFase = todasAsFases[faseAtual];
    const categorias = Object.keys(encontrosDaFase);
  
    let todasCategoriasFeitas = true;
  
    categorias.forEach((categoria) => {
      const cards = encontrosDaFase[categoria];
      const total = cards.length;
      const feitos = cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  
      // Mostra mensagem se uma categoria foi concluída individualmente
      if (
        feitos === total &&
        total > 0 &&
        !localStorage.getItem(`concluida-${categoria}-fase-${faseAtual}`)
      ) {
        setModalInfo({
          titulo: "🎉 Categoria Concluída!",
          mensagem: `Você concluiu todos os encontros da categoria "${categoria}".`,
          tipo: "categoria", // <-- adicionamos o tipo
        });
        localStorage.setItem(`concluida-${categoria}-fase-${faseAtual}`, "true");
      }
  
      if (feitos < total) {
        todasCategoriasFeitas = false;
      }
    });
  
    // Se todas foram feitas, exibe modal de nova fase — mas não avança ainda!
    if (
      todasCategoriasFeitas &&
      categorias.length > 0 &&
      faseAtual + 1 < todasAsFases.length &&
      categorias.every((cat) =>
        localStorage.getItem(`concluida-${cat}-fase-${faseAtual}`)
      )
    ) {
      // Só mostra uma vez
      if (!modalInfo) {
        setModalInfo({
          titulo: "🎉 Encontros Concluídos",
          mensagem: "✨ Parabéns! Você completou todas as categorias dessa fase. Novos encontros foram desbloqueados!",
          tipo: "fase", // <-- adicionamos o tipo
        });
      }
    }
  }, [cardRealizados]);
  

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
  
  // const getQtdRealizados = (categoria: string) =>
  //   Encontros[categoria].filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;

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
    setEncontrosCard
   };
}

