import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { updateUser } from "../../actions";
import arrowDown from "../../assets/arrow-down_dark.svg";

import Loader from "../Loader";

import "./Footer.scss";

const SUCCESSMSGDATA = "축복 감사합니다. 행복하게 살겠습니다!";

const Footer = () => {
  const { user } = useContext(AppContext);
  const { InviteId, name, bujo, message } = user.state;

  const [messageData, setMessageData] = useState(message);
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setMessageData(message);
  }, [user.state]);

  const handleChange = (e) => {
    setMessageData(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = { ...user.state, message: messageData };
    const updatedUser = await updateUser(InviteId, formData);
    if (updatedUser.success) {
      user.set(updatedUser.item);
      setLoading(false);
      setSuccessMsg(SUCCESSMSGDATA);
    }
  };

  const handleExpandClick = (e) => {
    setExpand(!expand);
  };

  const renderBujo = () => {
    if (!bujo) return null;
    return (
      <div
        className="bujo-box flex--v align--cc animation__opacity-in"
        data-animation-delay="0.7"
        data-animation-sequence="4"
        style={{ marginTop: "4rem" }}
        onClick={handleExpandClick}
      >
        <p>더욱 격렬하게 축복하고 싶으시다고요?</p>
        <div className="bujo-box__expand  flex--h align--cc">
          <p>Expand</p>
          <img
            src={arrowDown}
            className="icon--arrow"
            alt="down arrow"
            style={{
              marginBottom: "0rem",
              width: "1.3rem",
              transform: `rotate(${expand ? 180 : 0}deg)`,
            }}
          />
        </div>
        <div
          className="bujo-box__hidebox flex--v align--cc"
          style={{ opacity: `${expand ? 1 : 0}`, gap: "0.5rem" }}
        >
          <p>사양하지않고 감사히 받겠습니다</p>
          <div>
            <p>신한 12345123-123-3213123 한정훈</p>
            <p>농협 12345123-123-3213123 김예원</p>
          </div>
        </div>
      </div>
    );
  };

  const render = () => {
    if (!bujo) return null;
    return (
      <footer
        id="section--footer"
        className="flex--v align--cc"
        data-animation-container="true"
        data-animation-threshold="0.5"
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
                마음 전하실곳
              </h1>
              <div
                className="section__title-boder animation__expand-right"
                data-animation-sequence="3"
              />
            </div>
          </div>
        </div>
        <div
          className="flex--v align--cc"
          style={{ width: "80%", gap: "2rem" }}
        >
          <form
            className="flex--v"
            style={{ width: "100%" }}
            onSubmit={handleSubmit}
          >
            <label
              className="animation__opacity-in"
              data-animation-delay="0.7"
              data-animation-sequence="1"
            >
              From : <span className="f2">{name}</span>
            </label>
            <textarea
              onChange={handleChange}
              className="animation__opacity-in"
              value={messageData}
              data-animation-delay="0.7"
              data-animation-sequence="2"
            ></textarea>
            {successMsg && (
              <p
                className="f2 flex--v align--cc"
                style={{ fontSize: "var(--font-size--s)" }}
              >
                {successMsg}
              </p>
            )}

            <button
              className="btn--cta hard animation__opacity-in"
              data-animation-delay="0.7"
              data-animation-sequence="3"
              style={{ margin: 0 }}
            >
              SUBMIT
            </button>
          </form>

          {renderBujo()}
        </div>
      </footer>
    );
  };

  return render();
};

export default Footer;
