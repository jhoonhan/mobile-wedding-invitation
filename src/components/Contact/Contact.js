import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Contact.scss";
import { AppContext } from "../../App";

const ANIMATION_DELAY = 0.5;
const ANIMATION_THRESHOLD = 0.3;

const Contact = () => {
  const { user, texts } = useContext(AppContext);
  const { en, InviteId } = user.state;

  const render = () => {
    return (
      <section
        id="section--contact"
        className="flex--v align--cc"
        data-animation-container="true"
        data-animation-threshold={ANIMATION_THRESHOLD}
      >
        <div
          className="animation__text-appear-down flex--v align--cc"
          data-animation-delay={ANIMATION_DELAY}
        >
          <div className="section__title animation__text-appear-down__hide-box flex--v align--cc">
            <div>
              <h1
                className="animation__text-appear-down__target"
                data-animation-sequence="0"
              >
                {texts.contact[en]}
              </h1>
              <div
                className="section__title-boder animation__expand-right"
                data-animation-sequence="3"
              />
            </div>
          </div>
          <div
            className="section__content flex--v animation__opacity-in"
            data-animation-delay={ANIMATION_DELAY}
            data-animation-sequence="4"
          >
            <div className="contact__info-section flex--v align--cc">
              <div className="contact__info-grid">
                <p>{texts.nameGroom[en]}</p>
                <p>|</p>
                <p className={en ? "f2" : "f0"}>312 810 8989</p>
                <p>{texts.nameGroomF[en]}</p>
                <p>|</p>
                <p className={en ? "f2" : "f0"}>336 454 9736</p>
                <p>{texts.nameGroomM[en]}</p>
                <p>|</p>
                <p
                  className={en ? "f2" : "f0"}
                  style={{ marginBottom: "2rem" }}
                >
                  336 875 2193
                </p>
                <p>{texts.nameBride[en]}</p>
                <p>|</p>
                <p className={en ? "f2" : "f0"}>850 812 9071</p>
                <p>{texts.nameBrideF[en]}</p>
                <p>|</p>
                <p className={en ? "f2" : "f0"}>010 2268 6617</p>
                <p>{texts.nameBrideM[en]}</p>
                <p>|</p>
                <p className={en ? "f2" : "f0"}>010 7997 6617</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return render();
};

export default Contact;
