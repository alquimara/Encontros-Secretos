// import { Card, CardContent } from "@/components/ui/card";

// interface CategoriaCardProps {
//   nome: string;
//   total: number;
//   feitos: number;
//   onClick: () => void;
// }

// export const CategoriaCard = ({ nome, total, feitos, onClick }: CategoriaCardProps) => {
    
//   return (
//     <Card
    
//       className="cursor-pointer hover:shadow-xl hover:bg-pink-50 transition bg-white shadow-card hover:shadow-md border-0 bg-white elevation-1"
//       onClick={onClick}
//     >
//       <CardContent className="p-6 text-center font-semibold text-lg capitalize text-neutral-800">
//         <div>{nome.replace(/([A-Z])/g, ' $1')}</div>
//         <div className="text-sm text-neutral-500 mt-1">{feitos}/{total} feitos</div>
//       </CardContent>
      

//     </Card>
  
//   );
// };

import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";


interface CategoriaCardProps {
  nome: string;
  total: number;
  feitos: number;
  icone: ReactNode; // novo: ícone como elemento
  onClick: () => void;
}

export const CategoriaCard = ({ nome, total, feitos, icone, onClick }: CategoriaCardProps) => {
  const isCompleto = feitos === total;

  return (
    <Card
      className={`cursor-pointer transition bg-white hover:shadow-lg border-2 ${
        isCompleto ? 'border-pink-500' : 'border-1'
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
          {feitos}/{total} {isCompleto}
        </div>
      </CardContent>
    </Card>
  );
};
