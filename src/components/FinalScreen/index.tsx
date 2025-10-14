

// import { motion } from "framer-motion";
// import confetti from "canvas-confetti";
// import html2canvas from "html2canvas";
// import { useEffect, useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

// export default function FinalScreen() {
//   const [mostrarFormulario, setMostrarFormulario] = useState(false);
//   const [mostrarCertificado, setMostrarCertificado] = useState(false);
//   const [nome1, setNome1] = useState("");
//   const [nome2, setNome2] = useState("");
//   const certificadoRef = useRef<HTMLDivElement>(null);

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

//   const handleEnviar = () => {
//     if (!nome1.trim() || !nome2.trim()) {
//       toast.error("Por favor, preencha os dois nomes antes de continuar.");
//       return;
//     }
//     setMostrarFormulario(false);
//     setMostrarCertificado(true);
//   };

//   // const baixarCertificado = async () => {
//   //   if (certificadoRef.current) {
//   //     const canvas = await html2canvas(certificadoRef.current);
//   //     const link = document.createElement("a");
//   //     link.download = "certificado.png";
//   //     link.href = canvas.toDataURL();
//   //     link.click();
//   //   }
//   // };



//   // const baixarCertificado = async () => {
//   //   if (!certificadoRef.current) {
//   //     toast.error("Erro ao gerar o certificado.");
//   //     return;
//   //   }
//   // console.log('baixando......');
//   //   try {
//   //     // Aguarda um curto tempo para garantir que o DOM esteja 100% carregado
//   //     await new Promise((resolve) => setTimeout(resolve, 200));
  
//   //     const canvas = await html2canvas(certificadoRef.current, {
//   //       scale: 2,
//   //       useCORS: true,
//   //     });
  
//   //     const dataUrl = canvas.toDataURL("image/png");
//   //     const link = document.createElement("a");
//   //     link.download = `certificado-${nome1}-${nome2}.png`;
//   //     link.href = dataUrl;
//   //     link.click();
//   //   } catch (error) {
//   //     toast.error("Erro ao baixar o certificado.");
//   //     console.error(error);
//   //   }
//   // };



//   // const baixarCertificado = async () => {
//   //   if (!certificadoRef.current) {
//   //     console.error("Ref do certificado não está disponível");
//   //     return;
//   //   }
  
//   //   try {
//   //     const canvas = await html2canvas(certificadoRef.current, { scale: 2 }); // scale 2 para melhor qualidade
//   //     const imgData = canvas.toDataURL("image/png"); // gera a imagem PNG
//   //     const link = document.createElement("a");
//   //     link.href = imgData;
//   //     link.download = "certificado.png"; // nome do arquivo
//   //     link.click();
//   //   } catch (error) {
//   //     console.error("Erro ao gerar imagem do certificado:", error);
//   //   }
//   // };




//   // const baixarCertificado = async () => {
//   //   if (!certificadoRef.current) {
//   //     toast.error("Erro ao gerar o certificado.");
//   //     return;
//   //   }
  
//   //   try {
//   //     // Aguarda o layout estar pronto
//   //     await new Promise((resolve) => setTimeout(resolve, 200));
  
//   //     const canvas = await html2canvas(certificadoRef.current, {
//   //       scale: 2, // melhor qualidade
//   //       useCORS: true, // permitir imagens externas
//   //       logging: false,
//   //       backgroundColor: "#ffffff", // evita fundo transparente
//   //     });
  
//   //     const dataUrl = canvas.toDataURL("image/png");
//   //     const link = document.createElement("a");
//   //     link.download = `certificado-${nome1}-${nome2}.png`;
//   //     link.href = dataUrl;
//   //     document.body.appendChild(link);
//   //     link.click();
//   //     document.body.removeChild(link);
  
//   //     toast.success("Certificado baixado com sucesso!");
//   //   } catch (error) {
//   //     console.error("Erroddddddddd imagem:", error);
//   //     toast.error("Não foi possível baixar o certificado.");
//   //   }
//   // };
  

//   const baixarCertificado = async () => {
//     if (!certificadoRef.current) return;
  
//     // Corrigir cores no DOM
//     certificadoRef.current.querySelectorAll("*").forEach((el) => {
//       const style = window.getComputedStyle(el);
//       if (style.color.includes("oklch")) {
//         (el as HTMLElement).style.color = "#000000"; // ou a cor real que você quer
//       }
//       if (style.backgroundColor.includes("oklch")) {
//         (el as HTMLElement).style.backgroundColor = "#ffffff";
//       }
//       if (style.borderColor.includes("oklch")) {
//         (el as HTMLElement).style.borderColor = "#fbcfe8";
//       }
//     });
  
