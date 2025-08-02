import React from 'react'
import { CategoriaCard } from '../CategoriaCard'
import { useEncontros } from '@/hook/useEncontro'
import { Encontros } from '@/data/Encontros'

interface FasesProps {
    faseSelecionada: number | null;
    setFaseSelecionada: (index: number) => void;
    setNavegandoFaseConcluida: (valor: boolean) => void; // Novo!
  }

export const Fases = ({faseSelecionada, setFaseSelecionada,setNavegandoFaseConcluida}: FasesProps) => {
    const{todasAsFases}=useEncontros(Encontros,faseSelecionada)
    const fases = [
        { nome: "Fase 1", concluida: localStorage.getItem("fase-concluida-0") === "true" },
        { nome: "Fase 2", concluida: localStorage.getItem("fase-concluida-1") === "true" },
        { nome: "Fase 3", concluida: localStorage.getItem("fase-concluida-2") === "true" },
      ];

    

      const isDesbloqueada = (index: number) => {
        if (index === 0) return true;
        return fases[index - 1].concluida;
      };
      
  return (
  
    
    <>
    {todasAsFases.map((fase, index) => {
      const concluida = fases[index]?.concluida;
      console.log(!isDesbloqueada)
  
      return (
        <div
          key={index}
          className={isDesbloqueada(index) ? "" : "opacity-50 pointer-events-none"}
        >
          <CategoriaCard
            nome={`Fase ${index + 1}`}
            onClick={() => {
              if (isDesbloqueada(index)) {
                setNavegandoFaseConcluida(concluida);
                setFaseSelecionada(index);
              }
            }}
            icone={<span>{!isDesbloqueada(index) ? "🔒" : "💖"}</span>}
            isCompleto={concluida}
            tipo="fase"
          />
        </div>
      );
    })}
  </>

  )
}
