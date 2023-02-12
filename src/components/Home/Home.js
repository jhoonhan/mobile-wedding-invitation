import { useEffect, useState } from "react";
import "./Home.scss";
import nameCombo from "../../assets/nameCombo.svg";
import arrowDown from "../../assets/arrow-down.svg";
import mainImg from "../../assets/mainImg2.webp"
import useImageLoader from "../../useImageLoader";

const imageList = [nameCombo, arrowDown, mainImg];

const Home = () => {
  const height = window.innerHeight;

  
  const [loaded, setLoaded] = useImageLoader(imageList);

  useEffect(()=> {
    console.log(loaded)
  },[loaded])





  return (
    <section
      id="section--home"
      className="flex--v"
      style={{ height: `${height}px` }}
    >
      {/* <div className="home__bg" style={{ height: `${height}px` }} /> */}
      <img className="home__bg" src={mainImg} alt="main" style={{ height: `${height}px`, width:'auto' }}
      onLoad={()=> setLoaded(true)}
      />
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
