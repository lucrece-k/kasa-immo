import "../components/index.scss";
import arrowBack from "../images/arrow_back.png";
import { useState } from "react";

function Collapse({ title, description, equipments }) {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = () => {
    setisOpen((prevState) => !prevState);
    console.log("isOpen after toggle:", !isOpen);
  };
  return (
    <div>
      <div className="info-a-propos" onClick={handleToggle}>
        <p>{title}</p>
        <img
          className={`arrow-back ${isOpen ? "rotated" : ""}`}
          src={arrowBack}
          alt="arrow"
        />
      </div>
      {isOpen ? (
        <div className="collapse-content">
          {description && <p>{description}</p>}
          {equipments && (
            <ul>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
export default Collapse;
