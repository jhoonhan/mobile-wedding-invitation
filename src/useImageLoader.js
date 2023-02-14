import { useState, useEffect } from "react";

const useImageLoader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    let loadedCount = 0;

    const checkAllLoaded = () => {
      if (loadedCount === imageUrls.length) {
        setImagesLoaded(true);
        setImageCount(loadedCount);
      }
    };

    const imageLoadHandler = () => {
      loadedCount++;
      checkAllLoaded();
    };

    const images = imageUrls.map((url) => {
      const img = new Image();
      img.src = url;
      img.onload = imageLoadHandler;
      img.onerror = imageLoadHandler;
      return img;
    });

    return () => {
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return [imagesLoaded, imageCount];
};

export default useImageLoader;
