
import type { EncontrosPorCategoria } from "@/data/Encontros";
import { useCallback, useState } from "react";

export function useEncontros(Encontros: EncontrosPorCategoria) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);

  const [cardRevelados, setCardRevelados] = useState(() => {
    const stored = localStorage.getItem("cardsRevelados");
    return stored ? JSON.parse(stored) : {};
  });

  const [cardRealizados, setCardRealizados] = useState(() => {
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

  const getQtdRealizados = (categoria: string) =>
    Encontros[categoria].filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;

  return {
    categoriaSelecionada,
    setCategoriaSelecionada,
    cardRevelados,
    cardRealizados,
    revelarCard,
    toggleRealizado,
    getQtdRealizados,
  };
}
