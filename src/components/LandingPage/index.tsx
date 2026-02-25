// import { Heart, Sparkles, Lock, Gift } from "lucide-react";

// interface Props {
//   onStart: () => void;
// }

// export default function LandingPage({ onStart }: Props) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 text-neutral-800">

//       {/* HERO */}
//       <section className="flex flex-col items-center justify-center text-center px-6 py-24">
//         <h1 className="text-5xl font-bold text-pink-600 mb-6 flex items-center gap-3">
//           <Heart className="text-pink-500" size={40} />
//           Encontros Secretos
//         </h1>

//         <p className="max-w-2xl text-lg text-neutral-600 mb-8">
//           Um jogo interativo para casais que desejam viver momentos
//           inesquecíveis, sair da rotina e fortalecer a conexão.
//         </p>

//         <button
//           onClick={onStart}
//           className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-2xl text-lg shadow-lg transition transform hover:scale-105"
//         >
//           🎮 Jogar Gratuitamente
//         </button>
//       </section>

//       {/* IMAGENS */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 max-w-6xl mx-auto mb-20">
//         <img
//           src="https://images.unsplash.com/photo-1529634894574-3c8b9f4c7a66"
//           alt="Casal sorrindo"
//           className="rounded-2xl shadow-lg object-cover h-64 w-full"
//         />
//         <img
//           src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
//           alt="Casal abraçado"
//           className="rounded-2xl shadow-lg object-cover h-64 w-full"
//         />
//         <img
//           src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
//           alt="Casal feliz"
//           className="rounded-2xl shadow-lg object-cover h-64 w-full"
//         />
//       </section>

//       {/* O QUE É O JOGO */}
//       <section className="bg-white py-20 px-6 text-center">
//         <h2 className="text-3xl font-bold text-pink-600 mb-8">
//           ✨ O que é o Encontros Secretos?
//         </h2>

//         <div className="max-w-3xl mx-auto text-lg text-neutral-600 space-y-6">
//           <p>
//             É um jogo dividido em fases e categorias especiais,
//             onde cada carta revelada propõe uma experiência única
//             para o casal viver junto.
//           </p>

//           <p>
//             Vocês escolhem uma fase, revelam encontros secretos
//             e marcam como realizados conforme vivem cada momento.
//           </p>

//           <p className="font-semibold text-pink-600">
//             Simples. Divertido. Transformador.
//           </p>
//         </div>
//       </section>

//       {/* BENEFÍCIOS */}
//       <section className="py-20 px-6 bg-pink-50">
//         <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">
//           💖 Por que jogar?
//         </h2>

//         <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <Sparkles className="mx-auto text-pink-500 mb-4" size={32} />
//             <p>Quebra da rotina</p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <Heart className="mx-auto text-pink-500 mb-4" size={32} />
//             <p>Mais conexão emocional</p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <Gift className="mx-auto text-pink-500 mb-4" size={32} />
//             <p>Momentos inesquecíveis</p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-md">
//             <Lock className="mx-auto text-pink-500 mb-4" size={32} />
//             <p>Conteúdo exclusivo</p>
//           </div>
//         </div>
//       </section>

//       {/* PREMIUM */}
//       <section className="py-24 px-6 text-center bg-white">
//         <h2 className="text-3xl font-bold text-pink-600 mb-6">
//           🔓 Desbloqueie a Experiência Completa
//         </h2>

//         <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
//           A primeira fase é gratuita.
//           Para acessar todas as fases e categorias exclusivas,
//           desbloqueie a versão completa por apenas:
//         </p>

//         <div className="text-4xl font-bold text-pink-600 mb-8">
//           R$ 10,00
//         </div>

//         <button
//           onClick={onStart}
//           className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-2xl text-lg shadow-lg transition transform hover:scale-105"
//         >
//           💘 Começar Agora
//         </button>
//       </section>

