







import { useEffect, useRef, useState } from "react";
import domtoimage from "dom-to-image-more";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import confetti from "canvas-confetti";
import { toast } from "sonner";








// export default function Certificado() {
//   const certificadoRef = useRef<HTMLDivElement>(null);
//   const [mostrarFormulario, setMostrarFormulario] = useState(false);
//   const [mostrarCertificado, setMostrarCertificado] = useState(false);
//   const [nome1, setNome1] = useState("");
//   const [nome2, setNome2] = useState("");

//   useEffect(() => {
//     // confete quando carregar
//     confetti({
//       particleCount: 200,
//       spread: 160,
//       origin: { y: 0.6 },
//     });

//     // 🔹 verifica se já finalizou o jogo
//     const finaldojogo = localStorage.getItem("finaldojogo");
//     const dadosCertificado = localStorage.getItem("dadosCertificado");

//     if (finaldojogo === "true") {
//       if (dadosCertificado) {
//         const { nome1, nome2 } = JSON.parse(dadosCertificado);
//         setNome1(nome1);
//         setNome2(nome2);
//         setMostrarCertificado(true);
//       } else {
//         // se não tem nomes salvos, mostra o formulário
//         setMostrarFormulario(true);
//       }
//     }
//   }, []);

//   const handleRecomecar = () => {
//     localStorage.clear();
//     toast.success("Progresso apagado. Recomeçando...");
//     setTimeout(() => location.reload(), 1500);
//   };

//   const handleEnviar = () => {
//     if (!nome1.trim() || !nome2.trim()) {
//       toast.error("Por favor, preencha os dois nomes antes de continuar.");
//       return;
//     }

//     // 🔹 salvar os nomes no mesmo storage
//     localStorage.setItem("dadosCertificado", JSON.stringify({ nome1, nome2 }));

//     setMostrarFormulario(false);
//     setMostrarCertificado(true);
//   };

//   const handleDownload = async () => {
//     if (!certificadoRef.current) return;

//     try {
//       const dataUrl = await domtoimage.toPng(certificadoRef.current, {
//         quality: 1,
//         bgcolor: "#ffffff",
//         style: {
//           transform: "scale(1)",
//           transformOrigin: "top left",
//         },
//       });

//       const link = document.createElement("a");
//       link.download = "certificado.png";
//       link.href = dataUrl;
//       link.click();
//     } catch (err) {
//       console.error("Erro ao gerar imagem:", err);
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

//       {/* Botões iniciais */}
//       {!mostrarFormulario && !mostrarCertificado && (
//         <div className="flex flex-col gap-4 w-full max-w-sm">
//           <Button
//             onClick={handleRecomecar}
//             variant="destructive"
//             className="bg-pink-600 hover:bg-pink-700"
//           >
//             🔁 Recomeçar Jogo
//           </Button>
//           <Button onClick={() => setMostrarFormulario(true)}>💌 Enviar para meu Amor</Button>
//         </div>
//       )}

//       {/* Formulário de nomes */}
//       {mostrarFormulario && (
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleEnviar();
//           }}
//           className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 mt-4"
//         >
//           <h2 className="text-2xl font-semibold text-pink-600 mb-4">
//             💑 Digite os nomes do casal:
//           </h2>

//           <input
//             type="text"
//             placeholder="Seu nome"
//             value={nome1}
//             onChange={(e) => setNome1(e.target.value)}
//             className="w-full mb-3 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Nome da outra pessoa"
//             value={nome2}
//             onChange={(e) => setNome2(e.target.value)}
//             className="w-full mb-4 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//             required
//           />
//           <Button type="submit" className="w-full">
//             ✨ Ver Certificado
//           </Button>
//         </form>
//       )}

//       {/* Certificado */}
//       {mostrarCertificado && (
//         <div className="flex flex-col items-center">
//           <div
//             id="certificado"
//             ref={certificadoRef}
//             className="px-10 py-8 rounded-3xl shadow-lg text-center border max-w-md"
//             style={{
//               backgroundColor: "#ffffff",
//               border: "1px solid #fbcfe8",
//               color: "#db2777",
//             }}
//           >
//             <h2 className="text-3xl font-bold mb-4" style={{ color: "#db2777" }}>
//               Certificado de Amor
//             </h2>

