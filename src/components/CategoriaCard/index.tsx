import { Card, CardContent } from "@/components/ui/card";

interface CategoriaCardProps {
  nome: string;
  total: number;
  feitos: number;
  onClick: () => void;
}

export const CategoriaCard = ({ nome, total, feitos, onClick }: CategoriaCardProps) => {
    
  return (
    <Card
      className="cursor-pointer hover:shadow-xl hover:bg-pink-50 transition border-pink-300"
      onClick={onClick}
    >
      <CardContent className="p-6 text-center font-semibold text-lg capitalize text-pink-800">
        <div>{nome.replace(/([A-Z])/g, ' $1')}</div>
        <div className="text-sm text-pink-500 mt-1">{feitos}/{total} feitos</div>
      </CardContent>
      

    </Card>
  );
};

