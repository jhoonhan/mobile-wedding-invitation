import React, { useContext, useEffect, useState } from "react";
import animationLibrary from "../animationLibrary";

import "./Rsvp.scss";
import { AppContext } from "../../App";
import { updateUser } from "../../actions";
import Loader from "../Loader";

const FORMWIDTH = "70%";
const ANIMATION_DELAY = 1;
const ANIMATION_THRESHOLD = 0.8;

const Rsvp = () => {
  const { user, texts } = useContext(AppContext);
  const { InviteId, name, guests, maxAllowed, attending, bujo, noway, en } =
    user.state;

  const [formGuest, setFormGuest] = useState(guests);
  const [maxAlert, setMaxAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormGuest(guests);
  }, [guests]);

  useEffect(() => {
    animationLibrary();
  }, [loading, noway]);

  const handleChange = (e) => {
    const inputValue = +e.target.value;
    if (isNaN(inputValue)) {
      setMaxAlert(false);
      setFormGuest(0);
      return;
    }

    if (inputValue > maxAllowed) {
      setMaxAlert(true);
    } else {
      setMaxAlert(false);
    }
    setFormGuest(inputValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (maxAlert || formGuest === 0) return;
    setLoading(true);
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
      <section
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
              className="center-text animation__text-appear-down__target"
              data-animation-sequence="1"
            >
              {texts.rsvpDescription[en]}
            </p>
          </div>
        </div>

        <form
          className="flex--v"
          onSubmit={handleSubmit}
          style={{ width: FORMWIDTH }}
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
                type="text"
                value={formGuest}
                onChange={handleChange}
                required
              ></input>
            ) : (
              <span className="mock-input">{formGuest}</span>
            )}
          </div>
          {maxAlert && (
            <p style={{ textAlign: "center", whiteSpace: "pre-line" }}>
              {texts.rsvpUninvited[en]}
            </p>
          )}
          {attending && (
            <p
              className="animation__opacity-in"
              data-animation-sequence="3"
              style={{
                fontSize: "var(--font-size--s)",
                textAlign: "center",
                whiteSpace: "pre-line",
              }}
            >
              {texts.rsvpConfitm[en]}
            </p>
          )}
          <button
            className={`btn--cta ${
              maxAlert || formGuest === 0 ? "inactive" : "hard"
            } ${attending ? "cancel" : ""} animation__opacity-in`}
            data-animation-delay={ANIMATION_DELAY}
            data-animation-sequence="3"
          >
            {!attending ? texts.rsvpSubmit[en] : texts.rsvpCancel[en]}
          </button>
        </form>
      </section>
    );
  };
  return render();
};

export default Rsvp;
