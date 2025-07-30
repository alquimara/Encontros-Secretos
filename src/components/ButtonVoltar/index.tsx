import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../ui/button";

interface VoltarButtonProps {
  onClick: () => void;
  name:string
}

export const ButtonVoltar = ({ onClick,name }: VoltarButtonProps) => (
  <Button
     className="mb-6 mt-2 text-sm text-pink-600 hover:text-pink-800 cursor-pointer bg-transparent shadow-none border-none p-0 hover:bg-transparent "
    variant="outline"
    onClick={onClick}
  >
     <ArrowLeftIcon />
     <span className="ml-2 hidden sm:inline">{name}</span>
    {/* ← Voltar às Categorias */}
  </Button>


);
