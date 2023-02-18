import React, { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Rsvp.scss";
import { AppContext } from "../../App";
import { updateUser } from "../../actions";
import Loader from "../Loader";

const Rsvp = () => {
  const { user } = useContext(AppContext);
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
    if (noway || InviteId === "0000") return null;
    return (
      <motion.section
        id="section--rsvp"
        className="flex--v align--cc"
        data-animation-container="true"
        data-animation-threshold="0.8"
      >
        {loading && <Loader />}
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

        <form className="flex--v" onSubmit={handleSubmit}>
          <div
            className="flex--v animation__opacity-in"
            data-animation-delay="0.7"
            data-animation-sequence="0"
          >
            <label>Invited :</label>
            <span className="mock-input">{name}</span>
          </div>

          {/* <div
            className="flex--v animation__opacity-in"
            data-animation-delay="0.7"
            data-animation-sequence="1"
          >
            <label>Attending :</label>
            <div className="grid--column--2" style={{ gap: "var(--gap--d)" }}>
              <a href="#" className={`btn--cta soft ${attending && "active"}`}>
                Yes
              </a>
              <a href="#" className={`btn--cta soft ${!attending && "active"}`}>
                No
              </a>
            </div>
          </div> */}

          <div
            className="flex--v animation__opacity-in"
            data-animation-delay="0.7"
            data-animation-sequence="2"
          >
            <label>Total Attending (Including yourself) :</label>
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
            data-animation-delay="0.7"
            data-animation-sequence="3"
          >
            {!attending ? "RSVP" : "Cancel RSVP"}
          </button>
        </form>
      </motion.section>
    );
  };
  return render();
};

export default Rsvp;
