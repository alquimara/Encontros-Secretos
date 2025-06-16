// components/ModalParabens.tsx
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import confetti from "canvas-confetti";

interface ModalParabensProps {
  titulo: string;
  mensagem: string;
  onClose: () => void;
}

export const ModalParabens: React.FC<ModalParabensProps> = ({ titulo, mensagem, onClose }) => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 max-w-md text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-2xl font-bold text-pink-600 mb-2">{titulo}</h2>
        <p className="text-neutral-700 mb-4">{mensagem}</p>
        <button
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition cursor-pointer"
          onClick={onClose}
        >
          Continuar
        </button>
      </motion.div>
    </div>
  );
};
