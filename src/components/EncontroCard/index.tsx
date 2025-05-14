import { motion } from "framer-motion";
import { Button } from "../ui/button";

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
          <div
            className="absolute w-full h-full flex items-center justify-center rounded-xl bg-pink-200 border text-4xl font-bold shadow-inner"
            style={{ backfaceVisibility: 'hidden' }}
          >
            ?
          </div>

          <div
            className="absolute w-full h-full flex flex-col items-center justify-center bg-white rounded-xl border p-2 text-center shadow-lg"
            style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
          >
            {revelado && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className={realizado ? 'opacity-50' : ''}>
                  <div className="text-4xl mb-2">{encontro.icone}</div>
                  <div className="text-base font-semibold mb-2 min-h-[48px]">{encontro.nome}</div>
                </div>
                <Button
                  className="mt-2 cursor-pointer"
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
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

