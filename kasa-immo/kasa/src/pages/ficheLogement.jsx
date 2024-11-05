import Collapse from "../components/collapse";
import "../components/index.scss";
import listeLogement from "../listeLogement.json";

function FicheLogement() {
  const logement = listeLogement.find((logement) => logement.id);
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
        <img src={logement.cover} alt="logement" />
      </div>

      <div>
        <div>
          <p></p>
          <p></p>
        </div>
        <p></p>
        <span></span>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <span></span>
        </div>
        <Collapse />
      </div>
    </div>
  );
}

export default FicheLogement;
