import listeLogement from "../listeLogement.json";
import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();
  return (
    <div className="ks-location">
      {listeLogement.map((logement, id) => (
        <div
          key={id}
          className="cart-location"
          onClick={() => navigate(`/fichelogement/${logement.id}`)}
        >
          <img src={logement.cover} alt={logement.title} />
          <p>{logement.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Location;
