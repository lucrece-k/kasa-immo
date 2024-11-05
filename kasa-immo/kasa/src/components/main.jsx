import Banner from "./banner";
import Location from "./location";
import accueilBackground from "../../src/images/img-accueil-banner.png";
import "../components/index.scss";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="ks-main">
      <Banner
        showText={true}
        backgroundImage={accueilBackground}
        filter={0.3}
      />
      <Link to="/location:id" className="cart-location">
        <Location />
      </Link>
    </div>
  );
}
export default Main;
