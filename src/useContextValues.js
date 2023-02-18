import { useState } from "react";
import useImageLoader from "./useImageLoader";
import useFontLoader from "./useFontLoader";

import font from "./assets/NanumMyeongjo.ttf";
// Home
import mainImg from "./assets/mainImg2.webp";
import arrowDown from "./assets/arrow-down.svg";
import nameCombo from "./assets/nameCombo.svg";

// Gallery
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";

const imageList = [mainImg, arrowDown, nameCombo, img1, img2];

const useContextValues = () => {
  const [imagesLoaded, imageCount] = useImageLoader(imageList);
  const [fontLoaded, fontCount] = useFontLoader(font);
  const [data, setData] = useState(false);
  const [user, setUser] = useState(null);

  const values = {
    imagesLoaded: {
      state: imagesLoaded,
      count: imageCount,
    },
    fontLoaded: {
      state: fontLoaded,
      count: fontCount,
    },
    data: {
      state: data,
      set: setData,
    },
    user: {
      state: user,
      set: setUser,
    },
  };
  return values;
};

export default useContextValues;
