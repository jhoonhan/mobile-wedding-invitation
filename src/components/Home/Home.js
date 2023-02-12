import { useEffect, useState } from "react";
import "./Home.scss";
import nameCombo from "../../assets/nameCombo.svg";
import arrowDown from "../../assets/arrow-down.svg";

const Home = () => {
  const height = window.innerHeight;

  return (
    <section
      id="section--home"
      className="flex--v"
      style={{ height: `${height}px` }}
    >
      <div className="home__bg" style={{ height: `${height}px` }} />
      <div
        className="home__texts__gradient top"
        style={{ height: `${height / 2}px` }}
      ></div>
      <div className="home__texts animation__opacity-in">
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
        <p>Scroll Down</p>
        <img
          src={arrowDown}
          className="icon--arrow"
          alt="down arrow"
          style={{ marginBottom: "3rem" }}
        />
      </div>
    </section>
  );
};

export default Home;
