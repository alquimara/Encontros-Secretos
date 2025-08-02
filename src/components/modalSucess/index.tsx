

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import confetti from "canvas-confetti";

interface ModalParabensProps {
  titulo: string;
  mensagem: string | React.ReactNode;
  onClose: () => void;
}

export const ModalParabens: React.FC<ModalParabensProps> = ({ titulo, mensagem, onClose }) => {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-4">{titulo}</h2>
          <div className="text-gray-700 text-base leading-relaxed mb-6">{mensagem}</div>
          <button
            onClick={onClose}
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-300 transition cursor-pointer"
          >
            Continuar
          </button>
        </motion.div>
      </motion.div>
 
    </AnimatePresence>
  );
};