//       {/* FOOTER */}
//       <footer className="py-10 text-center text-neutral-500 text-sm">
//         Feito com 💕 para casais que desejam viver algo diferente.
//       </footer>
//     </div>
//   );
// }




// import { Heart, Sparkles, Lock, Gift, ArrowRight } from "lucide-react";

// interface Props {
//   onStart: () => void;
// }

// export default function LandingPage({ onStart }: Props) {
//   return (
//     <div className="bg-white text-neutral-800">

//       {/* HERO COM OVERLAY */}
//       <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

//         {/* Background Gradiente */}
//         <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-200"></div>

//         {/* Círculos decorativos */}
//         <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
//         <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-30"></div>

//         <div className="relative z-10 max-w-3xl">
//           <h1 className="text-6xl font-extrabold text-pink-600 mb-6 leading-tight">
//             Encontros <span className="text-neutral-900">Secretos</span>
//           </h1>

//           <p className="text-xl text-neutral-600 mb-10">
//             Transforme sua rotina em momentos inesquecíveis.
//             Um jogo interativo feito para casais que desejam viver
//             experiências únicas juntos.
//           </p>

//           <button
//             onClick={onStart}
//             className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-5 rounded-2xl text-lg shadow-xl transition transform hover:scale-105 flex items-center gap-2 mx-auto"
//           >
//             🎮 Jogar Gratuitamente
//             <ArrowRight size={20} />
//           </button>
//         </div>
//       </section>

//       {/* COMO FUNCIONA */}
//       <section className="py-28 px-6 max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-pink-600 mb-16">
//           Como Funciona?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-12">
//           <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
//             <Sparkles className="mx-auto text-pink-500 mb-6" size={40} />
//             <h3 className="font-semibold text-xl mb-4">Escolha uma fase</h3>
//             <p className="text-neutral-600">
//               Cada fase contém categorias especiais com encontros secretos.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
//             <Heart className="mx-auto text-pink-500 mb-6" size={40} />
//             <h3 className="font-semibold text-xl mb-4">Revele um encontro</h3>
//             <p className="text-neutral-600">
//               Clique na carta e descubra uma experiência única para viverem juntos.
//             </p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
//             <Gift className="mx-auto text-pink-500 mb-6" size={40} />
//             <h3 className="font-semibold text-xl mb-4">Viva o momento</h3>
//             <p className="text-neutral-600">
//               Marque como realizado e avance para novas experiências.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* BENEFÍCIOS EM DESTAQUE */}
//       <section className="bg-pink-50 py-28 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//           <div>
//             <h2 className="text-4xl font-bold text-pink-600 mb-8">
//               Mais conexão.  
//               <br /> Menos rotina.
//             </h2>

//             <ul className="space-y-6 text-lg text-neutral-700">
//               <li>💞 Fortalece o vínculo emocional</li>
//               <li>🔥 Traz leveza e diversão</li>
//               <li>🎁 Cria memórias marcantes</li>
//               <li>✨ Reacende a intimidade</li>
//             </ul>
//           </div>

//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1529634894574-3c8b9f4c7a66"
//               alt="Casal feliz"
//               className="rounded-3xl shadow-2xl"
//             />
//           </div>
//         </div>
//       </section>

//       {/* SEÇÃO PREMIUM */}
//       <section className="py-28 px-6 text-center bg-white">
//         <h2 className="text-4xl font-bold text-pink-600 mb-8">
//           🔓 Desbloqueie a Experiência Completa
//         </h2>

//         <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
//           A primeira fase é gratuita.
//           Para acessar todas as fases e categorias exclusivas,
//           desbloqueie agora por apenas:
//         </p>

//         <div className="text-5xl font-extrabold text-pink-600 mb-10">
//           R$ 10,00
//         </div>

//         <button
//           onClick={onStart}
//           className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-5 rounded-2xl text-lg shadow-xl transition transform hover:scale-105"
//         >
//           💘 Começar Agora
//         </button>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-pink-600 text-white py-10 text-center">
//         <p className="text-sm opacity-90">
//           Feito com amor para casais que querem viver algo diferente.
//         </p>
//       </footer>
//     </div>
//   );
// }





