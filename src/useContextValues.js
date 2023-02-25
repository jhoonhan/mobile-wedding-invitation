import { useState } from "react";
import useImageLoader from "./useImageLoader";
import useFontLoader from "./useFontLoader";

import lang from "./lang.json";

import font from "./assets/NanumMyeongjo.ttf";
// Home
import mainImg from "./assets/mainImg2.webp";
import nameKr1 from "./assets/name_kr-1.svg";
import nameKr2 from "./assets/name_kr-2.svg";
import nameEn1 from "./assets/name_en-1.svg";
import nameEn2 from "./assets/name_en-2.svg";

// Icons
import arrowDown from "./assets/arrow-down.svg";
import arrowDownDark from "./assets/arrow-down_dark.svg";
import copyIcon from "./assets/copy.svg";

// Gallery
import img0 from "./assets/gallery/img-0.webp";
import img1 from "./assets/gallery/img-1.webp";
import img2 from "./assets/gallery/img-2.webp";
import img3 from "./assets/gallery/img-3.webp";
import img4 from "./assets/gallery/img-4.webp";
import img5 from "./assets/gallery/img-5.webp";

// Misc
import loveImg from "./assets/love.webp";

const homeList = [mainImg, nameKr1, nameKr2, nameEn1, nameEn2];

const galleryList = [img0, img1, img2, img3, img4, img5];
const imageList = [loveImg];
const iconList = [arrowDown, arrowDownDark, copyIcon];

const imageLoadList = [...homeList, ...galleryList, ...imageList, ...iconList];

const useContextValues = () => {
  const [imagesLoaded, imageCount] = useImageLoader(imageLoadList);
  const [fontLoaded, fontCount] = useFontLoader(font);
  const [data, setData] = useState(false);
  const [user, setUser] = useState({
    InviteId: "0000",
    name: "",
    guests: 0,
    attending: false,
    en: 0,
    noway: true,
    bujo: true,
    message: "",
  });
  const [message, setMessage] = useState("");
  const [mainBgColor, setMainBgColor] = useState("#efefef");

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
    userMessage: {
      state: message,
      set: setMessage,
    },
    texts: {
      ...lang,
    },
    mainBgColor: {
      state: mainBgColor,
      set: setMainBgColor,
    },
    gallery: galleryList,
    images: imageList,
    icons: iconList,
  };
  return values;
};

export default useContextValues;
