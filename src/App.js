import "./scss/App.scss";
import React, { useEffect, useContext, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import animationLibray from "./components/animationLibrary.js";

import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import Rsvp from "./components/Rsvp/Rsvp";
import Gallery from "./components/Gallery/Gallery";
import Bujo from "./components/Bujo/Bujo";
import Loader from "./components/Loader";
import Contact from "./components/Contact/Contact";

import { fetchUser, fetchMessage } from "./actions";
import useContextValues from "./useContextValues";
import useReadyToRender from "./useReadyToRender";

export const AppContext = React.createContext();

const App = () => {
  // Pre load all data
  const location = useLocation();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const queryId = query.get("id");
  const queryPw = query.get("pw");

  const contextValues = useContextValues();
  const {
    imagesLoaded,
    fontLoaded,
    data,
    user,
    userMessage,
    texts,
    mainBgColor,
  } = contextValues;
  const allFetched = useReadyToRender(contextValues);

  useEffect(() => {
    // const param = window.location.pathname.slice(1);
    const userId = queryId ? queryId : "1000";
    // const fetch = { data: data.state, setData: data.set };
    // if (param) {
    fetchUser({ userId, userPw: queryPw }, user.set);
    fetchMessage(userId, userMessage.set);
    // }
  }, []);

  useEffect(() => {
    if (allFetched) animationLibray();
  }, [allFetched]);

  const render = () => {
    if (!allFetched) return <Loader />;

    return (
      <div className="App flex--v align--cc">
        <main className="flex--v align--cc">
          <Home readyTorender={allFetched} />
          <Info />
          <Rsvp />
          <Gallery />
          <Bujo />
          <Contact />
        </main>
      </div>
    );
  };
  return (
    <AppContext.Provider value={contextValues} location={location}>
      {render()}
    </AppContext.Provider>
  );
};

export default App;