// import { Heart, Sparkles, ArrowRight } from "lucide-react";

// interface Props {
//   onStart: () => void;
// }

// export default function LandingPage2({ onStart }: Props) {
//   return (
//     <div className="bg-white text-neutral-800">

//       {/* HERO COM FOTO DE CASAL */}
//       <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999"
//             alt="Casal feliz jogando"
//             className="w-full h-full object-cover brightness-75"
//           />
//         </div>

//         <div className="relative z-10 max-w-3xl text-white">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//             Transforme sua relação com
//             <span className="block text-pink-300">
//               Encontros Secretos
//             </span>
//           </h1>

//           <p className="text-xl mb-10 opacity-90">
//             Um jogo interativo para casais que querem sair da rotina
//             e viver experiências marcantes juntos.
//           </p>

//           <button
//             onClick={onStart}
//             className="bg-pink-600 hover:bg-pink-700 px-10 py-4 rounded-2xl text-lg shadow-2xl transition transform hover:scale-105 flex items-center gap-2 mx-auto"
//           >
//             🎮 Jogar Gratuitamente
//             <ArrowRight size={20} />
//           </button>
//         </div>
//       </section>

//       {/* PRINT DO JOGO */}
//       <section className="py-28 px-6 bg-white text-center">
//         <h2 className="text-4xl font-bold text-pink-600 mb-12">
//           Veja como funciona na prática
//         </h2>

//         <div className="flex justify-center">
//           <div className="bg-black rounded-3xl p-4 shadow-2xl max-w-sm">
//             <img
//               src="/print-do-jogo.png"
//               alt="Print do jogo Encontros Secretos"
//               className="rounded-2xl"
//             />
//           </div>
//         </div>

//         <p className="mt-8 text-lg text-neutral-600 max-w-xl mx-auto">
//           Interface simples, intuitiva e envolvente.
//           Cada clique revela uma nova experiência para o casal viver junto.
//         </p>
//       </section>

//       {/* COMO FUNCIONA */}
//       <section className="py-24 px-6 bg-pink-50 text-center">
//         <h2 className="text-4xl font-bold text-pink-600 mb-16">
//           Como funciona?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
//           <div className="bg-white p-8 rounded-3xl shadow-lg">
//             <Sparkles className="mx-auto text-pink-500 mb-6" size={40} />
//             <h3 className="font-semibold text-xl mb-4">1ª Fase Gratuita</h3>
//             <p>Teste gratuitamente e viva os primeiros encontros.</p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl shadow-lg">
//             <Heart className="mx-auto text-pink-500 mb-6" size={40} />
//             <h3 className="font-semibold text-xl mb-4">Desafios Secretos</h3>
//             <p>Clique e descubra experiências únicas para o casal.</p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl shadow-lg">
//             <Sparkles className="mx-auto text-pink-500 mb-6" size={40} />
//             <h3 className="font-semibold text-xl mb-4">Desbloqueio Premium</h3>
//             <p>Acesse todas as fases por apenas R$10.</p>
//           </div>
//         </div>
//       </section>

//       {/* SEÇÃO PREMIUM */}
//       <section className="py-28 px-6 text-center bg-white">
//         <h2 className="text-4xl font-bold text-pink-600 mb-8">
//           🔓 Desbloqueie a experiência completa
//         </h2>

//         <p className="text-xl text-neutral-600 mb-6">
//           Apenas R$ 10,00 via PIX
//         </p>

//         <button
//           onClick={onStart}
//           className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-5 rounded-2xl text-lg shadow-xl transition transform hover:scale-105"
//         >
//           💘 Começar Agora
//         </button>
//       </section>

//       <footer className="bg-pink-600 text-white py-8 text-center">
//         <p className="text-sm opacity-90">
//           Feito para casais que querem viver algo diferente.
//         </p>
//       </footer>
//     </div>
//   );
// }



