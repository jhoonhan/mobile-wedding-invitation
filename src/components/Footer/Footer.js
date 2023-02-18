import { useContext } from "react";
import { AppContext } from "../../App";

import "./Footer.scss";

const Footer = () => {
  const { user } = useContext(AppContext);
  const { InviteId, name, guests, attending, bujo, noway, en } = user.state;

  const render = () => {
    if (!bujo) return null;
    return (
      <footer id="section--footer" className="flex--v align--cc">
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
        <div className="flex--v align--cc">
          <p>신한 12345123-123-3213123 한정훈</p>
          <p>농협 12345123-123-3213123 김예원</p>
        </div>
      </footer>
    );
  };

  return render();
};

export default Footer;
