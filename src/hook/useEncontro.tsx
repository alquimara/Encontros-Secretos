
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
  const [modalInfo, setModalInfo] = useState<{ titulo: string, mensagem: string } | null>(null);

  const categorias = Object.keys(Encontros);
  

  // useEffect(() => {
  //   const faseAtual = Number(localStorage.getItem("faseAtual") || "0");
  //   const encontrosDaFase = todasAsFases[faseAtual];
  //   const categorias = Object.keys(encontrosDaFase);
  
  //   let total = 0;
  //   let feitos = 0;

    
  
  //   categorias.forEach((categoria) => {
  //     const cards = encontrosDaFase[categoria];
  //     total += cards.length;
  //     feitos += cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  //   });
  //   console.log(feitos + "feitos")
  //   console.log(total + 'total')
  
  //   // Verifica se todos os cards da fase foram feitos
  //   if (feitos === total && total > 0 && faseAtual + 1 < todasAsFases.length) {
    
  //     const novaFase = faseAtual + 1;
  //     console.log("Avançando para a fase", novaFase);
  
  //     localStorage.setItem("faseAtual", novaFase.toString());
  //     localStorage.removeItem("cardRealizados");
  //     localStorage.removeItem("cardRevelados");
  //     setEncontrosCard(todasAsFases[novaFase]);
  //     setCardRealizados({});
  //     setCardRevelados({});
   
  //   }
  // }, [cardRealizados]);
  
  // useEffect(() => {
  //   const faseAtual = Number(localStorage.getItem("faseAtual") || "0");
  //   const encontrosDaFase = todasAsFases[faseAtual];
  //   const categorias = Object.keys(encontrosDaFase);
  
  //   const deveAvancar = categorias.some((categoria) => {
  //     const cards = encontrosDaFase[categoria];
  //     const feitos = cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  //     return feitos === cards.length && cards.length > 0;
  //   });
  
  //   if (deveAvancar && faseAtual + 1 < todasAsFases.length) {
  //     const novaFase = faseAtual + 1;
  //     console.log("Avançando para a fase", novaFase);
  
  //     localStorage.setItem("faseAtual", novaFase.toString());
  //     localStorage.removeItem("cardRealizados");
  //     localStorage.removeItem("cardRevelados");
  
  //     setEncontrosCard(todasAsFases[novaFase]);
  //     setCardRealizados({});
  //     setCardRevelados({});
  //   }
  // }, [cardRealizados]);
  
 
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
      if (feitos === total && total > 0 && !localStorage.getItem(`concluida-${categoria}-fase-${faseAtual}`)) {
        setModalInfo({
          titulo: "🎉 Categoria Concluída!",
          mensagem: `Você concluiu todos os encontros da categoria "${categoria}".`,
        });
        localStorage.setItem(`concluida-${categoria}-fase-${faseAtual}`, "true");
      }
  
      if (feitos < total) {
        todasCategoriasFeitas = false;
      }
    });
  
    if (todasCategoriasFeitas && categorias.length > 0 && faseAtual + 1 < todasAsFases.length) {
      const novaFase = faseAtual + 1;
      setModalInfo({
        titulo: "🎉 Encontros Concluidos",
        mensagem: '✨ Parabéns! Você completou todas as categorias dessa fase. Novos encontros foram desbloqueados!',
      });
      localStorage.setItem("faseAtual", novaFase.toString());
      localStorage.removeItem("cardRealizados");
      localStorage.removeItem("cardRevelados");
  
      // Limpa marcas de categorias concluídas
      categorias.forEach(categoria => {
        localStorage.removeItem(`concluida-${categoria}-fase-${faseAtual}`);
      });
  
      setEncontrosCard(todasAsFases[novaFase]);
      setCardRealizados({});
      setCardRevelados({});
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
  
  // categorias.forEach((categoria) => {
  //   const total = encontrosCard[categoria].length;
  //   const feitos = encontrosCard[categoria].filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;
  //   // const todosFeitos = Object.values(encontrosAtuais).every((lista) =>
  //   //   lista.every((e) => cardRealizados[`${categoria}-${e.id}`])
  //   // );
  //   // console.log(todosFeitos)
  
  //   if (feitos === total && total > 0 && faseAtual + 1 < todasAsFases.length) {
  //     console.log(todasAsFases)
  //     console.log("fase" + faseAtual)
  //     const novaFase = faseAtual + 1;
  //     console.log("Novafase" + novaFase)
  //     localStorage.setItem("faseAtual", novaFase.toString());
  //     localStorage.removeItem("cardRealizados");
  //     localStorage.removeItem("cardRevelados");
  //     setEncontrosCard(todasAsFases[novaFase]);
     
  //   }
  //   console.log(encontrosCard)
  
  // });
  

    

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
    categorias,
    encontrosCard,
    modalInfo,
    setModalInfo };
}