//     const canvas = await html2canvas(certificadoRef.current, {
//       scale: 2,
//       useCORS: true,
//       backgroundColor: "#ffffff",
//     });
  
//     const link = document.createElement("a");
//     link.download = "certificado.png";
//     link.href = canvas.toDataURL("image/png");
//     link.click();
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

//       {mostrarFormulario && (
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             handleEnviar();
//           }}
//           className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 mt-4"
//         >
//           <h2 className="text-2xl font-semibold text-pink-600 mb-4">💑 Digite os nomes do casal:</h2>

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

//       {mostrarCertificado && (
//         <div className="mt-8 flex flex-col items-center gap-6">
       



// <div
//   id="certificado"
//   ref={certificadoRef}
//   className="px-12 py-10 rounded-3xl shadow-2xl text-center border-4 max-w-lg mx-auto relative overflow-hidden"
//   style={{
//     backgroundColor: "#fff",
//     borderColor: "#fbcfe8",
//   }}
// >
//   {/* Fundo decorativo */}
//   <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-pink-200 via-pink-50 to-yellow-100 pointer-events-none"></div>

//   <h2
//     className="text-3xl font-bold mb-6 relative z-10"
//     style={{ fontFamily: "'Great Vibes', cursive", color: "#db2777" }}
//   >
//     💖 Certificado de Amor 💖
//   </h2>

//   <p className="text-lg mb-3 relative z-10 text-center" style={{ color: "#374151" }}>
//     Com muita alegria, certificamos que
//   </p>

//   {/* Nome 1 */}
//   <p
//     className="text-3xl font-semibold tracking-wide relative z-10 text-center"
//     style={{ color: "#be185d" }}
//   >
//     {nome1}
//   </p>

//   <p className="text-lg my-2 relative z-10 text-center" style={{ color: "#374151" }}>
//     e
//   </p>

//   {/* Nome 2 */}
//   <p
//     className="text-3xl font-semibold tracking-wide relative z-10 text-center"
//     style={{ color: "#be185d" }}
//   >
//     {nome2}
//   </p>

//   {/* Texto central */}
//   <p
//     className="mt-6 text-base leading-relaxed relative z-10 text-center"
//     style={{ color: "#374151" }}
//   >
//     completaram juntos os <span className="font-bold text-pink-600">100 encontros secretos</span> 
//     com amor, carinho e diversão! 🥰
//   </p>

//   {/* Rodapé */}
//   <p
//     className="mt-8 text-sm italic relative z-10 text-center"
//     style={{ color: "#6b7280" }}
//   >
//     Guardem esta lembrança com muito amor! 💌
//   </p>
// </div>
//           <Button onClick={baixarCertificado}>📥 Baixar Certificado</Button>
//         </div>
//       )}
//     </motion.div>
//   );
// }


// import { motion } from "framer-motion";
// import confetti from "canvas-confetti";
// import html2canvas from "html2canvas";
// import { useEffect, useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

// export default function FinalScreen() {
//   const [mostrarFormulario, setMostrarFormulario] = useState(false);
//   const [mostrarCertificado, setMostrarCertificado] = useState(false);
//   const [nome1, setNome1] = useState("");
//   const [nome2, setNome2] = useState("");
//   const certificadoRef = useRef<HTMLDivElement>(null);

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

//   const handleEnviar = () => {
//     if (!nome1.trim() || !nome2.trim()) {
//       toast.error("Por favor, preencha os dois nomes antes de continuar.");
//       return;
//     }
//     setMostrarFormulario(false);
//     setMostrarCertificado(true);
//   };

//   const baixarCertificado = async () => {
//     if (!certificadoRef.current) {
//       toast.error("Erro ao gerar o certificado.");
//       return;
//     }

//     try {
//       // aguarda o layout ser renderizado
//       await new Promise((resolve) => setTimeout(resolve, 200));

//       const canvas = await html2canvas(certificadoRef.current, {
//         scale: 2, // aumenta resolução
//         useCORS: true, // permite imagens externas
//         backgroundColor: "#ffffff", // fundo branco
//       });

//       const dataUrl = canvas.toDataURL("image/png");

//       const link = document.createElement("a");
//       link.download = `certificado-${nome1}-${nome2}.png`;
//       link.href = dataUrl;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       toast.success("Certificado baixado com sucesso!");
//     } catch (error) {
//       console.error("Erro ao gerar imagem:", error);
//       toast.error("Não foi possível baixar o certificado.");
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
//         <div className="mt-8 flex flex-col items-center gap-6">
//           <div
//             id="certificado"
//             ref={certificadoRef}
//             className="px-12 py-10 rounded-3xl shadow-2xl text-center border-4 max-w-lg mx-auto relative overflow-hidden"
//             style={{
//               backgroundColor: "#ffffff", 
//               borderColor: "#fbcfe8",
//             }}
//           >
//             <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-pink-200 via-pink-50 to-yellow-100 pointer-events-none"></div>

