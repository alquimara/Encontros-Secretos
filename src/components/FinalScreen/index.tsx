



// import { motion } from "framer-motion";
// import confetti from "canvas-confetti";
// import { useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner"; // Biblioteca para feedback visual

// export default function FinalScreen() {
//   useEffect(() => {
//     confetti({
//       particleCount: 200,
//       spread: 160,
//       origin: { y: 0.6 },
//     });
//   }, []);

//   const handleRecomecar = () => {
//     localStorage.clear();
//     toast.success("Progresso apagado. Recomeçando...");
//     setTimeout(() => location.reload(), 1500);
//   };
  

//   const handleCompartilhar = async () => {
//     const text = "Finalizamos todos os 100 encontros secretos! 🥰";

//     try {
//       if (navigator.share) {
//         await navigator.share({ title: "100 Encontros Secretos", text });
//       } else {
//         await navigator.clipboard.writeText(text);
//         toast.success("Texto copiado para compartilhar!");
//       }
//     } catch (error) {
//       toast.error("Erro ao compartilhar.");
//     }
//   };

 

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center text-center min-h-screen bg-pink-50 p-6"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4">🎉 Parabéns!</h1>
//       <p className="text-lg text-gray-700 max-w-md mb-8">
//         Você completou todos os encontros secretos com seu amor! 💖
//       </p>

//       <div className="flex flex-col gap-4 w-full max-w-sm">
//       <Button onClick={handleRecomecar} variant="destructive" className="bg-pink-600 hover:bg-pink-700 cursor-pointer">🔁 Recomeçar Jogo</Button>
//         <Button onClick={handleCompartilhar} className="cursor-pointer"> 💌 Enviar para meu Amor</Button>
//         {/* <Button onClick={handleGuardar} variant="outline">💾 Guardar como Lembrança</Button> */}
      
//       </div>
//     </motion.div>
//   );
// }




import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import html2canvas from "html2canvas";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function FinalScreen() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarCertificado, setMostrarCertificado] = useState(false);
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const certificadoRef = useRef<HTMLDivElement>(null);

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

  const handleEnviar = () => {
    if (!nome1.trim() || !nome2.trim()) {
      toast.error("Por favor, preencha os dois nomes antes de continuar.");
      return;
    }
    setMostrarFormulario(false);
    setMostrarCertificado(true);
  };

  // const baixarCertificado = async () => {
  //   if (certificadoRef.current) {
  //     const canvas = await html2canvas(certificadoRef.current);
  //     const link = document.createElement("a");
  //     link.download = "certificado.png";
  //     link.href = canvas.toDataURL();
  //     link.click();
  //   }
  // };



  // const baixarCertificado = async () => {
  //   if (!certificadoRef.current) {
  //     toast.error("Erro ao gerar o certificado.");
  //     return;
  //   }
  // console.log('baixando......');
  //   try {
  //     // Aguarda um curto tempo para garantir que o DOM esteja 100% carregado
  //     await new Promise((resolve) => setTimeout(resolve, 200));
  
  //     const canvas = await html2canvas(certificadoRef.current, {
  //       scale: 2,
  //       useCORS: true,
  //     });
  
  //     const dataUrl = canvas.toDataURL("image/png");
  //     const link = document.createElement("a");
  //     link.download = `certificado-${nome1}-${nome2}.png`;
  //     link.href = dataUrl;
  //     link.click();
  //   } catch (error) {
  //     toast.error("Erro ao baixar o certificado.");
  //     console.error(error);
  //   }
  // };



  const baixarCertificado = async () => {
    if (!certificadoRef.current) {
      console.error("Ref do certificado não está disponível");
      return;
    }
  
    try {
      const canvas = await html2canvas(certificadoRef.current, { scale: 2 }); // scale 2 para melhor qualidade
      const imgData = canvas.toDataURL("image/png"); // gera a imagem PNG
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "certificado.png"; // nome do arquivo
      link.click();
    } catch (error) {
      console.error("Erro ao gerar imagem do certificado:", error);
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

      {!mostrarFormulario && !mostrarCertificado && (
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Button
            onClick={handleRecomecar}
            variant="destructive"
            className="bg-pink-600 hover:bg-pink-700"
          >
            🔁 Recomeçar Jogo
          </Button>
          <Button onClick={() => setMostrarFormulario(true)}>💌 Enviar para meu Amor</Button>
        </div>
      )}

      {mostrarFormulario && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEnviar();
          }}
          className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 mt-4"
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">💑 Digite os nomes do casal:</h2>

          <input
            type="text"
            placeholder="Seu nome"
            value={nome1}
            onChange={(e) => setNome1(e.target.value)}
            className="w-full mb-3 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <input
            type="text"
            placeholder="Nome da outra pessoa"
            value={nome2}
            onChange={(e) => setNome2(e.target.value)}
            className="w-full mb-4 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <Button type="submit" className="w-full">
            ✨ Ver Certificado
          </Button>
        </form>
      )}

      {mostrarCertificado && (
        <div className="mt-8 flex flex-col items-center gap-6">
          <div id="certificado"
            ref={certificadoRef}
            className="bg-white px-10 py-8 rounded-3xl shadow-lg text-center border border-pink-200 max-w-md"
          >
            <h2 className="text-3xl font-bold text-pink-600 mb-4">💖 Certificado de Amor 💖</h2>
            <p className="text-lg mb-2">Com muita alegria, certificamos que</p>
            <p className="text-2xl font-semibold text-pink-700">{nome1}</p>
            <p className="text-lg">e</p>
            <p className="text-2xl font-semibold text-pink-700">{nome2}</p>
            <p className="mt-4 text-base">
              completaram juntos os 100 encontros secretos com amor, carinho e diversão! 🥰
            </p>
            <p className="mt-6 text-sm text-gray-500">Guardem esta lembrança com muito amor! 💌</p>
          </div>

          <Button onClick={baixarCertificado}>📥 Baixar Certificado</Button>
        </div>
      )}
    </motion.div>
  );
}


