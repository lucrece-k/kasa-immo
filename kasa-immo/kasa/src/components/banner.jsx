import "../sass/index.scss";

function Banner({ showText = true, backgroundImage, filter }) {
  return (
    <div className="banner-title">
      <div
        className="ks-banner"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: `brightness(${filter})`,
        }}
      ></div>
      {showText && (
        <p className="title">
          Chez vous,
          <br /> partout et ailleurs
        </p>
      )}
    </div>
  );
}

export default Banner;
