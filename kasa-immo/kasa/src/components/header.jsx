import "../sass/index.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="ks-navbar">
      <div className="ks-logo">
        <img src="../assets/logo.png" alt="logo de kasa" />
      </div>
      <nav className="ks-lien-nav">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </div>
  );
}
export default Header;
