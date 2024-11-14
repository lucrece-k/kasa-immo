import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="ks-navbar">
      <div className="ks-logo">
        <img src="../assets/logo.png" alt="logo de kasa" />
      </div>
      <nav className="ks-lien-nav">
        <Link to="/" className={location.pathname === "/" ? "underline" : ""}>
          Accueil
        </Link>
        <Link
          to="/a-propos"
          className={location.pathname === "/a-propos" ? "underline" : ""}
        >
          A Propos
        </Link>
      </nav>
    </div>
  );
}

export default Header;
