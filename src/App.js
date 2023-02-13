import { Route, Switch, useLocation } from "react-router-dom";
import "./scss/App.scss";
import { useEffect } from "react";

import animationLibray from "./components/animationLibrary.js";
import useImageLoader from "./useImageLoader";

import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Rsvp from "./components/Rsvp/Rsvp";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";

import mainImg from "./assets/mainImg2.webp";

const imageList = [mainImg];

const App = () => {
  const [allLoaded] = useImageLoader(imageList);

  useEffect(() => {
    animationLibray();
  }, []);

  const render = () => {
    // if (!allLoaded) return <Loader />;

    return (
      <div className="App flex--v align--cc">
        <main className="flex--v align--cc">
          <Home />
          <Info />
          <Rsvp />
          <Gallery />
        </main>
        <Footer />
      </div>
    );
  };
  return render();
};

export default App;
