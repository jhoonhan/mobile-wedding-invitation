import { useContext, useEffect, useState } from "react";

import "./Home.scss";
import nameCombo from "../../assets/nameCombo.svg";
import arrowDown from "../../assets/arrow-down.svg";
import mainImg from "../../assets/mainImg2.webp";
import { AppContext } from "../../App";
import Loader from "../Loader";

const Home = ({ readyTorender }) => {
  const height = window.innerHeight;
  const { user, texts } = useContext(AppContext);

  useEffect(() => {
    // console.log(contextValues);
  }, []);

  // WORK HERE-- make it into resueable custom hook!

  const render = () => {
    if (!readyTorender) return null;
    return (
      <>
        <section
          id="section--home"
          className="flex--v"
          style={{ height: `${height}px` }}
        >
          {/* <div className="home__bg" style={{ height: `${height}px` }} /> */}
          <img
            className="home__bg"
            src={mainImg}
            alt="main"
            style={{ height: `${height}px`, width: "100%" }}
            // onLoad={() => setLoaded([...loaded, true])}
          />
          <div
            className="home__texts__gradient top"
            style={{ height: `${height / 2}px` }}
          ></div>
          <div className="home__texts">
            <img
              src={nameCombo}
              alt="han J"
              style={{ height: `${height / 4}px` }}
            />
          </div>
          <div
            className="home__texts__gradient bottom"
            style={{ height: `${height / 10}px` }}
          >
            <div
              className="home__texts__scroll-down flex--v align--cc"
              style={{ gap: "1rem" }}
            >
              <p>{texts.scrollDown[user.state.en]}</p>
              <img
                src={arrowDown}
                className="icon--arrow"
                alt="down arrow"
                style={{ marginBottom: "3rem" }}
              />
            </div>
          </div>
        </section>
      </>
    );
  };
  return render();
};

export default Home;
