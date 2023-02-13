import { useEffect, useState } from "react";

const useImageLoader = (imageList) => {
  // Get all the images on the page
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    imageList.forEach((img) => {
      const image = new window.Image();
      image.src = img;
      image.onload = () => {
        setImagesLoaded(imagesLoaded + 1);
      };
    });
  }, [imageList]);

  useEffect(() => {
    if (imagesLoaded === imageList.length) {
      setAllLoaded(true);
    }
  }, [imagesLoaded]);

  return [allLoaded];
};

export default useImageLoader;
