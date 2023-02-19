import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { updateMessage } from "../../actions";
import arrowDown from "../../assets/arrow-down_dark.svg";

import Loader from "../Loader";

import "./Footer.scss";
import loveImg from "../../assets/love.jpg";

const FORMWIDTH = "80%";
const ANIMATION_DELAY = 1;
const ANIMATION_THRESHOLD = 0.3;

const Footer = () => {
  const { user, userMessage, texts } = useContext(AppContext);
  const { InviteId, name, bujo, en } = user.state;
  const userMessageData = userMessage.state.message;
  const userMessageName = user.state.name;

  const [messageData, setMessageData] = useState(userMessageData);
  const [messageName, setMessageName] = useState(userMessageName);

  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setMessageData(userMessageData);
    setMessageName(userMessageName);
  }, [userMessageData, userMessageName]);

  const handleChange = (e) => {
    setMessageData(e.target.value);
  };
  const handleNameCange = (e) => {
    setMessageName(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = {
      Id: user.state.InviteId,
      InviteId,
      from: messageName,
      message: messageData,
    };
    const updatedUser = await updateMessage(InviteId, formData);
    if (updatedUser.success) {
      setLoading(false);
      setSuccessMsg(texts.blessingSucess[en]);
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
        data-animation-delay={ANIMATION_DELAY}
        data-animation-sequence="4"
        style={{ width: FORMWIDTH, marginTop: "4rem" }}
        onClick={handleExpandClick}
      >
        <p>{texts.bujo[en]}</p>
        <div className="flex--v ">
          <div className="bujo-box__expand flex--h">
            <p>{texts.expand[en]}</p>
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
          <div className="bujo-box__expand__border" />
        </div>
        <div
          className="bujo-box__hidebox flex--v align--cc"
          style={{
            opacity: `${expand ? 1 : 0}`,
            gap: "2rem",
            maxHeight: `${expand ? "100vh" : "0px"}`,
          }}
        >
          <p className="f2">{texts.bujoThanks[en]}</p>
          <img src={loveImg} alt="aaang" style={{ width: "100%" }} />
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
                {texts.blessing[en]}
              </h1>
              <div
                className="section__title-boder animation__expand-right"
                data-animation-sequence="3"
              />
            </div>
          </div>
        </div>
        <div className="flex--v align--cc" style={{ gap: "2rem" }}>
          <form
            className="flex--v"
            style={{ minWidth: FORMWIDTH }}
            onSubmit={handleSubmit}
          >
            <div
              className="animation__opacity-in"
              data-animation-delay={ANIMATION_DELAY}
              data-animation-sequence="1"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <label>From :</label>
              {name ? (
                <span className="">{name}</span>
              ) : (
                <input
                  type="text"
                  value={messageName}
                  onChange={handleNameCange}
                  style={{ width: "100%" }}
                ></input>
              )}
            </div>
            <textarea
              onChange={handleChange}
              className="animation__opacity-in"
              value={messageData}
              data-animation-delay={ANIMATION_DELAY}
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
              data-animation-delay={ANIMATION_DELAY}
              data-animation-sequence="3"
              style={{ margin: 0 }}
            >
              {texts.submit[en]}
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
