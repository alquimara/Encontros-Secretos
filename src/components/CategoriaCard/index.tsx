

// import { Card, CardContent } from "@/components/ui/card";
// import type { ReactNode } from "react";


// interface CategoriaCardProps {
//   nome: string;
//   total?: number;
//   feitos?: number;
//   icone: ReactNode; // novo: ícone como elemento
//   onClick: () => void;
//   isCompleto?: boolean,
//   tipo?: string
// }

// export const CategoriaCard = ({ nome, total, feitos, icone, onClick, isCompleto,tipo }: CategoriaCardProps) => {
//   // const isCompleto = feitos === total;

//   return (
//     <Card
//       className={`cursor-pointer transition bg-white hover:shadow-lg border-2 ${isCompleto ? 'border-pink-500' : 'border-1'
//         }`}
//       onClick={onClick}
//     >
//       <CardContent className="p-2 text-center flex flex-col items-center justify-center gap-2">
//         <div className="text-4xl">{icone}</div>

//         <div className={`text-xl  flex items-center gap-1 ${isCompleto ? 'text-pink-500' : 'text-neutral-800'}`}>
//           {nome}
//           {isCompleto && <span title="Concluído">✅</span>}
//         </div>

//         <div className={`text-sm ${isCompleto ? 'text-pink-500 font-semibold' : 'text-neutral-500'}`}>
//           {tipo ==='categoria' && (
//             <div>
//               {feitos}/{total} {isCompleto}
//             </div>
//           )}

//         </div>
//       </CardContent>
//     </Card>
//   );
// };




import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";

interface CategoriaCardProps {
  nome: string | ReactNode;
  total?: number;
  feitos?: number;
  icone: ReactNode;
  onClick: () => void;
  isCompleto?: boolean;
  tipo?: string;
}

export const CategoriaCard = ({
  nome,
  total,
  feitos,
  icone,
  onClick,
  isCompleto,
  tipo,
}: CategoriaCardProps) => {
  return (
    <Card
      className={`cursor-pointer transition bg-white hover:shadow-lg border-2 ${
        isCompleto ? "border-pink-500" : "border-gray-200"
      }`}
      onClick={onClick}
    >
      <CardContent className="p-3 sm:p-4 text-center flex flex-col items-center justify-center gap-2 h-full">
        {/* Ícone */}
        <div className="text-3xl sm:text-4xl flex-shrink-0">{icone}</div>

        {/* Nome da categoria */}
        <div
          className={`text-base sm:text-lg font-medium break-words max-w-[90%] ${
            isCompleto ? "text-pink-500" : "text-neutral-800"
          }`}
          style={{ wordBreak: "break-word" }}
        >
          {nome}
          {isCompleto && <span title="Concluído"> ✅</span>}
        </div>

        {/* Progresso */}
        {tipo === "categoria" && (
          <div
            className={`text-xs sm:text-sm ${
              isCompleto ? "text-pink-500 font-semibold" : "text-neutral-500"
            }`}
          >
            {feitos}/{total}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
