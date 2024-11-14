import "../components/index.scss";
import { Link } from "react-router-dom";
function Erreur() {
  return (
    <div className="erreur-main">
      <p className="message-erreur">404</p>
      <p className="message-erreur">
        Oups! La page que
        <br /> vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}
export default Erreur;
