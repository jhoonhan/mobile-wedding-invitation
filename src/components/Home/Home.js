import { useContext, useEffect, useState } from "react";

import "./Home.scss";
import nameCombo from "../../assets/nameCombo.svg";
import arrowDown from "../../assets/arrow-down.svg";
import mainImg from "../../assets/mainImg2.webp";
import nameKr1 from "../../assets/name_kr-1.svg";
import nameKr2 from "../../assets/name_kr-2.svg";
import nameEn1 from "../../assets/name_en-1.svg";
import nameEn2 from "../../assets/name_en-2.svg";

import { AppContext } from "../../App";

const TEXTMARGINTOP = "12%";

const Home = ({ readyTorender }) => {
  const getHeight = (value) => {
    return `${window.innerHeight / value}px`;
  };
  const { user, texts } = useContext(AppContext);
  const { en } = user.state;

  // WORK HERE-- make it into resueable custom hook!

  const render = () => {
    if (!readyTorender) return null;
    return (
      <>
        <section
          id="section--home"
          className="flex--v"
          style={{ height: getHeight(1) }}
        >
          <img
            className="home__bg ani--4"
            src={mainImg}
            alt="main"
            style={{ height: getHeight(1), width: "100%" }}
            // onLoad={() => setLoaded([...loaded, true])}
          />
          <div
            className="home__texts__gradient top"
            style={{ height: getHeight(2) }}
          ></div>
          <div
            className="home__texts"
            style={!user.state.name ? { top: TEXTMARGINTOP } : {}}
          >
            {user.state.name && (
              <p
                className="f2 ani--0"
                style={{
                  color: "white",
                  fontSize: "var(--font-size--s)",
                }}
              >
                To : {user.state.name}
              </p>
            )}
            <div
              className="home__texts__heading flex--v align--cc"
              style={{ gap: getHeight(20) }}
            >
              <img
                src={en ? nameEn1 : nameKr1}
                className="ani--1"
                alt="name kr 1"
                style={{ height: getHeight(en ? 14 : 10) }}
              />
              <span className="border ani--2" />
              <img
                src={en ? nameEn2 : nameKr2}
                className="ani--3"
                alt="name kr 2"
                style={{ height: getHeight(en ? 22 : 18) }}
              />
            </div>
          </div>
          <div
            className="home__texts__gradient bottom ani--5"
            style={{ height: getHeight(10) }}
          >
            <div
              className="home__texts__scroll-down flex--v align--cc "
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
