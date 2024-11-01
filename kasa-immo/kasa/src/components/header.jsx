import "../sass/index.scss";

function Header() {
  return (
    <div className="ks-navbar">
      <div className="ks-logo">
        <img src="../assets/logo.png" alt="logo de kasa" />
      </div>
      <nav className="ks-lien-nav">
        <a href="#id">Accueil</a>
        <a href="#id">A Propos</a>
      </nav>
    </div>
  );
}
export default Header;
