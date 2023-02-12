import React from "react";
import "./Info.scss";

const Info = () => {
  return (
    <section id="section--info" className="flex--v align--cc ">
      <div className="info__text flex--v align--cc " style={{ gap: "4rem" }}>
        <div
          className="flex--v align--cc animation__opacity-in"
          data-animation-sequence="0"
          data-animation-delay="0.7"
        >
          <h1 className="f2 " style={{ fontSize: "5rem" }}>
            04 / 29
          </h1>
          <h2 className="f2 f--bold ">5:30PM EDT</h2>
        </div>
        <div
          className="flex--v align--cc animation__opacity-in"
          style={{ gap: "2rem" }}
          data-animation-sequence="1"
          data-animation-delay="0.7"
        >
          <div className="flex--v align--cc">
            <p className="f--h2 f2">Salvation Army of Greensboro</p>
            <p className="f2 ">1001 Freeman Mill Rd, Greensboro, NC 27406</p>
          </div>
          <a href="#123" className="btn--cta hard">
            Get Direction
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
