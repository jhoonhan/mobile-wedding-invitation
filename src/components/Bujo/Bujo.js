import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { updateMessage } from "../../actions";
import arrowDown from "../../assets/arrow-down_dark.svg";
import copyIcon from "../../assets/copy.svg";

import Loader from "../Loader";

import "./Bujo.scss";
import loveImg from "../../assets/love.png";

const FORMWIDTH = "80%";
const ANIMATION_DELAY = 0.7;
const ANIMATION_THRESHOLD = 0.3;

const Bujo = () => {
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

  const copyAccount = (e) => {
    const accountNumber =
      e.target.closest(".account-copy").dataset.accountNumber;
    navigator.clipboard.writeText(accountNumber);
  };

  const renderBujo = () => {
    if (!bujo) return null;

    const AccountNumberCopy = (accountNumber) => {
      return (
        <span
          className="account-copy"
          onClick={copyAccount}
          data-account-number={accountNumber}
        >
          <img src={copyIcon} alt="Copy Icon" />
        </span>
      );
    };

    return (
      <div
        className="bujo-box flex--v align--cc animation__opacity-in"
        data-animation-delay={ANIMATION_DELAY}
        data-animation-sequence="4"
        style={{ width: FORMWIDTH, marginTop: "4rem" }}
      >
        <p>{texts.bujo[en]}</p>
        <div className="flex--v ">
          <div className="bujo-box__expand flex--h" onClick={handleExpandClick}>
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
          <img src={loveImg} alt="aaang" style={{ width: "100%" }} />
          <p className="f2">{texts.bujoThanks[en]}</p>
          <div className="bujo-box__accounts flex--v">
            <div className="account flex--v align--cc">
              <div className="account__grid">
                <p>한정훈</p>
                <p>|</p>
                <p>
                  기업 <span className="f0">954-002985-01-012</span>
                </p>
                {AccountNumberCopy(95400298501012)}
              </div>
            </div>
            <div className="account flex--v align--cc">
              <div className="account__grid">
                <p>김정수</p>
                <p>|</p>
                <p>
                  기업 <span className="f0">147-108644-01-011</span>
                </p>
                {AccountNumberCopy(14710864401011)}
                <p>정정희</p>
                <p>|</p>
                <p>
                  국민 <span className="f0">830501-04-148513</span>
                </p>
                {AccountNumberCopy(83050104148513)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const render = () => {
    if (!bujo) return null;
    return (
      <section
        id="section--bujo"
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
      </section>
    );
  };

  return render();
};

export default Bujo;
