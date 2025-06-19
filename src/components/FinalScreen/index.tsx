// import { motion } from "framer-motion";
// import confetti from "canvas-confetti";
// import { useEffect } from "react";
// import { Button } from "@/components/ui/button"; // ou ajuste conforme seu projeto

// export default function FinalScreen() {
//   useEffect(() => {
//     console.log("Parabéns, voce completou todos os encontros secretos com seu amor!");
//     confetti({
//       particleCount: 150,
//       spread: 100,
//       origin: { y: 0.6 },
//     });
//   }, []);

//   const handleRecomeçar = () => {
//     localStorage.clear();
//     location.reload(); // ou use navegação programática se tiver router
//   };

//   const handleCompartilhar = () => {
//     const text = "Finalizamos todos os 100 encontros secretos! 🥰";
//     if (navigator.share) {
//       navigator.share({ title: "100 Encontros Secretos", text });
//     } else {
//       navigator.clipboard.writeText(text);
//       alert("Texto copiado para compartilhar!");
//     }
//   };

//   const handleGuardar = () => {
//     alert("Você pode tirar um print dessa tela ou salvar como PDF no navegador!");
//     // Aqui pode evoluir com `html2canvas` se quiser gerar imagem automática.
//   };

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center text-center min-h-screen bg-pink-50 p-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
//       <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2">🎉 Parabéns!</h1>
//       <p className="text-lg text-gray-700 mb-6">Você completou todos os encontros secretos com seu amor!</p>

//       <div className="flex flex-col gap-4 w-full max-w-sm">
//         <Button onClick={handleCompartilhar}>📤 Compartilhar</Button>
//         <Button onClick={handleGuardar} variant="outline">💾 Guardar como Lembrança</Button>
//         <Button onClick={handleRecomeçar} variant="destructive">🔁 Recomeçar Jogo</Button>
//       </div>
//     </motion.div>
//   );
// }



import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // Biblioteca para feedback visual

export default function FinalScreen() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  const handleRecomecar = () => {
    localStorage.clear();
    toast.success("Progresso apagado. Recomeçando...");
    setTimeout(() => location.reload(), 1500);
  };

  const handleCompartilhar = async () => {
    const text = "Finalizamos todos os 100 encontros secretos! 🥰";

    try {
      if (navigator.share) {
        await navigator.share({ title: "100 Encontros Secretos", text });
      } else {
        await navigator.clipboard.writeText(text);
        toast.success("Texto copiado para compartilhar!");
      }
    } catch (error) {
      toast.error("Erro ao compartilhar.");
    }
  };

 

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center min-h-screen bg-pink-50 p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4">🎉 Parabéns!</h1>
      <p className="text-lg text-gray-700 max-w-md mb-8">
        Você completou todos os encontros secretos com seu amor! 💖
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
      <Button onClick={handleRecomecar} variant="destructive" className="bg-pink-600 hover:bg-pink-700 cursor-pointer">🔁 Recomeçar Jogo</Button>
        <Button onClick={handleCompartilhar} className="cursor-pointer"> 💌 Enviar para meu Amor</Button>
        {/* <Button onClick={handleGuardar} variant="outline">💾 Guardar como Lembrança</Button> */}
      
      </div>
    </motion.div>
  );
}
