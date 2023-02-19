import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Rsvp.scss";
import { AppContext } from "../../App";
import { updateUser } from "../../actions";
import Loader from "../Loader";

const FORMWIDTH = "65%";
const ANIMATION_DELAY = 1;
const ANIMATION_THRESHOLD = 0.8;

const Rsvp = () => {
  const { user, texts } = useContext(AppContext);
  const { InviteId, name, guests, attending, bujo, noway, en } = user.state;

  const [formGuest, setFormGuest] = useState(guests);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormGuest(guests);
  }, [guests]);

  const handleChange = (e) => {
    const inputValue = +e.target.value;
    setFormGuest(inputValue);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = {
      ...user.state,
      attending: !attending,
      guests: formGuest,
    };
    const updatedUser = await updateUser(InviteId, formData);
    if (updatedUser.success) {
      user.set(updatedUser.item);
      setLoading(false);
    }
  };

  const render = () => {
    if (noway) return null;
    return (
      <motion.section
        id="section--rsvp"
        className="flex--v align--cc"
        data-animation-container="true"
        data-animation-threshold={ANIMATION_THRESHOLD}
      >
        {loading && <Loader />}
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
              {texts.rsvpDescription[en]}
            </p>
          </div>
        </div>

        <form
          className="flex--v"
          onSubmit={handleSubmit}
          style={{ minWidth: FORMWIDTH }}
        >
          <div
            className="flex--v animation__opacity-in"
            data-animation-delay={ANIMATION_DELAY}
            data-animation-sequence="0"
          >
            <label>Invited :</label>
            <span className="mock-input">{name}</span>
          </div>

          <div
            className="flex--v animation__opacity-in"
            data-animation-delay={ANIMATION_DELAY}
            data-animation-sequence="2"
          >
            <label>{texts.rsvpTotal[en]} :</label>
            {!attending ? (
              <input
                type="number"
                value={formGuest}
                onChange={handleChange}
                onClick={() => {
                  setFormGuest("");
                }}
                required
              ></input>
            ) : (
              <span className="mock-input">{formGuest}</span>
            )}
          </div>

          <button
            className="btn--cta hard animation__opacity-in"
            data-animation-delay={ANIMATION_DELAY}
            data-animation-sequence="3"
          >
            {!attending ? texts.rsvpSubmit[en] : texts.rsvpCancel[en]}
          </button>
        </form>
      </motion.section>
    );
  };
  return render();
};

export default Rsvp;
