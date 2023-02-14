import { useState, useEffect } from "react";

const useFontLoader = (fontUrl) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontCount, setFontCount] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const font = new FontFace("custom", `url(${fontUrl})`);
    font.load().then(() => {
      document.fonts.add(font);
      setFontLoaded(true);
      setFontCount(loadedCount++);
    });

    return () => {
      document.fonts.delete(font);
    };
  }, [fontUrl]);

  return [fontLoaded, fontCount];
};

export default useFontLoader;
