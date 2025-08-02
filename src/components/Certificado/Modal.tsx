import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface ModalFormularioNomesProps {
  onSubmit: (nomes: { nome1: string; nome2: string }) => void;
  onClose: () => void;
}

export const ModalFormularioNomes: React.FC<ModalFormularioNomesProps> = ({
  onSubmit,
  onClose,
}) => {
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nome1.trim() && nome2.trim()) {
      onSubmit({ nome1, nome2 });
    }
  };

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
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Antes de ver o certificado...</h2>
          <p className="text-gray-600 mb-6">Digite os nomes para personalizar o certificado:</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Seu nome"
              value={nome1}
              onChange={(e) => setNome1(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="text"
              placeholder="Nome do seu amor"
              value={nome2}
              onChange={(e) => setNome2(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />

            <button
              type="submit"
              className="w-full py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition"
            >
              Ver Certificado
            </button>
          </form>

          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-500 hover:underline"
          >
            Cancelar
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
