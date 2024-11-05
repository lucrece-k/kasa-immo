import "../components/index.scss";
function InfoAPropos({ title }) {
  return (
    <div className="info-a-propos">
      <p>{title}</p>
      <img src="../../assets/arrow_back.png" alt="arrow" />
    </div>
  );
}
export default InfoAPropos;
