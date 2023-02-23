import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Contact.scss";
import { AppContext } from "../../App";

const ANIMATION_DELAY = 1;
const ANIMATION_THRESHOLD = 0.8;

const Contact = () => {
  const { user, texts } = useContext(AppContext);
  const { InviteId, name, guests, attending, bujo, noway, en } = user.state;

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
                연락처
              </h1>
              <div
                className="section__title-boder animation__expand-right"
                data-animation-sequence="3"
              />
            </div>
          </div>
          <div className="section__content flex--v">
            <div className="contact__info-section flex--v align--cc">
              <div className="contact__info-grid">
                <p>한정훈</p>
                <p>|</p>
                <p className="f0">312 810 8989</p>

                <p>한현구</p>
                <p>|</p>
                <p className="f0">336 454 9736</p>

                <p>강무환</p>
                <p>|</p>
                <p className="f0">336 875 2193</p>
              </div>
            </div>

            <div className="contact__info-section flex--v align--cc">
              <div className="contact__info-grid">
                <p>김에원</p>
                <p>|</p>
                <p className="f0">850 812 9071</p>
                <p>김정수</p>
                <p>|</p>
                <p className="f0">010 7997 6617</p>
                <p>정정희</p>
                <p>|</p>
                <p className="f0">010 7997 6617</p>
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