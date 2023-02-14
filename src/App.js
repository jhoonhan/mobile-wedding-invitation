import "./scss/App.scss";
import { useEffect, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import animationLibray from "./components/animationLibrary.js";
import useImageLoader from "./useImageLoader";
import useFontLoader from "./useFontLoader";

import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Rsvp from "./components/Rsvp/Rsvp";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";

import font from "./assets/NanumMyeongjo.ttf";
// Home
import mainImg from "./assets/mainImg2.webp";
import arrowDown from "./assets/arrow-down.svg";
import nameCombo from "./assets/nameCombo.svg";

// Gallery
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";

const imageList = [mainImg, arrowDown, nameCombo, img1, img2];

const App = () => {
  // Pre load all data
  const [imagesLoaded, imageCount] = useImageLoader(imageList);
  const [fontLoaded, fontCount] = useFontLoader(font);

  useEffect(() => {
    if (!imagesLoaded || !fontLoaded) return;
    animationLibray();
  }, [imagesLoaded, fontLoaded]);

  const render = () => {
    if (!imagesLoaded) return <Loader />;

    return (
      <motion.div
        className="App flex--v align--cc"
        key="section--home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <main className="flex--v align--cc">
          <Home />
          <Info />
          <Rsvp />
          <Gallery />
        </main>
        <Footer />
      </motion.div>
    );
  };
  return render();
};

export default App;
