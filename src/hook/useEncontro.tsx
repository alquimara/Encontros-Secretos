



import type { EncontrosPorCategoria } from "@/data/Encontros";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Encontros1, Encontros2 } from "../data/Encontros";


export function useEncontros(Encontros: EncontrosPorCategoria, faseSelecionada:number | null) {
const todasAsFases = [Encontros, Encontros1, Encontros2];


 /* ============================
     🔐 CONTROLE PREMIUM
  ============================ */

  const isPremium = () => {
    return localStorage.getItem("premium") === "true";
  };

  const podeAcessarFase = (fase: number) => {
    if (fase === 0) return true; // Fase 1 sempre grátis
    return isPremium(); // Outras só premium
  };

 /* ============================
     🎮 FASE ATUAL
  ============================ */
  // Estado da fase atual inicializado do localStorage ou 0
  const [faseAtual, setFaseAtual] = useState<number>(() => {
    const saved = localStorage.getItem("faseAtual");
    return saved ? Number(saved) : 0;
  });
  const [cardsAmados, setCardsAmados] = useState<Record<string, boolean>>(() => {
    const data = localStorage.getItem("cardsAmados");
    return data ? JSON.parse(data) : {};
  });
  const [navegandoFaseConcluida, setNavegandoFaseConcluida] = useState(false);

  // Atualiza localStorage quando faseAtual mudar
  useEffect(() => {
    // if (!podeAcessarFase(faseAtual)) {
    //   window.location.href = "/#premium";
    //   return;
    // }
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

useEffect(() => {
  if (!encontrosCard) return;

  const categoriasDaFase = Object.keys(encontrosCard);
  const faseParaChecar = faseAtual;
  const concluida = localStorage.getItem(`fase-concluida-${faseParaChecar}`);
  let todasCategoriasFeitas = true;
  let novaCategoriaConcluida = null;


  categoriasDaFase.forEach((categoria) => {
    const cards = encontrosCard[categoria];
    const total = cards.length;
    const feitos = cards.filter((e) => cardRealizados[`${categoria}-${e.id}`]).length;

 
 
    if (
      feitos === total &&
      total > 0 &&
      !localStorage.getItem(`concluida-${categoria}-fase-${faseParaChecar}`) &&  faseParaChecar <= faseAtual &&
      faseSelecionada === faseParaChecar
    ) {
      console.log('categoria concluida ' + categoria);
      localStorage.setItem(`concluida-${categoria}-fase-${faseParaChecar}`, "true");
      novaCategoriaConcluida = categoria;
    }

    if (feitos < total) {
      todasCategoriasFeitas = false;
    }
  });

  // 👉 Mostra modal de categoria se houver nova
  if (novaCategoriaConcluida) {
    console.log("Categoria concluida");
    setModalInfo({
      titulo: "🎉 Categoria Concluída!",
      mensagem: (
        <>
          Parabéns! Você completou todos os encontros da categoria{" "}
          <span className="text-pink-600 font-extrabold">{novaCategoriaConcluida}</span>.
          <br />
        </>
      ),
      tipo: "categoria",
    });
    return; // 👈 impede que o modal de fase apareça junto
  }

  // ⚠️ Correção crítica: só marca fase como concluída se pelo menos uma nova categoria foi concluída agora
  const faseFoiConcluidaAgora =
    todasCategoriasFeitas &&
    categoriasDaFase.length > 0 &&
    categoriasDaFase.every((cat) =>
      localStorage.getItem(`concluida-${cat}-fase-${faseParaChecar}`)
    ) &&
    !concluida;

  if (faseFoiConcluidaAgora) {
    if (faseAtual === 0 && !isPremium()) {
      setModalInfo({
        titulo: "💖 Vocês arrasaram!",
        mensagem:
          "Para desbloquear as próximas fases, adquira a versão Premium ✨",
        tipo: "premium",
      });
      return;
    }
    setModalInfo({
      titulo: "🎉 você concluiu todos os Encontros!",
      mensagem: `💌 Prepare-se para novos encontros.`,
      tipo: "fase",
    });
    console.log('Fase Conluida')

    localStorage.setItem(`fase-concluida-${faseParaChecar}`, "true");
  }

  // ✅ Verificação final de jogo
  const todasFasesConcluidas = todasAsFases.every((fase, index) => {
    const cats = Object.keys(fase);
    return cats.every((cat) =>
      localStorage.getItem(`concluida-${cat}-fase-${index}`)
    );
  });

  if (todasFasesConcluidas && !localStorage.getItem("jogoConcluido")) {
    localStorage.setItem("jogoConcluido", "true");
  }
}, [cardRealizados, encontrosCard, todasAsFases, faseAtual]);



  const toggleRealizado = (categoria:string, id:number) => {
    const key = `${categoria}-${id}`;
    const novosRealizados = { ...cardRealizados, [key]: !cardRealizados[key] };
  
    setCardRealizados(novosRealizados);
  
    // Salve por fase!
    const faseKey = `fase${faseAtual}`;
    const cardsRealizadosPorFase = JSON.parse(localStorage.getItem("cardsRealizadosPorFase") || "{}");
    cardsRealizadosPorFase[faseKey] = novosRealizados;
    localStorage.setItem("cardsRealizadosPorFase", JSON.stringify(cardsRealizadosPorFase));
  };

  const revelarCard = (categoria: string, id: number) => {
    const key = `${categoria}-${id}`;
    const novosRevelados = { ...cardRevelados, [key]: true };
  
    setCardRevelados(novosRevelados);
  
    // Salva por fase!
    const faseKey = `fase${faseAtual}`;
    const cardsReveladosPorFase = JSON.parse(localStorage.getItem("cardsReveladosPorFase") || "{}");
    cardsReveladosPorFase[faseKey] = novosRevelados;
    localStorage.setItem("cardsReveladosPorFase", JSON.stringify(cardsReveladosPorFase));
  };
  

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
    cardsAmados,toggleAmei,
    navegandoFaseConcluida,
    setNavegandoFaseConcluida,
  };
}





