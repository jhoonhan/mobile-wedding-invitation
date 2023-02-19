import "./scss/App.scss";
import React, { useEffect, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import animationLibray from "./components/animationLibrary.js";

import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Rsvp from "./components/Rsvp/Rsvp";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";

import { fetchUser, fetchMessage } from "./actions";
import useContextValues from "./useContextValues";
import useReadyToRender from "./useReadyToRender";

export const AppContext = React.createContext();

const App = () => {
  // Pre load all data
  const contextValues = useContextValues();
  const { imagesLoaded, fontLoaded, data, user, userMessage, texts } =
    contextValues;
  const allFetched = useReadyToRender(contextValues);
  const en = user.state.en;

  useEffect(() => {
    const param = window.location.pathname.slice(1);
    const userId = param ? param : "1000";
    // const fetch = { data: data.state, setData: data.set };
    if (param) {
      fetchUser(userId, user.set);
      fetchMessage(userId, userMessage.set);
    }
  }, []);

  useEffect(() => {
    if (allFetched) animationLibray();
  }, [allFetched]);

  const render = () => {
    if (!allFetched) return <Loader />;

    return (
      <div className="App flex--v align--cc" key="section--home">
        <main className="flex--v align--cc">
          <Home readyTorender={allFetched} />
          <Info />
          <Rsvp />
          <Gallery />
          <Footer />
        </main>
      </div>
    );
  };
  return (
    <AppContext.Provider value={contextValues}>{render()}</AppContext.Provider>
  );
};

export default App;
