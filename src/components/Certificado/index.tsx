import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

interface CertificadoProps {
  nomeCasal: string;
}

export const CertificadoDeConclusao: React.FC<CertificadoProps> = ({ nomeCasal }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (ref.current === null) return;

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        download(dataUrl, 'certificado-de-conclusao.png');
      })
      .catch((err) => {
        console.error('Erro ao gerar imagem:', err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Certificado visual */}
      <div
        ref={ref}
        className="w-[600px] h-[400px] rounded-2xl border-4 border-pink-400 bg-white shadow-xl flex flex-col justify-center items-center text-center gap-4 px-6 py-8"
        style={{
          backgroundImage: 'linear-gradient(to bottom right, #fff0f6, #ffe4e6)',
        }}
      >
        <h1 className="text-3xl font-bold text-pink-700">🎉 Certificado de Conclusão</h1>
        <p className="text-xl text-gray-700 mt-4">
          Com grande alegria, certificamos que
        </p>
        <p className="text-2xl font-semibold text-pink-600">{nomeCasal}</p>
        <p className="text-lg text-gray-700 mt-2">
          concluiu todos os encontros das categorias com amor e dedicação.
        </p>
        <p className="text-md text-gray-600 mt-6 italic">
          Que esse seja apenas o começo de muitos momentos incríveis juntos.
        </p>
        <span className="text-sm text-gray-400 mt-8">
          Aplicativo Encontros Secretos 💖
        </span>
      </div>

      {/* Botão de Download */}
      <button
        onClick={handleDownload}
        className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
      >
        Baixar Certificado
      </button>
    </div>
  );
};
