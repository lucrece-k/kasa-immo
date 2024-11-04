import Banner from "./banner";
import Location from "./location";
import "../sass/index.scss";
import accueilBackground from "../../src/images/img-accueil-banner.png";
function Main() {
  return (
    <div className="ks-main">
      <Banner
        showText={true}
        backgroundImage={accueilBackground}
        filter={0.3}
      />
      <Location />
    </div>
  );
}
export default Main;
