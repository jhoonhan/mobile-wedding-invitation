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

import { fetchData, fetchUser, updateUser } from "./actions";
import useContextValues from "./useContextValues";

export const AppContext = React.createContext();

const App = () => {
  // Pre load all data
  const contextValues = useContextValues();
  const { imagesLoaded, fontLoaded, data, user } = contextValues;

  useEffect(() => {
    const param = window.location.pathname.slice(1);
    const userId = param ? param : "1000";
    const fetch = { data: data.state, setData: data.set };
    fetchData(fetch);
    fetchUser(userId, fetch, user.set);

    // updateUser("1234", {
    //   attending: true,
    //   guests: 1020,
    // });
  }, []);

  useEffect(() => {
    // console.log(data.state);
  }, [data.state]);

  useEffect(() => {
    // console.log(fontLoaded);
  }, [fontLoaded]);

  useEffect(() => {
    console.log(user.state);
  }, [user.state]);

  useEffect(() => {
    if (imagesLoaded.state && fontLoaded.state) animationLibray();
  }, [imagesLoaded.state, fontLoaded.state]);

  const render = () => {
    // if (
    //   !imagesLoaded.state ||
    //   !fontLoaded.state ||
    //   !data.state ||
    //   !user?.state?.InviteId
    // )
    //   return <Loader />;

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
