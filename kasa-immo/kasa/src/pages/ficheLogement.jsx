import "../components/index.scss";
import listeLogement from "../listeLogement.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png";
import Collapse from "../components/collapse";

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

  const ratingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star empty"}>
          ★
        </span>
      );
    }
    return stars;
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
      <div className="detail-logement">
        <div className="title-host">
          <div className="title-sousTitle">
            <p>{logement.title}</p>
            <p>{logement.location}</p>
          </div>
          <div className="host-namePhoto">
            <p className="host-name">{logement.host.name}</p>
            <img
              className="host-photo"
              src={logement.host.picture}
              alt="host"
            />
          </div>
        </div>
        <div className="tags-rat">
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
          <div className="rat">
            <span>{ratingStars(logement.rating)}</span>
          </div>
        </div>

        <div className="logement-info">
          <Collapse
            className="info-a-propos"
            title="Description"
            description={logement.description}
          />

          <Collapse
            className="info-a-propos"
            title="Équipements"
            equipments={logement.equipments}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
