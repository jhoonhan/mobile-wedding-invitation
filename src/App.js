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

import { fetchData, fetchUser, fetchMessage } from "./actions";
import useContextValues from "./useContextValues";
import useReadyToRender from "./useReadyToRender";

export const AppContext = React.createContext();

const App = () => {
  // Pre load all data
  const contextValues = useContextValues();
  const { imagesLoaded, fontLoaded, data, user, userMessage } = contextValues;
  const allFetched = useReadyToRender(contextValues);

  useEffect(() => {
    const param = window.location.pathname.slice(1);
    const userId = param ? param : "1000";
    // const fetch = { data: data.state, setData: data.set };
    if (param) {
      console.log(`theres param`);
      // fetchData(fetch);
      fetchUser(userId, user.set);
      fetchMessage(userId, userMessage.set);
    }
  }, []);

  useEffect(() => {
    console.log(contextValues);
  }, [contextValues]);

  useEffect(() => {
    if (allFetched) animationLibray();
  }, [allFetched]);

  const render = () => {
    if (!allFetched) return <Loader />;

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
  return (
    <AppContext.Provider value={contextValues}>{render()}</AppContext.Provider>
  );
};

export default App;
