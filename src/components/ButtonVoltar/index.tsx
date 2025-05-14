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
    ← Voltar às Categorias
  </Button>
);
