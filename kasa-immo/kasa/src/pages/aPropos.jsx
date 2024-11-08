import Banner from "../components/banner";
import aproposBackground from "../../src/images/img-banner-a-propos.png";
import "../components/index.scss";
import Collapse from "../components/collapse";
const titleInfo = ["Fiabilité", "Respect", "Service", "Sécurité"];

function Apropos() {
  return (
    <div className="ks-main">
      <Banner
        showText={false}
        backgroundImage={aproposBackground}
        filter={0.7}
      />

      <div className="div-info">
        {titleInfo.map((title, index) => (
          <Collapse key={index} title={title} />
        ))}
      </div>
    </div>
  );
}

export default Apropos;
