

import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";


interface CategoriaCardProps {
  nome: string;
  total?: number;
  feitos?: number;
  icone: ReactNode; // novo: ícone como elemento
  onClick: () => void;
  isCompleto?: boolean,
  tipo?: string
}

export const CategoriaCard = ({ nome, total, feitos, icone, onClick, isCompleto,tipo }: CategoriaCardProps) => {
  // const isCompleto = feitos === total;

  return (
    <Card
      className={`cursor-pointer transition bg-white hover:shadow-lg border-2 ${isCompleto ? 'border-pink-500' : 'border-1'
        }`}
      onClick={onClick}
    >
      <CardContent className="p-2 text-center flex flex-col items-center justify-center gap-2">
        <div className="text-4xl">{icone}</div>

        <div className={`text-xl  flex items-center gap-1 ${isCompleto ? 'text-pink-500' : 'text-neutral-800'}`}>
          {nome}
          {isCompleto && <span title="Concluído">✅</span>}
        </div>

        <div className={`text-sm ${isCompleto ? 'text-pink-500 font-semibold' : 'text-neutral-500'}`}>
          {tipo ==='categoria' && (
            <div>
              {feitos}/{total} {isCompleto}
            </div>
          )}

        </div>
      </CardContent>
    </Card>
  );
};
