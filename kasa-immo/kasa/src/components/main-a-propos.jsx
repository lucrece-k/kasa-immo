import Banner from "./banner";
import InfoAPropos from "./info-a-propos";
import aproposBackground from "../../src/images/img-banner-a-propos.png";
const titleInfo = ["Fiabilité", "Respect", "Service", "Sécurité"];

function MainAPropos() {
  return (
    <div className="ks-main">
      <Banner
        showText={false}
        backgroundImage={aproposBackground}
        filter={0.7}
      />
      <div className="div-info">
        {titleInfo.map((title, index) => (
          <InfoAPropos key={index} title={title} />
        ))}
      </div>
    </div>
  );
}
export default MainAPropos;
