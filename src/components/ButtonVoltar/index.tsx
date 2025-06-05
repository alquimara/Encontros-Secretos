import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../ui/button";

interface VoltarButtonProps {
  onClick: () => void;
}

export const ButtonVoltar = ({ onClick }: VoltarButtonProps) => (
  <Button
    className="mb-6 text-sm text-pink-600 hover:text-pink-800 mt-2 cursor-pointer"
    variant="outline"
    onClick={onClick}
  >
     <ArrowLeftIcon />
     <span className="ml-2 hidden sm:inline">Voltar ás Categorias</span>
    {/* ← Voltar às Categorias */}
  </Button>
);
