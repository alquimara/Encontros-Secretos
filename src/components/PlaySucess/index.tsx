import { useEffect } from "react";




type PlaySoundProps = {
  src: string;
};

export const PlaySound = ({ src }: PlaySoundProps) => {
  useEffect(() => {
    const audio = new Audio(src);
    audio.play().catch((e) => {
      console.warn("Som não pôde ser reproduzido automaticamente:", e);
    });
  }, [src]);

  return null;
};

  