// import { Heart, Sparkles, ArrowRight } from "lucide-react";

// interface Props {
//   onStart: () => void;
// }

// export default function LandingPage({ onStart }: Props) {
//   return (
//     <div className="bg-white text-neutral-800">

//       {/* HERO COM CASAL CENTRAL */}
//       <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
//             alt="Casal sorrindo junto"
//             className="w-full h-full object-cover brightness-75"
//           />
//         </div>

//         <div className="relative z-10 text-center text-white max-w-3xl">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
//             Momentos inesquecíveis começam com
//             <span className="block text-pink-300">
//               Encontros Secretos
//             </span>
//           </h1>

//           <p className="text-xl mb-10 opacity-90">
//             Um jogo interativo criado para casais que querem sair da rotina
//             e viver experiências marcantes juntos.
//           </p>

//           <button
//             onClick={onStart}
//             className="bg-pink-600 hover:bg-pink-700 px-10 py-4 rounded-2xl text-lg shadow-2xl transition transform hover:scale-105 flex items-center gap-2 mx-auto"
//           >
//             🎮 Jogar Gratuitamente
//             <ArrowRight size={20} />
//           </button>
//         </div>
//       </section>

//       {/* GALERIA DO JOGO (3 IMAGENS PLACEHOLDER) */}
//       <section className="py-28 px-6 bg-white text-center">
//         <h2 className="text-4xl font-bold text-pink-600 mb-12">
//           Experimente a dinâmica do jogo
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

//           <img
//             src="https://images.unsplash.com/photo-1511988617509-a57c8a288659"
//             alt="Casal rindo"
//             className="rounded-3xl shadow-xl hover:scale-105 transition"
//           />

//           <img
//             src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
//             alt="Casal abraçado"
//             className="rounded-3xl shadow-xl hover:scale-105 transition"
//           />

//           <img
//             src="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24"
//             alt="Casal feliz"
//             className="rounded-3xl shadow-xl hover:scale-105 transition"
//           />

//         </div>

//         <p className="mt-10 text-lg text-neutral-600 max-w-2xl mx-auto">
//           Cada fase traz desafios e encontros secretos para fortalecer
//           a conexão do casal e criar memórias especiais.
//         </p>
//       </section>

//       {/* COMO FUNCIONA */}
//       <section className="py-24 px-6 bg-pink-50 text-center">
//         <h2 className="text-4xl font-bold text-pink-600 mb-16">
//           Como funciona?
//         </h2>

//         <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
//           <div className="bg-white p-8 rounded-3xl shadow-lg">
//             <Sparkles className="mx-auto text-pink-500 mb-6" size={40} />
//             <h3 className="font-semibold text-xl mb-4">Fase 1 Gratuita</h3>
//             <p>Experimente o jogo sem custo e descubra a proposta.</p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl shadow-lg">
//             <Heart className="mx-auto text-pink-500 mb-6" size={40} />
//             <h3 className="font-semibold text-xl mb-4">Encontros Secretos</h3>
//             <p>Clique e revele experiências exclusivas para o casal.</p>
//           </div>

//           <div className="bg-white p-8 rounded-3xl shadow-lg">
//             <Sparkles className="mx-auto text-pink-500 mb-6" size={40} />
//             <h3 className="font-semibold text-xl mb-4">Desbloqueio Premium</h3>
//             <p>Acesse todas as fases por apenas R$10 via Pix.</p>
//           </div>
//         </div>
//       </section>

//       {/* PREMIUM */}
//       <section className="py-28 px-6 text-center bg-white">
//         <h2 className="text-4xl font-bold text-pink-600 mb-8">
//           🔓 Desbloqueie a experiência completa
//         </h2>

//         <p className="text-xl text-neutral-600 mb-6">
//           Acesso total por apenas:
//         </p>

//         <div className="text-5xl font-extrabold text-pink-600 mb-10">
//           R$ 10,00
//         </div>