//             <p className="text-lg mb-2" style={{ color: "#374151" }}>
//               Com muita alegria, certificamos que
//             </p>

//             <p className="text-2xl font-semibold" style={{ color: "#be185d" }}>
//               {nome1}
//             </p>

//             <p className="text-lg" style={{ color: "#374151" }}>
//               e
//             </p>

//             <p className="text-2xl font-semibold" style={{ color: "#be185d" }}>
//               {nome2}
//             </p>

//             <p className="mt-4 text-base" style={{ color: "#374151" }}>
//               completaram juntos os 100 encontros secretos com amor, carinho e diversão! 🥰
//             </p>

//             <p className="mt-6 text-sm" style={{ color: "#6b7280" }}>
//               Guardem esta lembrança com muito amor! 💌
//             </p>
//           </div>

//           <button
//             onClick={handleDownload}
//             className="mt-6 px-6 py-2 rounded-lg bg-black text-white font-semibold shadow-md hover:bg-pink-600 transition cursor-pointer"
//           >
//             📥 Baixar Certificado
//           </button>
//         </div>
//       )}
//     </motion.div>
//   );
// }




// export default function Certificado() {
//   const certificadoRef = useRef<HTMLDivElement>(null);
//   const [mostrarFormulario, setMostrarFormulario] = useState(false);
//   const [mostrarCertificado, setMostrarCertificado] = useState(false);
//   const [nome1, setNome1] = useState("");
//   const [nome2, setNome2] = useState("");

//   useEffect(() => {
//     // 🎊 Confete inicial
//     confetti({
//       particleCount: 200,
//       spread: 160,
//       origin: { y: 0.6 },
//     });

//     // 🔹 Verifica se o jogo já foi finalizado
//     const finaldojogo = localStorage.getItem("finaldojogo");
//     const dadosCertificado = localStorage.getItem("dadosCertificado");

//     if (finaldojogo === "true") {
//       if (dadosCertificado) {
//         const { nome1, nome2 } = JSON.parse(dadosCertificado);
//         setNome1(nome1);
//         setNome2(nome2);
//         setMostrarCertificado(true);
//       } else {
//         setMostrarFormulario(true);
//       }
//     }
//   }, []);

//   const handleRecomecar = () => {
//     localStorage.clear();
//     toast.success("Progresso apagado. Recomeçando...");
//     setTimeout(() => location.reload(), 1500);
//   };

//   const handleEnviar = () => {
//     if (!nome1.trim() || !nome2.trim()) {
//       toast.error("Por favor, preencha os dois nomes antes de continuar.");
//       return;
//     }

//     localStorage.setItem("dadosCertificado", JSON.stringify({ nome1, nome2 }));
//     setMostrarFormulario(false);
//     setMostrarCertificado(true);
//   };

//   const handleDownload = async () => {
//     if (!certificadoRef.current) return;

//     try {
//       const dataUrl = await domtoimage.toPng(certificadoRef.current, {
//         quality: 1,
//         bgcolor: "#ffffff",
//         style: {
//           transform: "scale(1)",
//           transformOrigin: "top left",
//         },
//       });

//       const link = document.createElement("a");
//       link.download = "certificado.png";
//       link.href = dataUrl;
//       link.click();

//       // 🎉 Mensagem de sucesso e confete extra
//       toast.success("Certificado baixado com sucesso! 💖");
//       confetti({
//         particleCount: 180,
//         spread: 150,
//         origin: { y: 0.6 },
//       });

//       // 🔄 Volta automaticamente para a tela inicial
//       setTimeout(() => {
//         setMostrarCertificado(false);
//         setMostrarFormulario(false);
//       }, 1500);

