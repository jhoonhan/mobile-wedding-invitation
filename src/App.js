import { Route, Switch, useLocation } from "react-router-dom";
import "./scss/App.scss";
import { useEffect } from "react";

import animationLibray from "./components/animationLibrary.js";

import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Rsvp from "./components/Rsvp/Rsvp";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    animationLibray();
  }, []);

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

export default App;
