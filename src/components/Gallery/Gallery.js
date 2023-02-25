import { useContext } from "react";
import { AppContext } from "../../App";

import "./Gallery.scss";
// import img1 from "../../assets/img1.jpg";
// import img2 from "../../assets/img2.jpg";

// const imageList = [img1, img2, img1, img2];

const Gallery = () => {
  const { gallery } = useContext(AppContext);

  const renderImages = () => {
    const images = gallery.map((img, i) => {
      return (
        <div
          className="gallery__img animation__opacity-in"
          style={{ backgroundImage: `url(${img})` }}
          key={`img-${i}`}
        ></div>
      );
    });
    return <div className="gallery__content flex--v align--cc ">{images}</div>;
  };
  return (
    <section id="section--gallery" className="flex--v align--cc">
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
              Gallery
            </h1>
            <div
              className="section__title-boder animation__expand-right"
              data-animation-sequence="3"
            />
          </div>
        </div>
      </div>

      {renderImages()}
    </section>
  );
};

export default Gallery;