//     } catch (err) {
//       console.error("Erro ao gerar imagem:", err);
//       toast.error("Ocorreu um erro ao baixar o certificado 😢");
//     }
//   };

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center text-center min-h-screen bg-pink-50 p-6"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4">
//         🎉 Parabéns!
//       </h1>
//       <p className="text-lg text-gray-700 max-w-md mb-8">
//         Você completou todos os encontros secretos com seu amor! 💖
//       </p>

//       {/* 🔘 Botões iniciais */}
//       {!mostrarFormulario && !mostrarCertificado && (
//         <motion.div
//           className="flex flex-col gap-4 w-full max-w-sm"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           <Button
//             onClick={handleRecomecar}
//             variant="destructive"
//             className="bg-pink-600 hover:bg-pink-700"
//           >
//             🔁 Recomeçar Jogo
//           </Button>
//           <Button onClick={() => setMostrarFormulario(true)}>
//             💌 Enviar para meu Amor
//           </Button>
//         </motion.div>
//       )}

//       {/* 💑 Formulário de nomes */}
//       {mostrarFormulario && (
//         <motion.form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleEnviar();
//           }}
//           className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 mt-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           <h2 className="text-2xl font-semibold text-pink-600 mb-4">
//             💑 Digite os nomes do casal:
//           </h2>

//           <input
//             type="text"
//             placeholder="Seu nome"
//             value={nome1}
//             onChange={(e) => setNome1(e.target.value)}
//             className="w-full mb-3 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Nome da outra pessoa"
//             value={nome2}
//             onChange={(e) => setNome2(e.target.value)}
//             className="w-full mb-4 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//             required
//           />
//           <Button type="submit" className="w-full">
//             ✨ Ver Certificado
//           </Button>
//         </motion.form>
//       )}

//       {/* 🏆 Certificado */}
//       {mostrarCertificado && (
//         <motion.div
//           className="flex flex-col items-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           <div
//             id="certificado"
//             ref={certificadoRef}
//             className="px-10 py-8 rounded-3xl shadow-lg text-center border max-w-md"
//             style={{
//               backgroundColor: "#ffffff",
//               border: "1px solid #fbcfe8",
//               color: "#db2777",
//             }}
//           >
//             <h2 className="text-3xl font-bold mb-4" style={{ color: "#db2777" }}>
//               Certificado de Amor 💖
//             </h2>

//             <p className="text-lg mb-2" style={{ color: "#374151" }}>
//               Com muita alegria, certificamos que
//             </p>

//             <p className="text-2xl font-semibold" style={{ color: "#be185d" }}>
//               {nome1}
//             </p>

//             <p className="text-lg" style={{ color: "#374151" }}>
//               e
//             </p>

//             <p className="text-2xl font-semibold" style={{ color: "#be185d" }}>
//               {nome2}
//             </p>

//             <p className="mt-4 text-base" style={{ color: "#374151" }}>
//               completaram juntos os 100 encontros secretos com amor, carinho e
//               diversão! 🥰
//             </p>

//             <p className="mt-6 text-sm" style={{ color: "#6b7280" }}>
//               Guardem esta lembrança com muito amor! 💌
//             </p>
//           </div>

//           <button
//             onClick={handleDownload}
//             className="mt-6 px-6 py-2 rounded-lg bg-black text-white font-semibold shadow-md hover:bg-pink-600 transition cursor-pointer"
//           >
//             📥 Baixar Certificado
//           </button>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }





import { CheckCircle } from "lucide-react"; // ícone verde bonito

