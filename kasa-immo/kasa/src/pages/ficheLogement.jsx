import "../components/index.scss";
import listeLogement from "../listeLogement.json";
import { useParams } from "react-router-dom";

function FicheLogement() {
  const { id } = useParams();
  const logement = listeLogement.find((logement) => logement.id === id);
  return (
    <div className="ks-main">
      <div className="div-arrow">
        <img className="arrow" src="../assets/arrowLeft.png" alt="arrow left" />
        <img
          className="arrow"
          src="../assets/arrowRight.png"
          alt="arrow right"
        />
      </div>
      <div className="div-slide">
        <img src={logement.cover} alt={logement.title} />
      </div>
    </div>
  );
}

export default FicheLogement;
