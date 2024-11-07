import "../components/index.scss";
import listeLogement from "../listeLogement.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png";

function FicheLogement({ showArrow = true, showNumber = true }) {
  const { id } = useParams();
  const logement = listeLogement.find((logement) => logement.id === id);
  const tableauPicture = Array.isArray(logement.pictures);
  const plusieurPhoto = tableauPicture && logement.pictures.length > 1;

  const [actifPhoto, setactifPhoto] = useState(0);
  const clickArrowRight = () => {
    setactifPhoto(
      (i) => (i + 1) % (tableauPicture ? logement.pictures.length : 1)
    );
  };

  const clickArrowLeft = () => {
    setactifPhoto(
      (i) =>
        (i - 1 + (tableauPicture ? logement.pictures.length : 1)) %
        (tableauPicture ? logement.pictures.length : 1)
    );
  };

  return (
    <div className="ks-main">
      <div className="div-slide">
        {showArrow && plusieurPhoto && (
          <img
            className="arrow arrowLeft"
            src={arrowLeft}
            alt="arrow left"
            onClick={clickArrowLeft}
          />
        )}
        <img
          className="photo"
          src={
            tableauPicture ? logement.pictures[actifPhoto] : logement.pictures
          }
          alt={logement.title}
        />
        {showArrow && plusieurPhoto && (
          <img
            className="arrow arrowRight"
            src={arrowRight}
            alt="arrow right"
            onClick={clickArrowRight}
          />
        )}
        {showNumber && plusieurPhoto && (
          <span className="numeroPhoto">
            {actifPhoto + 1} /{" "}
            {tableauPicture ? logement.pictures.length : (showNumber = false)}
          </span>
        )}
      </div>
    </div>
  );
}

export default FicheLogement;
