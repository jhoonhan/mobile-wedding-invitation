import React from "react";
import "./Rsvp.scss";

const Rsvp = () => {
  return (
    <section id="section--rsvp" className="flex--v align--cc">
      <div
        className="animation__text-appear-down flex--v align--cc"
        data-animation-delay="0.7"
      >
        <div className="section__title animation__text-appear-down__hide-box flex--v align--cc">
          <div>
            <h1
              className="animation__text-appear-down__target"
              data-animation-sequence="0"
            >
              RSVP
            </h1>
            <div
              className="section__title-boder animation__expand-right"
              data-animation-sequence="3"
            />
          </div>
          <p
            className="animation__text-appear-down__target"
            data-animation-sequence="1"
          >
            Please RSVP for you and your guest
          </p>
        </div>
      </div>

      <form
        className="flex--v animation__opacity-in"
        data-animation-delay="0.7"
        // data-animation-threshold="0.3"
      >
        <div className="flex--v">
          <label>Your Name :</label>
          <input type="number" placeholder="강무환"></input>
        </div>

        <div className="flex--v">
          <label>Attending :</label>
          <div className="grid--column--2" style={{ gap: "var(--gap--d)" }}>
            <a className="btn--cta soft">Yes</a>
            <a className="btn--cta soft">No</a>
          </div>
        </div>

        <div className="flex--v">
          <label>Number of Your Guests :</label>
          <input type="number"></input>
        </div>

        <button className="btn--cta hard">Submit</button>
      </form>
    </section>
  );
};

export default Rsvp;
