import listeLogement from "../listeLogement.json";

function Location() {
  return (
    <div className="ks-location">
      {listeLogement.map((logement, id) => (
        <div key={id} className="cart-location">
          <p>{logement.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Location;
