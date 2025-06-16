import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface EncontroCardProps {
  encontro: {
    id: number;
    nome: string;
    icone: string;
  };

  revelado: boolean;
  realizado: boolean;
  onRevelar: () => void;
  onToggleRealizado: () => void;

}

export const EncontroCard = ({
  encontro,
  revelado,
  realizado,
  onRevelar,
  onToggleRealizado,
  
}: EncontroCardProps) => {
  return (
    <motion.div
      className="relative perspective cursor-pointer"
      onClick={onRevelar}
    >
      <div className="relative w-full h-46" style={{ transformStyle: 'preserve-3d' }}>
        <motion.div
          initial={false}
          animate={{ rotateY: revelado ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
<Card
      className="cursor-pointer transition bg-white absolute hover:shadow-lg border-none w-full h-full bg-pink-200 text-4xl font-bold flex items-center justify-center rounded-xl border p-2"
      style={{ backfaceVisibility: 'hidden' }}
      
     
    >
      {/* <CardContent className="p-2 text-center flex flex-col items-center justify-center gap-2 ">
       ?
      </CardContent> */}
      <CardContent className="p-2 text-center flex flex-col items-center justify-center gap-2">
  <span className="text-5xl">?</span>
</CardContent>
    </Card>

<Card
  className={`cursor-pointer transition w-full h-full bg-white flex items-center justify-center rounded-xl border p-2 ${
    realizado ? 'border-pink-500 bg-pink-50 shadow-inner' : 'hover:shadow-lg'
  }`}
  style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
>
  <CardContent className="p-2 text-center flex flex-col items-center justify-center gap-2 relative">
    {revelado && (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className={`flex flex-col items-center ${realizado ? 'opacity-60 blur-[1px]' : ''}`}>
          <div className="text-4xl mb-2">{encontro.icone}</div>
          <div
            className={`text-base font-semibold min-h-[48px] text-center ${
              realizado ? 'line-through text-gray-500' : ''
            }`}
          >
            {encontro.nome}
          </div>
        </div>

        <Button
  className={` cursor-pointer mt-4 w-[230px] mx-auto transition-colors duration-200 ${
    realizado
      ? ''
      : 'bg-pink-600 text-white hover:bg-pink-700'
  }`}
  size="sm"
  variant={realizado ? 'link' : 'default'}
  onClick={(e) => {
    e.stopPropagation();
    onToggleRealizado();
  }}
>
  {realizado ? 'Desfazer' : 'Marcar como feito'}
</Button>
      </motion.div>
    )}

    {realizado && (
      <div className="absolute top-2 right-2 text-green-600 text-xl">
        ✅
      </div>
    )}
  </CardContent>
</Card>






        </motion.div>
      </div>
    </motion.div>
  );
};

