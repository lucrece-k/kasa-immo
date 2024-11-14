import Banner from "../../components/banner";
import Location from "../../components/location";
import accueilBackground from "../../images/img-accueil-banner.png";

function Home({ listeLogement }) {
  return (
    <div className="ks-main">
      <Banner
        showText={true}
        backgroundImage={accueilBackground}
        filter={0.3}
      />
      <div className="cart-location">
        <Location listeLogement={listeLogement} />
      </div>
    </div>
  );
}
export default Home;
