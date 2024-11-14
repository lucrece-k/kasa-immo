import { useNavigate } from "react-router-dom";

function Location({ listeLogement }) {
  const navigate = useNavigate();

  return (
    <div className="ks-location">
      {listeLogement.map((logement) => (
        <div
          key={logement.id}
          className="cart-location"
          onClick={() => navigate(`/fichelogement/${logement.id}`)}
        >
          <img src={logement.cover} alt={logement.title} />
          <div className="titre-location">
            <p>{logement.title}</p>
            <p>{logement.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Location;
