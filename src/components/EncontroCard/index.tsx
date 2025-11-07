


import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";


interface EncontroCardProps {
  encontro: {
    id: number;
    nome: string;
    icone: string;
  };
  categoria: string;
  revelado: boolean;
  realizado: boolean;
  onRevelar: () => void;
  onToggleRealizado: () => void;
  faseConcluida: boolean;

}

export const EncontroCard = ({
  encontro,
  revelado,
  realizado,
  onRevelar,
  onToggleRealizado,
  faseConcluida
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

          {/* LADO 1 - NÃO REVELADO */}
          <Card
            className="cursor-pointer transition bg-pink-200 absolute w-full h-full flex items-center justify-center rounded-xl border-none p-2 text-4xl font-bold"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <CardContent className="p-2 text-center flex flex-col items-center justify-center gap-2 ">
              <span className="text-5xl">?</span>
            </CardContent>
          </Card>

          {/* LADO 2 - REVELADO */}
          <Card
            className={`cursor-pointer transition w-full h-full flex items-center justify-center rounded-xl border p-2 ${realizado ? 'border-pink-500 bg-pink-50 shadow-inner' : 'bg-white hover:shadow-lg'
              }`}
            style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
          >
            <CardContent className="relative p-2 text-center flex flex-col items-center justify-center gap-2">

              {/* ÍCONE AMEI */}
              {/* <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAmei();
                }}
                className="absolute top-2 right-2 sm:top-3 sm:right-3"
              >
                <HeartIcon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    amei ? 'text-pink-600' : 'text-gray-400'
                  }`}
                />
              </button> */}

              {/* CONTEÚDO REVELADO */}
              {revelado && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`flex flex-col items-center ${realizado ? 'opacity-60' : ''}`}
                >
                  <div className="text-4xl mb-2">{encontro.icone}</div>
                  <div
                    className={`text-base font-semibold min-h-[48px] text-center ${realizado ? 'line-through text-gray-500' : ''
                      }`}
                  >
                    {encontro.nome}
                  </div>

                  {/* BOTÃO DE MARCAR COMO FEITO */}
                  {/* <Button
                    className={` cursor-pointer mt-4 w-full sm:w-[230px] transition-colors duration-200 ${
                      realizado ? '' : 'bg-pink-600 text-white hover:bg-pink-700'
                    }`}
                    size="sm"
                    variant={realizado ? 'link' : 'default'}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleRealizado();
                    }}
                  >
                    {realizado ? 'Desfazer' : 'Marcar como feito'}
                  </Button> */}


                  {!faseConcluida && (
                    <Button
                      className={` cursor-pointer mt-4 w-full sm:w-[230px] transition-colors duration-200 ${realizado ? '' : 'bg-pink-600 text-white hover:bg-pink-700'
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
  
                 
                  )}
                </motion.div>
              )}

              {/* ÍCONE CHECK ✅ */}
              {realizado && (
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-green-600 text-lg sm:text-xl">
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