//         <button
//           onClick={onStart}
//           className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-5 rounded-2xl text-lg shadow-xl transition transform hover:scale-105"
//         >
//           💘 Começar Agora
//         </button>
//       </section>

//       <footer className="bg-pink-600 text-white py-8 text-center">
//         <p className="text-sm opacity-90">
//           Feito com amor para casais que querem viver algo diferente.
//         </p>
//       </footer>
//     </div>
//   );
// }


import { Heart, Sparkles, ArrowRight, Lock } from "lucide-react";

interface Props {
  onStart: () => void;
}

export default function LandingPage({ onStart }: Props) {
  return (
    <div className="bg-white text-neutral-800 scroll-smooth">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        {/* Background imagem + gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-pink-200">
          <img
            src="assents/fundo.png"
            alt="Casal sorrindo junto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Redescubra sua conexão com
            <span className="block text-pink-400">
              Encontros Secretos
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-gray-200">
            Um jogo interativo criado para casais que querem sair da rotina,
            criar momentos especiais e fortalecer o relacionamento.
          </p>

          <button
            onClick={onStart}
            className="bg-pink-600 hover:bg-pink-700 px-10 py-4 rounded-2xl text-lg shadow-2xl transition transform hover:scale-105 flex items-center gap-2 mx-auto cursor-pointer"
          >
            🎮 Começar Gratuitamente
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-16 bg-white text-center border-b">
        <p className="text-neutral-600 text-lg">
          💕 Centenas de casais já experimentaram novas formas de se conectar
        </p>
      </section>

    

      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-20">
          Experimente a dinâmica do jogo
         </h2>

        
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto px-6">

<div className="flex justify-center ">
  <img
    src="assents/tela2.png"
    alt="Tela do jogo"
    className="h-auto w-[700px]  bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border  hover:scale-150 transition duration-500"
  />
</div>

<div className="flex justify-center">
  <img
    src="assents/tela3.png"
    alt="Tela do jogo"
    className="h-auto w-[700px] bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border  hover:scale-150 transition duration-500"
  />
</div>

</div>
   

        

        
      </section>



      {/* COMO FUNCIONA */}
      <section className="py-28 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-16">
          Como funciona?
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          <div className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border ">
            <Sparkles className="mx-auto text-pink-500 mb-6" size={40} />
            <h3 className="font-semibold text-xl mb-4">Fase 1 Gratuita</h3>
            <p>Experimente sem custo e descubra a proposta do jogo.</p>
          </div>

          <div className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border ">
            <Heart className="mx-auto text-pink-500 mb-6" size={40} />
            <h3 className="font-semibold text-xl mb-4">Encontros Secretos</h3>
            <p>Clique e revele desafios e experiências únicas.</p>
          </div>

          <div className="p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border ">
            <Lock className="mx-auto text-pink-500 mb-6" size={40} />
            <h3 className="font-semibold text-xl mb-4">Acesso Completo</h3>
            <p>Desbloqueie todas as fases por apenas R$ 4,99.</p>
          </div>

        </div>
      </section>

      {/* SEÇÃO PREMIUM CONVERSÃO */}
      <section className="py-28 px-6 bg-pink-600 text-white text-center" id="premium">

        <h2 className="text-4xl font-bold mb-6">
          🔓 Desbloqueie a experiência completa
        </h2>

        <p className="text-lg opacity-90 mb-8">
          Apenas R$ 4,99 via Pix para acesso total e permanente.
        </p>

        <div className="text-5xl font-extrabold mb-10">
          R$ 4,99
        </div>

        <button
          // onClick={onStart}
          className="bg-white text-pink-600 px-12 py-5 rounded-2xl text-lg font-semibold shadow-2xl transition transform hover:scale-105 cursor-pointer"
        >
          💘 Quero Desbloquear
        </button>

      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-white py-10 text-center">
        <p className="text-sm opacity-80">
          Encontros Secretos © 2026 — Feito para fortalecer conexões.
        </p>
      </footer>

    </div>
  );
}