//             <h2
//               className="text-3xl font-bold mb-6 relative z-10"
//               style={{ fontFamily: "'Great Vibes', cursive", color: "#db2777" }}
//             >
//               💖 Certificado de Amor 💖
//             </h2>

//             <p className="text-lg mb-3 relative z-10 text-center" style={{ color: "#374151" }}>
//               Com muita alegria, certificamos que
//             </p>

//             <p
//               className="text-3xl font-semibold tracking-wide relative z-10 text-center"
//               style={{ color: "#be185d" }}
//             >
//               {nome1}
//             </p>

//             <p className="text-lg my-2 relative z-10 text-center" style={{ color: "#374151" }}>
//               e
//             </p>

//             <p
//               className="text-3xl font-semibold tracking-wide relative z-10 text-center"
//               style={{ color: "#be185d" }}
//             >
//               {nome2}
//             </p>

//             <p
//               className="mt-6 text-base leading-relaxed relative z-10 text-center"
//               style={{ color: "#374151" }}
//             >
//               completaram juntos os{" "}
//               <span className="font-bold text-pink-600">100 encontros secretos</span> com amor,
//               carinho e diversão! 🥰
//             </p>

//             <p
//               className="mt-8 text-sm italic relative z-10 text-center"
//               style={{ color: "#6b7280" }}
//             >
//               Guardem esta lembrança com muito amor! 💌
//             </p>
//           </div>

//           <Button onClick={baixarCertificado}>📥 Baixar Certificado</Button>
//         </div>
//       )}
//     </motion.div>
//   );
// }





import { useEffect, useRef, useState } from "react";
import domtoimage from "dom-to-image-more";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import confetti from "canvas-confetti";
import { toast } from "sonner";

export default function Certificado() {
  const certificadoRef = useRef<HTMLDivElement>(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarCertificado, setMostrarCertificado] = useState(false);
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");


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

  const handleDownload = async () => {
    if (!certificadoRef.current) return;

    try {
      const dataUrl = await domtoimage.toPng(certificadoRef.current, {
        quality: 1,
        bgcolor: "#ffffff", // fundo branco
        style: {
          transform: "scale(1)",
          transformOrigin: "top left",
        },
      });

      const link = document.createElement("a");
      link.download = "certificado.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Erro ao gerar imagem:", err);
    }
  };

  return (
    // <div className="flex flex-col items-center">


    //   <div
    //     id="certificado"
    //     ref={certificadoRef}
    //     className="px-10 py-8 rounded-3xl shadow-lg text-center border max-w-md"
    //     style={{
    //       backgroundColor: "#ffffff",
    //       border: "1px solid #fbcfe8",
    //       color: "#db2777",
    //     }}
    //   >
    //     <h2 className="text-3xl font-bold mb-4" style={{ color: "#db2777" }}>
    //       💖 Certificado de Amor 💖
    //     </h2>

    //     <p className="text-lg mb-2" style={{ color: "#374151" }}>
    //       Com muita alegria, certificamos que
    //     </p>

    //     <p className="text-2xl font-semibold" style={{ color: "#be185d" }}>
    //       Maria
    //     </p>

    //     <p className="text-lg" style={{ color: "#374151" }}>
    //       e
    //     </p>

    //     <p className="text-2xl font-semibold" style={{ color: "#be185d" }}>
    //       João
    //     </p>

    //     <p className="mt-4 text-base" style={{ color: "#374151" }}>
    //       completaram juntos os 100 encontros secretos com amor, carinho e
    //       diversão! 🥰
    //     </p>

    //     <p className="mt-6 text-sm" style={{ color: "#6b7280" }}>
    //       Guardem esta lembrança com muito amor! 💌
    //     </p>
    //   </div>

    //   <button
    //     onClick={handleDownload}
    //     className="mt-6 px-6 py-2 rounded-lg bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition"
    //   >
    //     Baixar Certificado
    //   </button>
    // </div>
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
    
          {/* Botões iniciais */}
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
    
          {/* Formulário de nomes */}
          {mostrarFormulario && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEnviar();
              }}
              className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 mt-4"
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
            </form>
          )}
    
          {/* Certificado */}
          {mostrarCertificado && (
             <div className="flex flex-col items-center">


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
          💖 Certificado de Amor 💖
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
        className="mt-6 px-6 py-2 rounded-lg bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition"
      >
        Baixar Certificado
      </button>
    </div>
           
            
          )}
        </motion.div>




  );
}