export default function Certificado() {
  const certificadoRef = useRef<HTMLDivElement>(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarCertificado, setMostrarCertificado] = useState(false);
  const [mostrarSucesso, setMostrarSucesso] = useState(false);
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");

  useEffect(() => {
    // 🎊 Confete inicial
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.6 },
    });

    // 🔹 Verifica se o jogo já foi finalizado
    const finaldojogo = localStorage.getItem("finaldojogo");
    const dadosCertificado = localStorage.getItem("dadosCertificado");

    if (finaldojogo === "true") {
      if (dadosCertificado) {
        const { nome1, nome2 } = JSON.parse(dadosCertificado);
        setNome1(nome1);
        setNome2(nome2);
        setMostrarCertificado(true);
      } else {
        setMostrarFormulario(true);
      }
    }
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

    localStorage.setItem("dadosCertificado", JSON.stringify({ nome1, nome2 }));
    setMostrarFormulario(false);
    setMostrarCertificado(true);
  };

  const handleDownload = async () => {
    if (!certificadoRef.current) return;

    try {
      const dataUrl = await domtoimage.toPng(certificadoRef.current, {
        quality: 1,
        bgcolor: "#ffffff",
        style: {
          transform: "scale(1)",
          transformOrigin: "top left",
        },
      });

      const link = document.createElement("a");
      link.download = "certificado.png";
      link.href = dataUrl;
      link.click();

      // 🎉 Efeitos visuais de sucesso
      confetti({
        particleCount: 180,
        spread: 150,
        origin: { y: 0.6 },
      });

      toast.success("Certificado baixado com sucesso! 💖");

      // 🔄 Mostra tela de sucesso antes de voltar
      setMostrarCertificado(false);
      setMostrarSucesso(true);

      // Depois de 3 segundos, volta pra tela inicial
      setTimeout(() => {
        setMostrarSucesso(false);
        setMostrarFormulario(false);
      }, 4000);

    } catch (err) {
      console.error("Erro ao gerar imagem:", err);
      toast.error("Ocorreu um erro ao baixar o certificado 😢");
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center min-h-screen bg-pink-50 p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4">
        🎉 Parabéns!
      </h1>
      <p className="text-lg text-gray-700 max-w-md mb-8">
        Você completou todos os encontros secretos com seu amor! 💖
      </p>

      {/* 🔘 Botões iniciais */}
      {!mostrarFormulario && !mostrarCertificado && !mostrarSucesso && (
        <motion.div
          className="flex flex-col gap-4 w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            onClick={handleRecomecar}
            variant="destructive"
            className="bg-pink-600 hover:bg-pink-700"
          >
            🔁 Recomeçar Jogo
          </Button>
          <Button onClick={() => setMostrarFormulario(true)}>
            💌 Enviar para meu Amor
          </Button>
        </motion.div>
      )}

      {/* 💑 Formulário de nomes */}
      {mostrarFormulario && (
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            handleEnviar();
          }}
          className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            💑 Digite os nomes do casal:
          </h2>

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
        </motion.form>
      )}

      {/* 🏆 Certificado */}
      {mostrarCertificado && (
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            id="certificado"
            ref={certificadoRef}
            className="px-10 py-8 rounded-3xl shadow-lg text-center border max-w-md"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #fbcfe8",
              color: "#db2777",
            }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#db2777" }}>
              Certificado de Amor 💖
            </h2>

            <p className="text-lg mb-2" style={{ color: "#374151" }}>
              Com muita alegria, certificamos que
            </p>

            <p className="text-2xl font-semibold" style={{ color: "#be185d" }}>
              {nome1}
            </p>

            <p className="text-lg" style={{ color: "#374151" }}>
              e
            </p>

            <p className="text-2xl font-semibold" style={{ color: "#be185d" }}>
              {nome2}
            </p>

            <p className="mt-4 text-base" style={{ color: "#374151" }}>
              completaram juntos os 100 encontros secretos com amor, carinho e
              diversão! 🥰
            </p>

            <p className="mt-6 text-sm" style={{ color: "#6b7280" }}>
              Guardem esta lembrança com muito amor! 💌
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="mt-6 px-6 py-2 rounded-lg bg-black text-white font-semibold shadow-md hover:bg-pink-600 transition cursor-pointer"
          >
            📥 Baixar Certificado
          </button>
        </motion.div>
      )}

      {/* ✅ Tela de sucesso após download */}
      {mostrarSucesso && (
        <motion.div
          className="flex flex-col items-center justify-center mt-10 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle size={80} className="text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-green-600">
            Certificado baixado com sucesso! 🎉
          </h2>
          <p className="text-gray-600 mt-2">Voltando à tela inicial...</p>
        </motion.div>
      )}
    </motion.div>
  );
}















