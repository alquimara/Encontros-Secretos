import React, { createContext, useContext, useEffect, useState } from "react";

type RealizadosMap = Record<string, boolean>;

type RealizadosContextType = {
  realizados: RealizadosMap;
  toggleFeito: (categoria: string, id: number) => void;
  estaFeito: (categoria: string, id: number) => boolean;
};

const RealizadosContext = createContext<RealizadosContextType | undefined>(undefined);

export const RealizadosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [realizados, setRealizados] = useState<RealizadosMap>({});

  // Carrega do localStorage ao iniciar
  useEffect(() => {
    const stored = localStorage.getItem("realizados");
    if (stored) {
      setRealizados(JSON.parse(stored));
    }
  }, []);

  // Salva no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("realizados", JSON.stringify(realizados));
  }, [realizados]);

  const toggleFeito = (categoria: string, id: number) => {
    const key = `${categoria}-${id}`;
    setRealizados((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const estaFeito = (categoria: string, id: number) => {
    return realizados[`${categoria}-${id}`] === true;
  };

  return (
    <RealizadosContext.Provider value={{ realizados, toggleFeito, estaFeito }}>
      {children}
    </RealizadosContext.Provider>
  );
};

export const useRealizados = () => {
  const context = useContext(RealizadosContext);
  if (!context) {
    throw new Error("useRealizados deve ser usado dentro de um RealizadosProvider");
  }
  return context;
};
