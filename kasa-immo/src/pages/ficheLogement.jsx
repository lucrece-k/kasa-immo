import { useParams } from "react-router-dom";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png";
import Collapse from "../components/collapse";
import Erreur from "./erreur";

function FicheLogement({ listeLogement, showArrow = true, showNumber = true }) {
  const { id } = useParams();
  const logement = listeLogement.find((logement) => logement.id === id);

  const [actifPhoto, setActifPhoto] = useState(0);

  if (!logement) {
    return <Erreur />;
  }

  const tableauPicture = Array.isArray(logement.pictures);
  const plusieurPhoto = tableauPicture && logement.pictures.length > 1;

  const clickArrowRight = () => {
    setActifPhoto(
      (i) => (i + 1) % (tableauPicture ? logement.pictures.length : 1)
    );
  };

  const clickArrowLeft = () => {
    setActifPhoto(
      (i) =>
        (i - 1 + (tableauPicture ? logement.pictures.length : 1)) %
        (tableauPicture ? logement.pictures.length : 1)
    );
  };

  const ratingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star empty"}>
        ★
      </span>
    ));
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
            {actifPhoto + 1} / {tableauPicture ? logement.pictures.length : 1}
          </span>
        )}
      </div>
      <div className="detail-logement">
        <div className="title-host">
          <div className="title-tag">
            <p>{logement.title}</p>
            <p>{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="host-rating">
            <div className="name-photo">
              <p className="host-name">{logement.host.name}</p>
              <img
                className="host-photo"
                src={logement.host.picture}
                alt="host"
              />
            </div>
            <div className="rat">
              <span>{ratingStars(logement.rating)}</span>
            </div>
          </div>
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
  );
}

export default FicheLogement;
