import React from "react";
import "./Home.scss";
import mainImg from "../../assets/mainImg.jpg";

const Home = () => {
  return (
    <section id="section--home" className="flex--v align--cc">
      <div className="home__main-image">
        {/* <img src={mainImg} alt="whathakshdk" /> */}
      </div>
      <div className="home__texts">
        <h1>Junghoon Han & Yeweon Kim</h1>
      </div>
    </section>
  );
};

export default Home;
